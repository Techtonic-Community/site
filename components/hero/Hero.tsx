import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { RiArrowRightLine } from "react-icons/ri";

const Hero = () => {
  const router = useRouter();

  return (
    <Stack
      position="relative"
      maxW="container.md"
      py="32"
      mx="auto"
      spacing="6"
      align="center"
    >
      <Heading
        fontSize={{ base: "6xl", md: "7xl" }}
        color={"gray.100"}
        textAlign="center"
        textTransform="uppercase"
        lineHeight="0.9"
        zIndex="1"
        blendMode="luminosity"
      >
        Hey, Developers <br />
        <Box color={"purple.300"}>Welcome to the Community</Box>
      </Heading>
      <Text
        fontSize={{ base: "lg", md: "2xl" }}
        fontWeight="medium"
        color={"gray.100"}
        textAlign="center"
        letterSpacing="tighter"
        zIndex="1"
        blendMode="luminosity"
      >
        A community to navigate through the opportunities to the future. <br />
        The community is waiting for you
      </Text>
      <Flex
        direction="row"
        alignItems="center"
        blendMode="luminosity"
        zIndex="1"
      >
        <Button
          maxW="60"
          size="lg"
          colorScheme="whiteAlpha"
          color={"white"}
          shadow="lg"
          border="1px"
          borderColor={"whiteAlpha.300"}
          borderRadius="full"
          rightIcon={<RiArrowRightLine />}
          onClick={() => router.push("/login")}
        >
          Getting started
        </Button>
      </Flex>
      <Box
        boxSize="72"
        position="absolute"
        top="0"
        left="0"
        bg="brand.700"
        borderRadius="full"
        filter="blur(90px)"
      />
      <Box
        boxSize="72"
        position="absolute"
        bottom="0"
        right="0"
        bg="pink.700"
        borderRadius="full"
        filter="blur(90px)"
      />
    </Stack>
  );
};

export default Hero;
