import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { CheckmarkIcon } from "../../assets/images";

interface IUnitOptions {
  title: string;
  value: string;
  onChange?: (value: string) => void;
  options: { label: string; value: string }[];
  mb?: string;
}

export function UnitsOptions({
  title,
  value,
  onChange,
  options,
  mb,
}: IUnitOptions) {
  return (
    <Box mb={mb || "3"}>
      <Text
        color="text.muted"
        p="1"
        fontSize={{ base: "2xs", sm: "xs" }}
        mb={{ base: "-3px", sm: "-1px", md: "2px" }}
      >
        {title}
      </Text>

      {options.map((opt) => {
        const isSelected = value === opt.value;

        return (
          <Flex
            key={opt.value}
            justify="space-between"
            align="center"
            bg={isSelected ? "neutral.600" : "neutral.700"}
            p="1.5"
            borderRadius="md"
            mb="1"
            transition="background 0.15s ease"
            cursor="pointer"
            _hover={{
              bg: "neutral.600",
            }}
            onClick={() => onChange?.(opt.value)}
            fontSize={{ base: "xs", sm: "sm" }}
          >
            <Text color="neutral.0">{opt.label}</Text>

            {isSelected && (
              <Image
                src={CheckmarkIcon}
                w={{ base: "2.5", sm: "3", md: "3.5" }}
              />
            )}
          </Flex>
        );
      })}
    </Box>
  );
}
