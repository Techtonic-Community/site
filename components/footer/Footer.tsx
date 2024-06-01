"use client";
import logo from "../../public/logo.png";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={"blackAlpha.100"}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "blackAlpha.200",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <VStack
      alignItems="center"
      spacing="5"
      borderTop="1px"
      borderColor={"gray.700"}
      mt="12"
      py="8"
    >
      <Box bg={"dark"} color={"dark"} py={5} mt={30}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          spacing={4}
          justify={"center"}
          align={"center"}
        >
          <Image src={logo} height={100} width={100} alt="company" />
          <Stack direction={"row"} spacing={6}>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/opportunities"}>Opportunities</Link>
          </Stack>
        </Container>
        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={"gray.200"}
          maxW="8xl"
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ base: "center", md: "space-between" }}
            align={{ base: "center", md: "center" }}
          >
            <Text>© 2024 TechTonic Community. All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    </VStack>
  );
}
