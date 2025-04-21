import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import React from 'react';

import { blockNewReciepes } from '~/components/commonComponents/BlocksImages';
import { category } from '~/components/commonComponents/CategoryData';
import {
    buttonSlider,
    buttonSliderIcon,
    flexRowBetweenStart,
    newRecipesContainer,
} from '~/components/styles/Section.style';

import { NewRecipesCard } from './NewRecipesCard';

export const NewRecipes: React.FC = () => (
    <Box position='relative'>
        <Box sx={newRecipesContainer}>
            <NewRecipesCard
                category={category.mainMeal}
                rate={{ save: 1 }}
                src={blockNewReciepes.solianka}
                title='Солянка с грибами'
                text='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
            />
            <NewRecipesCard
                rate={{ save: 2, like: 1 }}
                category={category.vegan}
                src={blockNewReciepes.kapustnueKotlety}
                title='Капустные котлеты'
                text='Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.'
            />
            <NewRecipesCard
                rate={{ like: 1 }}
                category={category.dessert}
                src={blockNewReciepes.oladie}
                title='Оладьи на кефире "Пышные"'
                text='Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.'
            />
            <NewRecipesCard
                rate={{ like: 0 }}
                category={category.salad}
                src={blockNewReciepes.saladZdorozie}
                title='Салат "Здоровье"'
                text='Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.'
            />
            <NewRecipesCard
                rate={{ save: 1 }}
                category={category.mainMeal}
                src={blockNewReciepes.solianka}
                title='Солянка с грибами'
                text='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
            />
            <NewRecipesCard
                rate={{ save: 2, like: 1 }}
                category={category.vegan}
                src={blockNewReciepes.kapustnueKotlety}
                title='Капустные котлеты'
                text='Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.'
            />
        </Box>
        <Box sx={buttonSlider}>
            <Flex sx={flexRowBetweenStart}>
                <IconButton
                    aria-label='Arrow Left'
                    icon={<ArrowBackIcon />}
                    sx={buttonSliderIcon}
                />
                <IconButton
                    aria-label='Arrow Right'
                    icon={<ArrowForwardIcon />}
                    sx={buttonSliderIcon}
                />
            </Flex>
        </Box>
    </Box>
);
