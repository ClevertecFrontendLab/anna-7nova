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

export const SearchSection: React.FC = () => (
    <Box maxW='898px'>
        <Flex justifyContent='center'>
            <IconButton
                variant='outline'
                h={['32px', '32px', '40px', '48px', '48px']}
                minW={['32px', '32px', '40px', '48px', '48px']}
                mr='12px'
                aria-label='Filters button'
                icon={<IconSvg iconId='filter' width='24px' height='24px' viewBox='0 0 24 24' />}
            />
            <InputGroup minW='284px'>
                <Input
                    placeholder='Название или ингредиент...'
                    h={['32px', '32px', '40px', '48px', '48px']}
                    w={{ base: '284px', sm: '404px', md: '458px' }}
                    p={{ base: '7.5px 12px', lg: '13px 16px' }}
                />
                <InputRightElement>
                    <IconButton
                        variant='ghost'
                        aria-label='Search database'
                        icon={<SearchIcon />}
                    />
                </InputRightElement>
            </InputGroup>
        </Flex>
        <Box display={['none', 'none', 'none', 'block', 'block']}>
            <FormControl
                display='flex'
                alignItems='center'
                justifyContent='space-around'
                m='16px 0'
            >
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
    </Box>
);
