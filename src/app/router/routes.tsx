import { MainSection } from '~/pages/MainSection';
import { TheJuiciest } from '~/pages/TheJuiciest';
import { VeganKitchen } from '~/pages/VeganKitchen';

export const navigationRoutes = [
    { path: '/', element: <MainSection />, name: 'Главная' },
    { path: '/the-juiciest', element: <TheJuiciest />, name: 'Самое сочное' },
    { path: '/:category', element: <VeganKitchen /> }, //доработать этот момент
    { path: '/:category/:subcategory', element: <VeganKitchen /> },
    { path: '/:category/:subcategory/:id', element: <VeganKitchen /> }, //доработать этот момент
];
