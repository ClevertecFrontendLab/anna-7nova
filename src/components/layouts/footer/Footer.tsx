import { Box } from '@chakra-ui/react';
import React from 'react';

import { boxFooter } from '~/components/styles/Footer.style';

import { FooterDesktop } from './FooterDesktop';
import { FooterMobile } from './FooterMobile';

export const Footer: React.FC = () => (
    <>
        <Box as='footer' sx={boxFooter}>
            <FooterDesktop />
        </Box>
        <FooterMobile />
    </>
);
