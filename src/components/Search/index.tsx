import {
  Box,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  List,
} from "@chakra-ui/react";
import { LoadingIcon, SearchIcon } from "../../assets/images";
import ButtonComp from "../Button";
import { useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useWeatherStore } from "../../stores/useWeatherStore";
import { useGetLocation } from "../../hooks/query/useGetLocation";

export default function SearchComp() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const { setLocation } = useWeatherStore();

  const debouncedQuery = useDebounce(query, 300);

  const { data: locationResults = [], isLoading: loadingLocation } =
    useGetLocation(debouncedQuery, {
      onSuccess: () => setOpen(true),
    });

  const handleSelect = (item: any) => {
    setQuery(item.name);
    setOpen(false);
    setLocation(item);
  };

  return (
    <Box my="6" position="relative">
      <Heading fontSize="5xl" textAlign="center" lineHeight="1.2" mb="8">
        How&apos;s the sky looking today?
      </Heading>

      <Flex
        gap="2.5"
        flexDir={{ base: "column", md: "row" }}
        maxW={{ base: "full", md: "md", lg: "lg" }}
        mx="auto"
      >
        <Box flex="1" position="relative">
          <InputGroup startElement={<Image src={SearchIcon} w="4" />}>
            <Input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpen(true);
              }}
              placeholder="Search for a place..."
              bg="neutral.800"
              border={0}
              borderRadius="lg"
              _placeholder={{ color: "neutral.300", opacity: 1 }}
            />
          </InputGroup>

          {open && (loadingLocation || locationResults.length > 0) && (
            <Box
              position="absolute"
              top="100%"
              mt="2"
              w="full"
              bg="neutral.800"
              borderRadius="lg"
              zIndex="dropdown"
              p="1.5"
            >
              <List.Root listStyle="none">
                {loadingLocation ? (
                  <List.Item
                    display="flex"
                    gap="3"
                    alignItems="center"
                    px="2"
                    py="1.5"
                  >
                    <Box animation="spin">
                      <Image src={LoadingIcon} />
                    </Box>
                    Search in progress
                  </List.Item>
                ) : (
                  locationResults.map((item: any) => (
                    <List.Item
                      key={`${item.latitude}-${item.longitude}`}
                      px="2"
                      py="2"
                      cursor="pointer"
                      _hover={{ bg: "neutral.700" }}
                      borderRadius="lg"
                      onClick={() => handleSelect(item)}
                    >
                      {item.name}, {item.country}
                    </List.Item>
                  ))
                )}
              </List.Root>
            </Box>
          )}
        </Box>

        <ButtonComp
          size="md"
          bg="blue.600"
          _hover={{ bg: "blue.700" }}
          onClick={() => locationResults[0] && handleSelect(locationResults[0])}
        >
          Search
        </ButtonComp>
      </Flex>
    </Box>
  );
}
