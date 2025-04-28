import children from '../../assets/images/icons/aside/icon_child.svg';
import dessert from '../../assets/images/icons/aside/icon_desert.svg';
import drinks from '../../assets/images/icons/aside/icon_drink.svg';
import grill from '../../assets/images/icons/aside/icon_gril.svg';
import therapeutic from '../../assets/images/icons/aside/icon_healthy_dish.svg';
import main from '../../assets/images/icons/aside/icon_main_meal.svg';
import provision from '../../assets/images/icons/aside/icon_ready.svg';
import salads from '../../assets/images/icons/aside/icon_salad.svg';
import second from '../../assets/images/icons/aside/icon_second_meal.svg';
import snacks from '../../assets/images/icons/aside/icon_snacks.svg';
import souse from '../../assets/images/icons/aside/icon_souse.svg';
import national from '../../assets/images/icons/aside/icon_traditional_dish.svg';
import vegan from '../../assets/images/icons/aside/icon_vegan.svg';

export type SubcategoriesType = { slug: string; name: string };

export type PodCategoryType = {
    category: string;
    src: string;
    slug: string;
    subcategories: Array<SubcategoriesType>;
};

export type CategoryType = {
    [key: string]: PodCategoryType;
};

const subcategories = [
    { slug: 'snacks', name: 'Закуски' },
    { slug: 'main-dish', name: 'Первые блюда' },
    { slug: 'secondMeal', name: 'Вторые блюда' },
    { slug: 'side-dishes', name: 'Гарниры' },
    { slug: 'dessert', name: 'Десерты' },
    { slug: 'pies', name: 'Выпечка' },
    { slug: 'raw-food-dishes', name: 'Сыроедческие блюда' },
    { slug: 'drinks', name: 'Напитки' },
];

export const category: CategoryType = {
    salads: {
        category: 'Салаты',
        src: salads,
        slug: 'salads',
        subcategories: subcategories,
    },
    snacks: {
        category: 'Закуски',
        src: snacks,
        slug: 'snacks',
        subcategories: subcategories,
    },
    'main-dish': {
        category: 'Первые блюда',
        src: main,
        slug: 'main-dish',
        subcategories: subcategories,
    },
    'second-dish': {
        category: 'Вторые блюда',
        src: second,
        slug: 'second-dish',
        subcategories: subcategories,
    },
    dessert: {
        category: 'Десерты, выпечка',
        src: dessert,
        slug: 'dessert',
        subcategories: subcategories,
    },
    grill: {
        category: 'Блюда на гриле',
        src: grill,
        slug: 'grill',
        subcategories: subcategories,
    },
    vegan: {
        category: 'Веганская кухня',
        src: vegan,
        slug: 'vegan',
        subcategories: subcategories,
    },
    'children-dish': {
        category: 'Детские блюда',
        src: children,
        slug: 'children-dish',
        subcategories: subcategories,
    },
    'therapeutic-nutrition': {
        category: 'Лечебное питание',
        src: therapeutic,
        slug: 'therapeutic-nutrition',
        subcategories: subcategories,
    },
    national: {
        category: 'Национальные',
        src: national,
        slug: 'national',
        subcategories: subcategories,
    },
    souse: {
        category: 'Соусы',
        src: souse,
        slug: 'souse',
        subcategories: subcategories,
    },
    drinks: {
        category: 'Напитки',
        src: drinks,
        slug: 'drinks',
        subcategories: subcategories,
    },
    provision: {
        category: 'Заготовки',
        src: provision,
        slug: 'provision',
        subcategories: subcategories,
    },
};

export type CategoryMockType =
    | 'vegan'
    | 'second-dish'
    | 'snacks'
    | 'national'
    | 'salads'
    | 'main-dish'
    | 'dessert'
    | 'grill'
    | 'children-dish'
    | 'therapeutic-nutrition'
    | 'souse'
    | 'drinks'
    | 'provision';
export type SubcategoryMockType =
    | 'snacks'
    | 'vegetables'
    | 'warm-snacks'
    | 'second-dish'
    | 'italian'
    | 'poultry-dish'
    | 'side-dishes'
    | 'warm-salads'
    | 'meat-soups'
    | 'main-dish'
    | 'dessert'
    | 'pies'
    | 'raw-food-dishes'
    | 'drinks';
type IngredientsType = {
    title: string;
    count: string;
    measureUnit: 'шт.' | 'г' | 'мл' | 'по вкусу' | 'листов' | 'зубчиков' | 'ч. л.';
};
export type StepsType = {
    stepNumber: number;
    description: string;
    image: 'url';
};
export type NutritionValueType = {
    calories: number;
    proteins: number;
    fats: number;
    carbohydrates: number;
};
export type MockDataSliderType = {
    id: string;
    title: string;
    description: string;
    category: Array<CategoryMockType>;
    subcategory: Array<SubcategoryMockType>;
    image: string;
    bookmarks: number;
    likes: number;
    date: string;
    time: string;
    portions: number;
    nutritionValue: NutritionValueType;
    ingredients: Array<IngredientsType>;
    steps: Array<StepsType>;
    meat?: string;
    side?: string;
};
//filter
export const filterCategory = {
    meat: ['Курица', 'Свинина', 'Говядина', 'Индейка', 'Утка'],
    side: ['Картошка', 'Гречка', 'Паста', 'Спагетти', 'Рис', 'Капуста', 'Фасоль', 'Другие овощи'],
};
export const user = [
    'Елена Мин',
    'Мирием Чонишвили',
    'Елена Прекрасная',
    'Alex Cook',
    'Екатерина Константинопольская',
    'Инна Высоцкая',
    'Сергей Разумов',
    'Анна Рогачева',
    'Иван Орлов',
    'Повар Ши',
    'Только новые авторы',
];
export const allergensData: string[] = [
    'Молочные продукты',
    'Яйцо',
    'Рыба',
    'Моллюски',
    'Орехи',
    'Томат (помидор)',
    'Цитрусовые',
    'Клубника (ягоды)',
    'Шоколад',
];
