import { Box } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';

import { NavigationMenu } from './NavigationMenu';

export type NavigationMenuType = {
    onClick: (categorySlug: string, subcategorySlug?: string) => void;
};

export const NavigationMenuDesktop: React.FC<NavigationMenuType> = ({
    onClick,
}: NavigationMenuType) => {
    //scroll
    const scrollRef = useRef<HTMLDivElement>(null);
    const [hasOverflow, setHasOverflow] = useState(false);
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const checkOverflow = () => {
            setHasOverflow(el.scrollHeight > el.clientHeight);
        };
        checkOverflow(); // проверить на старте
        const resizeObserver = new ResizeObserver(() => {
            checkOverflow();
        });
        resizeObserver.observe(el);
        // Очистка при размонтировании
        return () => {
            resizeObserver.disconnect();
        };
    }, []);
    //scroll

    return (
        <Box
            as='aside'
            h='100%'
            w='100%'
            overflowY='auto'
            borderRadius='12px'
            ref={scrollRef}
            boxShadow={
                hasOverflow
                    ? '0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    : 'none'
            }
            sx={{
                '&::-webkit-scrollbar': {
                    width: '8px',
                },
                '&::-webkit-scrollbar-track': {
                    background: 'blackAlpha.50',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: 'blackAlpha.300',
                    borderRadius: '8px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                    background: 'blackAlpha.300',
                },
            }}
        >
            <NavigationMenu onClick={onClick} />
        </Box>
    );
};
