import { Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

import { CardBodyType } from '../layouts/sections/blocks/NewRecipesCard';

export const CustomCardBodyFlex: React.FC<CardBodyType> = ({ title, text }: CardBodyType) => {
    const rows = useBreakpointValue({
        base: 2,
        sm: 2,
        md: 2,
        lg: 1,
    });
    return (
        <Box>
            <Heading as='h6' size='h6' noOfLines={rows} mb='8px'>
                {title}
            </Heading>
            <Box display={['none', 'none', 'block', 'block', 'block']}>
                <Text noOfLines={3}>{text}</Text>
            </Box>
        </Box>
    );
};
