import { Box, Image, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

import logo from '../../../assets/images/logo.png';
import logoMobile from '../../../assets/images/logo_mobile.png';

export const Logo: React.FC = () => {
    const logoSrc = useBreakpointValue({
        base: logoMobile, // для мобильных устройств
        sm: logo, // для экранов шире 768px (sm - breakpoint для 768px)
    });
    const weight = useBreakpointValue({
        base: '48px', // для мобильных устройств
        sm: '260px', // для экранов шире 768px (sm - breakpoint для 768px)
    });
    return (
        <Box w={weight} ml='16px' alignContent='center'>
            <Image height='32px' src={logoSrc} alt='Логотип' />
        </Box>
    );
};
