import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import { ButtonMore } from '~/components/commonComponents/ButtonMore';
import { dataTheJuiciest } from '~/components/commonComponents/DataRecipes';
import { TitleSectionMain } from '~/components/commonComponents/TitleSectionMain';
import { GeneralRecipes } from '~/components/layouts/sections/blocks/GeneralRecipes';
import { SectionMix } from '~/components/layouts/sections/blocks/SectionMix';
import { SearchSection } from '~/components/layouts/sections/SearchSection';

export const TheJuiciest: React.FC = () => (
    <>
        <Box display='flex' flexDir='column' alignItems='center'>
            <TitleSectionMain propsTitle='Самое сочное' />
            <SearchSection />
        </Box>
        <Box w='100%'>
            <GeneralRecipes data={dataTheJuiciest} />
            <Flex justifyContent='center' pt='16px'>
                <ButtonMore text='Загрузить еще' onClick={() => {}} />
            </Flex>
        </Box>
        <Box w='100%'>
            <SectionMix />
        </Box>
    </>
);
