import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
} from '@chakra-ui/react';
import React from 'react';

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
    <AccordionItem m='0 10px'>
        <AccordionButton
            as='h2'
            _hover={{ bg: 'brand.150' }}
            _expanded={{ bg: 'brand.100', fontWeight: '700' }}
            onClick={() => onClick(category.slug)}
        >
            <img src={category.src} />
            <Box as='span' textAlign='left' ml='12px'>
                {category.category}
            </Box>
            <AccordionIcon />
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
