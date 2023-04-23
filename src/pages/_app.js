import { CssBaseline, ThemeProvider, Container, Box } from "@mui/material";
import { theme } from "@/theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
}
