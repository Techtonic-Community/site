import { Box } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { tweets } from "../../Data/tweets";
import Section from "../utils/Section";
import Tweet from "./Tweet";

const Tweets = () => {
  return (
    <Box mt={"12"}>
      <Section
        title="Loved by communities"
        text="Be a undivided part of the community and grow together."
      />
      <Marquee
        gradientColor={[26, 32, 43] as any}
        gradientWidth={{ base: 100, md: 200 } as any}
        speed={100}
        pauseOnHover
      >
        {tweets.map((tweet, index) => (
          <Tweet key={index} tweet={tweet} mr="3" />
        ))}
      </Marquee>
    </Box>
  );
};

export default Tweets;
