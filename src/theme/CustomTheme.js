import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      light: '#b22347',
      main: '#ff3366',
      dark: '#ff5b84',
      contrastText: '#fff',
    },
  },

  typography: {
    // Tell MUI what's the font-size on the html element is.
    htmlFontSize: 10,

    h1: {
      fontSize: 62,
      fontWeight: 400,
      color: '#252525',
    },

    h2: {
      fontSize: '2.7rem',
      lineHeight: 1.3,
      fontWeight: 500,
      color: '#222',
    },

    h3: {
      fontSize: '1.6rem',
      lineHeight: 1.3,
      color: '#222',
    },

    h4: {
      color: '#ff3366',
      fontWeight: 500,
      lineHeight: 1.3,
      fontSize: 28,
    },

    h5: {
      color: '#ff3366',
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1.35,
      color: '#535354',
      textTransform: 'uppercase',
    },

    subtitle1: {
      fontSize: 20,
      color: '#666',
    },
  },
});

//Responsive typography
theme = responsiveFontSizes(theme);

const CustomTheme = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default CustomTheme;
