import { Box, SimpleGrid } from "@chakra-ui/react";
import MainCard from "./MainCard";
import InfoCard from "./InfoCard";
import { infoCards } from "./const";

export interface ICurrentWeather {
  data: any;
  isLoading: boolean;
}

export default function CurrentWeather({ data, isLoading }: ICurrentWeather) {
  return (
    <Box mb={"6"}>
      <MainCard data={data} isLoading={isLoading} />

      <SimpleGrid columns={{ base: 2, md: 4 }} gap="3">
        {infoCards.map(({ title, valueKey, unit, unitKey }) => (
          <InfoCard
            key={title}
            title={title}
            value={data?.current?.[valueKey]}
            unit={unit ?? data?.current_units?.[unitKey]}
            isLoading={isLoading}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
