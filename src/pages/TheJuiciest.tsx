import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import { ButtonLoadMore } from '~/components/commonComponents/ButtonLoadMore';
import { TitleSectionMain } from '~/components/commonComponents/TitleSectionMain';
import { GeneralRecipes } from '~/components/layouts/sections/blocks/GeneralRecipes';
import { MockDataSliderType } from '~/components/layouts/sections/blocks/NewRecipesCard';
import { SectionMix } from '~/components/layouts/sections/blocks/SectionMix';
import { SearchSection } from '~/components/layouts/sections/SearchSection';

import { boxTitleAndSearchSecondary, flexRowCenter } from '../components/styles/Section.style';
import mock from '../mocks/mock.json';

export const TheJuiciest: React.FC = () => {
    const mockData = mock as Array<MockDataSliderType>;
    const sortedByBookmarksAndLikes = mockData
        .slice(0, 8)
        .sort((a: MockDataSliderType, b: MockDataSliderType) => {
            if (b.bookmarks === a.bookmarks) {
                return b.likes - a.likes;
            }
            return b.bookmarks - a.bookmarks;
        });
    return (
        <>
            <Box sx={boxTitleAndSearchSecondary}>
                <TitleSectionMain propsTitle='Самое сочное' />
                <SearchSection />
            </Box>
            <Box w='100%'>
                <GeneralRecipes data={sortedByBookmarksAndLikes} />
                <Flex sx={flexRowCenter}>
                    <ButtonLoadMore />
                </Flex>
            </Box>
            <Box w='100%'>
                <hr />
                <SectionMix />
            </Box>
        </>
    );
};
