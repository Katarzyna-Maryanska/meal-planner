import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export const Header = () => (
  <Flex
    as="header"
    width="100%"
    position="fixed"
    align="center"
    justify="space-between"
    wrap="wrap"
    p={6}
    bg="black"
    opacity="0.8"
  >
    <Link href="/">
      <Flex>
        <Text color="white" fontWeight="bold" fontSize="lg">
          Diet
        </Text>
        <Text color="primary" fontWeight="bold" fontSize="lg">
          Planner
        </Text>
      </Flex>
    </Link>
  </Flex>
);
