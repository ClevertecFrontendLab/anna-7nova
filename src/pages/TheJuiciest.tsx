import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import { AppRoutesPropsType } from '~/app/router/AppRoutes';
import { ButtonLoadMore } from '~/components/commonComponents/ButtonLoadMore';
import { MockDataSliderType } from '~/components/commonComponents/CategoryData';
import { TitleSectionMain } from '~/components/commonComponents/TitleSectionMain';
import { GeneralRecipes } from '~/components/layouts/sections/blocks/GeneralRecipes';
import { SectionMix } from '~/components/layouts/sections/blocks/SectionMix';
import { SearchSection } from '~/components/layouts/sections/SearchSection';

import { boxTitleAndSearchSecondary, flexRowCenter } from '../components/styles/Section.style';
import mock from '../mocks/mock.json';

export const TheJuiciest: React.FC<AppRoutesPropsType> = ({
    onFilterBtnClick,
    filterCheckboxHandle,
    filter,
    addItemsAllergens,
}: AppRoutesPropsType) => {
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
                <SearchSection
                    onFilterBtnClick={onFilterBtnClick}
                    filterCheckboxHandle={filterCheckboxHandle}
                    filter={filter}
                    addItemsAllergens={addItemsAllergens}
                />
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
