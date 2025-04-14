import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
} from '@chakra-ui/react';
import React from 'react';

import { IconSvg } from '~/assets/images/icons/IconSvg';
import { category } from '~/components/commonComponents/Category';

import { CustomAccordionItem } from './CustomAccordionItem';
import { CustomAccordionLink } from './CustomAccordionLink';

export type NavigationMenuType = {
    onClick: (categorySlug: string, subcategorySlug?: string) => void;
};

export const NavigationMenu: React.FC<NavigationMenuType> = ({ onClick }: NavigationMenuType) => (
    <Box
        position='fixed'
        top='80px'
        as='aside'
        overflowY='auto'
        borderRadius='12px'
        w='256px'
        h='calc(100vh - 80px - 144px)'
        bgColor='white'
        zIndex='1'
    >
        <Accordion allowToggle pt='34px'>
            {/* {Object.values(category).map((cat) => (
                <CustomAccordionItem key={cat.slug} data-test-id='vegan-cuisine' category={cat} onClick={onClick} />
            ))} */}
            <CustomAccordionItem category={category.salad} onClick={onClick} />
            <CustomAccordionItem category={category.snacks} onClick={onClick} />
            <CustomAccordionItem category={category.mainMeal} onClick={onClick} />
            <CustomAccordionItem category={category.secondMeal} onClick={onClick} />
            <CustomAccordionItem category={category.desert} onClick={onClick} />
            <CustomAccordionItem category={category.grill} onClick={onClick} />
            <AccordionItem m='0 10px' data-test-id='vegan-cuisine'>
                <AccordionButton
                    as='h2'
                    _hover={{ bg: 'brand.150' }}
                    _expanded={{ bg: 'brand.100', fontWeight: '700' }}
                    onClick={() =>
                        onClick(category.vegan.slug, category.vegan.subcategories[0].slug)
                    }
                    p='12px 16px 12px 6px'
                    h='47px'
                    justifyContent='space-between'
                >
                    <Flex>
                        <img src={category.vegan.src} />
                        <Box as='span' textAlign='left' ml='12px'>
                            {category.vegan.category}
                        </Box>
                    </Flex>
                    <IconSvg iconId='accordionArrow' width='14px' height='8px' viewBox='0 0 14 8' />
                </AccordionButton>
                <AccordionPanel>
                    <Flex flexDir='column'>
                        {category.vegan.subcategories.map((el) => (
                            <CustomAccordionLink
                                key={el.slug}
                                text={el.name}
                                onClick={() => onClick(category.vegan.slug, el.slug)}
                            />
                        ))}
                    </Flex>
                </AccordionPanel>
            </AccordionItem>
            {/* <CustomAccordionItem data-test-id='vegan-cuisine' category={category.vegan} onClick={onClick} /> */}
            <CustomAccordionItem category={category.child} onClick={onClick} />
            <CustomAccordionItem category={category.health} onClick={onClick} />
            <CustomAccordionItem category={category.traditional} onClick={onClick} />
            <CustomAccordionItem category={category.souse} onClick={onClick} />
            <CustomAccordionItem category={category.drink} onClick={onClick} />
            <CustomAccordionItem category={category.ready} onClick={onClick} />
        </Accordion>
    </Box>
);
