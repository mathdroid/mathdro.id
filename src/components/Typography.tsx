import { Heading, Text } from "@chakra-ui/core";

export const H1 = (props) => (
  <Heading {...props} as="h1" color="white" fontWeight="600" />
);

export const Headline = (props) => (
  <Heading
    {...props}
    as="label"
    color="white"
    textTransform="uppercase"
    lineHeight={1}
    letterSpacing="1px"
    fontWeight="light"
    fontSize="1rem"
  />
);

export const Paragraph = (props) => <Text {...props} color="white" />;
