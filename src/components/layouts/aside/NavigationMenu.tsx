import { Accordion, AccordionItem, Box } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';

import { category } from '~/components/commonComponents/CategoryData';
import { accordionItemStyle } from '~/components/styles/Aside.style';

import { CustomAccordionItem } from './CustomAccordionItem';

export type NavigationMenuType = {
    onClick: (categorySlug: string, subcategorySlug?: string) => void;
};

export const NavigationMenu: React.FC<NavigationMenuType> = ({ onClick }: NavigationMenuType) => {
    //scroll
    const scrollRef = useRef<HTMLDivElement>(null);
    const [hasOverflow, setHasOverflow] = useState(false);
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const checkOverflow = () => {
            setHasOverflow(el.scrollHeight > el.clientHeight);
        };

        checkOverflow(); // проверить на старте

        const resizeObserver = new ResizeObserver(() => {
            checkOverflow();
        });

        resizeObserver.observe(el);

        // Очистка при размонтировании
        return () => {
            resizeObserver.disconnect();
        };
    }, []);
    //scroll

    return (
        <Box
            as='aside'
            position='fixed'
            top='80px'
            overflowY='auto'
            borderRadius='12px'
            w='256px'
            h='calc(100vh - 80px - 34px - 144px)'
            bgColor='white'
            zIndex={1}
            m='34px 4px 0 0'
            pb='8px'
            ref={scrollRef}
            boxShadow={
                hasOverflow
                    ? '0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    : 'none'
            }
            sx={{
                '&::-webkit-scrollbar': {
                    width: '8px',
                },
                '&::-webkit-scrollbar-track': {
                    background: 'blackAlpha.50',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: 'blackAlpha.300',
                    borderRadius: '8px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                    background: 'blackAlpha.300',
                },
            }}
        >
            <Accordion allowToggle w='100%'>
                {/* {Object.values(category).map((cat) => (
                <CustomAccordionItem key={cat.slug} data-test-id='vegan-cuisine' category={cat} onClick={onClick} />
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
                    <CustomAccordionItem category={category.desert} onClick={onClick} />
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
        </Box>
    );
};
