//Navigation

export const accordionItemStyle = {
    m: '0 10px',
    border: 'none',
    p: '0',
    w: '100%',
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

//Custom input
export const customIconButton = {
    _hover: { bg: 'white', border: 'brand.400', borderColor: 'brand.400' },
    _expanded: { borderColor: 'brand.150', fontWeight: '700' },
    _selected: { borderColor: 'blackAlpha.100' },
    _focused: { borderColor: 'blackAlpha.100', outline: 'none', boxShadow: 'none' },
    justifyContent: 'space-between',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    outline: 'none',
    borderRadius: '6px',
    width: '100%',
    minHeight: '40px',
    position: 'relative',
    whiteSpace: 'nowrap',
    zIndex: 6,
};

export const customIconItemStyle = {
    position: 'relative',
    border: 'none',
    p: '0',
    w: '100%',
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
