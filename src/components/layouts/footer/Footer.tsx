import { Avatar, Box, Flex, Grid, GridItem, IconButton, Text } from '@chakra-ui/react';
import React from 'react';

import { IconSvg } from '~/assets/images/icons/IconSvg';
import { ButtonCircle } from '~/components/commonComponents/ButtonCircle';

import avatar from '../../../assets/images/avatar.png';

export const Footer: React.FC = () => (
    <>
        <Box
            as='footer'
            position='fixed'
            bottom='0'
            display={{ base: 'none', md: 'flex' }}
            flexDir='column'
            alignItems='start'
            gap='16px'
            maxW='256px'
            w='256px'
            h='144px'
            p='0 24px'
            bgColor='white'
        >
            <Text color='blackAlpha.400' fontWeight='500' fontSize='12px' lineHeight='133%'>
                Версия программы 03.25
            </Text>
            <Text color='blackAlpha.700' fontWeight='400' fontSize='12px' lineHeight='133%'>
                Все права защищены, ученический файл, <br /> ©Клевер Технолоджи, 2025
            </Text>
            <IconButton
                border='none'
                bg='transparent'
                h='16px'
                _hover={{ bg: 'brand.150', border: 'none' }}
                borderColor='blackAlpha.500'
                aria-label='Save Button'
                icon={
                    <Flex alignItems='center'>
                        <IconSvg iconId='exit' width='16px' height='16px' />
                        <Text variant='buttonTextSmallest' ml='6px'>
                            Выйти
                        </Text>
                    </Flex>
                }
            />
        </Box>
        <Grid
            as='footer'
            data-test-id='footer'
            position='fixed'
            bottom='0'
            display={{ base: 'grid', md: 'none' }}
            templateColumns='repeat(4, 1fr)'
            bgColor='brand.50'
            w='100%'
            h='84px'
        >
            <GridItem colSpan={1}>
                <ButtonCircle isSelected={true} title='Главная' iconId='home' />
            </GridItem>
            <GridItem colSpan={1}>
                <ButtonCircle isSelected={false} title='Поиск' iconId='search' />
            </GridItem>
            <GridItem colSpan={1}>
                <ButtonCircle isSelected={false} title='Записать' iconId='add' />
            </GridItem>
            <GridItem colSpan={1}>
                <Flex
                    h='100%'
                    p='10px 0'
                    flexDir='column'
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <Avatar h='40px' w='40px' name='Аватар пользователя' src={avatar} m='4px' />
                    <Text variant='buttonMobileMenu'>Мой профиль</Text>
                </Flex>
            </GridItem>
        </Grid>
    </>
);
