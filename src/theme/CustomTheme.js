import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#1c1c1d",
      main: "#28282a",
      dark: "#535354",
      contrastText: "#fff",
    },
    secondary: {
      light: "#b22347",
      main: "#ff3366",
      dark: "#ff5b84",
      contrastText: "#fff",
    },
  },
});

const CustomTheme = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default CustomTheme;
