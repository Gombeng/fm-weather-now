import { Card, Text, Flex } from "@chakra-ui/react";
import { formatShortNumber } from "../../utils";

interface IInfoCard {
  title: string;
  value: string | number;
  unit?: string;
  isLoading: boolean;
}

export default function InfoCard({ title, value, unit, isLoading }: IInfoCard) {
  console.log("unit: ", unit === "inch");
  const renderUnit = unit === "inch" ? formatShortNumber(Number(value)) : value;

  return (
    <Card.Root borderRadius="lg" bg={"neutral.800"} backdropFilter="blur(8px)">
      <Card.Body p="4">
        <Flex direction="column" gap="4">
          <Text fontSize="sm" color="neutral.300">
            {title}
          </Text>

          <Text fontSize="3xl" fontWeight={"extralight"} color="neutral.0">
            {isLoading ? "--" : `${renderUnit} ${unit}`}
          </Text>
        </Flex>
      </Card.Body>
    </Card.Root>
  );
}
