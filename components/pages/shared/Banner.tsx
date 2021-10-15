import { ReactNode } from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Image from "next/image";

type Props = {
  src: any;
  children?: ReactNode;
};

export const Banner = ({ src, children }: Props) => (
  <Flex
    as="section"
    position="relative"
    display="block"
    w="100%"
    h="60vw"
    overflow="hidden"
    bg="primary"
    zIndex={-1}
  >
    <Image src={src} alt="banner image" layout="responsive" />

    <Box
      position="absolute"
      transform="translateY(-50%) translateX(-50%)"
      top="50%"
      left="50%"
      textAlign="center"
    >
      <Text fontSize="xl" color="white" fontWeight="medium" mt={6}>
        {children}
      </Text>
    </Box>
  </Flex>
);
