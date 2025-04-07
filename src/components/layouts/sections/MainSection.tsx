import { Box, Container, Flex, Hide, Show, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

import { ButtonMore } from './blocks/ButtonMore';
import { GeneralRecipes } from './blocks/GeneralRecipes';
import { NewRecipes } from './blocks/NewRecipes';
import { TitleSection } from './blocks/TitleSection';
import { SearchSection } from './SearchSection';

export const MainSection: React.FC = () => {
    const weight = useBreakpointValue({
        base: '100%',
        sm: '100%',
        md: 'calc(100vw - 560px)',
        xl: '1360px',
    });
    return (
        <Container
            as='section'
            maxW={weight}
            minH='calc(100vh - 80px)'
            bg='white'
            mt='80px'
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
                        <ButtonMore />
                    </Hide>
                </Flex>
                <GeneralRecipes />
                <Show below='md'>
                    <Box w='100%' display='flex' justifyContent='center' mt='12px'>
                        <ButtonMore />
                    </Box>
                </Show>
            </Box>
        </Container>
    );
};
