import {
  Box,
  Card,
  Flex,
  Image,
  Popover,
  Portal,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { DropdownIcon } from "../../assets/images";
import {
  mapHourlyByDay,
  getWeatherIcon,
  getDayLabel,
  getHourlyForDay,
} from "../../utils";
import type { IApiProps } from "../CurrentWeather";
import SkeletonCard from "./SkeletonCard";
import HourlyCard from "./HourlyCard";
import { useState } from "react";
import ButtonComp from "../Button";

export default function HourlyForecast({ data, isLoading }: IApiProps) {
  const daysMap = mapHourlyByDay(data?.hourly);
  const dayKeys = Object.keys(daysMap);

  const [open, setOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(
    new Date().toLocaleDateString("en-CA")
  );

  const hours = getHourlyForDay(data?.hourly, selectedDay);

  return (
    <Card.Root bg={"neutral.800"} borderRadius={"xl"}>
      <Card.Body p={"3"}>
        <Flex justifyContent={"space-between"} alignItems={"center"} mb={"3"}>
          <Text fontWeight={"medium"}>Hourly forecast</Text>

          <Popover.Root
            open={open}
            onOpenChange={(e) => setOpen(e.open)}
            positioning={{ placement: "bottom-end" }}
          >
            <Popover.Trigger asChild>
              <ButtonComp
                size="xs"
                bg={"neutral.600"}
                px={"4"}
                onClick={() => setOpen((v) => !v)}
              >
                {isLoading ? "--" : getDayLabel(selectedDay)}
                <Image src={DropdownIcon} ms={"1.5"} w={"2.5"} />
              </ButtonComp>
            </Popover.Trigger>

            <Portal>
              <Popover.Positioner>
                <Popover.Content
                  maxW={"150px"}
                  bg={"neutral.700"}
                  borderRadius={"lg"}
                  fontSize={{ base: "xs", sm: "sm", md: "md" }}
                >
                  <Popover.Body
                    bg="neutral.800"
                    p={2}
                    borderRadius="lg"
                    overflow="hidden"
                    zIndex="dropdown"
                    shadow={"sm"}
                  >
                    {dayKeys.map((day) => (
                      <Box
                        key={day}
                        px="4"
                        py="1"
                        borderRadius={"md"}
                        my={"1"}
                        cursor="pointer"
                        bg={selectedDay === day ? "neutral.700" : "inherit"}
                        _hover={{ bg: "neutral.700" }}
                        onClick={() => {
                          setSelectedDay(day);
                          setOpen(false);
                        }}
                      >
                        <Text fontSize="sm">{getDayLabel(day)}</Text>
                      </Box>
                    ))}
                  </Popover.Body>
                </Popover.Content>
              </Popover.Positioner>
            </Portal>
          </Popover.Root>
        </Flex>

        <SimpleGrid gap={"2.5"}>
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
            : hours.map((hour) => {
                const Icon = getWeatherIcon(hour.weatherCode);
                return <HourlyCard key={hour.time} Icon={Icon} hour={hour} />;
              })}
        </SimpleGrid>
      </Card.Body>
    </Card.Root>
  );
}
