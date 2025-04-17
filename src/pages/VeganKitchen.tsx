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

import {
    boxTitleAndSearchSecondary,
    flexRowCenter,
    tabListOverflowHidden,
} from '../components/styles/Section.style';

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
            <Box sx={boxTitleAndSearchSecondary}>
                <TitleSectionMain subtitle='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.' />
                <SearchSection />
            </Box>
            <Box w='100%'>
                <Tabs index={tabIndex} onChange={handleTabChange} variant='line' isLazy>
                    <TabList sx={tabListOverflowHidden}>
                        {category.vegan.subcategories.map((el, i) => (
                            <Tab key={i}>{el.name}</Tab>
                        ))}
                    </TabList>
                    <TabPanels maxW='100%' w='100%'>
                        <TabPanel p={0}>
                            <Box>
                                <GeneralRecipes data={dataVeganRecipes} />
                            </Box>
                        </TabPanel>
                        <TabPanel p={0}>
                            <Box>
                                <GeneralRecipes data={dataVeganRecipes} />
                            </Box>
                        </TabPanel>
                        <TabPanel p={0}>
                            <Box>
                                <GeneralRecipes data={dataVeganRecipes} />
                            </Box>
                        </TabPanel>
                        <TabPanel p={0}>
                            <Box>
                                <GeneralRecipes data={dataVeganRecipes} />
                            </Box>
                        </TabPanel>
                        <TabPanel p={0}>
                            <Box>
                                <GeneralRecipes data={dataVeganRecipes} />
                            </Box>
                        </TabPanel>
                        <TabPanel p={0}>
                            <Box>
                                <GeneralRecipes data={dataVeganRecipes} />
                            </Box>
                        </TabPanel>
                        <TabPanel p={0}>
                            <Box>
                                <GeneralRecipes data={dataVeganRecipes} />
                            </Box>
                        </TabPanel>
                        <TabPanel p={0}>
                            <Box>
                                <GeneralRecipes data={dataVeganRecipes} />
                            </Box>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                <Flex sx={flexRowCenter}>
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
