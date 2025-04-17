export const boxHeader = {
    position: 'fixed',
    bottom: '0',
    display: { base: 'none', md: 'flex' },
    flexDir: 'column',
    alignItems: 'start',
    gap: '16px',
    maxW: '256px',
    w: '256px',
    h: '144px',
    p: '0 24px',
    bgColor: 'white',
};

//mobile footer
export const gridContainer = {
    position: 'fixed',
    bottom: '0',
    display: { base: 'grid', md: 'none' },
    gridTemplateColumns: 'repeat(4, 1fr)',
    bgColor: 'brand.50',
    w: '100%',
    h: '84px',
};
//button
export const buttonContainer = {
    flexDir: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    p: '10px 0',
    cursor: 'pointer',
    _hover: {
        bg: 'transparent',
    },
};
export const iconButtonStyle = {
    position: 'relative',
    variant: 'ghost',
    _groupHover: {
        bg: 'black',
        color: 'white',
        transform: 'scale(0.67)',
    },
    zIndex: 1,
};
//avatar
export const avatarContainer = {
    h: '100%',
    p: '10px 0',
    flexDir: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
};
