import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import React from 'react';

import avatar from '../../../assets/images/avatar.png';
import { UserAccount } from '../../commonComponents/UserAcount';
import {
    flexBetweenCenterGrowDesktopVisible,
    flexEndCenterGrowMobileVisible,
    flexHeader,
} from '../../styles/Header.style';
import { UserNotifications } from './Account/UserNotifications';
import { Logo } from './Logo';
import { NavMenu } from './NavMenu';

export const Header: React.FC = () => (
    <Flex data-test-id='header' as='header' sx={flexHeader}>
        <Logo />
        <Box sx={flexBetweenCenterGrowDesktopVisible}>
            <NavMenu />
            <UserAccount
                avatar={avatar}
                userName='Екатерина Константинопольская'
                accountName='@bake_and_pie'
            />
        </Box>
        <Box sx={flexEndCenterGrowMobileVisible}>
            <UserNotifications />
            <IconButton
                variant='ghost'
                aria-label='Mobile menu'
                icon={<HamburgerIcon />}
                size='lg'
                mr='5px'
            />
        </Box>
    </Flex>
);
