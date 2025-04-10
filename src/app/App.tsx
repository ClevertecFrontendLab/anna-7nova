import './App.css';

import { Container, Hide, useBreakpointValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { NavigationMenu } from '~/components/layouts/aside/NavigationMenu';
import { Header } from '~/components/layouts/header/Header';

import { AppRoutes } from './routes';

function App() {
    const navigate = useNavigate();
    const navigateHandle = (categorySlug: string, subcategorySlug?: string) => {
        if (subcategorySlug) {
            navigate(`/${categorySlug}/${subcategorySlug}`);
        } else {
            navigate(`/${categorySlug}`);
        }
    };
    const weight = useBreakpointValue({
        base: '100%',
        sm: '100%',
        md: 'calc(100vw - 540px)',
        xl: '1360px',
    });
    return (
        <>
            <Header />
            <Hide below='md'>
                <NavigationMenu onClick={navigateHandle} />
            </Hide>
            <Container
                as='section'
                maxW={weight}
                minH='calc(100vh - 80px)'
                bg='white'
                mt='80px'
                gap='40px'
                centerContent
            >
                <AppRoutes />
            </Container>
        </>
    );
}

export default App;
