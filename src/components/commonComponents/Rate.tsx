import { Flex } from '@chakra-ui/react';
import React from 'react';

import { CustomIconButton } from './CustomIconButton';

export type RateElementType = {
    like?: number;
    save?: number;
    people?: number;
};

export type RatePropsType = {
    rate: RateElementType | undefined;
    style?: { flexDir: 'column' | 'row'; gap: string };
    variant?: 'buttonTextNotification';
};

export const Rate: React.FC<RatePropsType> = ({ rate, style, variant }: RatePropsType) => {
    const saveValue =
        rate?.save !== undefined && rate?.save > 0 ? (
            <CustomIconButton
                ariaLabel='button icon save'
                iconId='save'
                number={rate.save}
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
        rate?.like !== undefined && rate?.like > 0 ? (
            <CustomIconButton
                ariaLabel='button icon like'
                iconId='like'
                number={rate.like}
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
