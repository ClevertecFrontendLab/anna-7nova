export const flexHeader = {
    position: 'fixed',
    w: '100%',
    h: { base: '64px', md: '80px' },
    bgColor: 'brand.50',
    alignItems: 'center',
    zIndex: '1',
};
export const flexBetweenCenterGrowDesktopVisible = {
    display: ['none', 'none', 'flex', 'flex', 'flex'],
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
    mr: '70px',
};
export const flexEndCenterGrowMobileVisible = {
    display: ['flex', 'flex', 'none', 'none', 'none'],
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexGrow: 1,
    gap: '12px',
};
