import { Card, Flex, Hide, Image, Show, Stack } from '@chakra-ui/react';
import React from 'react';

import { Rate, RateElementType } from '~/components/commonComponents/rate';

import { PodCategoryType } from '../../aside/category';
import { Category } from './Category';
import { CustomCardBodyFlex } from './CustomCardBodyFlex';

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
        lg: '16px 24px 20px',
    };
    return (
        <Card
            position='relative'
            direction='column'
            variant='outline'
            w={cardWeight}
            minW={cardWeight}
        >
            <Image
                objectFit='cover'
                borderRadius='8px 8px 0 0 '
                maxW='100%'
                h={{ sm: '128pxm', md: '230px' }}
                src={src}
                alt='The Dish'
            />
            <Stack p={stackPadding} gap='0' w='100%' justifyContent='space-between'>
                <CustomCardBodyFlex title={title} text={text} />
                <Flex justifyContent='space-between' alignItems='center'>
                    <Hide below='md'>
                        <Category bgColor='brand.150' category={category} />
                    </Hide>
                    <Rate rate={rate} />
                </Flex>
            </Stack>
            <Show below='md'>
                <Flex justifyContent='space-between' position='absolute' w='100%' p='8px'>
                    <Category bgColor='brand.150' category={category} />
                </Flex>
            </Show>
        </Card>
    );
};
