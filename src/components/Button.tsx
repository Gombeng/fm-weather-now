import { Button } from "@chakra-ui/react";
import React from "react";

interface IButtonComp {
  children: React.ReactNode;
  gap?: string | { base?: string; sm?: string; md?: string; lg?: string };
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "2xs";
  bg?: string;
  _hover?: { bg: string };
  onClick?: () => void;
  px?: string;
}

export default function ButtonComp({
  children,
  size,
  bg,
  ...props
}: IButtonComp) {
  return (
    <Button
      bg={bg || "neutral.700"}
      size={size || { base: "xs", sm: "sm", md: "md", lg: "lg" }}
      borderRadius={"lg"}
      color={"neutral.0"}
      {...props}
    >
      {children}
    </Button>
  );
}
