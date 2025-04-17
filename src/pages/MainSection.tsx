import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router';

import { dataGeneralRecipes } from '~/components/commonComponents/DataRecipes';
import { TitleSectionMain } from '~/components/commonComponents/TitleSectionMain';

import { BlogCooking } from '../components/commonComponents/BlogCooking';
import { ButtonMore } from '../components/commonComponents/ButtonMore';
import { TitleSection } from '../components/commonComponents/TitleSection';
import { GeneralRecipes } from '../components/layouts/sections/blocks/GeneralRecipes';
import { NewRecipes } from '../components/layouts/sections/blocks/NewRecipes';
import { SectionMix } from '../components/layouts/sections/blocks/SectionMix';
import { SearchSection } from '../components/layouts/sections/SearchSection';
import {
    blogContainer,
    boxDesktopVisible,
    boxMobileVisibleCenter,
    boxTitleAndSearchPrimary,
    flexRowBetweenStart,
} from '../components/styles/Section.style';

export const MainSection: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <Box sx={boxTitleAndSearchPrimary}>
                <TitleSectionMain />
                <SearchSection />
            </Box>
            <Box w='100%'>
                <TitleSection title='Новые рецепты ' />
                <NewRecipes />
            </Box>
            <Box w='100%'>
                <Flex sx={flexRowBetweenStart}>
                    <TitleSection title='Самое сочное ' />
                    <Box data-test-id='juiciest-link' sx={boxDesktopVisible}>
                        <ButtonMore text='Вся подборка' onClick={() => navigate('/the-juiciest')} />
                    </Box>
                </Flex>
                <GeneralRecipes data={dataGeneralRecipes} />
                <Box data-test-id='juiciest-link-mobile' sx={boxMobileVisibleCenter}>
                    <ButtonMore text='Вся подборка' onClick={() => navigate('/the-juiciest')} />
                </Box>
            </Box>
            <Box sx={blogContainer}>
                <Flex sx={flexRowBetweenStart}>
                    <TitleSection size='h4' title='Кулинарные блоги' />
                    <Box sx={boxDesktopVisible}>
                        <ButtonMore text='Все авторы' bg='brand.300' onClick={() => {}} />
                    </Box>
                </Flex>
                <BlogCooking />
                <Box sx={boxMobileVisibleCenter}>
                    <ButtonMore text='Все авторы' bg='brand.300' onClick={() => {}} />
                </Box>
            </Box>
            <Box w='100%'>
                <hr />
                <SectionMix />
            </Box>
        </>
    );
};
