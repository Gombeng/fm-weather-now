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

          temperature_unit: units.temprature,
          wind_speed_unit: units.windSpeed,
          precipitation_unit: units.precipitation,

          current: [
            "apparent_temperature",
            "precipitation",
            "wind_speed_10m",
            "relative_humidity_2m",
            "temperature_2m",
          ],

          // hourly: [
          //   // "temperature_2m",
          //   "apparent_temperature",
          // ],
          // daily: [
          //   // "temperature_2m",
          //   "apparent_temperature_max",
          // ],
          // forecast_days: 1,
        },
      });
      return data;
    },
    enabled: true || location || units,
    staleTime: 1000 * 60 * 10,
    ...options,
  });
}
