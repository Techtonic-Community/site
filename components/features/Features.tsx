import { Box, Icon, SimpleGrid } from "@chakra-ui/react";
import { features } from "../../Data/feature";
import Section from "../utils/Section";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <Box>
      <Section
        title="For developers. For Managers. For everyone."
        text="Get all the opportunities in one place. Join the community and grow together. Connect with proffessionals and grow."
      />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="8">
        {features.map(({ title, description, icon }, index) => (
          <FeatureCard
            key={index}
            title={title}
            description={description}
            icon={<Icon as={icon} boxSize="6" />}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Features;
