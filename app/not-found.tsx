import Wrapper from "@/provider/wrapper";
import Container from "@/utility/HeaderContainer";
import { Link } from "@/utility/Link";
import { Box, Center } from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";

export default function NotFound() {
  return (
    <Wrapper>
      <Box py="12rem" mt="40">
        <Container
          title="Page Not Found"
          subtitle="Sorry,"
          text="Please go back to the main page"
        />
        <Center>
          <Link href="/">
            <RiArrowRightLine />
          </Link>
        </Center>
      </Box>
    </Wrapper>
  );
}
