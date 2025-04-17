//Navigation

export const accordionItemStyle = {
    m: '0 10px',
    border: 'none',
    p: '0',
};
export const accordionButtonStyle = {
    _hover: { bg: 'brand.150' },
    _expanded: { bg: 'brand.100', fontWeight: '700' },
    p: '12px 16px 12px 6px',
    h: '47px',
    justifyContent: 'space-between',
};
export const userSettingsContainer = {
    position: 'fixed',
    top: '80px',
    right: '0',
    display: 'flex',
    flexDir: 'column',
    justifyContent: 'space-between',
    w: '208px',
    h: 'calc(100vh - 80px)',
    bgColor: 'white',
};

export const accordionLink = {
    outline: 'none',
    pl: '11px',
    textStyle: '16px',
    _hover: { color: 'black', outline: 'none' },
    borderColor: 'brand.300',
};

//stickers
export const boxStickerContainer = {
    padding: '24px 0 16px 38px',
    height: '200px',
};
//button
export const shadow = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '208px',
    backgroundImage:
        'radial-gradient(50% 50% at 50% 50%, brand.300 0%, rgba(255, 255, 255, 0) 100%)',
};
export const iconButton = {
    h: '48px',
    w: '48px',
    variant: 'solid',
    bg: 'black',
    color: 'white',
    _groupHover: {
        bg: 'transparent',
        outline: 'none',
        color: 'black',
        transform: 'scale(0.67)',
    },
};
