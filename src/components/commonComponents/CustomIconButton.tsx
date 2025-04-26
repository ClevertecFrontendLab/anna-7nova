import { Flex, IconButton, Text } from '@chakra-ui/react';
import React from 'react';

import { IconSvg } from '~/assets/images/icons/IconSvg';

type IconButtonPropsType = {
    ariaLabel: string;
    iconId: string;
    number: number;
    variant?: 'buttonTextNotification';
    width?: string;
    height?: string;
    viewBox?: string;
};

export const CustomIconButton: React.FC<IconButtonPropsType> = ({
    ariaLabel,
    iconId,
    number,
    variant,
    width,
    height,
    viewBox,
}: IconButtonPropsType) => (
    <IconButton
        variant='ghost'
        aria-label={ariaLabel}
        h='24px'
        p={{ base: '2px', lg: '6px 8px' }}
        icon={
            <Flex alignItems='center'>
                <IconSvg iconId={iconId} width={width} height={height} viewBox={viewBox} />
                <Text variant={variant || 'textSticker'} color='brand.600' ml='6px'>
                    {number}
                </Text>
            </Flex>
        }
    />
);
