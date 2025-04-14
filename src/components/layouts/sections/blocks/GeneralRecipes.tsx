import { Grid } from '@chakra-ui/react';
import React from 'react';

import { dataGeneralRecipesType } from '~/components/commonComponents/DataRecipes';

import { GeneralRecipeCard } from './GeneralRecipeCard';

type GeneralRecipesPropsType = { data: Array<dataGeneralRecipesType> };

export const GeneralRecipes: React.FC<GeneralRecipesPropsType> = ({
    data,
}: GeneralRecipesPropsType) => {
    const templateColumns = {
        base: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(1, 1fr)',
        lg: 'repeat(1, 1fr)',
        xl: 'repeat(2, 1fr)',
    };
    return (
        <Grid
            w='100%'
            templateColumns={templateColumns}
            gap={{ base: '12px', sm: '16px', xl: '24px' }}
        >
            {data.map((el) => (
                <GeneralRecipeCard
                    key={el.title}
                    rate={el.rate}
                    title={el.title}
                    text={el.text}
                    src={el.src}
                    category={el.sticker}
                />
            ))}
        </Grid>
    );
};
