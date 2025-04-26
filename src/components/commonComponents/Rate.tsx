import { Flex } from '@chakra-ui/react';
import React from 'react';

import { CustomIconButton } from './CustomIconButton';

export type RateElementType = {
    likes?: number;
    bookmarks?: number;
    people?: number;
    subscribers?: number;
};

export type RatePropsType = {
    rate: RateElementType | undefined;
    style?: { flexDir: 'column' | 'row'; gap: string };
    variant?: 'buttonTextNotification';
    width?: string;
    height?: string;
};

export const Rate: React.FC<RatePropsType> = ({
    rate,
    style,
    variant,
    width,
    height,
}: RatePropsType) => {
    const saveValue =
        rate?.bookmarks !== undefined && rate?.bookmarks > 0 ? (
            <CustomIconButton
                ariaLabel='button icon save'
                iconId='save'
                number={rate.bookmarks}
                variant={variant}
                width={width}
                height={height}
            />
        ) : null;
    const peopleValue =
        rate?.people !== undefined && rate?.people > 0 ? (
            <CustomIconButton
                ariaLabel='button icon people'
                iconId='people'
                number={rate.people}
                variant={variant}
                width={width}
                height={height}
            />
        ) : null;
    const likesValue =
        rate?.likes !== undefined && rate?.likes > 0 ? (
            <CustomIconButton
                ariaLabel='button icon like'
                iconId='like'
                number={rate.likes}
                variant={variant}
                width={width}
                height={height}
            />
        ) : null;
    const subscribersValue =
        rate?.subscribers !== undefined && rate?.subscribers > 0 ? (
            <CustomIconButton
                ariaLabel='button icon like'
                iconId='subscribers'
                number={rate.subscribers}
                variant={variant}
                width='12'
                height='12'
                viewBox='0 0 12 12'
            />
        ) : null;
    return (
        <Flex flexDir={style?.flexDir} gap={style?.gap}>
            {saveValue}
            {peopleValue}
            {likesValue}
            {subscribersValue}
        </Flex>
    );
};
