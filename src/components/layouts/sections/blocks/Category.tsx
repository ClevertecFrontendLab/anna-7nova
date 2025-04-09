import { Box, Text } from '@chakra-ui/react';
import React from 'react';

import { PodCategoryType } from '../../aside/category';

type CategoryPropsType = {
    bgColor?: string;
    category: PodCategoryType;
    text?: string;
};

export const Category: React.FC<CategoryPropsType> = ({
    bgColor,
    category,
    text,
}: CategoryPropsType) => {
    const currentText = text ? (
        <Text noOfLines={1} fontSize='14px' pl='8px'>
            {text}
        </Text>
    ) : (
        <Text fontSize='14px' pl='8px'>
            {category.category}
        </Text>
    );
    return (
        <>
            <Box
                bg={bgColor || 'brand.50'}
                display='flex'
                alignItems='center'
                p='2px 8px'
                minW='150px'
            >
                <img src={category.src} />
                {currentText}
            </Box>
        </>
    );
};
