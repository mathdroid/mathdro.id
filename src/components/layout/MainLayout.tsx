import { Stack, Flex, AlertIcon, Alert, CloseButton } from "@chakra-ui/core";
import { Headline } from "../Typography";
import { useState } from "react";

const MainStack = (props) => (
  <Stack
    spacing="4rem"
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
      m="0 auto"
      px="1rem"
    >
      {isAlert ? (
        <Alert status="warning" w="100%" variant="solid">
          <AlertIcon />
          Site is still under reconstruction (Late July 2020). Be patient!
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            onClick={() => {
              setIsAlert(false);
            }}
          />
        </Alert>
      ) : null}
      <Headline alignSelf={"start"} mt="4rem" mb="2rem">
        @mathdroid{title ? `: ${title}` : ""}
      </Headline>
    </Flex>
  );
};

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
  </>
);
