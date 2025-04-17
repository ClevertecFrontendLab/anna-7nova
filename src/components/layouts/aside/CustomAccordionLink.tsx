import { Link } from '@chakra-ui/react';
import React from 'react';

import { accordionLink } from '~/components/styles/Aside.style';

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
        role='button'
        tabIndex={0}
        fontWeight={isSelected ? '700' : '500'}
        borderLeft={isSelected ? '8px' : '1px'}
        m={isSelected ? '12px 0 12px 3px' : '12px 0 12px 10px'}
        sx={accordionLink}
    >
        {text}
    </Link>
);
