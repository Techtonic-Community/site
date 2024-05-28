import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { navbarRoutes } from "../Data/navbar-routes";
import { SEO, WithChildren } from "../types";

interface DefaultLayoutProps extends WithChildren, SEO {}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children, ...seo }) => {
  const bgColor = useColorModeValue("white", "gray.800");
  return (
    <Box bgColor={bgColor}>
      <Navbar routes={navbarRoutes} />
      <Container maxW="8xl" mx="auto" px={{ base: "4", lg: "6" }}>
        <Box pt="8">
          {children}
        </Box>
        <Footer />
      </Container>
    </Box>
  );
};

export default DefaultLayout;
