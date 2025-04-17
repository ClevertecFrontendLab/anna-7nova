import { Avatar, Box, Flex, Grid, GridItem, IconButton, Text } from '@chakra-ui/react';
import React from 'react';

import { IconSvg } from '~/assets/images/icons/IconSvg';
import { ButtonCircle } from '~/components/commonComponents/ButtonCircle';
import { avatarContainer, boxHeader, gridContainer } from '~/components/styles/Footer.style';

import avatar from '../../../assets/images/avatar.png';

export const Footer: React.FC = () => (
    <>
        <Box as='footer' sx={boxHeader}>
            <Text variant='greyestSmallText'>Версия программы 03.25</Text>
            <Text variant='greySmallText'>
                Все права защищены, ученический файл, <br /> ©Клевер Технолоджи, 2025
            </Text>
            <IconButton
                border='none'
                bg='transparent'
                _hover={{ bg: 'brand.150', border: 'none' }}
                aria-label='Exit'
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
        <Grid as='footer' data-test-id='footer' sx={gridContainer}>
            <GridItem colSpan={1}>
                <ButtonCircle isSelected={true} title='Главная' iconId='home' ariaLabel='Home' />
            </GridItem>
            <GridItem colSpan={1}>
                <ButtonCircle isSelected={false} title='Поиск' iconId='search' ariaLabel='Search' />
            </GridItem>
            <GridItem colSpan={1}>
                <ButtonCircle isSelected={false} title='Записать' iconId='add' ariaLabel='Notice' />
            </GridItem>
            <GridItem colSpan={1}>
                <Flex sx={avatarContainer}>
                    <Avatar h='40px' w='40px' name='Аватар пользователя' src={avatar} m='4px' />
                    <Text variant='greySmallText'>Мой профиль</Text>
                </Flex>
            </GridItem>
        </Grid>
    </>
);
