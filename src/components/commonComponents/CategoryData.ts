import child from '../../assets/images/icons/aside/icon_child.svg';
import desert from '../../assets/images/icons/aside/icon_desert.svg';
import drink from '../../assets/images/icons/aside/icon_drink.svg';
import grill from '../../assets/images/icons/aside/icon_gril.svg';
import health from '../../assets/images/icons/aside/icon_healthy_dish.svg';
import mainMeal from '../../assets/images/icons/aside/icon_main_meal.svg';
import ready from '../../assets/images/icons/aside/icon_ready.svg';
import salad from '../../assets/images/icons/aside/icon_salad.svg';
import secondMeal from '../../assets/images/icons/aside/icon_second_meal.svg';
import snacks from '../../assets/images/icons/aside/icon_snacks.svg';
import souse from '../../assets/images/icons/aside/icon_souse.svg';
import traditional from '../../assets/images/icons/aside/icon_traditional_dish.svg';
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
    { slug: 'mainMeal', name: 'Первые блюда' },
    { slug: 'secondMeal', name: 'Вторые блюда' },
    { slug: 'side-dishes', name: 'Гарниры' },
    { slug: 'dessert', name: 'Десерты' },
    { slug: 'pies', name: 'Выпечка' },
    { slug: 'raw-food-dishes', name: 'Сыроедческие блюда' },
    { slug: 'drink', name: 'Напитки' },
];

export const category: CategoryType = {
    salad: {
        category: 'Салаты',
        src: salad,
        slug: 'salad',
        subcategories: subcategories,
    },
    snacks: {
        category: 'Закуски',
        src: snacks,
        slug: 'snacks',
        subcategories: subcategories,
    },
    mainMeal: {
        category: 'Первые блюда',
        src: mainMeal,
        slug: 'mainMeal',
        subcategories: subcategories,
    },
    secondMeal: {
        category: 'Вторые блюда',
        src: secondMeal,
        slug: 'secondMeal',
        subcategories: subcategories,
    },
    dessert: {
        category: 'Десерты, выпечка',
        src: desert,
        slug: 'desert',
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
    child: {
        category: 'Детские блюда',
        src: child,
        slug: 'child',
        subcategories: subcategories,
    },
    health: {
        category: 'Лечебное питание',
        src: health,
        slug: 'health',
        subcategories: subcategories,
    },
    traditional: {
        category: 'Национальные',
        src: traditional,
        slug: 'traditional',
        subcategories: subcategories,
    },
    souse: {
        category: 'Соусы',
        src: souse,
        slug: 'souse',
        subcategories: subcategories,
    },
    drink: {
        category: 'Напитки',
        src: drink,
        slug: 'drink',
        subcategories: subcategories,
    },
    ready: {
        category: 'Заготовки',
        src: ready,
        slug: 'ready',
        subcategories: subcategories,
    },
};
