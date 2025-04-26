import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

import { IconSvg } from '~/assets/images/icons/IconSvg';
import { boxDesktopVisible } from '~/components/styles/Section.style';

export const ButtonCollapsed: React.FC = () => (
    <Flex alignItems='center' p='6px'>
        <IconSvg iconId='save' width='12px' height='12px' />
        <Box sx={boxDesktopVisible}>
            <Text ml='8px'>Сохранить</Text>
        </Box>
    </Flex>
);
