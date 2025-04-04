import { Avatar, Flex, Text } from '@chakra-ui/react';
import React from 'react';

import avatar from '../../../../assets/images/avatar.png';

export const UserAccount: React.FC = () => (
    <>
        <Avatar size='48px' name='Аватар пользователя' src={avatar} />
        <Flex flexDir='column' mr='80px' ml='12px'>
            <Text>Екатерина Константинопольская</Text>
            <Text>@bake_and_pie</Text>
        </Flex>
    </>
);
