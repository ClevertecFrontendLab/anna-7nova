import { Card, Flex } from '@chakra-ui/react';
import React from 'react';

import { Rate, RateElementType } from '~/components/commonComponents/Rate';

import { gridItemCardBasic, sticker } from '../styles/Section.style';
import { PodCategoryType } from './CategoryData';
import { CategorySticker } from './CategorySticker';
import { CustomCardBodyFull } from './CustomCardBodyFull';

type CardDesignBasicPropsType = {
    title: string;
    text: string;
    category: PodCategoryType;
    rate: RateElementType;
};

export const CardDesignBasic: React.FC<CardDesignBasicPropsType> = ({
    title,
    text,
    category,
    rate,
}: CardDesignBasicPropsType) => (
    <Card sx={gridItemCardBasic}>
        <CustomCardBodyFull title={title} text={text} />
        <Flex sx={sticker}>
            <CategorySticker category={category} width='16px' height='16px' />
            <Rate rate={rate} width='12px' height='12px' />
        </Flex>
    </Card>
);
