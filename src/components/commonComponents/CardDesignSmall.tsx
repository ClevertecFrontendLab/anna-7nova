import { Button, Card, Flex } from '@chakra-ui/react';
import React from 'react';

import { flexRowBetweenStart, gridItemCardSmall } from '../styles/Section.style';
import { PodCategoryType } from './CategoryData';
import { CategorySticker } from './CategorySticker';

type CardDesignSmallPropsType = {
    text: string;
    bgColor?: string;
    category: PodCategoryType;
};

export const CardDesignSmall: React.FC<CardDesignSmallPropsType> = ({
    text,
    category,
}: CardDesignSmallPropsType) => (
    <Card sx={gridItemCardSmall}>
        <Flex sx={flexRowBetweenStart}>
            <CategorySticker category={category} bgColor='none' text={text} />
            <Button variant='buttonTextSmallest'>Готовить</Button>
        </Flex>
    </Card>
);
