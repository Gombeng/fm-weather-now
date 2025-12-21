import { Card, Flex, Image, Text } from "@chakra-ui/react";
import { getDayName } from "../../utils";

interface IDailyCard {
  day: {
    date: string;
    min: number;
    max: number;
  };
  Icon: string;
}

export default function DailyCard({ day, Icon }: IDailyCard) {
  return (
    <Card.Root bg={"neutral.800"} borderRadius={"lg"}>
      <Card.Body p={"2"} textAlign={"center"}>
        <Text fontSize={"sm"}>{getDayName(day.date)}</Text>

        <Image src={Icon} mx={"auto"} my={"2"} />

        <Flex justifyContent={"space-between"} fontSize={"sm"}>
          <Text>{Math.round(day.max)}&deg;</Text>
          <Text>{Math.round(day.min)}&deg;</Text>
        </Flex>
      </Card.Body>
    </Card.Root>
  );
}
