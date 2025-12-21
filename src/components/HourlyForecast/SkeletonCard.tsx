import { Box, Card, Flex } from "@chakra-ui/react";

export default function SkeletonCard() {
  return (
    <Card.Root bg={"neutral.700"}>
      <Card.Body
        flexDir={"row"}
        p={"3"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Flex alignItems={"center"} gap="2">
          <Box w="6" h="6" bg="neutral.600" borderRadius="md" />
          <Box w="40px" h="12px" bg="neutral.600" />
        </Flex>
        <Box w="32px" h="12px" bg="neutral.600" />
      </Card.Body>
    </Card.Root>
  );
}
