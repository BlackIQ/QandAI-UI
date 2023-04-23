import { Vazirmatn } from "next/font/google";

const vazir = Vazirmatn({ subsets: ["latin"] });

import { colors, createTheme } from "@mui/material";

const mode = "dark";

const theme = createTheme({
  palette: {
    mode: mode,
    background: {
      default: mode === "dark" ? "#222" : "#f1f1f1",
    },
    primary: {
      main: mode === "dark" ? colors.teal[500] : colors.indigo[500],
    },
  },
  typography: {
    fontFamily: vazir.style.fontFamily,
  },
});

export { theme };
