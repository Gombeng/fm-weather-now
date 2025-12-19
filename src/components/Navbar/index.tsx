import { Box, Flex, Image, Popover, Portal, Text } from "@chakra-ui/react";
import { AppLogo, DropdownIcon, UnitsIcon } from "../../assets/images";
import { useState } from "react";
import ButtonComp from "../Button";
import useNavbarStore from "../../stores/useNavbarStore";
import { UnitsOptions } from "./UnitOptions";
import {
  precipitationOptions,
  tempratureOptions,
  windSpeedOptions,
} from "./const";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { units, setUnit, system, setSystem } = useNavbarStore();
  const isImperial = system === "imperial";

  const handleChangeUnits = (key: string, value: string) => {
    setUnit(key, value);
  };

  const handleChangeUnitsSystem = () => {
    if (isImperial) {
      setSystem("metric");
    } else {
      setSystem("imperial");
    }
  };

  return (
    <Flex
      justifyContent={"space-between"}
      gap={"12"}
      py={"5"}
      alignItems={"center"}
    >
      <Box>
        <Image src={AppLogo} w={{ base: "28", sm: "32", md: "40", lg: "52" }} />
      </Box>

      <Popover.Root
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        positioning={{ placement: "bottom-end" }}
      >
        <Popover.Trigger asChild>
          <ButtonComp gap={{ base: "1.5", sm: "2" }}>
            <Image src={UnitsIcon} w={{ base: "3", sm: "4", md: "5" }} />
            Units
            <Image src={DropdownIcon} w={{ base: "2.5", sm: "3.5", md: "4" }} />
          </ButtonComp>
        </Popover.Trigger>

        <Portal>
          <Popover.Positioner>
            <Popover.Content
              maxW={{ base: "40", sm: "48", md: "56" }}
              bg={"neutral.700"}
              borderRadius={"lg"}
              fontSize={{ base: "xs", sm: "sm", md: "md" }}
            >
              <Popover.Body p={"1.5"}>
                <Flex
                  justify="space-between"
                  align="center"
                  p="1.5"
                  borderRadius="md"
                  mb={"1.5"}
                  transition="background 0.15s ease"
                  cursor="pointer"
                  _hover={{
                    bg: "neutral.600",
                  }}
                  onClick={handleChangeUnitsSystem}
                  fontSize={{ base: "xs", sm: "sm", md: "md" }}
                >
                  <Text>Switch to {isImperial ? "Metric" : "Imperial"}</Text>
                </Flex>

                <Box divideY={"1px"} divideColor={"neutral.600"}>
                  <UnitsOptions
                    title={"Temprature"}
                    value={units.temprature}
                    onChange={(value) => {
                      handleChangeUnits("temprature", value);
                    }}
                    options={tempratureOptions}
                  />
                  <UnitsOptions
                    title={"Wind Speed"}
                    value={units.windSpeed}
                    onChange={(value) => {
                      handleChangeUnits("windSpeed", value);
                    }}
                    options={windSpeedOptions}
                  />
                  <UnitsOptions
                    title={"Precipitation"}
                    value={units.precipitation}
                    onChange={(value) => {
                      handleChangeUnits("precipitation", value);
                    }}
                    options={precipitationOptions}
                    mb={"0"}
                  />
                </Box>
              </Popover.Body>
            </Popover.Content>
          </Popover.Positioner>
        </Portal>
      </Popover.Root>
    </Flex>
  );
}
