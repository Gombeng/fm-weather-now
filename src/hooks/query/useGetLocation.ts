import { useQuery } from "@tanstack/react-query";
import { geoApi } from "../../lib/api";

export function useGetLocation(query: string, options = {}) {
  return useQuery({
    queryKey: ["location", query],
    queryFn: async () => {
      const { data } = await geoApi.get("/search", {
        params: { name: query, count: 5 },
      });

      return data?.results;
    },

    enabled: !!query,
    staleTime: 1000 * 60 * 5,
    ...options,
  });
}
