//Container
export const mainContainer = {
    as: 'section',
    maxW: { base: '100%', md: 'calc(100vw - 530px)' },
    minH: { base: 'calc(100vw -80px - 84px)', lg: 'calc(100vh - 80px)' },
    bg: 'white',
    gap: ['32px', '32px', '32px', '40px', '40px'],
    mt: { base: '64px', md: '80px' },
    mb: { base: '100px', sm: '92px', md: '0' },
};

//Box
export const boxDesktopVisible = {
    display: ['none', 'none', 'block', 'block', 'block'],
};
export const boxMobileVisible = {
    display: ['block', 'block', 'none', 'none', 'none'],
};
export const boxMobileVisibleCenter = {
    display: ['flex', 'flex', 'none', 'none', 'none'],
    w: '100%',
    justifyContent: 'center',
    mt: '12px',
};
export const boxCategorySticker = {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '4px',
    whiteSpace: 'hidden',
    p: { base: '2px 4px', lg: '2px 8px' },
};
export const boxMobileVisibleAbsolute = {
    display: ['flex', 'flex', 'none', 'none', 'none'],
    justifyContent: 'space-between',
    position: 'absolute',
    w: '100%',
    p: '8px',
};

//MainSection
export const boxTitleAndSearchPrimary = {
    display: 'flex',
    flexDir: 'column',
    alignItems: 'center',
    w: '100%',
    p: {
        base: '15px 20px 5px',
        sm: '16px 0 5px',
        md: '16px 0 5px',
        lg: '30px 105px 15px',
        xl: '30px 300px 10px',
    },
};
//JuiciestSection, VeganSection
export const boxTitleAndSearchSecondary = {
    display: 'flex',
    flexDir: 'column',
    alignItems: 'center',
    w: '100%',
    p: {
        base: '15px 20px 0',
        sm: '16px 0 0',
        md: '24px 0',
        lg: '35px  100px 0',
        xl: '32px 290px 5px',
    },
};
//SearchSection
export const flexSearchContainer = {
    justifyContent: 'center',
    w: '100%',
    p: ['15px 0 0', ' 0 140px', '0 110px', '0 80px', '0 130px'],
};
export const flexSearchContainerDesktop = {
    display: ['none', 'none', 'block', 'block', 'block'],
    justifyContent: 'center',
    w: '100%',
    p: ['15px 0 0', ' 0 140px', '0 110px', '0 80px', '0 130px'],
};

export const inputGroup = {
    width: '100%',
    minW: '284px',
    h: ['32px', '32px', '40px', '48px', '48px'],
    borderColor: 'blackAlpha.600',
};

export const inputElement = {
    h: '100%',
    w: '100%',
    p: { base: '7.5px 12px', sm: '0 12px', lg: '13px 16px' },
    '::placeholder': {
        color: 'brand.800',
        opacity: 1,
    },
};
export const iconButtonOutline = {
    variant: 'outline',
    bg: 'transparent',
    borderColor: 'blackAlpha.600',
    h: ['32px', '32px', '40px', '48px', '48px'],
    minW: ['32px', '32px', '40px', '48px', '48px'],
    mr: '12px',
};
export const iconButtonGhost = {
    variant: 'ghost',
    bg: 'transparent',
    h: ['32px', '32px', '40px', '48px', '48px'],
    minW: ['32px', '32px', '40px', '48px', '48px'],
    w: ['32px', '32px', '40px', '48px', '48px'],
};
export const formControl = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    m: '16px 0 0',
};

//Flex
export const flexRowStartCenter = {
    justifyContent: 'start',
    alignItems: 'center',
};
export const flexRowBetweenStart = {
    justifyContent: 'space-between',
    alignItems: 'start',
};
export const flexRowBetweenCenterWrap = {
    justifyContent: 'space-between',
    alignItems: 'center',
    wrap: 'wrap',
};
export const sticker = {
    justifyContent: 'space-between',
    alignItems: 'center',
    pt: '10px',
};

export const flexRowCenter = {
    justifyContent: 'center',
    alignItem: 'center',
    pt: '16px',
};
export const flexRowEndGap = {
    justifyContent: 'flex-end',
    gap: { base: '12px', lg: '8px' },
    padding: '0',
};

//TabList
export const tabListOverflowHidden = {
    overflowX: 'hidden',
    whiteSpace: 'nowrap',
    maxW: '100%',
    h: '30px',
    mb: '24px',
    justifyContent: 'center',
    color: 'brand.800',
    overflowY: 'hidden',
};

