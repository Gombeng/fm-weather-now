import { Box, Card, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { LoadingIcon, TodayLargeBg, TodaySmallBg } from "../../assets/images";
import { formatWeatherDate, getWeatherIcon } from "../../utils";
import type { ICurrentWeather } from ".";
import { useWeatherStore } from "../../stores/useWeatherStore";

export default function MainCard({ data, isLoading }: ICurrentWeather) {
  const { location } = useWeatherStore();

  return (
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
            flexDir={{ base: "column", lg: "row" }}
            justifyContent={"space-between"}
            alignItems={{ base: "initial", md: "center" }}
            h={{ md: "18vh" }}
            gap={'3'}
          >
            <Box textAlign={{ base: "center", lg: "left" }}>
              <Text
                fontWeight={"bold"}
                fontSize={"xl"}
                color={"neutral.0"}
                mb={"1.5"}
              >
                {location.name}, {location.country}
              </Text>

              <Text fontSize={"sm"} color={"neutral.200"}>
                {formatWeatherDate(data.current.time)}
              </Text>
            </Box>

            <Flex
              alignItems={"center"}
              gap={"10"}
              justifyContent={"space-around"}
            >
              <Image src={getWeatherIcon(data.current.weathercode)} w={"20"} />
              <Heading
                fontStyle={"italic"}
                fontSize={{ base: "5xl", md: "7xl" }}
                color={"neutral.0"}
              >
                {data.current.temperature_2m}&deg;
              </Heading>
            </Flex>
          </Flex>
        )}
      </Card.Body>
    </Card.Root>
  );
}
