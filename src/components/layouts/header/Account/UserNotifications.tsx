import React from 'react';

import like from '../../../../assets/images/icons/like.png';
import people from '../../../../assets/images/icons/people.png';
import pined from '../../../../assets/images/icons/pined.png';
import { CustomIconButton } from './CustomIconButton';

export const UserNotifications: React.FC = () => (
    <>
        <CustomIconButton ariaLabel='button icon pined' src={pined} number={185} />
        <CustomIconButton ariaLabel='button icon like' src={people} number={589} />
        <CustomIconButton ariaLabel='button icon like' src={like} number={587} />
    </>
);
