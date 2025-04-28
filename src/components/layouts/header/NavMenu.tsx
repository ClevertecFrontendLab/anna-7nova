import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import React from 'react';
import { NavLink, useLocation } from 'react-router';

import { category } from '~/components/commonComponents/CategoryData';

import mock from '../../../mocks/mock.json';

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

const recipeTitleById: Record<string, string> = mock.reduce(
    (acc, recipe) => {
        acc[recipe.id] = recipe.title;
        return acc;
    },
    {} as Record<string, string>,
);

export const NavMenu: React.FC = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    return (
        <Breadcrumb
            separator={<ChevronRightIcon color='gray.800' />}
            sx={{
                '& > ol': {
                    display: 'flex',
                    flexWrap: 'wrap',
                    maxWidth: '100%',
                },
            }}
        >
            <BreadcrumbItem whiteSpace='nowrap'>
                <BreadcrumbLink
                    as={NavLink}
                    to='/'
                    color={pathnames.length > 0 ? 'blackAlpha.700' : 'black'}
                    whiteSpace='nowrap'
                >
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>
            {pathnames.map((el, index) => {
                const isLast = index === pathnames.length - 1;
                const routeTo = `/${pathnames.slice().join('/')}`;
                const categoryLabel = categoryNameBySlug[el];
                const label = categoryLabel || recipeTitleById[el] || decodeURIComponent(el);
                return (
                    <BreadcrumbItem key={index} isCurrentPage={isLast} whiteSpace='nowrap'>
                        <BreadcrumbLink
                            as={NavLink}
                            to={routeTo}
                            color={isLast ? 'black' : 'blackAlpha.700'}
                            whiteSpace='nowrap'
                            display='inline-block'
                            maxW='100%'
                            textOverflow='wrap'
                            overflow='none'
                        >
                            {label}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
};
