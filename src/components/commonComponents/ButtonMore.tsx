import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import React from 'react';

type ButtonMorePropsType = {
    text: string;
    bg?: string;
};

export const ButtonMore: React.FC<ButtonMorePropsType> = ({ text, bg }: ButtonMorePropsType) => (
    <IconButton
        variant='solid'
        bg={bg || 'brand.400'}
        aria-label='More'
        icon={
            <Flex alignItems='center' m='4px 8px'>
                <Text pr='8px'>{text}</Text>
                <ArrowForwardIcon />
            </Flex>
        }
        p='10px 24px'
        _hover={{ bg: 'brand.600', border: 'none' }}
    />
);
