import { Button } from "@chakra-ui/core";

export const SiteButton = (props) => (
  <Button
    variant="outline"
    isFullWidth
    color="white"
    borderColor="#444"
    background="transparent"
    _hover={{
      bg: "#444",
    }}
    _active={{
      bg: "#555",
      transform: "scale(0.98)",
    }}
    _focus={{
      boxShadow:
        "0 0 1px 2px rgba(255, 200, 0, .75), 0 1px 1px rgba(0, 0, 0, .15)",
    }}
    {...props}
  />
);
