import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { useLocation } from 'react-router';

import { MockDataSliderType } from '~/components/commonComponents/CategoryData';
import { TitleSection } from '~/components/commonComponents/TitleSection';
import { NewRecipes } from '~/components/layouts/sections/blocks/NewRecipes';
import { CaloricContent } from '~/components/layouts/sections/recipe/CaloricContent';
import { GeneralRecipeCardFull } from '~/components/layouts/sections/recipe/GeneralRecipeCardFull';
import { Ingredients } from '~/components/layouts/sections/recipe/Ingredients';
import { Preparation } from '~/components/layouts/sections/recipe/preparation';
import { Subscribe } from '~/components/layouts/sections/recipe/Subscribe';

import mock from '../mocks/mock.json';

export const RecipeFullCard: React.FC = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    console.log(pathnames);
    const mockData = mock as Array<MockDataSliderType>;
    const mockItem = mockData.filter((el) => el.id === pathnames[2]);
    const mockObject = mockItem[0];
    console.log(mockItem);
    return (
        <Flex w='100%' flexDir='column' gap='40px' pt={{ base: '16px', lg: '56px' }}>
            <GeneralRecipeCardFull el={mockObject} />
            <CaloricContent el={mockObject.nutritionValue} />
            <Ingredients el={mockObject} />
            <Preparation steps={mockObject.steps} />
            <Subscribe />
            <Box w='100%' h='100%' maxH='100%'>
                <TitleSection title='Новые рецепты ' />
                <NewRecipes data={mockData} />
            </Box>
        </Flex>
    );
};
