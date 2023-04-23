import { Vazirmatn } from "next/font/google";

const vazir = Vazirmatn({ subsets: ["latin"] });

import { colors, createTheme } from "@mui/material";

let mode = "dark";

const theme = createTheme({
  palette: {
    mode: mode,
    background: {
      default: mode === "dark" ? "#222" : "#ccc",
    },
    primary: {
      main: colors.teal[500],
    },
  },
  typography: {
    fontFamily: vazir.style.fontFamily,
  },
});

export { theme, mode };
