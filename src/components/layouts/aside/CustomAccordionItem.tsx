import { AccordionButton, AccordionItem, AccordionPanel, Box, Flex } from '@chakra-ui/react';
import React from 'react';

import { IconSvg } from '~/assets/images/icons/IconSvg';

import { PodCategoryType } from '../../commonComponents/category';
import { CustomAccordionLink } from './CustomAccordionLink';

type CustomAccordionItemPropsType = {
    category: PodCategoryType;
    onClick: (categorySlug: string, subcategorySlug?: string) => void;
};

export const CustomAccordionItem: React.FC<CustomAccordionItemPropsType> = ({
    category,
    onClick,
}: CustomAccordionItemPropsType) => (
    <AccordionItem m='0 10px' h='48px'>
        <AccordionButton
            as='h2'
            _hover={{ bg: 'brand.150' }}
            _expanded={{ bg: 'brand.100', fontWeight: '700' }}
            onClick={() => onClick(category.slug, category.subcategories[0].slug)}
            p='12px 16px 12px 6px'
            justifyContent='space-between'
        >
            <Flex>
                <img src={category.src} />
                <Box as='span' textAlign='left' ml='12px'>
                    {category.category}
                </Box>
            </Flex>
            <IconSvg iconId='accordionArrow' width='14px' height='8px' viewBox='0 0 14 8' />
        </AccordionButton>
        <AccordionPanel>
            <Flex flexDir='column'>
                {category.subcategories.map((el) => (
                    <CustomAccordionLink
                        key={el.slug}
                        text={el.name}
                        onClick={() => onClick(category.slug, el.slug)}
                    />
                ))}
            </Flex>
        </AccordionPanel>
    </AccordionItem>
);
