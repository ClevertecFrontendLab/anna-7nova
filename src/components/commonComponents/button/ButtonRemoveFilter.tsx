import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

import { IconSvg } from '~/assets/images/icons/IconSvg';
import { boxDesktopVisible } from '~/components/styles/Section.style';

type ButtonRemoveFilterType = {
    el: string;
};

export const ButtonRemoveFilter: React.FC<ButtonRemoveFilterType> = ({
    el,
}: ButtonRemoveFilterType) => (
    <Flex alignItems='center' p='2px 8px'>
        <Box sx={boxDesktopVisible}>
            <Text mr='8px'>{el}</Text>
        </Box>
        <IconSvg iconId='removeFilter' width='10px' height='10px' viewBox='0 0 10 10' />
    </Flex>
);
