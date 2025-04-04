import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
} from '@chakra-ui/react';
import React from 'react';

import { CustomAccordionLink } from './CustomAccordionLink';

type CustomAccordionItemPropsType = {
    topic: string;
    icons: string;
};

export const CustomAccordionItem: React.FC<CustomAccordionItemPropsType> = ({
    topic,
    icons,
}: CustomAccordionItemPropsType) => (
    <AccordionItem m='0 10px'>
        <AccordionButton
            as='h2'
            _hover={{ bg: 'brand.150' }}
            _expanded={{ bg: 'brand.100', fontWeight: '700' }}
        >
            <img src={icons} />
            <Box as='span' textAlign='left' ml='12px'>
                {topic}
            </Box>
            <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
            <Flex flexDir='column'>
                <CustomAccordionLink text='Закуски' />
                <CustomAccordionLink text='Первые блюда' />
                <CustomAccordionLink text='Вторые блюда' />
                <CustomAccordionLink text='Гарниры' />
                <CustomAccordionLink text='Десерты' />
                <CustomAccordionLink text='Выпечка' />
                <CustomAccordionLink text='Сыроедческие блюда' />
                <CustomAccordionLink text='Напитки' />
            </Flex>
        </AccordionPanel>
    </AccordionItem>
);
