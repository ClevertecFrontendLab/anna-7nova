import { Container, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

import { NewRecipes } from './blocks/NewRecipes';
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
            <NewRecipes />
        </Container>
    );
};
