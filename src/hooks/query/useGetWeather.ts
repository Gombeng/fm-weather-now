import { useQuery } from "@tanstack/react-query";
import { weatherApi } from "../../lib/api";

export function useGetWeather(location: any, options = {}) {
  return useQuery({
    queryKey: ["weather", location?.latitude, location?.longitude],
    queryFn: async () => {
      const {
        latitude,
        longitude,
        current_weather,
        temperature_unit,
        wind_speed_unit,
        precipitation_unit,
        hourly,
      } = location;

      const { data } = await weatherApi.get("/forecast", {
        params: {
          latitude,
          longitude,
          current_weather,
          temperature_unit,
          wind_speed_unit,
          precipitation_unit,
          hourly,
        },
      });
      return data;
    },
    enabled: true,
    staleTime: 1000 * 60 * 10,
    ...options,
  });
}
