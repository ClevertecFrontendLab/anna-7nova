import { Avatar, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export type UserAccountPropsType = {
    avatar: string;
    userName: string;
    accountName: string;
};

export const UserAccount: React.FC<UserAccountPropsType> = ({
    avatar,
    userName,
    accountName,
}: UserAccountPropsType) => (
    <>
        <Avatar size='48px' name='Аватар пользователя' src={avatar} />
        <Flex flexDir='column' mr='80px' ml='12px'>
            <Text noOfLines={1}>{userName}</Text>
            <Text>{accountName}</Text>
        </Flex>
    </>
);
