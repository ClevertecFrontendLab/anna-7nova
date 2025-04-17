import './App.css';

import { Box, Container } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { NavigationMenu } from '~/components/layouts/aside/NavigationMenu';
import UserSettings from '~/components/layouts/aside/UserSettings';
import { Footer } from '~/components/layouts/footer/Footer';
import { Header } from '~/components/layouts/header/Header';
import { boxDesktopVisible, mainContainer } from '~/components/styles/Section.style';

import { AppRoutes } from './router/AppRoutes';

function App() {
    //routing
    const navigate = useNavigate();
    const navigateHandle = (categorySlug: string, subcategorySlug?: string) => {
        if (subcategorySlug) {
            navigate(`/${categorySlug}/${subcategorySlug}`);
        } else {
            navigate(`/${categorySlug}`);
        }
    };
    return (
        <>
            <Header />
            <Box sx={boxDesktopVisible}>
                <NavigationMenu onClick={navigateHandle} />
                <UserSettings />
            </Box>
            <Container sx={mainContainer} centerContent>
                <AppRoutes />
            </Container>
            <Footer />
        </>
    );
}

export default App;
