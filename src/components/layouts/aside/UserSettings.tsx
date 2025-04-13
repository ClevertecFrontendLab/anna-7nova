import { Box } from '@chakra-ui/react';
import React from 'react';

import { ButtonCircle } from '~/components/commonComponents/ButtonCircle';

import { UserNotifications } from '../header/Account/UserNotifications';

const UserSettings: React.FC = () => (
    <Box
        position='fixed'
        top='80px'
        right='0'
        as='aside'
        w='208px'
        h='calc(100vh - 80px)'
        bgColor='white'
        display='flex'
        flexDir='column'
        justifyContent='space-between'
    >
        <Box padding='24px 0 16px 38px' height='200px'>
            <UserNotifications style={{ flexDir: 'column', gap: '40px' }} />
        </Box>
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            height='208px'
            background='radial-gradient(50% 50% at 50% 50%, #c4ff61 0%, rgba(255, 255, 255, 0) 100%)'
        >
            <ButtonCircle title='Записать рецепт' iconId='add' />
        </Box>
    </Box>
);

export default UserSettings;
