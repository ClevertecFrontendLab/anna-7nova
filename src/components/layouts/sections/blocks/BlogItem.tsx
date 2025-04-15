import { Flex, GridItem } from '@chakra-ui/react';
import React from 'react';

import { CustomCardBodyFull } from '../../../commonComponents/CustomCardBodyFull';
import { UserAccount, UserAccountPropsType } from '../../../commonComponents/UserAcount';

type BlogItemPropsType = {
    textBlog: string;
} & UserAccountPropsType;

export const BlogItem: React.FC<BlogItemPropsType> = ({
    avatar,
    userName,
    accountName,
    textBlog,
}: BlogItemPropsType) => (
    <GridItem
        bg='white'
        borderRadius='8px'
        p={{ base: '16px', xl: '24px' }}
        minW='180px'
        display='flex'
        flexDir='column'
        gap={{ base: '20px', lg: '16px', xl: '28px' }}
    >
        <Flex alignItems='center'>
            <UserAccount avatar={avatar} userName={userName} accountName={accountName} />
        </Flex>
        <CustomCardBodyFull text={textBlog} />
    </GridItem>
);
