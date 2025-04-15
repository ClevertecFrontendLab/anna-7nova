import React from 'react';
import { Route, Routes } from 'react-router';

import { navigationRoutes } from './routes';

export const AppRoutes: React.FC = () => (
    <Routes>
        {navigationRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
        ))}
    </Routes>
);
