import { Box, Heading, Show, Text, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

import { CardBodyType } from './NewRecipesCard';

export const CustomCardBody: React.FC<CardBodyType> = ({ title, text }: CardBodyType) => {
    const rows = useBreakpointValue({
        base: 2,
        sm: 2,
        md: 2,
        lg: 1,
    });
    return (
        <>
            <Heading noOfLines={rows} size='md' mb='8px'>
                {title}
            </Heading>
            <Show above='md'>
                <Box>
                    <Text noOfLines={3} mb='24px'>
                        {text}
                    </Text>
                </Box>
            </Show>
        </>
    );
};
