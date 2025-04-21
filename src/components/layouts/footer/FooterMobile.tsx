import { Avatar, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';

import { ButtonCircle } from '~/components/commonComponents/ButtonCircle';
import { avatarContainer, gridContainer } from '~/components/styles/Footer.style';

import avatar from '../../../assets/images/avatar.png';

export const FooterMobile: React.FC = () => (
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
);
