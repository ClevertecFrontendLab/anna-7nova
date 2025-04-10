import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import React from 'react';
import { NavLink, useLocation } from 'react-router';

import { category } from '~/components/commonComponents/category';

const categoryNameBySlug: Record<string, string> = Object.values(category).reduce(
    (acc, item) => {
        acc[item.slug] = item.category;
        item.subcategories?.forEach((sub) => {
            acc[sub.slug] = sub.name;
        });
        return acc;
    },
    {} as Record<string, string>,
);

export const NavMenu: React.FC = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    return (
        <Breadcrumb
            as='nav'
            flexGrow={1}
            spacing='8px'
            separator={<ChevronRightIcon color='gray.800' />}
        >
            <BreadcrumbItem>
                <BreadcrumbLink
                    as={NavLink}
                    to='/'
                    color={pathnames.length > 0 ? 'blackAlpha.700' : 'black'}
                >
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>

            {pathnames.map((slug, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                const label = categoryNameBySlug[slug] || decodeURIComponent(slug);

                return (
                    <BreadcrumbItem key={routeTo} isCurrentPage={isLast}>
                        <BreadcrumbLink
                            as={NavLink}
                            to={routeTo}
                            color={isLast ? 'black' : 'blackAlpha.700'}
                        >
                            {label}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
};
