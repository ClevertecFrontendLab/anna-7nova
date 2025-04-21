import { Box, Text } from '@chakra-ui/react';
import React from 'react';

import { boxCategorySticker } from '../styles/Section.style';
import { PodCategoryType } from './CategoryData';

type CategoryPropsType = {
    category: PodCategoryType;
    bgColor?: string;
    text?: string;
    width?: string;
    height?: string;
};

export const CategorySticker: React.FC<CategoryPropsType> = ({
    category,
    bgColor,
    text,
    width,
    height,
}: CategoryPropsType) => {
    const currentText = text ? (
        <Text variant='bigText'>{text}</Text>
    ) : (
        <Text variant='categorySticker'>{category.category}</Text>
    );
    return (
        <>
            <Box sx={boxCategorySticker} bg={bgColor || 'brand.50'}>
                <img width={width || '24px'} height={height || '24px'} src={category.src} />
                {currentText}
            </Box>
        </>
    );
};
