import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import {
  AppLogo,
  DropdownIcon,
  SunnyIcon,
  TodayLargeBg,
  UnitsIcon,
} from "./assets/images";

function App() {
  return (
    <Container>
      <Flex justifyContent={"space-between"} gap={"12"} py={"5"}>
        <Box>
          <Image src={AppLogo} />
        </Box>

        <Button bg={"neutral.700"} size={"sm"}>
          <Image src={UnitsIcon} />
          Units
          <Image src={DropdownIcon} />
        </Button>
      </Flex>

      <Heading
        fontSize={"5xl"}
        my={"6"}
        textAlign={"center"}
        lineHeight={"1.2"}
      >
        How's the sky looking today?
      </Heading>

      <Flex gap={"3"} flexDir={"column"} mb={"6"}>
        <Input
          placeholder="Searh for a place"
          bg={"neutral.800"}
          border={0}
          color={"neutral.0"}
        />
        <Button bg={"blue.500"}>Search</Button>
      </Flex>

      <Box mb={"6"}>
        <Card.Root mb={"3"}>
          <Card.Body
            flexDir={"column"}
            bgImg={TodayLargeBg}
            bgPos={"center"}
            bgAttachment={"fixed"}
            gap={"5"}
          >
            <Box textAlign={"center"}>
              <Text fontWeight={"bold"} fontSize={"lg"}>
                Berlin, Germany
              </Text>
              <Text fontSize={"sm"} color={"text.muted"}>
                Tuesday, Aug 5, 2025
              </Text>
            </Box>

            <Flex alignItems={"center"} gap={""} justifyContent={"center"}>
              <Box>
                <Image src={SunnyIcon} w={"20"} />
              </Box>
              <Heading fontStyle={"italic"} fontSize={"7xl"}>
                20&deg;
              </Heading>
            </Flex>
          </Card.Body>
        </Card.Root>

        <SimpleGrid columns={2} gap={"3"}>
          {Array.from({ length: 4 }).map((item) => (
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

      <Box mb={"6"}>
        <Text mb={"3"} fontSize={"lg"}>
          Daily forecast
        </Text>

        <SimpleGrid columns={3} gap={"3"}>
          {Array.from({ length: 7 }).map((item) => (
            <Card.Root>
              <Card.Body p={"2"}>
                <Text textAlign={"center"}>Tue</Text>
                <Image src={SunnyIcon} />

                <Flex justifyContent={"space-between"}>
                  <Text>20&deg;</Text>
                  <Text>30&deg;</Text>
                </Flex>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Box>

      <Box pb={"8"}>
        <Card.Root>
          <Card.Body p={"3"}>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              mb={"3"}
            >
              <Text>Hourly forecast</Text>
              <Button>
                Tuesday <Image src={DropdownIcon} />
              </Button>
            </Flex>

            <SimpleGrid gap={"3"}>
              {Array.from({ length: 8 }).map((item) => (
                <Card.Root>
                  <Card.Body
                    flexDir={"row"}
                    p={"1"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Flex alignItems={"center"}>
                      <Image src={SunnyIcon} w={"12"} />
                      <Text>3 PM</Text>
                    </Flex>
                    <Text me={"3"}>67&deg;</Text>
                  </Card.Body>
                </Card.Root>
              ))}
            </SimpleGrid>
          </Card.Body>
        </Card.Root>
      </Box>
    </Container>
  );
}

export default App;
