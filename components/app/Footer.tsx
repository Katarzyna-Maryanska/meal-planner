import { Flex, Text } from "@chakra-ui/react";

export const Footer = () => (
  <Flex as="footer" align="center" justify="center" padding={6} bg="black">
    <Text color="white" fontSize="sm">
      ® DietPlanner all rights reserved
    </Text>
  </Flex>
);
