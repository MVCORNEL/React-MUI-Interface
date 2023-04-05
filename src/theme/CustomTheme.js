import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            light: '#b22347',
            main: '#FF5722',
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
        fontFamily: ['Quicksand', 'sans-serif', 'Roboto'].join(','),

        h1: {
            fontSize: 64,
            fontWeight: 400,
            color: '#111',
            fontFamily: 'Lora',
        },

        h2: {
            fontSize: 40,
            lineHeight: 1.3,
            fontWeight: 600,
            color: '#111',
            fontFamily: 'Lora',
        },

        h3: {
            fontWeight: 700,
            fontSize: 28,
            lineHeight: 1.3,
            color: '#222',
            position: 'relative',
            fontFamily: 'Lora',
        },

        h4: {
            color: '#FF5722',
            fontWeight: 700,
            lineHeight: 1.3,
            fontSize: 30,
        },

        h5: {
            fontWeight: 500,
            lineHeight: 1.35,
            color: '#535354',
            textTransform: 'uppercase',
        },

        subtitle1: {
            fontSize: 20,
            color: '#333',
        },

        cardTitle: {
            fontFamily: 'Lora',
            fontWeight: 500,
            fontSize: 30,
        },
        cardSubTitle: {
            color: '#ff5b84',
            fontWeight: 400,
            fontSize: 16,
        },
    },
});

//Responsive typography
theme = responsiveFontSizes(theme);

const CustomTheme = (props) => {
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default CustomTheme;
