import { Theme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
