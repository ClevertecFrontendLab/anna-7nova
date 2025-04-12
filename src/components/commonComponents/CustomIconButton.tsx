import { Flex, IconButton, Text } from '@chakra-ui/react';
import React from 'react';

import { IconSvg } from '~/assets/images/icons/IconSvg';

type IconButtonPropsType = {
    ariaLabel: string;
    iconId: string;
    number: number;
};

export const CustomIconButton: React.FC<IconButtonPropsType> = ({
    ariaLabel,
    iconId,
    number,
}: IconButtonPropsType) => (
    <IconButton
        variant='ghost'
        aria-label={ariaLabel}
        h='24px'
        p={{ base: '2px', lg: '6px 8px' }}
        icon={
            <Flex alignItems='center'>
                <IconSvg iconId={iconId} width='12' height='12' />
                <Text color='brand.600' ml='6px'>
                    {number}
                </Text>
            </Flex>
        }
    />
);
