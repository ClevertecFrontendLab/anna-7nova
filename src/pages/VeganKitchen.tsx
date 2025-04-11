import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';

import { category } from '~/components/commonComponents/category';
import { dataVeganRecipes } from '~/components/commonComponents/dataGeneralRecipes';
import { TitleSectionMain } from '~/components/commonComponents/TitleSectionMain';
import { GeneralRecipes } from '~/components/layouts/sections/blocks/GeneralRecipes';
import { SearchSection } from '~/components/layouts/sections/SearchSection';

export const VeganKitchen: React.FC = () => (
    <>
        <TitleSectionMain subtitle='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.' />
        <SearchSection />
        <Tabs>
            <TabList justifyContent='center' color='brand.800'>
                {category.vegan.subcategories.map((el) => (
                    <Tab>{el.name}</Tab>
                ))}
            </TabList>
            <TabPanels>
                <TabPanel>
                    <p>временно не заполнено</p>
                </TabPanel>
                <TabPanel>
                    <p>временно не заполнено</p>
                </TabPanel>
                <TabPanel>
                    <GeneralRecipes data={dataVeganRecipes} />
                </TabPanel>
                <TabPanel>
                    <p>временно не заполнено</p>
                </TabPanel>
                <TabPanel>
                    <p>временно не заполнено</p>
                </TabPanel>
                <TabPanel>
                    <p>временно не заполнено</p>
                </TabPanel>
                <TabPanel>
                    <p>временно не заполнено</p>
                </TabPanel>
                <TabPanel>
                    <p>временно не заполнено</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </>
);
