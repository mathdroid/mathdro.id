import { Stack, Flex } from "@chakra-ui/core";
import { Headline } from "../Typography";

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
  return (
    <Flex as="nav" maxWidth="48rem" m="0 auto" px="1rem">
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
