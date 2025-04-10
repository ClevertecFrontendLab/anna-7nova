import React from 'react';
import { Route, Routes } from 'react-router';

import { MainSection } from '~/pages/MainSection';
import { SubCategoryPage } from '~/pages/SubCategoryPage';
import { VeganKitchen } from '~/pages/VeganKitchen';

export const AppRoutes: React.FC = () => {
    const navigationRoutes = [
        { path: '/', element: <MainSection /> },
        { path: '/:category', element: <VeganKitchen /> },
        { path: '/:category/:subcategory', element: <SubCategoryPage /> },
    ];
    return (
        <Routes>
            {navigationRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
            ))}
        </Routes>
    );
};
