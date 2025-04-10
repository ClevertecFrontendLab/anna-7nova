import { Box, Flex, Hide, Show, Text } from '@chakra-ui/react';
import React from 'react';

import { BlogCooking } from '~/components/commonComponents/BlogCooking';
import { ButtonMore } from '~/components/commonComponents/ButtonMore';
import { TitleSection } from '~/components/commonComponents/TitleSection';
import { GeneralRecipes } from '~/components/layouts/sections/blocks/GeneralRecipes';
import { SectionMix } from '~/components/layouts/sections/blocks/SectionMix';
import { SearchSection } from '~/components/layouts/sections/SearchSection';

export const VeganKitchen: React.FC = () => (
    <>
        <SearchSection />
        <Box w='100%'>
            <Flex justifyContent='space-between' alignItems='center'>
                <TitleSection title='Самое сочное ' />
                <Hide below='md'>
                    <ButtonMore text='Вся подборка' />
                </Hide>
            </Flex>
            <GeneralRecipes />
            <Show below='md'>
                <Box w='100%' display='flex' justifyContent='center' mt='12px'>
                    <ButtonMore text='Вся подборка' />
                </Box>
            </Show>
        </Box>
        <Box w='100%' bg='brand.300' borderRadius='16px' p='24px'>
            <Flex justifyContent='space-between' alignItems='center'>
                <TitleSection title='Кулинарные блоги' fontWeight={400} />
                <Hide below='md'>
                    <ButtonMore text='Все авторы' bg='brand.300' />
                </Hide>
            </Flex>
            <BlogCooking />
            <Show below='md'>
                <Box w='100%' display='flex' justifyContent='center' mt='12px'>
                    <ButtonMore text='Все авторы' bg='brand.300' />
                </Box>
            </Show>
        </Box>
        <Box w='100%'>
            <Flex
                justifyContent='space-between'
                alignItems={{ base: 'flex-start', lg: 'center' }}
                flexDir={{ base: 'column', lg: 'row' }}
            >
                <TitleSection title='Веганская кухня' />
                <Text maxW='100%' minW='328px' maxWidth='668px'>
                    Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                    вегетарианскую диету и готовить вкусные вегетарианские блюда.
                </Text>
            </Flex>
            <SectionMix />
        </Box>
    </>
);