// GeneralRecipes
export const gridContainer = {
    w: '100%',
    gridTemplateColumns: {
        base: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(1, 1fr)',
        lg: 'repeat(1, 1fr)',
        xl: 'repeat(2, 1fr)',
    },
    columnGap: { base: '0', sm: '16px', xl: '24px' },
    rowGap: { base: '16px', sm: '16px', lg: '16px' },
};

//GeneralRecipeCard
export const generalCard = {
    position: 'relative',
    variant: 'outline',
    height: ['128px', '128px', '244px', '244px'],
    width: '100%',
};
export const generalCardImage = {
    objectFit: 'cover',
    borderRadius: '8px 0 0 8px',
    alt: 'The Dish',
    w: { base: '158px', lg: '346px' },
};
export const generalCardStack = {
    p: { base: '8px', md: '20px 24px' },
    w: '100%',
    gap: { base: '6px', md: '24px' },
};

//NewRecipes
export const newRecipesContainer = {
    display: 'flex',
    gap: { base: '12px', xl: '24px' },
    maxW: '100%',
    overflowX: 'hidden',
};

export const buttonSlider = {
    position: 'absolute',
    w: 'calc(100% + 16px)',
    zIndex: 10,
    top: {
        base: '40px',
        sm: '50px',
        md: '100px',
        lg: '147px',
    },
    display: { base: 'none', md: 'block' },
    left: '-8px',
    right: '-8px',
};
export const buttonSliderIcon = {
    color: 'white',
    bg: 'black',
    h: ['32px', '32px', '36px', '40px', '48px'],
    minW: ['32px', '32px', '36px', '40px', '48px'],
    _hover: { color: 'black', bg: 'brand.400', border: 'none' },
};
export const newRecipesCard = {
    position: 'relative',
    direction: 'column',
    justifyContent: 'start',
    variant: 'outline',
    w: { base: '158px', sm: '158px', md: '210px', lg: '277px', xl: '322px' },
    minW: { base: '158px', sm: '158px', md: '210px', lg: '277px', xl: '322px' },
};
export const newRecipesCardImage = {
    objectFit: 'cover',
    borderRadius: '8px 8px 0 0 ',
    maxW: '100%',
    h: { base: '128px', md: '230px' },
    alt: 'The Dish',
};
export const newRecipesCardStack = {
    p: {
        base: '8px',
        md: '12px',
        xl: '16px 24px 20px',
    },
    gap: { base: '6px', md: '24px' },
    w: '100%',
    flexDir: 'column',
    justifyContent: 'space-between',
};

//BlogCooking
export const blogContainer = {
    w: '100%',
    bg: 'brand.300',
    borderRadius: '16px',
    p: { base: '12px', lg: '24px' },
};
export const gridContainerBlog = {
    gridTemplateColumns: {
        base: 'repeat(1, 1fr)',
        sm: 'repeat(3, 1fr)',
        md: 'repeat(1, 1fr)',
        lg: 'repeat(3, 1fr)',
    },
    gap: '12px',
    w: '100%',
};
export const gridCardBlog = {
    bg: 'white',
    borderRadius: '8px',
    p: { base: '16px', xl: '24px' },
    minW: '180px',
    display: 'flex',
    flexDir: 'column',
    gap: { base: '20px', lg: '16px', xl: '28px' },
};

//SectionMix
export const gridContainerMix = {
    gridTemplateColumns: {
        base: 'repeat(1, 1fr)',
        sm: 'repeat(3, 1fr)',
        md: 'repeat(1, 1fr)',
        lg: 'repeat(3, 1fr)',
        xl: 'repeat(4, 1fr)',
    },
    columnGap: { base: '12px', md: '16px', lg: '24px' },
    rowGap: '12px',
    w: '100%',
    h: '100%',
};
export const gridItemText = {
    pt: { base: '10px', sm: '12px', lg: '24px' },
};
export const gridItemMix = {
    gap: { base: '12px', sm: '4px', md: '12px' },
    display: 'flex',
    flexDir: 'column',
    h: '100%',
};
export const gridItemCardBasic = {
    variant: 'outline',
    display: 'flex',
    flexDir: 'column',
    justifyContent: 'space-between',
    w: '100%',
    p: { base: '12px', md: '16px', xl: '24px 24px 20px' },
    h: '100%',
};
export const gridItemCardSmall = {
    variant: 'outline',
    w: '100%',
    p: { base: '8px', sm: '10px 12px', xl: '12px 24px' },
};
