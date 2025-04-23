import { Box, Card, Flex, Image, Stack } from '@chakra-ui/react';
import React from 'react';

import { CategoryStickerRecipe } from '~/components/commonComponents/CategoryStickerRecipe';
import { Rate } from '~/components/commonComponents/Rate';
import {
    boxDesktopVisible,
    boxMobileVisibleAbsolute,
    flexRowBetweenEnd,
    newRecipesCard,
    newRecipesCardImage,
    newRecipesCardStack,
} from '~/components/styles/Section.style';

import { CustomCardBodyFlex } from '../../../commonComponents/CustomCardBodyFlex';

export type CategoryMockType =
    | 'vegan'
    | 'second-dish'
    | 'snacks'
    | 'national'
    | 'salads'
    | 'main-dish'
    | 'dessert'
    | 'grill'
    | 'children-dish'
    | 'therapeutic-nutrition'
    | 'souse'
    | 'drinks'
    | 'provision';
export type SubcategoryMockType =
    | 'snacks'
    | 'vegetables'
    | 'warm-snacks'
    | 'second-dish'
    | 'italian'
    | 'poultry-dish'
    | 'side-dishes'
    | 'warm-salads'
    | 'meat-soups'
    | 'main-dish'
    | 'dessert'
    | 'pies'
    | 'raw-food-dishes'
    | 'drinks';
type IngredientsType = {
    title: string;
    count: string;
    measureUnit: 'шт.' | 'г' | 'мл' | 'по вкусу' | 'листов' | 'зубчиков' | 'ч. л.';
};
type StepsType = {
    stepNumber: number;
    description: string;
    image: 'url';
};
export type MockDataSliderType = {
    id: string;
    title: string;
    description: string;
    category: Array<CategoryMockType>;
    subcategory: Array<SubcategoryMockType>;
    image: string;
    bookmarks: number;
    likes: number;
    date: string;
    time: string;
    portions: number;
    nutritionValue: {
        calories: number;
        proteins: number;
        fats: number;
        carbohydrates: number;
    };
    ingredients: Array<IngredientsType>;
    steps: Array<StepsType>;
    meat?: string;
    side?: string;
};
export type NewRecipesCardPropsType = {
    el: MockDataSliderType;
};

export const NewRecipesCard: React.FC<NewRecipesCardPropsType> = ({
    el,
}: NewRecipesCardPropsType) => (
    <Card sx={newRecipesCard}>
        <Image src={el.image} sx={newRecipesCardImage} />
        <Stack sx={newRecipesCardStack}>
            <CustomCardBodyFlex title={el.title} text={el.description} />
            <Flex sx={flexRowBetweenEnd}>
                <Box sx={boxDesktopVisible}>
                    <CategoryStickerRecipe currentCategory={el.category} />
                </Box>
                <Rate rate={{ likes: el.likes, bookmarks: el.bookmarks }} />
            </Flex>
        </Stack>
        <Box sx={boxMobileVisibleAbsolute}>
            <CategoryStickerRecipe currentCategory={el.category} />
        </Box>
    </Card>
);
