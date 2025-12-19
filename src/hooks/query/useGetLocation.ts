import { useQuery } from "@tanstack/react-query";
import { geoApi } from "../../lib/api";
import { useWeatherStore } from "../../stores/useWeatherStore";

export function useGetLocation(query: string, options = {}) {
  const q = query.toLowerCase();
  const { setLocationResults } = useWeatherStore();

  return useQuery({
    queryKey: ["location", q],
    queryFn: async () => {
      const { data } = await geoApi.get("/search", {
        params: { name: q, count: 5 },
      });

      setLocationResults(data?.results);
      return data?.results;
    },

    enabled: !!query,
    staleTime: 1000 * 60 * 5,
    ...options,
  });
}
