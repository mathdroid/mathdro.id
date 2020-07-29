import { Button, ButtonProps } from "@chakra-ui/core";
import { FC } from "react";

interface SiteButtonProps extends ButtonProps {
  accent?: string;
}

export const SiteButton = ({ children, ...rest }: SiteButtonProps) => (
  <Button
    variant="outline"
    isFullWidth
    color="white"
    borderColor="#444"
    background="transparent"
    _hover={{
      background: `#444`,
    }}
    _active={{
      bg: "#555",
      transform: "scale(0.98)",
    }}
    _focus={{
      boxShadow:
        "0 0 1px 2px rgba(255, 200, 0, .75), 0 1px 1px rgba(0, 0, 0, .15)",
    }}
    {...rest}
  >
    {children}
  </Button>
);
