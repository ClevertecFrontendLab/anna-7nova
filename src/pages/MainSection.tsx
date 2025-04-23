import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router';

import { TitleSectionMain } from '~/components/commonComponents/TitleSectionMain';
import { MockDataSliderType } from '~/components/layouts/sections/blocks/NewRecipesCard';
import { TheJuiciestBlock } from '~/components/layouts/sections/blocks/TheJuiciestBlock';

import { BlogCooking } from '../components/commonComponents/BlogCooking';
import { ButtonMore } from '../components/commonComponents/ButtonMore';
import { TitleSection } from '../components/commonComponents/TitleSection';
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
import mock from '../mocks/mock.json';

export const MainSection: React.FC = () => {
    const navigate = useNavigate();
    const mockData = mock as Array<MockDataSliderType>;
    return (
        <>
            <Box sx={boxTitleAndSearchPrimary}>
                <TitleSectionMain />
                <SearchSection />
            </Box>
            <Box w='100%' h='100%' maxH='100%'>
                <TitleSection title='Новые рецепты ' />
                <NewRecipes data={mockData} />
            </Box>
            <Box w='100%'>
                <Flex sx={flexRowBetweenStart}>
                    <TitleSection title='Самое сочное ' />
                    <Box data-test-id='juiciest-link' sx={boxDesktopVisible}>
                        <ButtonMore text='Вся подборка' onClick={() => navigate('/the-juiciest')} />
                    </Box>
                </Flex>
                <TheJuiciestBlock data={mockData} />
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
