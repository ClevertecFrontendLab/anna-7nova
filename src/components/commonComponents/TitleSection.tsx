import { useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

type TitleSectionType = {
    title: string;
    fontWeight?: number;
    fontSize?: {
        base: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
};

export const TitleSection: React.FC<TitleSectionType> = ({
    title,
    fontWeight,
}: TitleSectionType) => {
    const fontSizeValue = useBreakpointValue({
        base: '24px',
        sm: '24px',
        md: '36px',
        lg: '48px',
    });
    const titleStyle = {
        fontSize: fontSizeValue,
        fontWeight: fontWeight || 500,
        margin: '16px 24px 24px 0',
    };
    return <h2 style={titleStyle}>{title}</h2>;
};
