import { SearchIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React from 'react';

import { IconSvg } from '~/assets/images/icons/IconSvg';
import {
    flexSearchContainer,
    iconButtonGhost,
    iconButtonOutline,
    inputElement,
    inputGroup,
} from '~/components/styles/Section.style';

import { Allergens } from './inputs/Allergens';

type SearchSectionPropsType = {
    onFilterBtnClick: () => void;
    filterCheckboxHandle: (data: string) => void;
    filter: string[];
    addItemsAllergens: (item: string) => void;
};

export const SearchSection: React.FC<SearchSectionPropsType> = ({
    onFilterBtnClick,
    filterCheckboxHandle,
    filter,
    addItemsAllergens,
}: SearchSectionPropsType) => (
    <>
        <Flex sx={flexSearchContainer}>
            <IconButton
                onClick={onFilterBtnClick}
                aria-label='Filters button'
                sx={iconButtonOutline}
                icon={<IconSvg iconId='filter' width='24px' height='24px' viewBox='0 0 24 24' />}
            />
            <InputGroup sx={inputGroup}>
                <Input sx={inputElement} placeholder='Название или ингредиент...' />
                <InputRightElement h='100%'>
                    <IconButton
                        aria-label='Search database'
                        icon={<SearchIcon />}
                        sx={iconButtonGhost}
                    />
                </InputRightElement>
            </InputGroup>
        </Flex>
        <Allergens
            filterCheckboxHandle={filterCheckboxHandle}
            filter={filter}
            addItemsAllergens={addItemsAllergens}
        />
    </>
);
