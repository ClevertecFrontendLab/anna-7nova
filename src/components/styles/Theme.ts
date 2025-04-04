import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        brand: {
            50: '#FFFFD3', // the lightest lime
            100: '#EAFFC7', // lighter lime
            150: '#D7FF94', // light lime
            300: '#C4FF61', // middle lime
            400: '#B1FF2E', // main lime (primary)
            600: '#2DB100', // dark lime
            800: '#134B00', // very very dark lime
        },
        black: '#000',
        white: '#fff',
        blackAlpha: {
            700: 'rgba(0, 0, 0, 0.64)',
        },
        grey: {
            800: '#1A202C',
        },
    },
    breakpoints: {
        base: '360px',
        sm: '768px',
        md: '1080px',
        lg: '1440px',
        xl: '1920px',
        '2xl': '1920px',
    },
    container: {
        base: '100%',
        sm: '360px',
        md: '768px',
        lg: '1360px',
        xl: '1360px',
    },
});
