import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    IconButton,
    Text,
} from '@chakra-ui/react';
import React from 'react';

import { IconSvg } from '~/assets/images/icons/IconSvg';
import { ButtonRemoveFilter } from '~/components/commonComponents/button/ButtonRemoveFilter';
import { filterCategory, user } from '~/components/commonComponents/CategoryData';
import { CustomInput } from '~/components/commonComponents/customInput/CustomInput';
import {
    flexRowBetweenCenterWrap,
    flexRowStartWrap,
    formControlFilter,
    navFilter,
    navFilterContainer,
} from '~/components/styles/Section.style';

import { SwitchAllergens } from '../sections/inputs/SwitchAllergens';

type FilterMenuType = {
    onFilterBtnClick: () => void;
    filterCheckboxHandle: (data: string) => void;
    filter: string[];
    categoryNames: string[];
    addItemsAllergens: (item: string) => void;
    removeFilter: (item: string) => void;
    removeAll: () => void;
};

export const FilterMenu: React.FC<FilterMenuType> = ({
    onFilterBtnClick,
    filterCheckboxHandle,
    filter,
    categoryNames,
    addItemsAllergens,
    removeFilter,
    removeAll,
}: FilterMenuType) => (
    <Box as='aside' sx={navFilter} onClick={onFilterBtnClick}>
        <Box sx={navFilterContainer} onClick={(e) => e.stopPropagation()} w='100%'>
            <Flex justifyContent='space-between' alignItems='center' mb='16px'>
                <Text variant='userNameBig'>Фильтр</Text>
                <IconButton
                    variant='ghost'
                    aria-label='Mobile menu'
                    onClick={onFilterBtnClick}
                    icon={<IconSvg iconId='close' width='24' height='24' viewBox='0 0 24 24' />}
                />
            </Flex>
            <Flex flexDir='column' gap='24px'>
                <CustomInput
                    data={categoryNames}
                    placeholder='Категория'
                    filterCheckboxHandle={filterCheckboxHandle}
                    filter={filter}
                />
                <CustomInput
                    data={user}
                    placeholder='Поиск по автору'
                    filterCheckboxHandle={filterCheckboxHandle}
                    filter={filter}
                />
                <Flex flexDir='column' gap='12px'>
                    <Text>Тип мяса:</Text>
                    {filterCategory.meat.map((el) => (
                        <Checkbox
                            isChecked={filter.includes(el)}
                            onChange={() => filterCheckboxHandle(el)}
                        >
                            <Text>{el}</Text>
                        </Checkbox>
                    ))}
                </Flex>
                <Flex flexDir='column' gap='12px'>
                    <Text>Тип гарнира:</Text>
                    {filterCategory.side.map((el, i) => (
                        <Checkbox
                            key={i}
                            isChecked={filter.includes(el)}
                            onChange={() => filterCheckboxHandle(el)}
                        >
                            <Text>{el}</Text>
                        </Checkbox>
                    ))}
                </Flex>
                <FormControl sx={formControlFilter} gap='16px'>
                    <FormLabel m='0' flexGrow={1} whiteSpace='nowrap'>
                        Исключить аллергены
                    </FormLabel>
                    <SwitchAllergens
                        filterCheckboxHandle={filterCheckboxHandle}
                        filter={filter}
                        addItemsAllergens={addItemsAllergens}
                    />
                </FormControl>
                <Flex sx={flexRowStartWrap} gap='16px'>
                    {filter.map((el, i) => (
                        <IconButton
                            key={i}
                            onClick={() => removeFilter(el)}
                            variant='buttonRemoveFilter'
                            icon={<ButtonRemoveFilter el={el} />}
                            aria-label='Remove Button'
                        />
                    ))}
                </Flex>
                <Flex sx={flexRowBetweenCenterWrap}>
                    <Button variant='buttonOutlineBiggest' onClick={() => removeAll()}>
                        Очистить фильтр
                    </Button>
                    <Button variant='buttonBlackBig'>Найти рецепт</Button>
                </Flex>
            </Flex>
        </Box>
    </Box>
);
