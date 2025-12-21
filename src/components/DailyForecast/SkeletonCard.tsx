import { Card, Flex, Skeleton } from "@chakra-ui/react";

export default function SkeletonCard() {
  return (
    <Card.Root bg={"neutral.800"} borderRadius={"lg"}>
      <Card.Body p={"2"}>
        <Skeleton bg={"neutral.700"} height="14px" mb="2" w={"8"} mx={"auto"} />

        <Skeleton
          bg={"neutral.700"}
          boxSize="52px"
          mx="auto"
          my="2"
          borderRadius="full"
        />

        <Flex justifyContent={"space-between"} mt={2}>
          <Skeleton bg={"neutral.700"} height="16px" width="30%" />
          <Skeleton bg={"neutral.700"} height="16px" width="30%" />
        </Flex>
      </Card.Body>
    </Card.Root>
  );
}
