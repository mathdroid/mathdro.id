import { useState } from "react";
import Link from "next/link";
import {
  Stack,
  Flex,
  AlertIcon,
  Alert,
  CloseButton,
  Avatar,
  Text,
  Grid,
} from "@chakra-ui/core";
import { Headline } from "../Typography";

const MainStack = (props) => (
  <Stack
    spacing="8rem"
    margin="0 auto"
    px="1rem"
    direction="column"
    alignItems="center"
    maxWidth="48rem"
    {...props}
  />
);

const MainHeader = ({ title }) => {
  const [isAlert, setIsAlert] = useState(true);
  return (
    <Flex
      direction="column"
      alignItems="start"
      as="nav"
      maxWidth="48rem"
      mx="auto"
      mt={isAlert ? "1rem" : "4rem"}
      mb="2rem"
      px="1rem"
    >
      {isAlert ? (
        <Alert status="warning" w="100%" my="1rem">
          <AlertIcon />
          <Text color="#aaa">
            Site is still under reconstruction (Late July 2020). Be patient!
          </Text>
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            color="#aaa"
            onClick={() => {
              setIsAlert(false);
            }}
          />
        </Alert>
      ) : null}

      <Link href="/" passHref>
        <Flex as="a" direction="row" justifyContent="start" alignItems="center">
          <Avatar
            size="sm"
            name="mathdroid"
            src="https://mathdro.id/profile.png"
            mr=".5rem"
          />
          <Headline>@mathdroid{title ? `: ${title}` : ""}</Headline>
        </Flex>
      </Link>
    </Flex>
  );
};

const MainFooter = () => (
  <Flex
    alignItems="center"
    justifyContent="center"
    py="8rem"
    background="linear-gradient(#111, #1a1a1a 90%)"
  >
    <Headline as="span">With {"<3"} from Indonesia</Headline>
  </Flex>
);

interface MainLayoutProps {
  title?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  title,
  children,
  ...rest
}) => (
  <>
    <MainHeader {...{ title }} />
    <MainStack {...rest}>{children}</MainStack>
    <MainFooter />
  </>
);
