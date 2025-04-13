import React from 'react';

import { Rate } from '~/components/commonComponents/Rate';

export type RateStylePropsType = {
    style?: { flexDir: 'column' | 'row'; gap: string };
};

export const UserNotifications: React.FC<RateStylePropsType> = ({ style }: RateStylePropsType) => (
    <>
        <Rate style={style} rate={{ save: 185, like: 587, people: 589 }} />
    </>
);
