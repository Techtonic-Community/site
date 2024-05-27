import {
  PopoverTrigger as ChakraPopoverTrigger,
  Icon,
  IconButton,
  ListItem,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  Portal,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import { RiMore2Fill } from "react-icons/ri";
import { Route, WithChildren } from "../../types";
import { Link } from "../utils/Link";

interface MobileOptionsMenuProps {
  routes: Route[];
}

const PopoverTrigger: FC<WithChildren> = ChakraPopoverTrigger;

const MobileOptionsMenu: FC<MobileOptionsMenuProps> = ({ routes }) => {
  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <IconButton
          aria-label="Open menu"
          size="sm"
          colorScheme="whiteAlpha"
          boxShadow="sm"
          borderRadius="full"
          border="1px"
          borderColor={useColorModeValue("gray.200", "gray.700")}
          icon={<Icon boxSize="5" color="gray.400" as={RiMore2Fill} />}
        />
      </PopoverTrigger>
      <Portal>
        <PopoverContent maxW="60" p="2" _focus={{ ring: "0" }}>
          <PopoverCloseButton size="md" color="gray.600" />
          <PopoverBody>
            <UnorderedList
              as="ul"
              listStyleType="none"
              fontWeight="semibold"
              spacing="4"
              mx="0"
            >
              {routes.map((route) => (
                <ListItem as="li" key={route.path}>
                  <Link href={route.path}>{route.title}</Link>
                </ListItem>
              ))}
                <ListItem>
                  <Link href="https://github.com?PalashCoder" isExternal target="_blank">
                    GitHub
                  </Link>
                </ListItem>
            </UnorderedList>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default MobileOptionsMenu;
