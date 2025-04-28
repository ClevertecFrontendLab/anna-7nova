import { Box, Switch } from '@chakra-ui/react';
import React, { ChangeEvent, useState } from 'react';

import { allergensData } from '~/components/commonComponents/CategoryData';
import { CustomInput } from '~/components/commonComponents/customInput/CustomInput';

export type SwitchAllergensType = {
    filterCheckboxHandle: (data: string) => void;
    filter: string[];
    addItemsAllergens: (item: string) => void;
};

export const SwitchAllergens: React.FC<SwitchAllergensType> = ({
    filterCheckboxHandle,
    filter,
    addItemsAllergens,
}: SwitchAllergensType) => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const switchChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setIsSwitchOn(e.target.checked);
    };
    return (
        <>
            <Switch isChecked={isSwitchOn} onChange={switchChangeHandle} m='0 12px' />
            <Box maxW='100%' w='234px' flexGrow={1}>
                <CustomInput
                    isDisabled={!isSwitchOn}
                    placeholder='Выберите из списка...'
                    filterCheckboxHandle={filterCheckboxHandle}
                    filter={filter}
                    addItem={true}
                    addItemsAllergens={addItemsAllergens}
                    data={allergensData}
                />
            </Box>
        </>
    );
};
