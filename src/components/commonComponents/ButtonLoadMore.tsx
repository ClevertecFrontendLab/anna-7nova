import { Button } from '@chakra-ui/react';
import React from 'react';

export const ButtonLoadMore: React.FC = () => (
    <Button
        p='8px 16px'
        h='40px'
        bg='brand.400'
        _hover={{ bg: 'brand.600', border: 'none' }}
        color='black'
    >
        Загрузить еще
    </Button>
);
