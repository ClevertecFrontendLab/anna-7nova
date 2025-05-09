import { Box, Text } from '@chakra-ui/react';
import React from 'react';

import { PodCategoryType } from './CategoryData';

type CategoryPropsType = {
    bgColor?: string;
    category: PodCategoryType;
    text?: string;
};

export const CategorySticker: React.FC<CategoryPropsType> = ({
    bgColor,
    category,
    text,
}: CategoryPropsType) => {
    const currentText = text ? (
        <Text variant='bigText' flexShrink={1} noOfLines={1} pl='12px'>
            {text}
        </Text>
    ) : (
        <Text
            h='24px'
            pl={{ base: '2px', lg: '8px' }}
            whiteSpace='nowrap'
            flexShrink={1}
            overflow='hidden'
            textOverflow='ellipsis'
            letterSpacing={-0.2}
        >
            {category.category}
        </Text>
    );
    return (
        <>
            <Box
                bg={bgColor || 'brand.50'}
                display='flex'
                alignItems='center'
                borderRadius='4px'
                whiteSpace='hidden'
                p={{ base: '2px 4px', lg: '2px 8px' }}
            >
                <img width='16px' height='16px' src={category.src} />
                {currentText}
            </Box>
        </>
    );
};
