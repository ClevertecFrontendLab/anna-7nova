import { Box, Card, Flex, Image, Stack } from '@chakra-ui/react';
import React from 'react';

import { PodCategoryType } from '~/components/commonComponents/CategoryData';
import { CategorySticker } from '~/components/commonComponents/CategorySticker';
import { Rate, RateElementType } from '~/components/commonComponents/Rate';

import { CustomCardBodyFlex } from '../../../commonComponents/CustomCardBodyFlex';

export type CardBodyType = {
    title?: string;
    text: string;
};

export type NewRecipesCardPropsType = {
    src: string;
    category: PodCategoryType;
    rate: RateElementType;
} & CardBodyType;

export const NewRecipesCard: React.FC<NewRecipesCardPropsType> = ({
    src,
    title,
    text,
    category,
    rate,
}: NewRecipesCardPropsType) => {
    const cardWeight = { base: '158px', sm: '158px', md: '210px', lg: '277px', xl: '322px' };
    const stackPadding = {
        base: '8px',
        sm: '8px',
        md: '12px',
        lg: '12px',
        xl: '16px 24px 20px',
    };
    return (
        <Card
            position='relative'
            direction='column'
            justify='start'
            variant='outline'
            w={cardWeight}
            minW={cardWeight}
        >
            <Image
                objectFit='cover'
                borderRadius='8px 8px 0 0 '
                maxW='100%'
                h={{ base: '128px', md: '230px' }}
                src={src}
                alt='The Dish'
            />
            <Stack
                p={stackPadding}
                gap={{ base: '6px', lg: '24px' }}
                w='100%'
                justifyContent='space-between'
            >
                <CustomCardBodyFlex title={title} text={text} />
                <Flex justifyContent='space-between' alignItems='center'>
                    <Box display={['none', 'none', 'none', 'block', 'block']}>
                        <CategorySticker bgColor='brand.150' category={category} />
                    </Box>
                    <Rate rate={rate} />
                </Flex>
            </Stack>
            <Box
                display={['block', 'block', 'block', 'none', 'none']}
                position='absolute'
                p='8px 0px 0 8px'
            >
                <CategorySticker bgColor='brand.150' category={category} />
            </Box>
        </Card>
    );
};
