import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

import { NutritionValueType } from '~/components/commonComponents/CategoryData';
import { containerRecipeFull, smallCard } from '~/components/styles/Section.style';

type CaloricContentType = { el: NutritionValueType };

export const CaloricContent: React.FC<CaloricContentType> = ({ el }: CaloricContentType) => (
    <Box sx={containerRecipeFull}>
        <Text mb='20px'>* Калорийность на 1 порцию</Text>
        <Flex gap='24px' flexDir={{ base: 'column', sm: 'row' }}>
            <Box sx={smallCard}>
                <Text variant='textGrey'>калорийность</Text>
                <Text variant='textGreenNumber'>{el.calories}</Text>
                <Text variant='textBold'>ККАЛ</Text>
            </Box>
            <Box sx={smallCard}>
                <Text variant='textGrey'>белки</Text>
                <Text variant='textGreenNumber'>{el.proteins}</Text>
                <Text variant='textBold'>ГРАММ</Text>
            </Box>
            <Box sx={smallCard}>
                <Text variant='textGrey'>жиры</Text>
                <Text variant='textGreenNumber'>{el.fats}</Text>
                <Text variant='textBold'>ГРАММ</Text>
            </Box>
            <Box sx={smallCard}>
                <Text variant='textGrey'>углеводы</Text>
                <Text variant='textGreenNumber'>{el.carbohydrates}</Text>
                <Text variant='textBold'>ГРАММ</Text>
            </Box>
        </Flex>
    </Box>
);
