import { useQuery } from "@tanstack/react-query";
import { weatherApi } from "../../lib/api";

export function useGetWeather({ location, units }: any, options = {}) {
  return useQuery({
    queryKey: ["weather", location, units],
    queryFn: async () => {
      const { latitude, longitude } = location;

      const { data } = await weatherApi.get("/forecast", {
        params: {
          latitude,
          longitude,
          current_weather: true,

          temperature_unit: units.temprature,
          wind_speed_unit: units.windSpeed,
          precipitation_unit: units.precipitation,

          // hourly: "temperature_2m",
          // daily: "",
          forecast_days: 7,
        },
      });
      return data;
    },
    enabled: true || location || units,
    staleTime: 1000 * 60 * 10,
    ...options,
  });
}
