import { Box, Flex, Hide, Show } from '@chakra-ui/react';
import React from 'react';

import { ButtonMore } from '~/components/commonComponents/ButtonMore';
import { dataGeneralRecipes } from '~/components/commonComponents/dataGeneralRecipes';
import { TitleSection } from '~/components/commonComponents/TitleSection';
import { TitleSectionMain } from '~/components/commonComponents/TitleSectionMain';
import { GeneralRecipes } from '~/components/layouts/sections/blocks/GeneralRecipes';
import { SearchSection } from '~/components/layouts/sections/SearchSection';

export const TheJuiciest: React.FC = () => (
    <>
        <TitleSectionMain propsTitle='Самое сочное' />
        <SearchSection />
        <Box w='100%'>
            <Flex justifyContent='space-between' alignItems='center'>
                <TitleSection title='Самое сочное ' />
                <Hide below='md'>
                    <ButtonMore text='Вся подборка' onClick={() => {}} />
                </Hide>
            </Flex>
            <GeneralRecipes data={dataGeneralRecipes} />
            <Show below='md'>
                <Box w='100%' display='flex' justifyContent='center' mt='12px'>
                    <ButtonMore text='Вся подборка' onClick={() => {}} />
                </Box>
            </Show>
        </Box>
    </>
);
