import { Button } from "@chakra-ui/react";
import React from "react";

interface IButtonComp {
  children: React.ReactNode;
  gap?: string | { base?: string; sm?: string; md?: string; lg?: string };
}

export default function ButtonComp({ children, ...props }: IButtonComp) {
  return (
    <Button
      bg={"neutral.700"}
      size={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}
      borderRadius={"lg"}
      {...props}
    >
      {children}
    </Button>
  );
}
