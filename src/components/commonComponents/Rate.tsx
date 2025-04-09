import { Flex } from '@chakra-ui/react';
import React from 'react';

import { CustomIconButton } from '../layouts/header/Account/CustomIconButton';

export type RateElementType = {
    like?: number;
    save?: number;
    people?: number;
};

export type RatePropsType = {
    rate: RateElementType | undefined;
};

export const Rate: React.FC<RatePropsType> = ({ rate }: RatePropsType) => {
    const saveValue =
        rate?.save !== undefined && rate?.save > 0 ? (
            <CustomIconButton ariaLabel='button icon save' iconId='save' number={rate.save} />
        ) : null;
    const peopleValue =
        rate?.people !== undefined && rate?.people > 0 ? (
            <CustomIconButton ariaLabel='button icon people' iconId='people' number={rate.people} />
        ) : null;
    const likesValue =
        rate?.like !== undefined && rate?.like > 0 ? (
            <CustomIconButton ariaLabel='button icon like' iconId='like' number={rate.like} />
        ) : null;
    return (
        <Flex>
            {saveValue}
            {peopleValue}
            {likesValue}
        </Flex>
    );
};
