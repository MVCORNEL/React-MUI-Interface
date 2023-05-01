import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    breakpoints: {
        values: {
            xxs: 0,
            xs: 350,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },

    palette: {
        primary: {
            light: '#ff7043',
            main: '#FF5722',
            dark: '#e64a19',
            contrastText: '#fff',
        },
        secondary: {
            light: '#191a1e',
            main: '#24262b',
            dark: '#4f5155',
            contrastText: '#fff',
        },
        background: { default: '#fcfcfc' },
    },

    typography: {
        // Tell MUI what's the font-size on the html element is.
        htmlFontSize: 10,
        fontSize: 16,

        fontFamily: ['Quicksand', 'sans-serif', 'Roboto'].join(','),

        h1: {
            fontSize: 56,
            fontWeight: 600,
            color: '#333',
            fontFamily: 'Lora',
        },

        h2: {
            fontSize: 38,
            lineHeight: 1.3,
            fontWeight: 700,
            color: '#333',
            fontFamily: 'Lora',
        },

        h3: {
            fontWeight: 700,
            fontSize: 28,
            lineHeight: 1.3,
            color: '#404040',
            position: 'relative',
            fontFamily: 'Lora',
        },

        h4: {
            fontFamily: 'Lora',
            color: '#FF5722',
            fontWeight: 600,
            lineHeight: 1.3,
            fontSize: 28,
        },

        h5: {
            fontFamily: 'Lora',
            fontSize: 24,
            fontWeight: 500,
            lineHeight: 1.35,
            color: '#333',
            textTransform: 'uppercase',
        },

        body1: {
            fontWeight: 500,
            color: '#555',
        },

        body2: {
            fontWeight: 500,
            color: '#555',
        },

        subtitle1: {
            fontWeight: 600,
            fontSize: 20,
            color: '#555',
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
        button: {
            fontSize: 18,
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    textTransform: 'capitalize',
                },
            },
            variants: [
                {
                    props: { size: 'large' },
                    style: {
                        paddingTop: 12,
                        paddingBottom: 12,
                    },
                },
                {
                    props: { size: 'medium' },
                    style: {
                        paddingTop: 6,
                        paddingBottom: 6,
                    },
                },
            ],
        },
    },
});

//Responsive typography
theme = responsiveFontSizes(theme);

const CustomTheme = (props) => {
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default CustomTheme;
