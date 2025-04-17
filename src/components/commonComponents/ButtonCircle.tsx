import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import React from 'react';

import { IconSvg } from '~/assets/images/icons/IconSvg';

import { buttonContainer, iconButtonStyle } from '../styles/Footer.style';

type ButtonCirclePropsType = {
    title: string;
    iconId: string;
    isSelected: boolean;
    ariaLabel: string;
};

export const ButtonCircle: React.FC<ButtonCirclePropsType> = ({
    title,
    iconId,
    isSelected,
    ariaLabel,
}: ButtonCirclePropsType) => (
    <Flex role='group' sx={buttonContainer}>
        <IconButton
            isRound
            aria-label={ariaLabel}
            icon={<IconSvg iconId={iconId} viewBox='0 0 24 24' height='24' width='24' />}
            bg={isSelected ? 'black' : 'transparent'}
            color={isSelected ? 'white' : 'black'}
            m={isSelected ? '4px' : '0'}
            h={isSelected ? '40px' : '48px'}
            w={isSelected ? '40px' : '48px'}
            sx={iconButtonStyle}
        />
        <Box
            position='absolute'
            h='68px'
            w='68px'
            top='0'
            backgroundImage={
                isSelected
                    ? 'radial-gradient(62.52% 62.51% at 48.89% 37.5%, brand.300 0%, rgba(255, 255, 255, 0) 100%)'
                    : 'none'
            }
            zIndex={0}
        ></Box>
        <Text
            variant='greySmallText'
            fontWeight={isSelected ? 'bold' : '400'}
            color={isSelected ? 'black' : 'blackAlpha.700'}
            _groupHover={{
                fontWeight: 'bold',
                color: 'black',
            }}
            zIndex={1}
        >
            {title}
        </Text>
    </Flex>
);
