import { Box } from '@chakra-ui/react';
import React from 'react';

import { ButtonCircleSolid } from '~/components/commonComponents/ButtonCircleSolid';
import {
    boxStickerContainer,
    shadow,
    userSettingsContainer,
} from '~/components/styles/Aside.style';

import { UserNotifications } from '../header/Account/UserNotifications';

const UserSettings: React.FC = () => (
    <Box as='aside' sx={userSettingsContainer}>
        <Box sx={boxStickerContainer}>
            <UserNotifications
                style={{ flexDir: 'column', gap: '40px' }}
                variant='buttonTextNotification'
            />
        </Box>
        <Box sx={shadow}>
            <ButtonCircleSolid title='Записать рецепт' iconId='add' />
        </Box>
    </Box>
);

export default UserSettings;
