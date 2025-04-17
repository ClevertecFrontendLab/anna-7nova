import {
    AccordionButton,
    AccordionPanel,
    Box,
    Flex,
    useAccordionItemState,
} from '@chakra-ui/react';
import React from 'react';

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

    return (
        <>
            <AccordionButton
                as='h2'
                sx={accordionButtonStyle}
                onClick={() => onClick(category.slug, category.subcategories[0].slug)}
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
                    {/* {category.subcategories.map((el) => (
                        <CustomAccordionLink
                            key={el.slug}
                            text={el.name}
                            isSelected={false} //тут нужно откорректирвоать
                            onClick={() => onClick(category.slug, el.slug)}
                        />
                    ))} */}
                    <CustomAccordionLink
                        isSelected={false}
                        text={category.subcategories[0].name}
                        onClick={() => onClick(category.slug, category.subcategories[0].slug)}
                    />
                    <CustomAccordionLink
                        isSelected={false}
                        text={category.subcategories[1].name}
                        onClick={() => onClick(category.slug, category.subcategories[1].slug)}
                    />
                    <CustomAccordionLink
                        isSelected={true}
                        text={category.subcategories[2].name}
                        onClick={() => onClick(category.slug, category.subcategories[2].slug)}
                    />
                    <CustomAccordionLink
                        isSelected={false}
                        text={category.subcategories[3].name}
                        onClick={() => onClick(category.slug, category.subcategories[3].slug)}
                    />
                    <CustomAccordionLink
                        isSelected={false}
                        text={category.subcategories[4].name}
                        onClick={() => onClick(category.slug, category.subcategories[4].slug)}
                    />
                    <CustomAccordionLink
                        isSelected={false}
                        text={category.subcategories[5].name}
                        onClick={() => onClick(category.slug, category.subcategories[5].slug)}
                    />
                    <CustomAccordionLink
                        isSelected={false}
                        text={category.subcategories[6].name}
                        onClick={() => onClick(category.slug, category.subcategories[6].slug)}
                    />
                    <CustomAccordionLink
                        isSelected={false}
                        text={category.subcategories[7].name}
                        onClick={() => onClick(category.slug, category.subcategories[7].slug)}
                    />
                </Flex>
            </AccordionPanel>
        </>
    );
};
