import { MainSection } from '~/pages/MainSection';
import { TheJuiciest } from '~/pages/TheJuiciest';
import { VeganKitchen } from '~/pages/VeganKitchen';

export const navigationRoutes = [
    { path: '/', element: <MainSection />, name: 'Главная' },
    { path: '/the-juiciest', element: <TheJuiciest />, name: 'Самое сочное' },
    { path: '/:category/:subcategory', element: <VeganKitchen /> },
];

export const routeNameByPath: Record<string, string> = navigationRoutes.reduce(
    (acc, route) => {
        if (route.name) acc[route.path] = route.name;
        return acc;
    },
    {} as Record<string, string>,
);
