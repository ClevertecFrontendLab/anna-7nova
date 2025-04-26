import {
    Box,
    Flex,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Tr,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import {
    containerRecipeFull,
    flexRowBetweenCenterWrap,
    flexRowStartCenter,
} from '~/components/styles/Section.style';

import { NewRecipesCardPropsType } from '../blocks/NewRecipesCard';

export const Ingredients: React.FC<NewRecipesCardPropsType> = ({ el }: NewRecipesCardPropsType) => {
    const [currentIngredient, setCurrentIngredient] = useState<number>(
        el.portions ? el.portions : 1,
    );
    return (
        <Box sx={containerRecipeFull}>
            <Flex sx={flexRowBetweenCenterWrap}>
                <Text variant='textGreen'>ИНГРЕДИЕНТЫ</Text>
                <Flex sx={flexRowStartCenter}>
                    <Text variant='textGreen'>ПОРЦИЙ</Text>
                    <NumberInput
                        value={currentIngredient}
                        onChange={(_, valueNumber) => setCurrentIngredient(valueNumber)}
                        min={0}
                        w={{ base: '73px', sm: '90px' }}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </Flex>
            </Flex>
            <TableContainer overflowX='auto' w='100%' pt='8px'>
                <Table variant='striped'>
                    <Tbody>
                        {el.ingredients.map((item, index) => {
                            const originalCount = Number(item.count);
                            const isCountNumber = !isNaN(originalCount);

                            const adjustedCount = isCountNumber
                                ? (originalCount / el.portions) * currentIngredient
                                : item.count;
                            return (
                                <Tr key={index}>
                                    <Td px='12px' py='10px' whiteSpace='nowrap' w='1%'>
                                        {item.title}
                                    </Td>
                                    <Td
                                        px='12px'
                                        py='10px'
                                        whiteSpace='nowrap'
                                        w='1%'
                                        textAlign='end'
                                    >
                                        {adjustedCount ? adjustedCount : ''} {item.measureUnit}
                                    </Td>
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
};
