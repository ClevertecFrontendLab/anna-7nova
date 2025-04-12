import { Heading } from '@chakra-ui/react';
import React from 'react';

type TitleSectionType = {
    title: string;
    size?: string;
};

export const TitleSection: React.FC<TitleSectionType> = ({ title, size }: TitleSectionType) => (
    <Heading as='h3' size={size || 'h3'}>
        {title}
    </Heading>
);
