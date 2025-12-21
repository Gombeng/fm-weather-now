import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import type { IApiProps } from "../CurrentWeather";
import { getWeatherIcon, mapDailyWeather } from "../../utils";
import SkeletonCard from "./SkeletonCard";
import DailyCard from "./DailyCard";

export default function DailyForecast({ data, isLoading }: IApiProps) {
  const days = mapDailyWeather(data?.daily);
  return (
    <Box>
      <Text mb={"3"} fontSize={"lg"}>
        Daily forecast
      </Text>

      <SimpleGrid columns={{ base: 3, md: 4, lg: 7 }} gap={"3"}>
        {isLoading
          ? Array.from({ length: 7 }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))
          : days.map((day, idx) => {
              const Icon = getWeatherIcon(day.weatherCode);
              return <DailyCard key={idx} Icon={Icon} day={day} />;
            })}
      </SimpleGrid>
    </Box>
  );
}
