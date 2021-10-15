import { AppProps } from "next/app";
import { ThemeProvider, CSSReset } from "@chakra-ui/react";

import theme from "styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
