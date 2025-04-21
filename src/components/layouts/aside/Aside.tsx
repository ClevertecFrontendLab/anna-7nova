import { Box } from '@chakra-ui/react';
import React from 'react';

import { boxFooterMobile } from '~/components/styles/Footer.style';
import {
    navDesktopContainer,
    navMobileBlur,
    navMobileContainer,
} from '~/components/styles/Section.style';

import { FooterDesktop } from '../footer/FooterDesktop';
import { NavMenu } from '../header/NavMenu';
import { NavigationMenu } from './NavigationMenu';
import { NavigationMenuDesktop } from './NavigationMenuDesktop';
import UserSettings from './UserSettings';

type AsidePropsType = {
    onClick: (categorySlug: string, subcategorySlug?: string) => void;
    menuIsOpen: boolean;
};

export const Aside: React.FC<AsidePropsType> = ({ onClick, menuIsOpen }: AsidePropsType) => (
    <>
        <Box as='aside' sx={navDesktopContainer}>
            <NavigationMenuDesktop onClick={onClick} />
            <UserSettings />
        </Box>
        {menuIsOpen && (
            <Box as='aside' sx={navMobileBlur}>
                <Box sx={navMobileContainer}>
                    <Box p='16px 20px 12px'>
                        <NavMenu />
                    </Box>
                    <NavigationMenu onClick={onClick} />
                    <Box as='footer' sx={boxFooterMobile}>
                        <FooterDesktop />
                    </Box>
                </Box>
            </Box>
        )}
    </>
);
