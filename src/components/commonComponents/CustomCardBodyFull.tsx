import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

import { CustomCardBodyFlexType } from './CustomCardBodyFlex';

export const CustomCardBodyFull: React.FC<CustomCardBodyFlexType> = ({
    title,
    text,
}: CustomCardBodyFlexType) => (
    <Box>
        {title && (
            <Heading as='h5' size='h5' noOfLines={{ base: 1, md: 2, lg: 1 }} mb='8px'>
                {title}
            </Heading>
        )}
        <Box>
            <Text noOfLines={3}>{text}</Text>
        </Box>
    </Box>
);
