import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import { ButtonLoadMore } from '~/components/commonComponents/ButtonLoadMore';
import { dataTheJuiciest } from '~/components/commonComponents/DataRecipes';
import { TitleSectionMain } from '~/components/commonComponents/TitleSectionMain';
import { GeneralRecipes } from '~/components/layouts/sections/blocks/GeneralRecipes';
import { SectionMix } from '~/components/layouts/sections/blocks/SectionMix';
import { SearchSection } from '~/components/layouts/sections/SearchSection';

import { boxTitleAndSearchSecondary, flexRowCenter } from '../components/styles/Section.style';

export const TheJuiciest: React.FC = () => (
    <>
        <Box sx={boxTitleAndSearchSecondary}>
            <TitleSectionMain propsTitle='Самое сочное' />
            <SearchSection />
        </Box>
        <Box w='100%'>
            <GeneralRecipes data={dataTheJuiciest} />
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
