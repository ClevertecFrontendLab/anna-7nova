import { useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

type TitleSectionType = {
    title: string;
};

export const TitleSection: React.FC<TitleSectionType> = ({ title }: TitleSectionType) => {
    const fontSize = useBreakpointValue({
        base: '24px',
        sm: '24px',
        md: '36px',
        lg: '48px',
    });
    const titleStyle = {
        fontSize: fontSize,
        fontWeight: '500',
        margin: '16px 0 24px 0',
    };
    return <h2 style={titleStyle}>{title}</h2>;
};
