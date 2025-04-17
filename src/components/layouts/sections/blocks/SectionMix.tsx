import { Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';

import { category } from '~/components/commonComponents/CategoryData';
import { TitleSection } from '~/components/commonComponents/TitleSection';
import { gridContainerMix, gridItemMix, gridItemText } from '~/components/styles/Section.style';

import { CardDesignBasic } from '../../../commonComponents/CardDesignBasic';
import { CardDesignSmall } from '../../../commonComponents/CardDesignSmall';

export const SectionMix: React.FC = () => (
    <Grid sx={gridContainerMix}>
        <GridItem colSpan={{ base: 1, sm: 3, md: 1, xl: 2 }} sx={gridItemText}>
            <TitleSection title='Веганская кухня' />
        </GridItem>
        <GridItem colSpan={{ base: 1, sm: 3, md: 1, lg: 2, xl: 2 }} alignContent='center'>
            <Text variant='textSubTitle'>
                Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                вегетарианскую диету и готовить вкусные вегетарианские блюда.
            </Text>
        </GridItem>
        <GridItem colSpan={1}>
            <CardDesignBasic
                rate={{ save: 1, like: 1 }}
                category={category.secondMeal}
                title='Картошка, тушенная с болгарским перцем и фасолью в томатном соусе'
                text='Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.'
            />
        </GridItem>
        <GridItem colSpan={1}>
            <CardDesignBasic
                rate={{ save: 2, like: 1 }}
                category={category.secondMeal}
                title='Капустные котлеты'
                text='Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.'
            />
        </GridItem>
        <GridItem colSpan={{ base: 1, xl: 2 }} sx={gridItemMix}>
            <CardDesignSmall category={category.secondMeal} text='Стейк для вегетарианцев' />
            <CardDesignSmall category={category.secondMeal} text='Котлеты из гречки и фасоли' />
            <CardDesignSmall category={category.mainMeal} text='Сырный суп с лапшой и брокколи' />
        </GridItem>
    </Grid>
);
