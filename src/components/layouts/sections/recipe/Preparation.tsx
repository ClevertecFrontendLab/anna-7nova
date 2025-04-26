import { Box, Card, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

import { StepsType } from '~/components/commonComponents/CategoryData';
import {
    containerRecipeFull,
    generalCard,
    generalCardImage,
    recipeCardStack,
} from '~/components/styles/Section.style';

type PreparationType = { steps: Array<StepsType> };

export const Preparation: React.FC<PreparationType> = ({ steps }: PreparationType) => (
    <Box sx={containerRecipeFull}>
        <Heading size='h7'>Шаги приготовления</Heading>
        <Flex flexDir='column' gap='20px'>
            {steps.map((el) => {
                const isLast = el.stepNumber === steps.length;
                return (
                    <Card sx={generalCard} direction='row' key={el.stepNumber}>
                        <Image src={el.image} sx={generalCardImage} />
                        <Stack sx={recipeCardStack}>
                            <Text
                                bg={isLast ? 'brand.50' : 'blackAlpha.100'}
                                borderRadius='4px'
                                w='fit-content'
                                p='2px 8px'
                            >
                                Шаг {el.stepNumber}
                            </Text>
                            <Box mb='16px'>
                                <Text>{el.description}</Text>
                            </Box>
                        </Stack>
                    </Card>
                );
            })}
        </Flex>
    </Box>
);
