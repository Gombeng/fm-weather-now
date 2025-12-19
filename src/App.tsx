import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { DropdownIcon, SunnyIcon, TodayLargeBg } from "./assets/images";
import Navbar from "./components/Navbar";
import SearchComp from "./components/Search";
import { useGetWeather } from "./hooks/query/useGetWeather";
import { useWeatherStore } from "./stores/useWeatherStore";

function App() {
  const { location, setWeather } = useWeatherStore();
  const { data: weatherData, isLoading } = useGetWeather(location, {
    onSuccess: (data: any) => {
      setWeather(data);
    },
  });
  console.log("weatherData: ", weatherData);
  console.log("isLoading: ", isLoading);

  return (
    <Container>
      <Navbar />
      <SearchComp />

      <Box>
        <Box mb={"6"}>
          <Card.Root mb={"3"}>
            <Card.Body
              flexDir={"column"}
              bgImg={TodayLargeBg}
              bgPos={"center"}
              bgAttachment={"fixed"}
              gap={"5"}
            >
              <Box textAlign={"center"}>
                <Text fontWeight={"bold"} fontSize={"lg"}>
                  Berlin, Germany
                </Text>
                <Text fontSize={"sm"} color={"text.muted"}>
                  {/* {formatWeatherDate(weather.current_weather.time)} */}
                </Text>
              </Box>

              <Flex alignItems={"center"} gap={""} justifyContent={"center"}>
                <Box>
                  <Image src={SunnyIcon} w={"20"} />
                </Box>
                <Heading fontStyle={"italic"} fontSize={"7xl"}>
                  20&deg;
                </Heading>
              </Flex>
            </Card.Body>
          </Card.Root>

          <SimpleGrid columns={2} gap={"3"}>
            {Array.from({ length: 4 }).map(() => (
              <Card.Root>
                <Card.Body p={"4"}>
                  <Text color={"text.muted"} mb={"3"}>
                    Feels Like
                  </Text>
                  <Text fontSize={"2xl"}>64&deg;</Text>
                </Card.Body>
              </Card.Root>
            ))}
          </SimpleGrid>
        </Box>

        <Box mb={"6"}>
          <Text mb={"3"} fontSize={"lg"}>
            Daily forecast
          </Text>

          <SimpleGrid columns={3} gap={"3"}>
            {Array.from({ length: 7 }).map(() => (
              <Card.Root>
                <Card.Body p={"2"}>
                  <Text textAlign={"center"}>Tue</Text>
                  <Image src={SunnyIcon} />

                  <Flex justifyContent={"space-between"}>
                    <Text>20&deg;</Text>
                    <Text>30&deg;</Text>
                  </Flex>
                </Card.Body>
              </Card.Root>
            ))}
          </SimpleGrid>
        </Box>

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
      </Box>
    </Container>
  );
}

export default App;
