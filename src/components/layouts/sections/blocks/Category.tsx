import { Box, Text } from '@chakra-ui/react';
import React from 'react';

import { icons } from '../../aside/icons';

type CategoryType = {
    bgColor?: string;
};

export const Category: React.FC<CategoryType> = ({ bgColor }: CategoryType) => (
    <>
        <Box bg={bgColor || 'brand.50'} display='flex' alignItems='center' p='2px 8px'>
            <img src={icons.mainMeal} />
            <Text fontSize='14px'>Первые блюда</Text>
        </Box>
    </>
);
