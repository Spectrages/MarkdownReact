import * as React from 'react';
import { Theme } from "@mui/material/styles/createTheme";
import { createTheme, ThemeProvider } from '@mui/material/styles';

export interface ITheme {
  theme: Theme;
}

export const mainTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#727381",
      backgroundColor: "#5E5E6E",
    },
    secondary: {
      main: "#D1FAE5",
      text: "#0F172A",
      backgroundColor: "#5E5E6E",
    },
    error: {
      main: "#B91C1C",
      light: "#FECACA",
      backgroundColor: "#5E5E6E",
    },
    info: {
      main: "#ffffff",
      backgroundColor: "#5E5E6E",
    },
    warning: {
      main: "#FDE68A",
      text: "#D97706",
      backgroundColor: "#5E5E6E",
    },
  },
});


//#36374b

declare module "@mui/material/styles" {
  interface Palette {
    backgroundColor?: Palette["primary"];
  }
  interface PaletteOptions {
    backgroundColor?: PaletteOptions["primary"];
  }

  interface PaletteColor {
    backgroundColor?: string;
    text?: string;
  }
  interface SimplePaletteColorOptions {
    backgroundColor?: string;
    text?: string;
  }
}

export default mainTheme;