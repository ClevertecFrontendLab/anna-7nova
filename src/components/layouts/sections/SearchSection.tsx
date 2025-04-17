import { SearchIcon } from '@chakra-ui/icons';
import {
    Box,
    Flex,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Switch,
} from '@chakra-ui/react';
import React from 'react';

import { IconSvg } from '~/assets/images/icons/IconSvg';
import {
    flexSearchContainer,
    flexSearchContainerDesktop,
    formControl,
    iconButtonGhost,
    iconButtonOutline,
    inputElement,
    inputGroup,
} from '~/components/styles/Section.style';

export const SearchSection: React.FC = () => (
    <>
        <Flex sx={flexSearchContainer}>
            <IconButton
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
        <Box sx={flexSearchContainerDesktop}>
            <FormControl sx={formControl}>
                <FormLabel m='0' flexGrow={1} whiteSpace='nowrap'>
                    Исключить мои аллергены
                </FormLabel>
                <Switch id='email-alerts' m='0 12px' />
                <Select variant='outline' placeholder='Выберите из списка...' maxW='234px'>
                    <option value='option1'>Молочные продукты</option>
                    <option value='option2'>Яйцо</option>
                    <option value='option3'>Рыба</option>
                </Select>
            </FormControl>
        </Box>
    </>
);
