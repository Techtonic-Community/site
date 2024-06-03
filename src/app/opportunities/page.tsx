import Container from "@/src/components/utility/HeaderContainer";
import Wrapper from "@/src/provider/wrapper";
import { Box, Button, Flex, Input, Spacer } from "@chakra-ui/react";

const page = () => {
  return (
    <Wrapper>
      <Box pt="5">
        <Container
          subtitle="Opportunities, Your are looking for"
          title="Everything is here,"
          text="Find best suits according to you.."
        />
        <Flex pt="10" gap="10" maxW="5xl" alignContent="center">
          <Input placeholder="Basic usage" width="auto" />
          <Spacer />
          <Input placeholder="Basic usage" width="auto" />
          <Spacer />
          <Input placeholder="Basic usage" width="auto" />
          <Spacer />
          <Button colorScheme="blue">Apply</Button>
        </Flex>
      </Box>
    </Wrapper>
  );
};

export default page;
