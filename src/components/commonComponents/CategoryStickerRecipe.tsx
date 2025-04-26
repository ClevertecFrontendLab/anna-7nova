import { Flex } from '@chakra-ui/react';
import React from 'react';

import { CategoryMockType } from '../layouts/sections/blocks/NewRecipesCard';
import { category } from './CategoryData';
import { CategorySticker } from './CategorySticker';

type CategoryStickerRecipeType = {
    currentCategory: Array<CategoryMockType>;
    bgColor?: string;
};

export const CategoryStickerRecipe: React.FC<CategoryStickerRecipeType> = ({
    currentCategory,
    bgColor,
}: CategoryStickerRecipeType) => (
    <Flex flexWrap='wrap' gap='5px'>
        {currentCategory.map((catKey) => {
            const currentCat = category[catKey];
            return (
                <CategorySticker
                    key={catKey}
                    bgColor={bgColor}
                    category={currentCat}
                    width='16px'
                    height='16px'
                />
            );
        })}
    </Flex>
);
