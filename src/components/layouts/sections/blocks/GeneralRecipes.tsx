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
            columnGap={{ base: '0', sm: '16px', xl: '24px' }}
            rowGap={{ base: '16px', sm: '16px', lg: '16px' }}
        >
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
};
