import { FC } from "react";
import { Link, LinkProps } from "@chakra-ui/core";

export const ButtonLink: FC<LinkProps> = ({ href, ...rest }) => (
  <Link
    px="2rem"
    height="2.5rem"
    minW="2.5rem"
    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
    border="1px"
    rounded=".25rem"
    borderColor="#444"
    color="white"
    fontWeight="semibold"
    textAlign="center"
    lineHeight="2.5"
    {...rest}
    _hover={{ bg: "#444", textDecor: "underline", ...rest._hover }}
    _active={{
      bg: "#dddfe2",
      transform: "scale(0.98)",
      borderColor: "#bec3c9",
      ...rest._active,
    }}
    _focus={{
      boxShadow:
        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
      ...rest._focus,
    }}
    href={href}
  />
);
