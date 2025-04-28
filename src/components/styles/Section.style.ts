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
    w: { base: '158px', lg: '346px' },
    minW: { base: '158px', lg: '346px' },
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
export const formControlFilter = {
    display: 'flex',
    flexWrap: 'wrap',
    w: '100%',
    alignItems: 'center',
    justifyContent: 'start',
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
export const flexRowBetweenEnd = {
    justifyContent: 'space-between',
    alignItems: 'end',
};
export const flexRowBetweenCenterWrap = {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
};
export const flexRowBetweenEndWrap = {
    justifyContent: 'space-between',
    alignItems: 'end',
    flexWrap: 'wrap',
    gap: '12px',
};
export const flexRowBetweenStartWrap = {
    justifyContent: 'space-between',
    alignItems: 'start',
    wrap: 'wrap',
};
export const flexRowStartWrap = {
    justifyContent: 'start',
    alignItems: 'start',
    flexWrap: 'wrap',
};
export const flexColBetweenStartWrap = {
    h: '100%',
    flexDir: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
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
    h: '100%',
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
    height: { base: '128px', md: '244px' },
    width: '100%',
};
export const generalCardImage = {
    objectFit: 'cover',
    borderRadius: '8px 0 0 8px',
    alt: 'The Dish',
    minW: { base: '158px', lg: '346px' },
    w: '100%',
    h: '100%',
};
export const generalCardStack = {
    p: { base: '8px', md: '20px 24px' },
    w: '100%',
    gap: { base: '6px', md: '24px' },
};
//GeneralRecipeCardFull
export const generalCardFull = {
    height: '100%',
    width: '100%',
    gap: { base: '16px', lg: '24px' },
    flexDir: { base: 'column', sm: 'row' },
};

export const generalCardImageFull = {
    objectFit: 'cover',
    borderRadius: '8px',
    alt: 'The Dish',
    minW: { base: '100%', sm: '232px', lg: '353px', xl: '553px' },
    maxW: { base: '100%', sm: '232px', lg: '353px', xl: '553px' },
    w: { base: '100%', sm: '232px', lg: '353px', xl: '553px' },
    minH: { base: '224px', lg: '410px' },
    flex: 1,
};

export const generalCardStackFull = {
    w: '100%',
    minH: { base: '224px', lg: '410px' },
    flexDir: 'column',
    gap: { base: '32px', xl: '40px' },
    flex: 1,
};

//NewRecipes
export const newRecipesContainer = {
    display: 'flex',
    gap: { base: '12px', xl: '24px' },
    maxW: { base: 'calc(100% + 15px)', sm: '100%' },
    w: { base: 'calc(100% + 15px)', sm: '100%' },
    height: '100%',
    maxH: '100%',
    overflowX: 'hidden',
};

export const buttonSlider = {
    position: 'absolute',
    w: 'calc(100% + 16px)',
    zIndex: 4,
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
    display: 'flex',
    direction: 'column',
    justifyContent: 'start',
    variant: 'outline',
    height: '100%',
};

export const newRecipesCardImage = {
    position: 'relative',
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
    h: '100%',
    maxH: '100%',
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
//Navigation
export const navDesktopContainer = {
    display: ['none', 'none', 'block', 'block', 'block'],
    position: 'fixed',
    zIndex: 2,
    top: '80px',
    w: '256px',
    h: 'calc(100vh - 80px - 34px - 144px)',
    m: '34px 4px 0 0',
    pb: '8px',
    bgColor: 'white',
};
export const navMobileBlur = {
    display: ['block', 'block', 'none', 'none', 'none'],
    position: 'fixed',
    backdropFilter: 'blur(4px)',
    bg: 'rgba(0, 0, 0, 0.16)',
    h: 'calc(100dvh - 64px)',
    w: '100%',
    top: '64px',
    zIndex: 3,
    left: 0,
};

export const navMobileContainer = {
    position: 'absolute',
    zIndex: 4,
    top: '0',
    right: '8px',
    w: '344px',
    h: 'calc(100% - 84px)',
    bgColor: 'white',
    borderRadius: ' 0 0 12px 12px',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
        width: '8px',
        mr: '20px',
    },
    '&::-webkit-scrollbar-track': {
        background: 'blackAlpha.50',
    },
    '&::-webkit-scrollbar-thumb': {
        background: 'blackAlpha.300',
        borderRadius: '8px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
        background: 'blackAlpha.300',
    },
};
//Navigation filter
export const navFilter = {
    display: 'block',
    position: 'fixed',
    backdropFilter: 'blur(4px)',
    bg: 'rgba(0, 0, 0, 0.16)',
    h: '100%',
    w: '100%',
    top: '0',
    zIndex: 6,
    left: 0,
};
export const navFilterContainer = {
    position: 'absolute',
    zIndex: 7,
    top: '0',
    right: '8px',
    w: { base: '100%', sm: '463px' },
    h: '100%',
    p: '48px 32px 32px',
    bgColor: 'white',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
        width: '8px',
        mr: '20px',
    },
    '&::-webkit-scrollbar-track': {
        background: 'blackAlpha.50',
    },
    '&::-webkit-scrollbar-thumb': {
        background: 'blackAlpha.300',
        borderRadius: '8px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
        background: 'blackAlpha.300',
    },
};
//CaloricContent
export const containerRecipeFull = {
    w: { base: '100%', lg: '578px', xl: '668px' },
    m: '0 auto',
};

export const smallCard = {
    border: '1px solid rgba(0, 0, 0, 0.08)',
    borderRadius: '16px',
    p: '16px',
    width: '100%',
    height: { base: '100%', sm: '136px' },
    display: 'flex',
    flexDir: { base: 'row', sm: 'column' },
    justifyContent: 'space-between',
    alignItems: 'center',
};
export const recipeCardStack = {
    p: { base: '8px', md: '20px 24px' },
    w: '100%',
    gap: { base: '12px', md: '16px' },
};
export const inputCustomElement = {
    h: '32px',
    w: '100%',
    p: '6px 12px',
    '::placeholder': {
        color: 'brand.800',
        opacity: 1,
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '143%',
    },
};
