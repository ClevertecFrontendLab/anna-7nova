import React from 'react';

import iconsSprite from './icon-sprite.svg';

type IconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
};

export const IconSvg: React.FC<IconPropsType> = ({
    iconId,
    width,
    height,
    viewBox,
}: IconPropsType) => (
    <svg
        width={width || '16'}
        height={height || '16'}
        viewBox={viewBox || '0 0 16 16'}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <use xlinkHref={`${iconsSprite}#${iconId}`} />
    </svg>
);
