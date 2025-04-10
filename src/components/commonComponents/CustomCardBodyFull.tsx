import { Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

import { CardBodyType } from '../layouts/sections/blocks/NewRecipesCard';

export const CustomCardBodyFull: React.FC<CardBodyType> = ({ title, text }: CardBodyType) => {
    const rows = useBreakpointValue({
        base: 2,
        sm: 2,
        md: 2,
        lg: 1,
    });
    console.log('Title:', title);
    console.log('Text:', text);
    console.log('Rows:', rows);
    return (
        <>
            {title && (
                <Heading noOfLines={rows} size='md' mb='8px'>
                    {title}
                </Heading>
            )}
            <Box>
                <Text noOfLines={3}>{text}</Text>
            </Box>
        </>
    );
};
