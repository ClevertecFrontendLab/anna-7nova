import './App.css';

import { Container } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { Aside } from '~/components/layouts/aside/Aside';
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
    //modal - hide scroll
    useEffect(() => {
        menuIsOpen
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = '');
    }, [menuIsOpen]);
    return (
        <>
            <Header onBurgerBtnClick={onBurgerBtnClick} menuIsOpen={menuIsOpen} />
            <Aside onClick={navigateHandle} menuIsOpen={menuIsOpen} />
            <Container as='section' sx={mainContainer} centerContent>
                <AppRoutes />
            </Container>
            <Footer />
        </>
    );
}

export default App;
