import { Card, Flex, GridItem } from '@chakra-ui/react';
import React from 'react';

import { Rate, RateElementType } from '~/components/commonComponents/rate';

import { PodCategoryType } from '../../aside/category';
import { Category } from './Category';
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
    <GridItem>
        <Card
            variant='outline'
            w='100%'
            minW='200px'
            p={{ base: '12px', md: '16px', lg: '24px' }}
            h='100%'
            justifyContent='space-between'
        >
            <CustomCardBodyFull title={title} text={text} />
            <Flex justifyContent='space-between' alignItems='center' wrap='wrap'>
                <Category category={category} />
                <Rate rate={rate} />
            </Flex>
        </Card>
    </GridItem>
);
