import Link from "next/link";
import {
  ThemeProvider,
  ColorModeProvider,
  CSSReset,
  GlobalStyle,
} from "@chakra-ui/react";

import Layout from "../components/Layout";
import { theme } from "../styles/theme";

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider options={theme.config}>
      <CSSReset />
      <GlobalStyle />
      <Layout title="Home | Next.js + TypeScript Example">
        <h1>Hello Next.js 👋</h1>
        <p>
          <Link href="/about">
            <a>About</a>
          </Link>
        </p>
      </Layout>
    </ColorModeProvider>
  </ThemeProvider>
);

export default IndexPage;
