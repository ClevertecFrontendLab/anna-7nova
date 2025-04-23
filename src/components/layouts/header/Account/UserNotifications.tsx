import React from 'react';

import { Rate } from '~/components/commonComponents/Rate';

export type RateStylePropsType = {
    style?: {
        flexDir: 'column' | 'row';
        gap: string;
    };
    variant?: 'buttonTextNotification';
};

export const UserNotifications: React.FC<RateStylePropsType> = ({
    style,
    variant,
}: RateStylePropsType) => (
    <>
        <Rate style={style} rate={{ bookmarks: 185, likes: 587, people: 589 }} variant={variant} />
    </>
);
