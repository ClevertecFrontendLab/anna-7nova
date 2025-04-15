import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import React from 'react';

type ButtonMorePropsType = {
    text: string;
    bg?: string;
    onClick: () => void;
};

export const ButtonMore: React.FC<ButtonMorePropsType> = ({
    text,
    bg,
    onClick,
}: ButtonMorePropsType) => (
    <IconButton
        variant='solid'
        bg={bg || 'brand.400'}
        aria-label='More'
        onClick={onClick}
        h={{ base: '40px', xl: '48px' }}
        p={{ lg: '8px 16px', xl: '10px 24px' }}
        icon={
            <Flex alignItems='center'>
                <Text variant='buttonText' pr='8px'>
                    {text}
                </Text>
                <ArrowForwardIcon />
            </Flex>
        }
        _hover={{ bg: 'brand.600', border: 'none' }}
    />
);
