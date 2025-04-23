import { Flex } from '@chakra-ui/react';
import React from 'react';

import { CustomIconButton } from './CustomIconButton';

export type RateElementType = {
    likes?: number;
    bookmarks?: number;
    people?: number;
};

export type RatePropsType = {
    rate: RateElementType | undefined;
    style?: { flexDir: 'column' | 'row'; gap: string };
    variant?: 'buttonTextNotification';
};

export const Rate: React.FC<RatePropsType> = ({ rate, style, variant }: RatePropsType) => {
    const saveValue =
        rate?.bookmarks !== undefined && rate?.bookmarks > 0 ? (
            <CustomIconButton
                ariaLabel='button icon save'
                iconId='save'
                number={rate.bookmarks}
                variant={variant}
            />
        ) : null;
    const peopleValue =
        rate?.people !== undefined && rate?.people > 0 ? (
            <CustomIconButton
                ariaLabel='button icon people'
                iconId='people'
                number={rate.people}
                variant={variant}
            />
        ) : null;
    const likesValue =
        rate?.likes !== undefined && rate?.likes > 0 ? (
            <CustomIconButton
                ariaLabel='button icon like'
                iconId='like'
                number={rate.likes}
                variant={variant}
            />
        ) : null;
    return (
        <Flex flexDir={style?.flexDir} gap={style?.gap}>
            {saveValue}
            {peopleValue}
            {likesValue}
        </Flex>
    );
};
