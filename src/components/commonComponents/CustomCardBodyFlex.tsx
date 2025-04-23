import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

import { boxDesktopVisible } from '../styles/Section.style';

export type CustomCardBodyFlexType = {
    title: string;
    text: string;
};

export const CustomCardBodyFlex: React.FC<CustomCardBodyFlexType> = ({
    title,
    text,
}: CustomCardBodyFlexType) => (
    <Box>
        <Heading as='h6' size='h6' noOfLines={{ base: 2, md: 1 }} mb='8px'>
            {title}
        </Heading>
        <Box sx={boxDesktopVisible}>
            <Text noOfLines={3}>{text}</Text>
        </Box>
    </Box>
);
