import { Button, Card, Flex } from '@chakra-ui/react';
import React from 'react';

import { PodCategoryType } from '../../aside/category';
import { Category } from './Category';

type CardDesignSmallPropsType = {
    text: string;
    bgColor?: string;
    category: PodCategoryType;
};

export const CardDesignSmall: React.FC<CardDesignSmallPropsType> = ({
    text,
    bgColor,
    category,
}: CardDesignSmallPropsType) => (
    <Card variant='outline' w='100%' p='14px 24px'>
        <Flex justifyContent='space-between'>
            <Category category={category} bgColor={bgColor || 'none'} text={text} />
            <Button
                variant='outline'
                _hover={{ bg: 'brand.800', border: 'none' }}
                color='brand.600'
                borderColor='brand.600'
            >
                Готовить
            </Button>
        </Flex>
    </Card>
);
