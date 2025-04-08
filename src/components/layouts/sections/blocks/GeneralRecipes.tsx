import { Grid } from '@chakra-ui/react';
import React from 'react';

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
                title='Кнели со спагетти'
                text='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
                src={blockNewReciepes.kneli}
            />
            <GeneralRecipeCard
                title='Пряная ветчина по итальянски'
                text='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
                src={blockNewReciepes.vetchina}
            />
            <GeneralRecipeCard
                title='Лапша с курицей и шафраном'
                text='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
                src={blockNewReciepes.lapsha}
            />
            <GeneralRecipeCard
                title='Том-ям с капустой кимчи'
                text='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
                src={blockNewReciepes.tomyam}
            />
        </Grid>
    );
};
