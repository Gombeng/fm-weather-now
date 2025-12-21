import { Card, Flex, Image, Text } from "@chakra-ui/react";
import { formatHour } from "../../utils";

interface IHourlyCard {
  hour: {
    time: string;
    date: number | Date | undefined;
    temp: number;
  };
  Icon: string;
}

export default function HourlyCard({ hour, Icon }: IHourlyCard) {
  return (
    <Card.Root key={hour.time} bg={"neutral.700"}>
      <Card.Body
        flexDir={"row"}
        p={"1"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Flex alignItems={"center"} gap="2">
          <Image src={Icon} w={"10"} />
          <Text>{formatHour(hour.date)}</Text>
        </Flex>

        <Text me={"3"}>{Math.round(hour.temp)}&deg;</Text>
      </Card.Body>
    </Card.Root>
  );
}
