import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Checkbox,
    Flex,
    IconButton,
    Input,
    Text,
    VStack,
} from '@chakra-ui/react';
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

import { IconSvg } from '~/assets/images/icons/IconSvg';
import { customIconButton, customIconItemStyle } from '~/components/styles/Aside.style';
import { flexRowStartWrap, inputCustomElement } from '~/components/styles/Section.style';

type CustomInputType = {
    data: string[];
    placeholder: string;
    isDisabled?: boolean;
    filterCheckboxHandle: (data: string) => void;
    filter: string[];
    addItem?: boolean;
    addItemsAllergens?: (item: string) => void;
};

export const CustomInput: React.FC<CustomInputType> = ({
    data,
    placeholder,
    isDisabled,
    filterCheckboxHandle,
    filter,
    addItem,
    addItemsAllergens,
}: CustomInputType) => {
    //accordion state
    const [isOpen, setIsOpen] = useState(false);
    const accordionStatusHandle = () => setIsOpen(!isOpen);
    //input - add items
    const [currentValue, setCurrentValue] = useState<string>('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
        setCurrentValue(e.currentTarget.value);
    const addAllergensHandler = () => {
        addItemsAllergens?.(currentValue);
        setCurrentValue('');
    };
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addAllergensHandler();
        }
    };
    return (
        <Accordion
            allowToggle
            w='100%'
            index={isOpen ? 0 : -1}
            onChange={(index) => setIsOpen(index === 0)}
        >
            <AccordionItem isDisabled={isDisabled} sx={customIconItemStyle}>
                <AccordionButton onClick={accordionStatusHandle} sx={customIconButton}>
                    <Flex sx={flexRowStartWrap} flexGrow={1} w='100%' rowGap='4px' columnGap='8px'>
                        {filter.length > 0 && addItem
                            ? filter.map((el, i) => (
                                  <Text variant='textFilterSticker' key={i}>
                                      {el}
                                  </Text>
                              ))
                            : placeholder}
                    </Flex>
                    <IconSvg
                        iconId='accordionArrow'
                        width='14px'
                        height='8px'
                        viewBox='0 0 14 8'
                        style={{
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                        }}
                    />
                </AccordionButton>
                <AccordionPanel position='absolute' bg='white' w='100%' p='0'>
                    <Flex flexDir='column' bg='white' w='100%' mb='24px'>
                        <VStack
                            spacing={0}
                            align='stretch'
                            borderRadius='4px'
                            border='1px solid'
                            borderColor='blackAlpha.100'
                            bg='white'
                            w='100%'
                            zIndex={11}
                        >
                            {data.map((el, index) => (
                                <Box
                                    key={index}
                                    bg={index % 2 === 0 ? 'blackAlpha.100' : 'white'}
                                    px={4}
                                    py={2}
                                >
                                    <Checkbox
                                        isChecked={filter.includes(el)}
                                        onChange={() => filterCheckboxHandle(el)}
                                    >
                                        <Text>{el}</Text>
                                    </Checkbox>
                                </Box>
                            ))}
                            {addItem && (
                                <Flex m='8px  8px 8px 24px' alignItems='center'>
                                    <Input
                                        value={currentValue}
                                        onChange={onChangeHandler}
                                        onKeyDown={onKeyDownHandler}
                                        sx={inputCustomElement}
                                        placeholder='Другой аллерген'
                                        h='32px'
                                    />
                                    <IconButton
                                        variant='buttonAdd'
                                        aria-label='Add item'
                                        size='sm'
                                        onClick={addAllergensHandler}
                                        icon={
                                            <IconSvg
                                                iconId='addItem'
                                                width='12'
                                                height='12'
                                                viewBox='0 0 12 12'
                                            />
                                        }
                                    />
                                </Flex>
                            )}
                        </VStack>
                    </Flex>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};
