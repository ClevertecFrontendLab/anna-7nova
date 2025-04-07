import React from 'react';

import { CustomIconButton } from './CustomIconButton';

export const UserNotifications: React.FC = () => (
    <>
        <CustomIconButton ariaLabel='button icon pined' iconId='save' number={185} />
        <CustomIconButton ariaLabel='button icon like' iconId='people' number={589} />
        <CustomIconButton ariaLabel='button icon like' iconId='like' number={587} />
    </>
);
