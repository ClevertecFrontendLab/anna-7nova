import { Flex, IconButton, Text } from '@chakra-ui/react';
import React from 'react';

import { IconSvg } from '~/assets/images/icons/IconSvg';

export const FooterDesktop: React.FC = () => (
    <>
        <>
            <Text variant='greyestSmallText'>Версия программы 03.25</Text>
            <Text variant='greySmallText'>
                Все права защищены, ученический файл, <br /> ©Клевер Технолоджи, 2025
            </Text>
            <IconButton
                border='none'
                bg='transparent'
                _hover={{ bg: 'brand.150', border: 'none' }}
                aria-label='Exit'
                icon={
                    <Flex alignItems='center'>
                        <IconSvg iconId='exit' width='16px' height='16px' />
                        <Text variant='buttonTextSmallest' ml='6px'>
                            Выйти
                        </Text>
                    </Flex>
                }
            />
        </>
    </>
);
