import { Button, Card, Flex } from '@chakra-ui/react';
import React from 'react';

import { PodCategoryType } from './CategoryData';
import { CategorySticker } from './CategorySticker';

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
    <Card variant='outline' w='100%' p={{ base: '8px', sm: '10px 12px', xl: '12px 24px' }}>
        <Flex justifyContent='space-between'>
            <CategorySticker category={category} bgColor={bgColor || 'none'} text={text} />
            <Button
                variant='buttonTextSmallest'
                display='inline-block'
                minW='70px'
                h='32px'
                padding={{ base: '6px 8px', xl: '6px 12px' }}
                _hover={{ bg: 'brand.800', border: 'none', color: 'white' }}
                color='brand.600'
                borderColor='brand.600'
                textOverflow='ellipsis'
            >
                Готовить
            </Button>
        </Flex>
    </Card>
);
