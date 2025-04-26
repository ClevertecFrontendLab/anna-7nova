import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

import { IconSvg } from '~/assets/images/icons/IconSvg';

export type ButtonIconUnCollapsedType = {
    title: string;
    iconId: string;
    width?: string;
    height?: string;
    variant?: string;
};

export const ButtonIconUnCollapsed: React.FC<ButtonIconUnCollapsedType> = ({
    title,
    iconId,
    width,
    height,
    variant,
}: ButtonIconUnCollapsedType) => (
    <Flex alignItems='center' p={{ base: '4px 8px', lg: '6px 10px', xl: '10px 24px' }}>
        <IconSvg iconId={iconId} width={width} height={height} />
        <Text ml='8px' variant={variant || 'buttonTextUnCollapsed'}>
            {title}
        </Text>
    </Flex>
);
