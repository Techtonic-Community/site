import {
  Box,
  useBreakpointValue,
  useColorModeValue
} from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { tweets } from "../../Data/tweets";
import Section from "../utils/Section";
import Tweet from "./Tweet";

const Tweets = () => {
  const [r, g, b] = useColorModeValue([255, 255, 255], [26, 32, 43]);
  const gradientWidth = useBreakpointValue({ base: 100, md: 200 });

  return (
    <Box mt={"12"}>
      <Section
        title="Loved by communities"
        text="Be a undivided part of the community and grow together."
      />
      <Box
        as={Marquee}
        gradientColor={[r, g, b] as any}
        gradientWidth={gradientWidth}
        speed={30}
        pauseOnHover
      >
        {tweets.map((tweet, index) => (
          <Tweet key={index} tweet={tweet} mr="3" />
        ))}
      </Box>
    </Box>
  );
};

export default Tweets;
