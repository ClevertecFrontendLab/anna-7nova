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
    <GridItem bg='white' borderRadius='8px' p='24px' minW='180px'>
        <Flex mb='28px'>
            <UserAccount avatar={avatar} userName={userName} accountName={accountName} />
        </Flex>
        <CustomCardBodyFull text={textBlog} />
    </GridItem>
);
