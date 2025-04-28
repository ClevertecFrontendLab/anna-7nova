import { Box, FormControl, FormLabel } from '@chakra-ui/react';
import React from 'react';

import { flexSearchContainerDesktop, formControl } from '~/components/styles/Section.style';

import { SwitchAllergens } from './SwitchAllergens';

export type AllergensType = {
    filterCheckboxHandle: (data: string) => void;
    filter: string[];
    addItemsAllergens: (item: string) => void;
};

export const Allergens: React.FC<AllergensType> = ({
    filterCheckboxHandle,
    filter,
    addItemsAllergens,
}: AllergensType) => (
    <Box sx={flexSearchContainerDesktop}>
        <FormControl sx={formControl}>
            <FormLabel m='0' flexGrow={1} whiteSpace='nowrap'>
                Исключить мои аллергены
            </FormLabel>
            <SwitchAllergens
                filterCheckboxHandle={filterCheckboxHandle}
                filter={filter}
                addItemsAllergens={addItemsAllergens}
            />
        </FormControl>
    </Box>
);
