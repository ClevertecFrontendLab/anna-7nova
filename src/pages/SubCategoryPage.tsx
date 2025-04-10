import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router';

import { category } from '~/components/commonComponents/category';
import { TitleSection } from '~/components/commonComponents/TitleSection';
import { SectionMix } from '~/components/layouts/sections/blocks/SectionMix';
import { SearchSection } from '~/components/layouts/sections/SearchSection';

export const SubCategoryPage: React.FC = () => {
    const { category: catSlug, subcategory: subSlug } = useParams();

    const categoryData = category[catSlug!];
    const subcategoryData = categoryData?.subcategories.find((sub) => sub.slug === subSlug);

    if (!categoryData || !subcategoryData) {
        return <div>Подкатегория не найдена</div>;
    }
    return (
        <>
            <SearchSection />
            <Box w='100%'>
                <Flex
                    justifyContent='space-between'
                    alignItems={{ base: 'flex-start', lg: 'center' }}
                    flexDir={{ base: 'column', lg: 'row' }}
                >
                    <TitleSection title='Веганская кухня' />
                    <Text maxW='100%' minW='328px' maxWidth='668px'>
                        Интересны не только убеждённым вегетарианцам, но и тем, кто хочет
                        попробовать вегетарианскую диету и готовить вкусные вегетарианские блюда.
                    </Text>
                </Flex>
                <SectionMix />
            </Box>
        </>
    );
};
