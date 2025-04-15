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
        <Avatar
            h={{ base: '32px', md: '48px' }}
            w={{ base: '32px', md: '48px' }}
            name='Аватар пользователя'
            src={avatar}
        />
        <Flex flexDir='column' ml='12px'>
            <Text noOfLines={1} variant='userName'>
                {userName}
            </Text>
            <Text variant='userNickName'>{accountName} </Text>
        </Flex>
    </>
);
