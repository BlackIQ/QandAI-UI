import { CssBaseline, ThemeProvider, Container } from "@mui/material";
import { theme } from "@/theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        // maxWidth="xl"
        sx={{
          w: "100%",
        }}
      >
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}
