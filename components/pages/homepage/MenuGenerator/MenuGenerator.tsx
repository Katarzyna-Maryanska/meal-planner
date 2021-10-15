import { Flex, Text } from "@chakra-ui/react";

import { MenuForm } from "./MenuForm";

export const MenuGenerator = () => (
  <Flex
    as="section"
    px={6}
    py={10}
    flexDirection="column"
    alignItems="center"
    position="relative"
    w="100%"
    h="60vw"
    overflow="hidden"
    bg="black"
  >
    <Text color="primary" fontSize="lg" fontWeight="medium" mb={6}>
      Create your menu
    </Text>
    <MenuForm />
  </Flex>
);
