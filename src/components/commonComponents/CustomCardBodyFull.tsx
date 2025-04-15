import { Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

import { CardBodyType } from '../layouts/sections/blocks/NewRecipesCard';

export const CustomCardBodyFull: React.FC<CardBodyType> = ({ title, text }: CardBodyType) => {
    const rows = useBreakpointValue({
        base: 1,
        sm: 1,
        md: 2,
        lg: 1,
    });
    return (
        <Box>
            {title && (
                <Heading as='h5' size='h5' noOfLines={rows} mb='8px'>
                    {title}
                </Heading>
            )}
            <Box>
                <Text noOfLines={3}>{text}</Text>
            </Box>
        </Box>
    );
};
