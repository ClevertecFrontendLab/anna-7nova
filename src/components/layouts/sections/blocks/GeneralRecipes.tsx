import { Grid } from '@chakra-ui/react';
import React from 'react';

import { dataGeneralRecipesType } from '~/components/commonComponents/DataRecipes';
import { gridContainer } from '~/components/styles/Section.style';

import { GeneralRecipeCard } from './GeneralRecipeCard';

type GeneralRecipesPropsType = { data: Array<dataGeneralRecipesType> };

export const GeneralRecipes: React.FC<GeneralRecipesPropsType> = ({
    data,
}: GeneralRecipesPropsType) => (
    <Grid sx={gridContainer}>
        {data.map((el, i) => (
            <GeneralRecipeCard
                key={i}
                rate={el.rate}
                title={el.title}
                text={el.text}
                src={el.src}
                category={el.sticker}
            />
        ))}
    </Grid>
);
