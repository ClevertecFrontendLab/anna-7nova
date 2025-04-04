import { Link } from '@chakra-ui/react';
import React from 'react';

type AccordionLinkPropsType = {
    text: string;
};

export const CustomAccordionLink: React.FC<AccordionLinkPropsType> = ({
    text,
}: AccordionLinkPropsType) => (
    <Link
        href='#'
        borderLeft='1px'
        pl='11px'
        m='12px 0 12px 10px'
        borderColor='brand.300'
        textStyle='16px;'
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
