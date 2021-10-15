import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  children?: ReactNode;
};

export const Layout = ({ children }: Props) => (
  <Box>
    <Header />
    <Box as="main" width="100%">
      {children}
    </Box>
    <Footer />
  </Box>
);
