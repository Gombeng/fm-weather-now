import {
  Box,
  Card,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { LoadingIcon, TodayLargeBg, TodaySmallBg } from "../../assets/images";
import { formatWeatherDate, getWeatherIcon } from "../../utils";
import { useWeatherStore } from "../../stores/useWeatherStore";

interface ICurrentWeather {
  data: any;
  isLoading: boolean;
}

export default function CurrentWeather({ data, isLoading }: ICurrentWeather) {
  const { location } = useWeatherStore();

  return (
    <Box mb={"6"}>
      <Card.Root mb={"3"} border={0} borderRadius={"xl"} overflow={"hidden"}>
        <Card.Body
          bg={isLoading ? "neutral.800" : "inherit"}
          bgImage={
            isLoading
              ? "none"
              : { base: `url(${TodaySmallBg})`, md: `url(${TodayLargeBg})` }
          }
          bgPos="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          gap="5"
        >
          {isLoading ? (
            <Flex
              h={"16vh"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDir={"column"}
              gap={"2"}
            >
              <Image src={LoadingIcon} animation={"spin"} />
              <Text color={"neutral.200"}>Loading...</Text>
            </Flex>
          ) : (
            <Flex
              flexDir={{ base: "column", md: "row" }}
              justifyContent={"space-between"}
              alignItems={{ base: "initial", md: "center" }}
              h={{ md: "18vh" }}
            >
              <Box textAlign={{ base: "center", md: "left" }}>
                <Text
                  fontWeight={"bold"}
                  fontSize={"xl"}
                  color={"neutral.0"}
                  mb={"1.5"}
                >
                  {location.name}, {location.country}
                </Text>

                <Text fontSize={"sm"} color={"neutral.200"}>
                  {formatWeatherDate(data.current_weather.time)}
                </Text>
              </Box>

              <Flex
                alignItems={"center"}
                gap={"10"}
                justifyContent={"space-around"}
              >
                <Image
                  src={getWeatherIcon(data.current_weather.weathercode)}
                  w={"20"}
                />
                <Heading
                  fontStyle={"italic"}
                  fontSize={{ base: "5xl", md: "7xl" }}
                  color={"neutral.0"}
                >
                  {data.current_weather.temperature}&deg;
                </Heading>
              </Flex>
            </Flex>
          )}
        </Card.Body>
      </Card.Root>

      <SimpleGrid columns={{ base: 2, md: 4 }} gap={"3"}>
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
  );
}
