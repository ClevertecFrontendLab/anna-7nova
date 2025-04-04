import { Flex, IconButton, Image, Text } from '@chakra-ui/react';
import React from 'react';

type IconButtonPropsType = {
    ariaLabel: string;
    src: string;
    number: number;
};

export const CustomIconButton: React.FC<IconButtonPropsType> = ({
    ariaLabel,
    src,
    number,
}: IconButtonPropsType) => (
    <IconButton
        variant='ghost'
        aria-label={ariaLabel}
        icon={
            <Flex alignItems='center' m='4px 8px'>
                <Image src={src} alt='button icon like' boxSize='12px' />
                <Text color='brand.600' ml='6px'>
                    {number}
                </Text>
            </Flex>
        }
    />
);
