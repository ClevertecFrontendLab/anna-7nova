import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

import { CardBodyType } from '../layouts/sections/blocks/NewRecipesCard';
import { boxDesktopVisible } from '../styles/Section.style';

export const CustomCardBodyFlex: React.FC<CardBodyType> = ({ title, text }: CardBodyType) => (
    <Box>
        <Heading as='h6' size='h6' noOfLines={{ base: 2, md: 1 }} mb='8px'>
            {title}
        </Heading>
        <Box sx={boxDesktopVisible}>
            <Text noOfLines={3}>{text}</Text>
        </Box>
    </Box>
);
