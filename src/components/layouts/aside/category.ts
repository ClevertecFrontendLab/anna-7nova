import child from '../../../assets/images/icons/aside/icon_child.svg';
import desert from '../../../assets/images/icons/aside/icon_desert.svg';
import drink from '../../../assets/images/icons/aside/icon_drink.svg';
import grill from '../../../assets/images/icons/aside/icon_gril.svg';
import health from '../../../assets/images/icons/aside/icon_healthy_dish.svg';
import mainMeal from '../../../assets/images/icons/aside/icon_main_meal.svg';
import ready from '../../../assets/images/icons/aside/icon_ready.svg';
import salad from '../../../assets/images/icons/aside/icon_salad.svg';
import secondMeal from '../../../assets/images/icons/aside/icon_second_meal.svg';
import snacks from '../../../assets/images/icons/aside/icon_snacks.svg';
import souse from '../../../assets/images/icons/aside/icon_souse.svg';
import traditional from '../../../assets/images/icons/aside/icon_traditional_dish.svg';
import vegan from '../../../assets/images/icons/aside/icon_vegan.svg';

export type PodCategoryType = { category: string; src: string };

export type CategoryType = {
    [key: string]: PodCategoryType;
};

export const category = {
    salad: { category: 'Салаты', src: salad },
    snacks: { category: 'Закуски', src: snacks },
    mainMeal: { category: 'Первые блюда', src: mainMeal },
    secondMeal: { category: 'Вторые блюда', src: secondMeal },
    desert: { category: 'Десерты, выпечка', src: desert },
    grill: { category: 'Блюда на гриле', src: grill },
    vegan: { category: 'Веганская кухня', src: vegan },
    child: { category: 'Детские блюда', src: child },
    health: { category: 'Лечебное питание', src: health },
    traditional: { category: 'Национальные', src: traditional },
    souse: { category: 'Соусы', src: souse },
    drink: { category: 'Напитки', src: drink },
    ready: { category: 'Заготовки', src: ready },
};
