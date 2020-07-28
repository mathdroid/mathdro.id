import { Flex, Heading } from "@chakra-ui/core";
import { H1 } from "./Typography";

export const Hero = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <H1 fontSize={`${Math.floor(100 / title.length)}vw`} fontWeight="normal">
      {title}
    </H1>
  </Flex>
);
export default Hero;
