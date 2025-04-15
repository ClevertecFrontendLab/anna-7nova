import { Flex, IconButton, Text } from '@chakra-ui/react';
import React from 'react';

import { IconSvg } from '~/assets/images/icons/IconSvg';

type ButtonCirclePropsType = {
    title: string;
    iconId: string;
};

export const ButtonCircleSolid: React.FC<ButtonCirclePropsType> = ({
    title,
    iconId,
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
            h='48px'
            w='48px'
            isRound
            variant='solid'
            bg='black'
            color='white'
            aria-label='Search'
            icon={<IconSvg iconId={iconId} width='24px' height='24px' viewBox='0 0 24 24' />}
            _groupHover={{
                bg: 'transparent',
                outline: 'none',
                color: 'black',
                transform: 'scale(0.67)',
            }}
        />
        <Text
            variant='buttonMobileMenu'
            pt='12px'
            _groupHover={{
                fontWeight: 'bold',
                color: 'black',
            }}
        >
            {title}
        </Text>
    </Flex>
);
