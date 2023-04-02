import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    fontFamily: [
        'Teko',
        'sans-serif',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),

    palette: {
        primary: {
            light: '#b22347',
            main: '#ff3366',
            dark: '#ff5b84',
            contrastText: '#fff',
        },
        secondary: {
            light: '#191a1e',
            main: '#24262b',
            dark: '#4f5155',
            contrastText: '#fff',
        },
    },

    typography: {
        // Tell MUI what's the font-size on the html element is.
        htmlFontSize: 10,
        fontSize: 16,

        h1: {
            fontSize: 60,
            fontWeight: 500,
            color: '#333',
        },

        h2: {
            fontSize: 40,
            lineHeight: 1.3,
            fontWeight: 600,
            color: '#111',
        },

        h3: {
            fontWeight: 500,
            fontSize: 30,
            lineHeight: 1.3,
            color: '#303030',
            position: 'relative',
        },

        h4: {
            color: '#ff3366',
            fontWeight: 500,
            lineHeight: 1.3,
            fontSize: 30,
        },

        h5: {
            fontSize: 18,
            fontWeight: 700,
            lineHeight: 1.35,
            color: '#535354',
            textTransform: 'uppercase',
        },

        subtitle1: {
            fontSize: 20,
            color: '#272727',
        },

        cardTitle: {
            fontFamily: 'Teko',
            fontWeight: 500,
            fontSize: 32,
        },
        cardSubTitle: {
            color: '#ff3366',
            fontSize: 18,
        },
    },
});

//Responsive typography
theme = responsiveFontSizes(theme);

const CustomTheme = (props) => {
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default CustomTheme;
