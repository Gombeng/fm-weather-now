export function formatWeatherDate(isoTime: string): string {
  if (!isoTime) return "";

  return new Date(`${isoTime}Z`).toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export * from "./getWeatherIcon";

export function formatShortNumber(n: number, decimals = 2) {
  return Number(n.toFixed(decimals)).toString();
}

interface IDailyWeatherData {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weather_code: number[];
}

interface IMappedDailyWeather {
  date: string;
  max: number;
  min: number;
  weatherCode: number;
}

export function mapDailyWeather(
  daily: IDailyWeatherData
): IMappedDailyWeather[] {
  if (!daily) return [];

  return daily.time?.map((date, i) => ({
    date,
    max: daily.temperature_2m_max[i],
    min: daily.temperature_2m_min[i],
    weatherCode: daily.weather_code[i],
  }));
}

export function getDayName(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "short",
  });
}

export function formatHour(date: number | Date | undefined) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: true,
  }).format(date);
}

export function getDayLabel(dateString: string) {
  const date = new Date(dateString);
  const today = new Date();

  if (date.toDateString() === today.toDateString()) return "Today";

  return date.toLocaleDateString("en-US", { weekday: "long" });
}

interface IHourlyWeatherData {
  time: string[];
  temperature_2m: number[];
  weather_code: number[];
}

interface IHourlyWeatherPoint {
  time: string;
  date: Date;
  temp: number;
  weatherCode: number;
}

interface IHourlyByDay {
  [dayKey: string]: IHourlyWeatherPoint[];
}

export function mapHourlyByDay(hourly: IHourlyWeatherData): IHourlyByDay {
  if (!hourly) return {};

  return hourly.time.reduce((acc: IHourlyByDay, time: string, i: number) => {
    const date = new Date(time);
    const dayKey = date.toLocaleDateString("en-CA");

    if (!acc[dayKey]) acc[dayKey] = [];

    acc[dayKey].push({
      time,
      date,
      temp: hourly.temperature_2m[i],
      weatherCode: hourly.weather_code[i],
    });

    return acc;
  }, {});
}

export function getHourlyForDay(
  hourly: IHourlyWeatherData,
  selectedDay: string,
  hoursToShow = 8
): IHourlyWeatherPoint[] {
  if (!hourly) return [];

  const now = new Date();
  const currentHour = now.getHours();

  const allHours = hourly.time.map((time, i) => {
    const date = new Date(time);
    return {
      time,
      date,
      temp: hourly.temperature_2m[i],
      weatherCode: hourly.weather_code[i],
    };
  });

  if (selectedDay === now.toLocaleDateString("en-CA")) {
    return allHours.filter((h) => h.date >= now).slice(0, hoursToShow);
  }

  const start = new Date(
    `${selectedDay}T${String(currentHour).padStart(2, "0")}:00`
  );

  return allHours.filter((h) => h.date >= start).slice(0, hoursToShow);
}
