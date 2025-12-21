import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { DropdownIcon, SunnyIcon } from "./assets/images";
import Navbar from "./components/Navbar";
import SearchComp from "./components/Search";
import { useGetWeather } from "./hooks/query/useGetWeather";
import { useWeatherStore } from "./stores/useWeatherStore";
import CurrentWeather from "./components/CurrentWeather";
import useNavbarStore from "./stores/useNavbarStore";
import DailyForecast from "./components/DailyForecast";

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
    <Container maxW={"5xl"} className="dark">
      <Navbar />
      <SearchComp />
      {/* <Heading textAlign={"center"}>No search result found!</Heading> */}

      <SimpleGrid columns={{ base: 0, md: 3 }} gap={"6"}>
        <GridItem colSpan={2}>
          <Flex flexDir={"column"}>
            <CurrentWeather data={weatherData} isLoading={isLoading} />
            <DailyForecast data={weatherData} isLoading={isLoading} />
          </Flex>
        </GridItem>

        <GridItem>
          <Box pb={"8"}>
            <Card.Root>
              <Card.Body p={"3"}>
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  mb={"3"}
                >
                  <Text>Hourly forecast</Text>
                  <Button>
                    Tuesday <Image src={DropdownIcon} />
                  </Button>
                </Flex>

                <SimpleGrid gap={"3"}>
                  {Array.from({ length: 8 }).map(() => (
                    <Card.Root>
                      <Card.Body
                        flexDir={"row"}
                        p={"1"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <Flex alignItems={"center"}>
                          <Image src={SunnyIcon} w={"12"} />
                          <Text>3 PM</Text>
                        </Flex>
                        <Text me={"3"}>67&deg;</Text>
                      </Card.Body>
                    </Card.Root>
                  ))}
                </SimpleGrid>
              </Card.Body>
            </Card.Root>
          </Box>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}

export default App;
