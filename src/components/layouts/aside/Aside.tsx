import { Accordion, Box } from '@chakra-ui/react';
import React from 'react';

import { category } from './category';
import { CustomAccordionItem } from './CustomAccordionItem';

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
            <CustomAccordionItem category={category.salad} />
            <CustomAccordionItem category={category.snacks} />
            <CustomAccordionItem category={category.mainMeal} />
            <CustomAccordionItem category={category.secondMeal} />
            <CustomAccordionItem category={category.desert} />
            <CustomAccordionItem category={category.grill} />
            <CustomAccordionItem category={category.vegan} />
            <CustomAccordionItem category={category.child} />
            <CustomAccordionItem category={category.health} />
            <CustomAccordionItem category={category.traditional} />
            <CustomAccordionItem category={category.souse} />
            <CustomAccordionItem category={category.drink} />
            <CustomAccordionItem category={category.ready} />
        </Accordion>
    </Box>
);
