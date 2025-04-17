import { GridItem } from '@chakra-ui/react';
import React from 'react';

import { gridCardBlog } from '~/components/styles/Section.style';

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
    <GridItem sx={gridCardBlog}>
        <UserAccount avatar={avatar} userName={userName} accountName={accountName} />
        <CustomCardBodyFull text={textBlog} />
    </GridItem>
);
