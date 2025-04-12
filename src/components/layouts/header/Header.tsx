import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex, Hide, IconButton, Show, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

import avatar from '../../../assets/images/avatar.png';
import { UserAccount } from '../../commonComponents/UserAcount';
import { UserNotifications } from './Account/UserNotifications';
import { Logo } from './Logo';
import { NavMenu } from './NavMenu';

export const Header: React.FC = () => {
    const height = useBreakpointValue({
        base: '64px',
        md: '80px',
    });
    return (
        <Flex
            as='header'
            position='fixed'
            w='100%'
            h={height}
            bgColor='brand.50'
            alignItems='center'
            zIndex='1'
        >
            <Logo />
            <Hide below='md'>
                <Flex mr='70px' flexGrow={1} justifyContent='space-between' alignItems='center'>
                    <NavMenu />
                    <UserAccount
                        avatar={avatar}
                        userName='Екатерина Константинопольская'
                        accountName='@bake_and_pie'
                    />
                </Flex>
            </Hide>
            <Show below='md'>
                <Flex flexGrow={1} justifyContent='flex-end' alignItems='center' gap='12px'>
                    <UserNotifications />
                    <IconButton
                        variant='ghost'
                        aria-label='Mobile menu'
                        icon={<HamburgerIcon />}
                        size='lg'
                        mr='5px'
                    />
                </Flex>
            </Show>
        </Flex>
    );
};
