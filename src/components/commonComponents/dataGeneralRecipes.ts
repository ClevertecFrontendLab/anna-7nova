import { blockNewReciepes } from './blocksImages';
import { category, PodCategoryType } from './category';

export type dataGeneralRecipesType = {
    rate: { save?: number; like?: number };
    title: string;
    text: string;
    src: string;
    sticker: PodCategoryType;
};

export const dataGeneralRecipes: Array<dataGeneralRecipesType> = [
    {
        rate: { save: 85, like: 152 },
        title: 'Кнели со спагетти',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        src: blockNewReciepes.kneli,
        sticker: category.secondMeal,
    },
    {
        rate: { save: 159, like: 257 },
        title: 'Пряная ветчина по итальянски',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        src: blockNewReciepes.vetchina,
        sticker: category.secondMeal,
    },
    {
        rate: { save: 258, like: 342 },
        title: 'Лапша с курицей и шафраном',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        src: blockNewReciepes.lapsha,
        sticker: category.secondMeal,
    },
    {
        rate: { save: 124, like: 324 },
        title: 'Том-ям с капустой кимчи',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        src: blockNewReciepes.tomyam,
        sticker: category.traditional,
    },
];

export const dataVeganRecipes: Array<dataGeneralRecipesType> = [
    {
        rate: { save: 85, like: 152 },
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        text: 'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        src: blockNewReciepes.potato,
        sticker: category.traditional,
    },
    {
        rate: { save: 85, like: 152 },
        title: 'Картофельные рулетики с грибами',
        text: 'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
        src: blockNewReciepes.rulets,
        sticker: category.child,
    },
    {
        rate: { save: 124, like: 324 },
        title: 'Том-ям с капустой кимчи',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        src: blockNewReciepes.tomYamWithKimChi,
        sticker: category.traditional,
    },
    {
        rate: { save: 85, like: 152 },
        title: 'Овощная лазанья из лаваша',
        text: 'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        src: blockNewReciepes.vegetableLazania,
        sticker: category.grill,
    },
    {
        rate: { save: 85, like: 152 },
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        text: 'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        src: blockNewReciepes.tefteli,
        sticker: category.secondMeal,
    },
    {
        rate: { save: 85, like: 152 },
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        text: 'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        src: blockNewReciepes.tefteli,
        sticker: category.secondMeal,
    },
    {
        rate: { save: 124, like: 324 },
        title: 'Чесночная картошка',
        text: 'Такая картошечка украсит любой семейный обед! Все будут в полном  восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        src: blockNewReciepes.chesnokPotato,
        sticker: category.traditional,
    },
    {
        rate: { save: 124, like: 324 },
        title: 'Пури',
        text: 'Пури - это индийские жареные лепешки, которые готовятся из пресного  теста. Рецепт лепешек пури требует самых доступных ингредиентов, и  времени на приготовление хрустящих лепешек уйдет мало.',
        src: blockNewReciepes.puri,
        sticker: category.traditional,
    },
];
