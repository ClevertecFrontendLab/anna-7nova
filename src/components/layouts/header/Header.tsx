import { HamburgerIcon, SmallCloseIcon } from '@chakra-ui/icons';
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

type HeaderPropsType = {
    onBurgerBtnClick: () => void;
    menuIsOpen: boolean;
};
export const Header: React.FC<HeaderPropsType> = ({
    onBurgerBtnClick,
    menuIsOpen,
}: HeaderPropsType) => (
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
            {!menuIsOpen && <UserNotifications />}
            <IconButton
                variant='ghost'
                _focus={{ outline: 'none', boxShadow: 'none' }}
                _hover={{ outline: 'none', bg: 'transparent', border: 'none' }}
                _selected={{ outline: 'none', bg: 'transparent', border: 'none' }}
                _focusVisible={{ outline: 'none', boxShadow: 'none' }}
                _active={{ outline: 'none', bg: 'transparent', border: 'none', boxShadow: 'none' }}
                aria-label='Mobile menu'
                onClick={onBurgerBtnClick}
                icon={menuIsOpen ? <SmallCloseIcon /> : <HamburgerIcon />}
                size='lg'
                mr='5px'
            />
        </Box>
    </Flex>
);
