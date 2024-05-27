import {
  BoxProps,
  Center,
  Heading,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import logo from "../../public/static/logo.png";

const Footer: FC<BoxProps> = (props) => {
  const textColor = useColorModeValue("gray.500", "gray.300");

  return (
    <VStack
      as="footer"
      alignItems="center"
      spacing="5"
      borderTop="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      mt="12"
      py="8"
      {...props}
    >
      <Center>
        <div>
          <Image
            src={logo}
            alt="TechTonic Community"
            height={200}
            width={200}
            priority
          />
          <Heading
            mt="5"
            fontSize="md"
            color="#d3c7eb"
            textAlign={{ base: "center" }}
            display={{ base: "none", md: "block" }}
          >
            TechTonic Community
          </Heading>
        </div>
      </Center>
      <span>Crafted by Palash</span>
    </VStack>
  );
};

export default Footer;
