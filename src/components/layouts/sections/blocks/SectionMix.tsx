import { Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';

import { TitleSection } from '~/components/commonComponents/TitleSection';

import { CardDesignBasic } from '../../../commonComponents/CardDesignBasic';
import { CardDesignSmall } from '../../../commonComponents/CardDesignSmall';
import { category } from '../../../commonComponents/category';

export const SectionMix: React.FC = () => {
    const templateColumns = {
        base: 'repeat(1, 1fr)',
        sm: 'repeat(3, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
        xl: 'repeat(4, 1fr)',
    };
    return (
        <Grid
            templateColumns={templateColumns}
            columnGap={{ base: '12px', md: '16px', lg: '24px' }}
            w='100%'
            h='100%'
        >
            <GridItem colSpan={{ base: 3, lg: 1, xl: 2 }} mt={{ lg: '24px' }}>
                <TitleSection title='Веганская кухня' />
            </GridItem>
            <GridItem colSpan={{ base: 3, lg: 2, xl: 2 }} mt={{ lg: '24px' }}>
                <Text pb='16px'>
                    Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                    вегетарианскую диету и готовить вкусные вегетарианские блюда.
                </Text>
            </GridItem>
            <CardDesignBasic
                rate={{ save: 1, like: 1 }}
                category={category.secondMeal}
                title='Картошка, тушенная с болгарским перцем и фасолью в томатном соусе'
                text='Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.'
            />
            <CardDesignBasic
                rate={{ save: 2, like: 1 }}
                category={category.secondMeal}
                title='Капустные котлеты'
                text='Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.'
            />
            <GridItem
                colSpan={{ base: 3, sm: 1, md: 2, lg: 1, xl: 2 }}
                gap={{ base: '12px', sm: '4px', lg: '12px' }}
                display='flex'
                flexDir='column'
                h='100%'
            >
                <CardDesignSmall category={category.secondMeal} text='Стейк для вегетарианцев' />
                <CardDesignSmall category={category.secondMeal} text='Котлеты из гречки и фасоли' />
                <CardDesignSmall
                    category={category.mainMeal}
                    text='Сырный суп с лапшой и брокколи'
                />
            </GridItem>
        </Grid>
    );
};
