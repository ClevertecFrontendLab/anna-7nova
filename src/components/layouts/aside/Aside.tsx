import { Accordion, Box } from '@chakra-ui/react';
import React from 'react';

import { CustomAccordionItem } from './CustomAccordionItem';
import { icons } from './icons';

export const Aside: React.FC = () => (
    <Box
        position='fixed'
        top='80px'
        as='aside'
        overflowY='auto'
        boxShadow='2xl'
        borderRadius='12px'
        w='256px'
        h='calc(100vh - 80px - 144px)'
        bgColor='white'
    >
        <Accordion allowToggle pt='34px'>
            <CustomAccordionItem icons={icons.salad} topic='Салаты' />
            <CustomAccordionItem icons={icons.snacks} topic='Закуски' />
            <CustomAccordionItem icons={icons.mainMeal} topic='Первые блюда' />
            <CustomAccordionItem icons={icons.secondMeal} topic='Вторые блюда' />
            <CustomAccordionItem icons={icons.desert} topic='Десерты, выпечка' />
            <CustomAccordionItem icons={icons.grill} topic='Блюда на гриле' />
            <CustomAccordionItem icons={icons.vegan} topic='Веганская кухня' />
            <CustomAccordionItem icons={icons.child} topic='Детские блюда' />
            <CustomAccordionItem icons={icons.health} topic='Лечебное питание' />
            <CustomAccordionItem icons={icons.traditional} topic='Национальные' />
            <CustomAccordionItem icons={icons.souse} topic='Соусы' />
            <CustomAccordionItem icons={icons.drink} topic='Напитки' />
            <CustomAccordionItem icons={icons.ready} topic='Заготовки' />
        </Accordion>
    </Box>
);
