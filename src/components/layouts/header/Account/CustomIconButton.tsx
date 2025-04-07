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
        icon={
            <Flex alignItems='center' m='4px 8px'>
                <IconSvg iconId={iconId} />
                <Text color='brand.600' ml='6px'>
                    {number}
                </Text>
            </Flex>
        }
    />
);
