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
            400: 'rgba(0, 0, 0, 0.24)',
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
    fonts: {
        heading: `'Inter', sans-serif`,
        body: `'Inter', sans-serif`,
    },
    components: {
        Tabs: {
            baseStyle: {
                tab: {
                    border: 'none',
                    borderRadius: 0,
                    _hover: {
                        borderBottom: '4px solid',
                        borderColor: 'brand.600',
                        color: 'brand.600',
                    },
                    _selected: {
                        borderBottom: '4px solid',
                        borderColor: 'brand.600',
                        color: 'brand.600',
                    },
                    _focus: {
                        borderBottom: '4px solid',
                        borderColor: 'brand.600',
                        color: 'brand.600',
                        outline: '2px solid transparent',
                    },
                    _focusVisible: {
                        borderBottom: '4px solid',
                        borderColor: 'brand.300',
                    },
                },
            },
        },
        Heading: {
            sizes: {
                h2: {
                    fontSize: { base: '24px', md: '32px', lg: '48px', xl: '48px' },
                    fontWeight: 700,
                    lineHeight: { base: '133%', lg: '100%' },
                    m: { sm: '0 0 15px 0' },
                },
                h3: {
                    fontSize: { base: '24px', md: '30px', lg: '36px', xl: '48px' },
                    fontWeight: 500,
                    lineHeight: '111%',
                    margin: ['0 0 12px ', '0 0 12px', '0 0 18px', '0 0 24px', '0 0 24px'],
                },
                h4: {
                    fontSize: { base: '24px', md: '28px', lg: '30px', xl: '36px' },
                    fontWeight: 400,
                    lineHeight: '120%',
                    margin: ['0 0 12px', '0 0 12px', '0 0 14px', '0 0 16px', '0 0 24px'],
                },
                h5: {
                    fontSize: { base: '16px', md: '18px', lg: '20px' },
                    fontWeight: 500,
                    lineHeight: '140%',
                },
                h6: {
                    fontSize: { base: '16px', md: '18px', xl: '20px' },
                    fontWeight: 500,
                    lineHeight: '140%',
                },
            },
        },
        Text: {
            baseStyle: {
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '143%',
            },
            variants: {
                bigText: {
                    fontSize: { base: '16px', lg: '18px', xl: '20px' },
                    fontWeight: 500,
                    lineHeight: '140%',
                },
                userName: {
                    fontSize: { base: '16px', lg: '18px' },
                    fontWeight: 500,
                    lineHeight: '150%',
                },
                userNickName: {
                    color: ' blackAlpha.700',
                },
                buttonText: {
                    fontSize: { base: '16px', xl: '18px' },
                    fontWeight: 600,
                    lineHeight: '150%',
                },
                buttonTextSmall: {
                    fontSize: { base: '12px', lg: '14px' },
                    fontWeight: 600,
                    lineHeight: '143%',
                    p: '9px 12px',
                },
                buttonTextSmallest: {
                    fontSize: { base: '12px', xl: '14px' },
                    fontWeight: 600,
                    lineHeight: '133%',
                    p: { base: '8px', xl: '6px 12px' },
                },
                buttonTextNotification: {
                    fontSize: { base: '12px', lg: '16px' },
                    fontWeight: 600,
                    lineHeight: '150%',
                },
                buttonMobileMenu: {
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '133%',
                    color: 'rgba(0, 0, 0, 0.64)',
                },
                textSticker: {
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '133%',
                    color: 'rgba(0, 0, 0, 0.64)',
                },
                textSubTitle: {
                    fontSize: { base: '14px', lg: '16px' },
                    fontWeight: 500,
                    lineHeight: '150%',
                    color: 'rgba(0, 0, 0, 0.48)',
                    m: { sm: '15px 0 ' },
                },
            },
        },
        FormLabel: {
            baseStyle: {
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '150%',
            },
        },
        Button: {
            baseStyle: {
                fontSize: '16px',
                fontWeight: 600,
                lineHeight: '143%',
            },
            variants: {
                buttonTextSmall: {
                    fontSize: { base: '12px', lg: '14px' },
                    lineHeight: '143%',
                    p: { base: '4px 8px', xl: '6px 12px' },
                },
                buttonTextSmallest: {
                    fontSize: '12px',
                    lineHeight: '133%',
                },
            },
        },
        IconButton: {
            variants: {
                buttonTextSmall: {
                    fontSize: { base: '12px', lg: '14px' },
                    fontWeight: 600,
                    lineHeight: '143%',
                },
            },
        },
        Input: {
            baseStyle: {
                fontSize: { base: '14px', md: '16px', lg: '18px' },
                fontWeight: 400,
                lineHeight: '143%',
            },
        },
    },
});
