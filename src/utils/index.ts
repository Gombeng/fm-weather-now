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
