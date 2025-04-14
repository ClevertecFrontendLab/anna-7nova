import { Link } from '@chakra-ui/react';
import React from 'react';

type AccordionLinkPropsType = {
    text: string;
    onClick: () => void;
};

export const CustomAccordionLink: React.FC<AccordionLinkPropsType> = ({
    text,
    onClick,
}: AccordionLinkPropsType) => (
    <Link
        onClick={onClick}
        borderLeft='1px'
        outline='none'
        pl='11px'
        m='12px 0 12px 10px'
        borderColor='brand.300'
        textStyle='16px'
        role='button'
        tabIndex={0}
        _focus={{
            fontWeight: '700',
            borderLeft: '8px',
            m: '12px 0 12px 3px',
            borderColor: 'brand.300',
        }}
        _hover={{ color: 'black', outline: 'none' }}
    >
        {text}
    </Link>
);
