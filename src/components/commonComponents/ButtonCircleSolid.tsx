import { Flex, IconButton, Text } from '@chakra-ui/react';
import React from 'react';

import { IconSvg } from '~/assets/images/icons/IconSvg';

import { iconButton } from '../styles/Aside.style';
import { buttonContainer } from '../styles/Footer.style';

type ButtonCirclePropsType = {
    title: string;
    iconId: string;
};

export const ButtonCircleSolid: React.FC<ButtonCirclePropsType> = ({
    title,
    iconId,
}: ButtonCirclePropsType) => (
    <Flex role='group' sx={buttonContainer}>
        <IconButton
            isRound
            aria-label='Notice'
            icon={<IconSvg iconId={iconId} width='24px' height='24px' viewBox='0 0 24 24' />}
            sx={iconButton}
        />
        <Text
            variant='greySmallText'
            pt='12px'
            _groupHover={{
                fontWeight: 'bold',
                color: 'black',
            }}
        >
            {title}
        </Text>
    </Flex>
);
