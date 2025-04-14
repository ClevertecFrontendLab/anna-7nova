import { Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';

import { TitleSection } from '~/components/commonComponents/TitleSection';

import { CardDesignBasic } from '../../../commonComponents/CardDesignBasic';
import { CardDesignSmall } from '../../../commonComponents/CardDesignSmall';
import { category } from '../../../commonComponents/category';

export const SectionMixDesert: React.FC = () => {
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
                <TitleSection title='Десерты, выпечка' />
            </GridItem>
            <GridItem colSpan={{ base: 3, lg: 2, xl: 2 }} mt={{ lg: '24px' }}>
                <Text variant='textSubTitle' pb='16px'>
                    Без них невозможно представить себе ни современную, ни традиционную кулинарию.
                    Пироги и печенья, блины, пончики, вареники и, конечно, хлеб - рецепты изделий из
                    теста многообразны и невероятно популярны.
                </Text>
            </GridItem>
            <CardDesignBasic
                rate={{ save: 1, like: 1 }}
                category={category.child}
                title='Бананово-молочное желе'
                text='Молочное желе – это просто, вкусно и полезно, ведь для его приготовления в качестве основы используется молоко.
'
            />
            <CardDesignBasic
                rate={{ save: 2, like: 1 }}
                category={category.child}
                title='Нежный сливочно-сырный крем для кексов'
                text='Сливочно-сырным кремом можно украсить кексы, либо другую выпечку, а также этим кремом можно наполнить заварные пирожные.'
            />
            <GridItem
                colSpan={{ base: 3, sm: 1, md: 2, lg: 1, xl: 2 }}
                gap={{ base: '12px', sm: '4px', lg: '12px' }}
                display='flex'
                flexDir='column'
                h='100%'
            >
                <CardDesignSmall category={category.child} text='Домашние сырные палочки' />
                <CardDesignSmall category={category.traditional} text='Панкейки' />
                <CardDesignSmall
                    category={category.vegan}
                    text='Воздушное банановое печенье на сковороде'
                />
            </GridItem>
        </Grid>
    );
};
