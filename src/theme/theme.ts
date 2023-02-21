import { Theme } from "@mui/material/styles/createTheme";
import { createTheme, ThemeProvider } from '@mui/material/styles';

export interface ITheme {
  theme: Theme;
}

export const mainTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#727381",
    },
  },
});
