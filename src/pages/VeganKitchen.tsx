import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';

import { ButtonMore } from '~/components/commonComponents/ButtonMore';
import { category } from '~/components/commonComponents/Category';
import { dataVeganRecipes } from '~/components/commonComponents/DataGeneralRecipes';
import { TitleSectionMain } from '~/components/commonComponents/TitleSectionMain';
import { GeneralRecipes } from '~/components/layouts/sections/blocks/GeneralRecipes';
import { SectionMixDesert } from '~/components/layouts/sections/blocks/SectionMixDesert';
import { SearchSection } from '~/components/layouts/sections/SearchSection';

export const VeganKitchen: React.FC = () => (
    <>
        <Box display='flex' flexDir='column' alignItems='center'>
            <TitleSectionMain subtitle='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.' />
            <SearchSection />
        </Box>
        <Box w='100%'>
            <Tabs variant='line' isLazy>
                <TabList
                    overflowX='hidden'
                    whiteSpace='nowrap'
                    maxW='100%'
                    justifyContent='center'
                    color='brand.800'
                    overflowY='hidden'
                >
                    {category.vegan.subcategories.map((el, i) => (
                        <Tab key={i} minW='fit-content' flexShrink={0}>
                            {el.name}
                        </Tab>
                    ))}
                </TabList>
                <TabPanels maxW='100%' w='100%'>
                    <TabPanel>
                        <p>временно не заполнено</p>
                    </TabPanel>
                    <TabPanel>
                        <p>временно не заполнено</p>
                    </TabPanel>
                    <TabPanel>
                        <Box w='100%' overflowX='auto'>
                            <GeneralRecipes data={dataVeganRecipes} />
                        </Box>
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
            <Flex justifyContent='center'>
                <ButtonMore text='Загрузить еще' onClick={() => {}} />
            </Flex>
        </Box>
        <Box>
            <SectionMixDesert />
        </Box>
    </>
);
