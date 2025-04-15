import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import { ButtonLoadMore } from '~/components/commonComponents/ButtonLoadMore';
import { dataTheJuiciest } from '~/components/commonComponents/DataRecipes';
import { TitleSectionMain } from '~/components/commonComponents/TitleSectionMain';
import { GeneralRecipes } from '~/components/layouts/sections/blocks/GeneralRecipes';
import { SectionMix } from '~/components/layouts/sections/blocks/SectionMix';
import { SearchSection } from '~/components/layouts/sections/SearchSection';

export const TheJuiciest: React.FC = () => (
    <>
        <Box
            display='flex'
            flexDir='column'
            alignItems='center'
            m={{ base: '0 ', sm: '16px 0 0', lg: '0 105px ', xl: '0 290px' }}
        >
            <TitleSectionMain propsTitle='Самое сочное' />
            <SearchSection />
        </Box>
        <Box w='100%'>
            <GeneralRecipes data={dataTheJuiciest} />
            <Flex justifyContent='center' pt='16px'>
                <ButtonLoadMore />
            </Flex>
        </Box>
        <Box w='100%'>
            <hr />
            <SectionMix />
        </Box>
    </>
);
