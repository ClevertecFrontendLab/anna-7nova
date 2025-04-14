import { Card, Flex, GridItem } from '@chakra-ui/react';
import React from 'react';

import { Rate, RateElementType } from '~/components/commonComponents/Rate';

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
    <GridItem colSpan={{ base: 3, sm: 1, md: 1, lg: 1, xl: 1 }}>
        <Card
            variant='outline'
            w='100%'
            gap='24px'
            p={{ base: '12px', md: '16px', xl: '24px' }}
            h='100%'
            justifyContent='space-between'
        >
            <CustomCardBodyFull title={title} text={text} />
            <Flex justifyContent='space-between' alignItems='center' wrap='wrap'>
                <CategorySticker category={category} />
                <Rate rate={rate} />
            </Flex>
        </Card>
    </GridItem>
);
