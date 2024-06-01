import Features from "../components/Hero/Features";
import Hero from "../components/Hero/Hero";
import Wrapper from "../provider/wrapper";

const page = () => {
  return (
    <Wrapper>
      <Hero />
      <Features />
    </Wrapper>
  );
};

export default page;