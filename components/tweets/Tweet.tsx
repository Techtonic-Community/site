import {
  Box,
  Image,
  LinkBoxProps,
  Stack,
  Text
} from "@chakra-ui/react";
import { FC } from "react";
import { TweetData } from "../../types";
import LinkBox from "../utils/LinkBox";

interface TweetProps extends LinkBoxProps {
  tweet: TweetData;
}

export const Tweet: FC<TweetProps> = ({ tweet, ...props }) => {
  return (
    <LinkBox
      href={tweet.url}
      isExternal
      w="full"
      maxW={{ base: "xs", lg: "md" }}
      h="full"
      bgColor={"gray.700"}
      border="1px"
      borderColor={"gray.600"}
      borderRadius="3xl"
      p="7"
      {...props}
    >
      <Stack spacing="2" h="full">
        <Stack direction="row" alignItems="center" spacing="1">
          <Image
            src={tweet.author.avatar}
            alt={tweet.author.name}
            borderRadius="full"
            boxSize="12"
            mr="2"
          />
          <Box fontSize="sm" color={"gray.300"}>
            <Text>{tweet.author.name}</Text>
            <Text>{tweet.author.bio}</Text>
          </Box>
        </Stack>
        <Text color={"gray.300"}>{tweet.text}</Text>
      </Stack>
    </LinkBox>
  );
};

export default Tweet;
