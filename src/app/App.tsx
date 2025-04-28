import './App.css';

import { Container } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { category } from '~/components/commonComponents/CategoryData';
import { Aside } from '~/components/layouts/aside/Aside';
import { FilterMenu } from '~/components/layouts/aside/FilterMenu';
import { Footer } from '~/components/layouts/footer/Footer';
import { Header } from '~/components/layouts/header/Header';
import { mainContainer } from '~/components/styles/Section.style';

import { AppRoutes } from './router/AppRoutes';

function App() {
    //routing
    const navigate = useNavigate();
    const navigateHandle = (categorySlug: string, subcategorySlug?: string) => {
        subcategorySlug
            ? navigate(`/${categorySlug}/${subcategorySlug}`)
            : navigate(`/${categorySlug}/snacks`);
    };
    //mobile menu
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen);
    };
    //filter menu
    const [filterIsOpen, setFilterIsOpen] = useState(false);
    const onFilterBtnClick = () => {
        setFilterIsOpen(!filterIsOpen);
    };
    //modal - hide scroll
    useEffect(() => {
        menuIsOpen || filterIsOpen
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = '');
    }, [menuIsOpen, filterIsOpen]);

    //filter
    const [filter, setFilter] = useState<string[]>([]);
    const filterCheckboxHandle = (data: string) => {
        setFilter((el) => (el.includes(data) ? el.filter((item) => item !== data) : [...el, data]));
    };
    const addItemsAllergens = (item: string) => {
        setFilter([...filter, item]);
    };
    const removeFilter = (item: string) => {
        setFilter(filter.filter((el) => el !== item));
    };
    const removeAll = () => {
        setFilter([]);
    };
    //category
    const categoryArray = Object.entries(category).map(([key, value]) => ({ key, ...value }));
    const categoryNames = categoryArray.map((item) => item.category);
    console.log(filter);
    return (
        <>
            <Header onBurgerBtnClick={onBurgerBtnClick} menuIsOpen={menuIsOpen} />
            <Aside
                onClick={navigateHandle}
                menuIsOpen={menuIsOpen}
                onBurgerBtnClick={onBurgerBtnClick}
            />
            <Container as='section' sx={mainContainer} centerContent>
                <AppRoutes
                    onFilterBtnClick={onFilterBtnClick}
                    filterCheckboxHandle={filterCheckboxHandle}
                    filter={filter}
                    addItemsAllergens={addItemsAllergens}
                />
            </Container>
            {filterIsOpen && (
                <FilterMenu
                    onFilterBtnClick={onFilterBtnClick}
                    filterCheckboxHandle={filterCheckboxHandle}
                    filter={filter}
                    categoryNames={categoryNames}
                    addItemsAllergens={addItemsAllergens}
                    removeFilter={removeFilter}
                    removeAll={removeAll}
                />
            )}
            <Footer />
        </>
    );
}

export default App;
