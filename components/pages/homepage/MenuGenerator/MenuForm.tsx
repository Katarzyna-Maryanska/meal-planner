import { Flex, Button, Text } from "@chakra-ui/react";
import Link from "next/link";

export const MenuForm = () => (
  <Flex width="65vw" flexDirection="column" alignItems="center">
    <Text mb={4} color="white">
      Form
    </Text>

    <Link href="/menu">
      <Button color="white">Generate menu</Button>
    </Link>
  </Flex>
);
