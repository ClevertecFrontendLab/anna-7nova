import { Link } from '@chakra-ui/react';
import React from 'react';

type AccordionLinkPropsType = {
    text: string;
    onClick: () => void;
    isSelected: boolean;
};

export const CustomAccordionLink: React.FC<AccordionLinkPropsType> = ({
    text,
    onClick,
    isSelected,
}: AccordionLinkPropsType) => (
    <Link
        onClick={onClick}
        outline='none'
        pl='11px'
        textStyle='16px'
        role='button'
        tabIndex={0}
        fontWeight={isSelected ? '700' : 'normal'}
        borderLeft={isSelected ? '8px' : '1px'}
        m={isSelected ? '12px 0 12px 3px' : '12px 0 12px 10px'}
        borderColor={isSelected ? 'brand.300' : 'brand.300'}
        _hover={{ color: 'black', outline: 'none' }}
    >
        {text}
    </Link>
);
