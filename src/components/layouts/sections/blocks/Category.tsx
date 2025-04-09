import { Box, Text } from '@chakra-ui/react';
import React from 'react';

import { icons } from '../../aside/icons';

type CategoryType = {
    bgColor?: string;
    text: string;
};

export const Category: React.FC<CategoryType> = ({ bgColor, text }: CategoryType) => (
    <>
        <Box bg={bgColor || 'brand.50'} display='flex' alignItems='center' p='2px 8px'>
            <img src={icons.mainMeal} />
            <Text fontSize='14px'>{text}</Text>
        </Box>
    </>
);
