import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";
import { WithChildren } from "../../types";

export interface LinkProps extends WithChildren, ChakraLinkProps {
  href: string;
  isActive?: boolean;
}

export const Link: FC<LinkProps> = ({ href, isActive, children, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink
        color={isActive ? "#d3c7eb" : "gray.400"}
        _hover={{ textDecor: "none", color: "#d3c7eb" }}
        {...props}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
};
