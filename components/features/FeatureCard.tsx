import {
  Box,
  BoxProps,
  Flex,
  Heading,
  Stack,
  Text
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface FeatureCardProps extends BoxProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const FeatureCard: FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  ...props
}) => {
  return (
    <Box
      position="relative"
      bgGradient={
        "linear(104.28deg, rgb(38, 34, 71) 1.24%, purple.500 32.96%, rgb(38, 34, 71) 68.22%)"
      }
      borderRadius="3xl"
      {...props}
    >
      <Box
        position="absolute"
        inset="1px"
        bgColor={"gray.800"}
        borderRadius="inherit"
      />
      <Stack position="relative" p="6" spacing="4">
        <Flex
          boxSize="10"
          borderRadius="full"
          justifyContent="center"
          alignItems="center"
          bgColor={"gray.700"}
          color="gray.500"
        >
          {icon}
        </Flex>
        <Heading fontSize="lg" color={"gray.200"}>
          {title}
        </Heading>
        <Text color="gray.500">{description}</Text>
      </Stack>
    </Box>
  );
};

export default FeatureCard;
