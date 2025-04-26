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
                    minW: 'fit-content',
                    flexShrink: 0,
                    tabIndex: 0,
                    role: 'button',
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
                h1: {
                    fontSize: { base: '24px', md: '32px', lg: '48px' },
                    fontWeight: 700,
                    lineHeight: { base: '133%', lg: '100%' },
                },
                h2: {
                    fontSize: { base: '24px', md: '32px', lg: '48px', xl: '48px' },
                    fontWeight: 700,
                    lineHeight: { base: '133%', lg: '100%' },
                    m: { sm: '0 0 15px 0', lg: '0 0 35px 0', xl: '0 0 35px 0' },
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
                h7: {
                    fontSize: { base: '24px', lg: '48px' },
                    fontWeight: 500,
                    lineHeight: '100%',
                    pb: '20px',
                },
            },
        },
        Text: {
            baseStyle: {
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '143%',
                color: 'blackAlpha.800',
            },
            variants: {
                categorySticker: {
                    pl: '8px',
                    whiteSpace: 'nowrap',
                    flexShrink: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    letterSpacing: -0.2,
                },
                userNickName: {
                    color: 'blackAlpha.700',
                },
                greyestSmallText: {
                    fontSize: '12px',
                    fontWeight: 500,
                    lineHeight: '133%',
                    color: 'blackAlpha.400',
                },
                greySmallText: {
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '133%',
                    color: 'blackAlpha.700',
                },
                textSticker: {
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '133%',
                    color: 'rgba(0, 0, 0, 0.64)',
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
                buttonTextUnCollapsed: {
                    fontSize: { base: '12px', lg: '14px', xl: '18px' },
                    fontWeight: 600,
                    lineHeight: '156%',
                },
                buttonTextUnCollapsedBlack: {
                    fontSize: { base: '12px', lg: '14px', xl: '18px' },
                    fontWeight: 600,
                    lineHeight: '156%',
                    color: 'white',
                },
                textSubTitle: {
                    fontSize: { base: '14px', lg: '16px' },
                    fontWeight: 500,
                    lineHeight: '150%',
                    color: 'blackAlpha.600',
                    p: { base: '15px 0 15px', sm: '0 0 15px ', lg: '0 0 25px', xl: '0 0 25px' },
                },
                bigText: {
                    fontSize: { base: '16px', lg: '18px', xl: '20px' },
                    fontWeight: 500,
                    lineHeight: '140%',
                    noOfLines: 1,
                    pl: '12px',
                },
                userName: {
                    fontSize: { base: '16px', lg: '18px' },
                    fontWeight: 500,
                    lineHeight: '150%',
                },
                userNameBig: {
                    fontSize: { base: '18px', sm: '24px' },
                    fontWeight: 700,
                    lineHeight: '133%',
                },
                buttonText: {
                    fontSize: { base: '16px', xl: '18px' },
                    fontWeight: 600,
                    lineHeight: '150%',
                },
                //calories
                textGrey: {
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '143%',
                    color: 'blackAlpha.600',
                    flexGrow: 1,
                },
                textGreenNumber: {
                    fontSize: { base: '24px', sm: '36px' },
                    fontWeight: 500,
                    lineHeight: '111%',
                    color: 'brand.800',
                    w: '118px',
                    textAlign: 'center',
                },
                textBold: {
                    fontSize: { base: '12px', sm: '14px' },
                    fontWeight: 600,
                    lineHeight: '143%',
                    color: 'blackAlpha.900',
                    w: '61px',
                    textAlign: 'center',
                },
                textGreen: {
                    fontSize: '12px',
                    fontWeight: 700,
                    lineHeight: '133%',
                    color: 'brand.600',
                    letterSpacing: -0.05,
                    mr: '16px',
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
                padding: { base: '4px 8px', lg: '6px 12px' },
            },
            variants: {
                buttonSolidSmall: {
                    fontSize: { base: '12px', lg: '14px' },
                    bg: 'black',
                    _hover: { bg: 'brand.600', border: 'none' },
                    color: 'white',
                    height: { base: '24px', lg: '32px' },
                    flexShrink: 0,
                },
                buttonOutlineSmall: {
                    fontSize: { base: '12px', lg: '14px' },
                    _hover: { bg: 'brand.150', border: 'none' },
                    borderWidth: '1px',
                    borderColor: 'blackAlpha.500',
                    height: { base: '24px', lg: '32px' },
                    minWidth: { base: '24px', lg: '32px' },
                },
                buttonTextSmallest: {
                    fontSize: '12px',
                    lineHeight: '133%',
                    minW: '70px',
                    h: '32px',
                    padding: { base: '6px 8px', xl: '6px 12px' },
                    _hover: { bg: 'brand.800', border: 'none', color: 'white' },
                    color: 'brand.600',
                    borderColor: 'brand.600',
                    flexShrink: 0,
                },
                buttonOutlineBig: {
                    _hover: { bg: 'brand.150', border: 'none' },
                    borderWidth: '1px',
                    borderColor: 'blackAlpha.500',
                    h: { base: '24px', lg: '32px', xl: '48px' },
                },
                buttonSolidBig: {
                    _hover: { bg: 'brand.600', border: 'none' },
                    bg: 'brand.400',
                    h: { base: '24px', lg: '32px', xl: '48px' },
                },
            },
        },
        IconButton: {
            baseStyle: {
                fontSize: '16px',
                fontWeight: 600,
                lineHeight: '143%',
            },
        },
        Input: {
            baseStyle: {
                fontSize: { base: '14px', md: '16px', lg: '18px' },
                fontWeight: 400,
                lineHeight: '143%',
            },
        },
        Breadcrumb: {
            baseStyle: {
                as: 'nav',
                flexGrow: 1,
                spacing: '8px',
            },
        },
    },
});
