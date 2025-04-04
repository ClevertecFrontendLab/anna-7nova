import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import React from 'react';

export const NavMenu: React.FC = () => (
    <Breadcrumb
        as='nav'
        flexGrow={1}
        spacing='8px'
        separator={<ChevronRightIcon color='gray.800' />}
    >
        <BreadcrumbItem>
            <BreadcrumbLink href='#' color='blackAlpha.700'>
                Главная
            </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
            <BreadcrumbLink href='#' color='blackAlpha.700'>
                Веганская кухня
            </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
            <BreadcrumbLink href='#' color='black'>
                Вторые блюда
            </BreadcrumbLink>
        </BreadcrumbItem>
    </Breadcrumb>
);
