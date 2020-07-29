import { Heading, Text } from "@chakra-ui/core";

export const H1 = (props) => (
  <Heading {...props} as="h1" color="#ddd" fontWeight="600" />
);

export const Headline = (props) => (
  <Heading
    as="label"
    color="#aaa"
    textTransform="uppercase"
    lineHeight={1}
    letterSpacing="1px"
    fontWeight="light"
    fontSize="1rem"
    {...props}
  />
);

export const Paragraph = (props) => <Text {...props} color="#ddd" />;
