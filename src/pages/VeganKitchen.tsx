import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { ButtonLoadMore } from '~/components/commonComponents/ButtonLoadMore';
import { category, MockDataSliderType } from '~/components/commonComponents/CategoryData';
import { TitleSectionMain } from '~/components/commonComponents/TitleSectionMain';
import { GeneralRecipes } from '~/components/layouts/sections/blocks/GeneralRecipes';
import { SectionMixDesert } from '~/components/layouts/sections/blocks/SectionMixDesert';
import { SearchSection } from '~/components/layouts/sections/SearchSection';

import {
    boxTitleAndSearchSecondary,
    flexRowCenter,
    tabListOverflowHidden,
} from '../components/styles/Section.style';
import mock from '../mocks/mock.json';

export const VeganKitchen: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    const [tabIndex, setTabIndex] = useState(0);

    // 1. Обновляем индекс таба при изменении URL
    useEffect(() => {
        if (pathnames[1]) {
            const index = category['vegan'].subcategories.findIndex(
                (el) => el.slug === pathnames[1],
            );
            setTabIndex(index !== -1 ? index : 0);
        }
    }, [pathnames]);

    // 2. При клике на таб — меняем URL
    const onChangeTabHandler = (index: number) => {
        setTabIndex(index);
        const sub = category['vegan'].subcategories[index];
        if (sub) {
            navigate(`/vegan/${sub.slug}`);
        }
    };
    //data
    const mockData = mock as Array<MockDataSliderType>;
    const sortedMockData = mockData.filter((el) => el.category.includes('vegan'));
    return (
        <>
            <Box sx={boxTitleAndSearchSecondary}>
                <TitleSectionMain subtitle='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.' />
                <SearchSection />
            </Box>
            <Box w='100%'>
                <Tabs index={tabIndex} onChange={onChangeTabHandler} variant='line' isLazy>
                    <TabList sx={tabListOverflowHidden}>
                        {category['vegan'].subcategories.map((el, i) => (
                            <Tab key={i}>{el.name}</Tab>
                        ))}
                    </TabList>
                    <TabPanels maxW='100%' w='100%'>
                        <TabPanel p={0}>
                            <Box>
                                <GeneralRecipes
                                    data={sortedMockData.filter((el) =>
                                        el.subcategory.some(
                                            (sub) => sub === 'snacks' || sub === 'warm-snacks',
                                        ),
                                    )}
                                />
                            </Box>
                        </TabPanel>
                        <TabPanel p={0}>
                            <Box>
                                <GeneralRecipes
                                    data={sortedMockData.filter((el) =>
                                        el.subcategory.includes('main-dish'),
                                    )}
                                />
                            </Box>
                        </TabPanel>
                        <TabPanel p={0}>
                            <Box>
                                <GeneralRecipes
                                    data={sortedMockData.filter((el) =>
                                        el.subcategory.includes('second-dish'),
                                    )}
                                />
                            </Box>
                        </TabPanel>
                        <TabPanel p={0}>
                            <Box>
                                <GeneralRecipes
                                    data={sortedMockData.filter((el) =>
                                        el.subcategory.includes('side-dishes'),
                                    )}
                                />
                            </Box>
                        </TabPanel>
                        <TabPanel p={0}>
                            <Box>
                                <GeneralRecipes
                                    data={sortedMockData.filter((el) =>
                                        el.subcategory.includes('dessert'),
                                    )}
                                />
                            </Box>
                        </TabPanel>
                        <TabPanel p={0}>
                            <Box>
                                <GeneralRecipes
                                    data={sortedMockData.filter((el) =>
                                        el.subcategory.includes('pies'),
                                    )}
                                />
                            </Box>
                        </TabPanel>
                        <TabPanel p={0}>
                            <Box>
                                <GeneralRecipes
                                    data={sortedMockData.filter((el) =>
                                        el.subcategory.includes('raw-food-dishes'),
                                    )}
                                />
                            </Box>
                        </TabPanel>
                        <TabPanel p={0}>
                            <Box>
                                <GeneralRecipes
                                    data={sortedMockData.filter((el) =>
                                        el.subcategory.includes('drinks'),
                                    )}
                                />
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
