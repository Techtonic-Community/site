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
          icon={<RiMore2Fill color="white" />}
        />
      </PopoverTrigger>
      <Portal>
        <PopoverContent maxW="60" p="2" _focus={{ ring: "0" }}>
          <PopoverCloseButton size="md" color="gray.600" />
          <PopoverBody>
            <UnorderedList
              listStyleType="none"
              fontWeight="semibold"
              spacing="4"
              mx="0"
            >
              {routes.map((route) => (
                <ListItem key={route.path}>
                  <Link href={route.path}>{route.title}</Link>
                </ListItem>
              ))}
              <ListItem>
                <Link
                  href="https://github.com?PalashCoder"
                  isExternal
                  target="_blank"
                >
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
