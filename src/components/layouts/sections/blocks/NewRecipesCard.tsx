import { Box, Card, Flex, Image, Stack } from '@chakra-ui/react';
import React from 'react';

import { PodCategoryType } from '~/components/commonComponents/CategoryData';
import { CategorySticker } from '~/components/commonComponents/CategorySticker';
import { Rate, RateElementType } from '~/components/commonComponents/Rate';
import {
    boxDesktopVisible,
    boxMobileVisibleAbsolute,
    flexRowBetweenStart,
    newRecipesCard,
    newRecipesCardImage,
    newRecipesCardStack,
} from '~/components/styles/Section.style';

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
}: NewRecipesCardPropsType) => (
    <Card sx={newRecipesCard}>
        <Image src={src} sx={newRecipesCardImage} />
        <Stack sx={newRecipesCardStack}>
            <CustomCardBodyFlex title={title} text={text} />
            <Flex sx={flexRowBetweenStart}>
                <Box sx={boxDesktopVisible}>
                    <CategorySticker
                        bgColor='brand.150'
                        category={category}
                        width='16px'
                        height='16px'
                    />
                </Box>
                <Rate rate={rate} />
            </Flex>
        </Stack>
        <Box sx={boxMobileVisibleAbsolute}>
            <CategorySticker bgColor='brand.150' category={category} width='16px' height='16px' />
        </Box>
    </Card>
);
