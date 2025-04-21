import {
    AccordionButton,
    AccordionPanel,
    Box,
    Flex,
    useAccordionItemState,
} from '@chakra-ui/react';
import React from 'react';
import { useLocation } from 'react-router';

import { IconSvg } from '~/assets/images/icons/IconSvg';
import { PodCategoryType } from '~/components/commonComponents/CategoryData';
import { accordionButtonStyle } from '~/components/styles/Aside.style';

import { CustomAccordionLink } from './CustomAccordionLink';

type CustomAccordionItemPropsType = {
    category: PodCategoryType;
    onClick: (categorySlug: string, subcategorySlug?: string) => void;
};

export const CustomAccordionItem: React.FC<CustomAccordionItemPropsType> = ({
    category,
    onClick,
}: CustomAccordionItemPropsType) => {
    //accordion state
    const { isOpen } = useAccordionItemState();
    //routing
    const location = useLocation();
    return (
        <>
            <AccordionButton
                as='h2'
                sx={accordionButtonStyle}
                onClick={() => onClick(category.slug)}
            >
                <Flex>
                    <img src={category.src} />
                    <Box as='span' textAlign='left' ml='12px'>
                        {category.category}
                    </Box>
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
            <AccordionPanel>
                <Flex flexDir='column'>
                    {category.subcategories.map((el) => (
                        <CustomAccordionLink
                            key={el.slug}
                            text={el.name}
                            isSelected={location.pathname === `/${category.slug}/${el.slug}`}
                            onClick={() => onClick(category.slug, el.slug)}
                        />
                    ))}
                </Flex>
            </AccordionPanel>
        </>
    );
};
