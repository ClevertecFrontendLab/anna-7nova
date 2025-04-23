import { Flex } from '@chakra-ui/react';
import React from 'react';

import { CategoryMockType } from '../layouts/sections/blocks/NewRecipesCard';
import { category } from './CategoryData';
import { CategorySticker } from './CategorySticker';

type CategoryStickerRecipeType = {
    currentCategory: Array<CategoryMockType>;
};

export const CategoryStickerRecipe: React.FC<CategoryStickerRecipeType> = ({
    currentCategory,
}: CategoryStickerRecipeType) => (
    <Flex flexDir='column' gap='5px'>
        {currentCategory.map((catKey) => {
            const currentCat = category[catKey];
            return (
                <CategorySticker
                    key={catKey}
                    bgColor='brand.150'
                    category={currentCat}
                    width='16px'
                    height='16px'
                />
            );
        })}
    </Flex>
);
