import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { ButtonLoadMore } from '~/components/commonComponents/ButtonLoadMore';
import { category } from '~/components/commonComponents/CategoryData';
import { dataVeganRecipes } from '~/components/commonComponents/DataRecipes';
import { TitleSectionMain } from '~/components/commonComponents/TitleSectionMain';
import { GeneralRecipes } from '~/components/layouts/sections/blocks/GeneralRecipes';
import { SectionMixDesert } from '~/components/layouts/sections/blocks/SectionMixDesert';
import { SearchSection } from '~/components/layouts/sections/SearchSection';

export const VeganKitchen: React.FC = () => {
    const { subcategorySlug } = useParams();
    const navigate = useNavigate();

    const [tabIndex, setTabIndex] = useState(2);

    // 1. Обновляем индекс таба при изменении URL
    useEffect(() => {
        if (subcategorySlug) {
            const index = category.vegan.subcategories.findIndex(
                (sub) => sub.slug === subcategorySlug,
            );
            setTabIndex(index !== -1 ? index : 0);
        }
    }, [subcategorySlug]);

    // 2. При клике на таб — меняем URL
    const handleTabChange = (index: number) => {
        setTabIndex(index);
        const sub = category.vegan.subcategories[index];
        if (sub) {
            navigate(`/vegan/${sub.slug}`);
        }
    };
    return (
        <>
            <Box
                display='flex'
                flexDir='column'
                alignItems='center'
                m={{ base: '0 ', sm: '16px 0 0', lg: '0 105px ', xl: '0 290px' }}
            >
                <TitleSectionMain subtitle='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.' />
                <SearchSection />
            </Box>
            <Box w='100%'>
                <Tabs index={tabIndex} onChange={handleTabChange} variant='line' isLazy>
                    <TabList
                        overflowX='hidden'
                        whiteSpace='nowrap'
                        maxW='100%'
                        h='30px'
                        mb='24px'
                        justifyContent='center'
                        color='brand.800'
                        overflowY='hidden'
                    >
                        {category.vegan.subcategories.map((el, i) => (
                            <Tab
                                key={i}
                                minW='fit-content'
                                flexShrink={0}
                                role='button'
                                tabIndex={0}
                            >
                                {el.name}
                            </Tab>
                        ))}
                    </TabList>
                    <TabPanels maxW='100%' w='100%'>
                        <TabPanel p={0}>
                            <Box w='100%'>
                                <GeneralRecipes data={dataVeganRecipes} />
                            </Box>
                        </TabPanel>
                        <TabPanel p={0}>
                            <Box w='100%' overflowX='auto'>
                                <GeneralRecipes data={dataVeganRecipes} />
                            </Box>
                        </TabPanel>
                        <TabPanel p={0}>
                            <Box w='100%' overflowX='auto'>
                                <GeneralRecipes data={dataVeganRecipes} />
                            </Box>
                        </TabPanel>
                        <TabPanel p={0}>
                            <Box w='100%' overflowX='auto'>
                                <GeneralRecipes data={dataVeganRecipes} />
                            </Box>
                        </TabPanel>
                        <TabPanel p={0}>
                            <Box w='100%' overflowX='auto'>
                                <GeneralRecipes data={dataVeganRecipes} />
                            </Box>
                        </TabPanel>
                        <TabPanel p={0}>
                            <Box w='100%' overflowX='auto'>
                                <GeneralRecipes data={dataVeganRecipes} />
                            </Box>
                        </TabPanel>
                        <TabPanel p={0}>
                            <Box w='100%' overflowX='auto'>
                                <GeneralRecipes data={dataVeganRecipes} />
                            </Box>
                        </TabPanel>
                        <TabPanel p={0}>
                            <Box w='100%' overflowX='auto'>
                                <GeneralRecipes data={dataVeganRecipes} />
                            </Box>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                <Flex justifyContent='center' mt='16px'>
                    <ButtonLoadMore />
                </Flex>
            </Box>
            <Box>
                <hr />
                <SectionMixDesert />
            </Box>
        </>
    );
};
