import createTheme from "@mui/material/styles/createTheme";
import { red } from "@mui/material/colors";

const theme: any = createTheme({
  status: {
    danger: red[500],
  },
  palette: {
    primary: {
      main: "#F0F1F2",
      contrastText: "#000000",
    },
    secondary: {
      main: "#EE8E46",
    },
  },
});

/** TYPOGRAPHY OVERRIDES */

export default theme;
