import { Box, Container, Flex, Hide, Show, Text, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

import { BlogCooking } from './blocks/BlogCooking';
import { ButtonMore } from './blocks/ButtonMore';
import { GeneralRecipes } from './blocks/GeneralRecipes';
import { NewRecipes } from './blocks/NewRecipes';
import { SectionMix } from './blocks/SectionMix';
import { TitleSection } from './blocks/TitleSection';
import { SearchSection } from './SearchSection';

export const MainSection: React.FC = () => {
    const weight = useBreakpointValue({
        base: '100%',
        sm: '100%',
        md: 'calc(100vw - 540px)',
        xl: '1360px',
    });
    return (
        <Container
            as='section'
            maxW={weight}
            minH='calc(100vh - 80px)'
            bg='white'
            mt='80px'
            gap='40px'
            centerContent
        >
            <SearchSection />
            <Box w='100%'>
                <TitleSection title='Новые рецепты ' />
                <NewRecipes />
            </Box>
            <Box w='100%'>
                <Flex justifyContent='space-between' alignItems='center'>
                    <TitleSection title='Самое сочное ' />
                    <Hide below='md'>
                        <ButtonMore text='Вся подборка' />
                    </Hide>
                </Flex>
                <GeneralRecipes />
                <Show below='md'>
                    <Box w='100%' display='flex' justifyContent='center' mt='12px'>
                        <ButtonMore text='Вся подборка' />
                    </Box>
                </Show>
            </Box>
            <Box w='100%' bg='brand.300' borderRadius='16px' p='24px'>
                <Flex justifyContent='space-between' alignItems='center'>
                    <TitleSection title='Кулинарные блоги' fontWeight={400} />
                    <Hide below='md'>
                        <ButtonMore text='Все авторы' bg='brand.300' />
                    </Hide>
                </Flex>
                <BlogCooking />
                <Show below='md'>
                    <Box w='100%' display='flex' justifyContent='center' mt='12px'>
                        <ButtonMore text='Все авторы' bg='brand.300' />
                    </Box>
                </Show>
            </Box>
            <Box w='100%'>
                <Flex
                    justifyContent='space-between'
                    alignItems={{ base: 'flex-start', lg: 'center' }}
                    flexDir={{ base: 'column', lg: 'row' }}
                >
                    <TitleSection title='Веганская кухня' />
                    <Text maxW='100%' minW='328px' maxWidth='668px'>
                        Интересны не только убеждённым вегетарианцам, но и тем, кто хочет
                        попробовать вегетарианскую диету и готовить вкусные вегетарианские блюда.
                    </Text>
                </Flex>
                <SectionMix />
            </Box>
        </Container>
    );
};
