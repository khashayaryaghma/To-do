import { createTheme, ThemeOptions } from "@mui/material";

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#FF3D00",
    },
    background: {
      default: "#FFEBD8",
    },
  },
};
export const theme = createTheme(themeOptions);
