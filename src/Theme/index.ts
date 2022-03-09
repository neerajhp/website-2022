import createTheme from "@mui/material/styles/createTheme";
import "../index.css";

const theme: any = createTheme({
  palette: {
    neutral: {
      main: "#F0F1F2",
    },
    secondary: {
      main: "#EE8E46",
    },
    text: {
      primary: "#000000",
      light: "#828282",
    },
  },
  typography: {
    h2: { fontFamily: "Satoshi" },
    h3: { fontFamily: "ClashGrotesk" },
    body1: { fontFamily: "Satoshi" },
  },
});

/** TYPOGRAPHY OVERRIDES */

export default theme;
