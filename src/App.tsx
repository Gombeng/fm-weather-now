import { Container, Flex, GridItem, SimpleGrid } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import SearchComp from "./components/Search";
import { useGetWeather } from "./hooks/query/useGetWeather";
import { useWeatherStore } from "./stores/useWeatherStore";
import CurrentWeather from "./components/CurrentWeather";
import useNavbarStore from "./stores/useNavbarStore";
import DailyForecast from "./components/DailyForecast";
import HourlyForecast from "./components/HourlyForecast";

function App() {
  const { location, setWeather } = useWeatherStore();
  const { units } = useNavbarStore();

  const { data: weatherData, isLoading } = useGetWeather(
    { location, units },
    {
      onSuccess: (data: any) => {
        setWeather(data);
      },
    }
  );

  return (
    <Container maxW={"5xl"} className="dark" pb={"6"}>
      <Navbar />
      <SearchComp />
      {/* <Heading textAlign={"center"}>No search result found!</Heading> */}

      <SimpleGrid columns={{ base: 0, md: 3 }} gap={{ base: 6, md: 3 }}>
        <GridItem colSpan={{ base: 0, md: 2 }}>
          <Flex flexDir={"column"} gap={6}>
            <CurrentWeather data={weatherData} isLoading={isLoading} />
            <DailyForecast data={weatherData} isLoading={isLoading} />
          </Flex>
        </GridItem>

        <GridItem>
          <HourlyForecast data={weatherData} isLoading={isLoading} />
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}

export default App;
