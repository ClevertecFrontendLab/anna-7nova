import { Accordion, Box } from '@chakra-ui/react';
import React from 'react';

import { category } from '../../commonComponents/category';
import { CustomAccordionItem } from './CustomAccordionItem';

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
    >
        <Accordion allowToggle pt='34px'>
            {Object.values(category).map((cat) => (
                <CustomAccordionItem key={cat.slug} category={cat} onClick={onClick} />
            ))}
        </Accordion>
    </Box>
);
