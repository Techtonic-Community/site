import {
  Box,
  BoxProps,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Icon,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import { RiGithubFill } from "react-icons/ri";
import MobileNav from "../../components/navbar/MobileNav";
import logo from "../../public/static/logo.png";
import { Route } from "../../types";
import { Link } from "../utils/Link";
import LinkBox from "../utils/LinkBox";

interface NavbarProps extends BoxProps {
  routes: Route[];
}

const Navbar: FC<NavbarProps> = ({ routes, ...props }) => {
  return (
    <Box
      backdropFilter="auto"
      {...props}
      backdropContrast="85%"
      backdropBlur="20px"
      position="fixed"
      zIndex="10"
      width="full"
    >
      <Container maxW="8xl" mx="auto" px="4">
        <Flex
          flexDir="row"
          justifyContent="space-between"
          alignItems="center"
          py="3"
        >
          <Flex flex="1" alignItems="center">
            <LinkBox href="/">
              <Flex alignItems="center" flex={1}>
                <Image
                  src={logo}
                  alt="TechTonic Community"
                  height={70}
                  width={70}
                  priority
                />
                <Heading
                  ml="2"
                  fontSize="md"
                  color="#d3c7eb"
                  display={{ base: "none", md: "block" }}
                >
                  TechTonic Community
                </Heading>
              </Flex>
            </LinkBox>
          </Flex>
          <Box
            display={{ base: "none", lg: "flex" }}
            flex="1"
            justifyContent="end"
            alignItems="center"
          >
            <Flex>
              <Stack listStyleType="none" direction="row" spacing="6">
                {routes.map((route) => (
                  <Box key={route.path}>
                    <Link fontSize="sm" fontWeight="semibold" href={route.path}>
                      {route.title}
                    </Link>
                  </Box>
                ))}
              </Stack>
            </Flex>
            <Center height="6" pl="4">
              <Divider orientation="vertical" borderColor="white" />
            </Center>
            <Flex pl="4" alignItems="center">
              <LinkBox
                display="flex"
                ml="4"
                color="gray.400"
                href="https://github.com/PalashCoder"
                isExternal
                _hover={{ color: "#d3c7eb" }}
              >
                <Icon boxSize="6" as={RiGithubFill} mt="8px" />
              </LinkBox>
            </Flex>
          </Box>
          <Box
            display={{ base: "flex", lg: "none" }}
            flex="1"
            justifyContent="end"
          >
            <MobileNav routes={routes} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
