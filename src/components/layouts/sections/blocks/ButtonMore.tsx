import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import React from 'react';

export const ButtonMore: React.FC = () => (
    <IconButton
        variant='solid'
        bg='brand.400'
        aria-label='More'
        icon={
            <Flex alignItems='center' m='4px 8px'>
                <Text pr='8px'>Вся подборка</Text>
                <ArrowForwardIcon />
            </Flex>
        }
        p='10px 24px'
        _hover={{ bg: 'brand.600', border: 'none' }}
    />
);
