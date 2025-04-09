import { Grid } from '@chakra-ui/react';
import React from 'react';

import { category } from '../../aside/category';
import { blockNewReciepes } from './BlocksImages';
import { GeneralRecipeCard } from './GeneralRecipeCard';

export const GeneralRecipes: React.FC = () => {
    const templateColumns = {
        base: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(1, 1fr)',
        lg: 'repeat(2, 1fr)',
    };
    return (
        <Grid templateColumns={templateColumns} gap='24px'>
            <GeneralRecipeCard
                rate={{ save: 85, like: 152 }}
                title='Кнели со спагетти'
                text='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
                src={blockNewReciepes.kneli}
                category={category.secondMeal}
            />
            <GeneralRecipeCard
                rate={{ save: 159, like: 257 }}
                title='Пряная ветчина по итальянски'
                text='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
                src={blockNewReciepes.vetchina}
                category={category.secondMeal}
            />
            <GeneralRecipeCard
                rate={{ save: 258, like: 342 }}
                title='Лапша с курицей и шафраном'
                text='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
                src={blockNewReciepes.lapsha}
                category={category.secondMeal}
            />
            <GeneralRecipeCard
                rate={{ save: 124, like: 324 }}
                title='Том-ям с капустой кимчи'
                text='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
                src={blockNewReciepes.tomyam}
                category={category.traditional}
            />
        </Grid>
    );
};
