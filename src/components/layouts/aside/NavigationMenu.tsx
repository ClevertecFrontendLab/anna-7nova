import { Accordion, AccordionItem } from '@chakra-ui/react';
import React from 'react';

import { category } from '~/components/commonComponents/CategoryData';
import { accordionItemStyle } from '~/components/styles/Aside.style';

import { CustomAccordionItem } from './CustomAccordionItem';

export type NavigationMenuType = {
    onClick: (categorySlug: string, subcategorySlug?: string) => void;
};

export const NavigationMenu: React.FC<NavigationMenuType> = ({ onClick }: NavigationMenuType) => (
    <Accordion allowToggle w='100%'>
        {/* {Object.values(category).map((cat) => (
                <CustomAccordionItem key={cat.slug} category={cat} onClick={onClick} />
            ))} */}
        <AccordionItem sx={accordionItemStyle}>
            <CustomAccordionItem category={category.salad} onClick={onClick} />
        </AccordionItem>
        <AccordionItem sx={accordionItemStyle}>
            <CustomAccordionItem category={category.snacks} onClick={onClick} />
        </AccordionItem>
        <AccordionItem sx={accordionItemStyle}>
            <CustomAccordionItem category={category.mainMeal} onClick={onClick} />
        </AccordionItem>
        <AccordionItem sx={accordionItemStyle}>
            <CustomAccordionItem category={category.secondMeal} onClick={onClick} />
        </AccordionItem>
        <AccordionItem sx={accordionItemStyle}>
            <CustomAccordionItem category={category.dessert} onClick={onClick} />
        </AccordionItem>
        <AccordionItem sx={accordionItemStyle}>
            <CustomAccordionItem category={category.grill} onClick={onClick} />
        </AccordionItem>
        <AccordionItem sx={accordionItemStyle} data-test-id='vegan-cuisine'>
            <CustomAccordionItem category={category.vegan} onClick={onClick} />
        </AccordionItem>
        <AccordionItem sx={accordionItemStyle}>
            <CustomAccordionItem category={category.child} onClick={onClick} />
        </AccordionItem>
        <AccordionItem sx={accordionItemStyle}>
            <CustomAccordionItem category={category.health} onClick={onClick} />
        </AccordionItem>
        <AccordionItem sx={accordionItemStyle}>
            <CustomAccordionItem category={category.traditional} onClick={onClick} />
        </AccordionItem>
        <AccordionItem sx={accordionItemStyle}>
            <CustomAccordionItem category={category.souse} onClick={onClick} />
        </AccordionItem>
        <AccordionItem sx={accordionItemStyle}>
            <CustomAccordionItem category={category.drink} onClick={onClick} />
        </AccordionItem>
        <AccordionItem sx={accordionItemStyle}>
            <CustomAccordionItem category={category.ready} onClick={onClick} />
        </AccordionItem>
    </Accordion>
);
