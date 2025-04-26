import { Avatar, Box, Flex, IconButton, Text } from '@chakra-ui/react';
import React from 'react';

import { ButtonIconUnCollapsed } from '~/components/commonComponents/button/ButtonIconUnCollapsed';
import { Rate } from '~/components/commonComponents/Rate';
import {
    blogContainer,
    containerRecipeFull,
    flexRowStartCenter,
} from '~/components/styles/Section.style';

import avatar1 from '../../../../assets/images/users/user_sergey.png';

export const Subscribe: React.FC = () => (
    <Box sx={containerRecipeFull}>
        <Box sx={blogContainer}>
            <Flex sx={flexRowStartCenter} gap='16px' h='100%'>
                <Avatar h='96px' w='96px' name='Аватар пользователя' src={avatar1} />
                <Flex flexDir='column' h='96px' w='100%'>
                    <Flex
                        flexDir='row-reverse'
                        justifyContent='space-between'
                        alignItems='stretch'
                        flexWrap='wrap'
                    >
                        <Text textAlign='end'>Автор рецепта</Text>
                        <Text textAlign='start' variant='userNameBig' flexGrow={1}>
                            {' '}
                            Сергей Разумов
                        </Text>
                    </Flex>
                    <Flex flexDir='column' justifyContent='space-between' flex='1'>
                        <Text variant='userNickName'>'@serge25' </Text>
                        <Flex justifyContent='space-between'>
                            <IconButton
                                variant='buttonSolidSmall'
                                icon={
                                    <ButtonIconUnCollapsed
                                        title='Подписаться'
                                        iconId='subscribe'
                                        width='12'
                                        height='12'
                                        variant='buttonTextUnCollapsedBlack'
                                    />
                                }
                                aria-label='Subscribe Button'
                            />
                            <Rate rate={{ subscribers: 125 }} />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    </Box>
);
