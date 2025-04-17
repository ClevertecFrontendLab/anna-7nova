import { Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';

import { category } from '~/components/commonComponents/CategoryData';
import { TitleSection } from '~/components/commonComponents/TitleSection';
import { gridContainerMix, gridItemMix, gridItemText } from '~/components/styles/Section.style';

import { CardDesignBasic } from '../../../commonComponents/CardDesignBasic';
import { CardDesignSmall } from '../../../commonComponents/CardDesignSmall';

export const SectionMixDesert: React.FC = () => (
    <Grid sx={gridContainerMix}>
        <GridItem colSpan={{ base: 1, sm: 3, md: 1, xl: 2 }} sx={gridItemText}>
            <TitleSection title='Десерты, выпечка' />
        </GridItem>
        <GridItem colSpan={{ base: 1, sm: 3, md: 1, lg: 2, xl: 2 }} alignContent='center'>
            <Text variant='textSubTitle'>
                Без них невозможно представить себе ни современную, ни традиционную кулинарию.
                Пироги и печенья, блины, пончики, вареники и, конечно, хлеб - рецепты изделий из
                теста многообразны и невероятно популярны.
            </Text>
        </GridItem>
        <GridItem colSpan={1}>
            <CardDesignBasic
                rate={{ save: 1, like: 1 }}
                category={category.child}
                title='Бананово-молочное желе'
                text='Молочное желе – это просто, вкусно и полезно, ведь для его приготовления в качестве основы используется молоко.'
            />
        </GridItem>
        <GridItem colSpan={1}>
            <CardDesignBasic
                rate={{ save: 2, like: 1 }}
                category={category.child}
                title='Нежный сливочно-сырный крем для кексов'
                text='Сливочно-сырным кремом можно украсить кексы, либо другую выпечку, а также этим кремом можно наполнить заварные пирожные.'
            />
        </GridItem>
        <GridItem colSpan={{ base: 1, xl: 2 }} sx={gridItemMix}>
            <CardDesignSmall category={category.child} text='Домашние сырные палочки' />
            <CardDesignSmall category={category.traditional} text='Панкейки' />
            <CardDesignSmall
                category={category.vegan}
                text='Воздушное банановое печенье на сковороде'
            />
        </GridItem>
    </Grid>
);
