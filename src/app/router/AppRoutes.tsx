import React from 'react';
import { Route, Routes } from 'react-router';

import { MainSection } from '~/pages/MainSection';
import { RecipeFullCard } from '~/pages/RecipeFullCard';
import { TheJuiciest } from '~/pages/TheJuiciest';
import { VeganKitchen } from '~/pages/VeganKitchen';

export type AppRoutesPropsType = {
    onFilterBtnClick: () => void;
    filterCheckboxHandle: (data: string) => void;
    filter: string[];
    addItemsAllergens: (item: string) => void;
};

export const AppRoutes: React.FC<AppRoutesPropsType> = ({
    onFilterBtnClick,
    filterCheckboxHandle,
    filter,
    addItemsAllergens,
}: AppRoutesPropsType) => {
    const navigationRoutes = [
        {
            path: '/',
            element: (
                <MainSection
                    addItemsAllergens={addItemsAllergens}
                    onFilterBtnClick={onFilterBtnClick}
                    filterCheckboxHandle={filterCheckboxHandle}
                    filter={filter}
                />
            ),
            name: 'Главная',
        },
        {
            path: '/the-juiciest',
            element: (
                <TheJuiciest
                    addItemsAllergens={addItemsAllergens}
                    onFilterBtnClick={onFilterBtnClick}
                    filterCheckboxHandle={filterCheckboxHandle}
                    filter={filter}
                />
            ),
            name: 'Самое сочное',
        },
        {
            path: '/:category/:subcategory',
            element: (
                <VeganKitchen
                    addItemsAllergens={addItemsAllergens}
                    onFilterBtnClick={onFilterBtnClick}
                    filterCheckboxHandle={filterCheckboxHandle}
                    filter={filter}
                />
            ),
        },
        { path: '/:category/:subcategory/:id', element: <RecipeFullCard /> },
    ];
    return (
        <Routes>
            {navigationRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
            ))}
        </Routes>
    );
};
