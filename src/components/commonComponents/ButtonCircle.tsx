import { Flex, IconButton, Text } from '@chakra-ui/react';
import React from 'react';

import { IconSvg } from '~/assets/images/icons/IconSvg';

type ButtonCirclePropsType = {
    title: string;
    iconId: string;
    isSelected: boolean;
};

export const ButtonCircle: React.FC<ButtonCirclePropsType> = ({
    title,
    iconId,
    isSelected,
}: ButtonCirclePropsType) => (
    <Flex
        role='group'
        flexDir='column'
        justifyContent='space-between'
        alignItems='center'
        p='10px 0'
        cursor='pointer'
        _hover={{
            bg: 'transparent',
        }}
    >
        <IconButton
            isRound
            variant='ghost'
            aria-label='Search'
            icon={<IconSvg iconId={iconId} viewBox='0 0 24 24' height='24' width='24' />}
            margin='auto'
            bg={isSelected ? 'black' : 'transparent'}
            color={isSelected ? 'white' : 'black'}
            m={isSelected ? '4px' : '0'}
            h={isSelected ? '40px' : '48px'}
            w={isSelected ? '40px' : '48px'}
            _groupHover={{
                bg: 'black',
                color: 'white',
                transform: 'scale(0.67)',
            }}
        />
        <Text
            variant='buttonMobileMenu'
            fontWeight={isSelected ? 'bold' : 'normal'}
            color={isSelected ? 'black' : 'normal'}
            _groupHover={{
                fontWeight: 'bold',
                color: 'black',
            }}
        >
            {title}
        </Text>
    </Flex>
);
