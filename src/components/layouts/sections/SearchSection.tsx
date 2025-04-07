import { SearchIcon } from '@chakra-ui/icons';
import {
    Box,
    Flex,
    FormControl,
    FormLabel,
    Hide,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Switch,
    useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';

import { IconSvg } from '~/assets/images/icons/IconSvg';

export const SearchSection: React.FC = () => {
    const fontSize = useBreakpointValue({
        base: '24px',
        sm: '24px',
        md: '36px',
        lg: '48px',
    });
    return (
        <Box maxW='578px'>
            <h3
                style={{
                    fontSize: fontSize,
                    fontWeight: '700',
                    margin: '32px 0',
                    textAlign: 'center',
                }}
            >
                Приятного аппетита!
            </h3>
            <Flex justifyContent='center' mb='16px'>
                <IconButton
                    variant='outline'
                    mr='12px'
                    aria-label='Filters button'
                    icon={
                        <IconSvg iconId='filter' width='24px' height='24px' viewBox='0 0 24 24' />
                    }
                />
                <InputGroup maxW='458px' minW='284px'>
                    <Input placeholder='Название или ингредиент...' />
                    <InputRightElement>
                        <IconButton
                            variant='ghost'
                            aria-label='Search database'
                            icon={<SearchIcon />}
                        />
                    </InputRightElement>
                </InputGroup>
            </Flex>
            <Hide below='sm'>
                <FormControl display='flex' alignItems='center' justifyContent='center' mb='40px'>
                    <FormLabel htmlFor='email-alerts' mb='0'>
                        Исключить мои аллергены
                    </FormLabel>
                    <Switch id='email-alerts' m='0 12px' />
                    <Select variant='outline' placeholder='Выберите из списка...' maxW='234px'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </FormControl>
            </Hide>
        </Box>
    );
};
