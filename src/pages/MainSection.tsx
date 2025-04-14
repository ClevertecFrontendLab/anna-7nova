import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router';

import { dataGeneralRecipes } from '~/components/commonComponents/dataGeneralRecipes';
import { TitleSectionMain } from '~/components/commonComponents/TitleSectionMain';

import { BlogCooking } from '../components/commonComponents/BlogCooking';
import { ButtonMore } from '../components/commonComponents/ButtonMore';
import { TitleSection } from '../components/commonComponents/TitleSection';
import { GeneralRecipes } from '../components/layouts/sections/blocks/GeneralRecipes';
import { NewRecipes } from '../components/layouts/sections/blocks/NewRecipes';
import { SectionMix } from '../components/layouts/sections/blocks/SectionMix';
import { SearchSection } from '../components/layouts/sections/SearchSection';

export const MainSection: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <Box display='flex' flexDir='column' alignItems='center'>
                <TitleSectionMain />
                <SearchSection />
            </Box>
            <Box w='100%'>
                <TitleSection title='Новые рецепты ' />
                <NewRecipes />
            </Box>
            <Box w='100%'>
                <Flex justifyContent='space-between' alignItems='start'>
                    <TitleSection title='Самое сочное ' />
                    <Box
                        display={['none', 'none', 'block', 'block', 'block']}
                        data-test-id='juiciest-link'
                    >
                        <ButtonMore text='Вся подборка' onClick={() => navigate('/the-juiciest')} />
                    </Box>
                </Flex>
                <GeneralRecipes data={dataGeneralRecipes} />
                <Box
                    display={['flex', 'flex', 'none', 'none', 'none']}
                    data-test-id='juiciest-link-mobile'
                    w='100%'
                    justifyContent='center'
                    mt='12px'
                >
                    <ButtonMore text='Вся подборка' onClick={() => navigate('/the-juiciest')} />
                </Box>
            </Box>
            <Box w='100%' bg='brand.300' borderRadius='16px' p={{ base: '12px', lg: '24px' }}>
                <Flex justifyContent='space-between' alignItems='start'>
                    <TitleSection size='h4' title='Кулинарные блоги' />
                    <Box display={['none', 'none', 'none', 'block', 'block']}>
                        <ButtonMore text='Все авторы' bg='brand.300' onClick={() => {}} />
                    </Box>
                </Flex>
                <BlogCooking />
                <Box display={['block', 'block', 'block', 'none', 'none']}>
                    <Box w='100%' display='flex' justifyContent='center' mt='12px'>
                        <ButtonMore text='Все авторы' bg='brand.300' onClick={() => {}} />
                    </Box>
                </Box>
            </Box>
            <Box w='100%'>
                <SectionMix />
            </Box>
        </>
    );
};
