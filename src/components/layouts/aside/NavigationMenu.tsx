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
            <CustomAccordionItem category={category['salads']} onClick={onClick} />
        </AccordionItem>
        <AccordionItem sx={accordionItemStyle}>
            <CustomAccordionItem category={category['snacks']} onClick={onClick} />
        </AccordionItem>
        <AccordionItem sx={accordionItemStyle}>
            <CustomAccordionItem category={category['main-dish']} onClick={onClick} />
        </AccordionItem>
        <AccordionItem sx={accordionItemStyle}>
            <CustomAccordionItem category={category['second-dish']} onClick={onClick} />
        </AccordionItem>
        <AccordionItem sx={accordionItemStyle}>
            <CustomAccordionItem category={category['dessert']} onClick={onClick} />
        </AccordionItem>
        <AccordionItem sx={accordionItemStyle}>
            <CustomAccordionItem category={category['grill']} onClick={onClick} />
        </AccordionItem>
        <AccordionItem sx={accordionItemStyle} data-test-id='vegan-cuisine'>
            <CustomAccordionItem category={category['vegan']} onClick={onClick} />
        </AccordionItem>
        <AccordionItem sx={accordionItemStyle}>
            <CustomAccordionItem category={category['children-dish']} onClick={onClick} />
        </AccordionItem>
        <AccordionItem sx={accordionItemStyle}>
            <CustomAccordionItem category={category['therapeutic-nutrition']} onClick={onClick} />
        </AccordionItem>
        <AccordionItem sx={accordionItemStyle}>
            <CustomAccordionItem category={category['national']} onClick={onClick} />
        </AccordionItem>
        <AccordionItem sx={accordionItemStyle}>
            <CustomAccordionItem category={category['souse']} onClick={onClick} />
        </AccordionItem>
        <AccordionItem sx={accordionItemStyle}>
            <CustomAccordionItem category={category['drinks']} onClick={onClick} />
        </AccordionItem>
        <AccordionItem sx={accordionItemStyle}>
            <CustomAccordionItem category={category['provision']} onClick={onClick} />
        </AccordionItem>
    </Accordion>
);
