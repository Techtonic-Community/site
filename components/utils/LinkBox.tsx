import {
  LinkBox as ChakraLinkBox,
  LinkBoxProps as ChakraLinkBoxProps,
  LinkOverlay,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";
import { WithChildren } from "../../types";

interface LinkBoxProps extends WithChildren, ChakraLinkBoxProps {
  href: string;
  isExternal?: boolean;
}

const LinkBox: FC<LinkBoxProps> = ({
  href,
  isExternal,
  children,
  ...props
}) => {
  return (
    <ChakraLinkBox {...props}>
      <NextLink href={href} passHref target="_blank">
        <LinkOverlay isExternal={isExternal}>{children}</LinkOverlay>
      </NextLink>
    </ChakraLinkBox>
  );
};

export default LinkBox;
