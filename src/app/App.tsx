import './App.css';

import { Container, Hide, useBreakpointValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { NavigationMenu } from '~/components/layouts/aside/NavigationMenu';
import { Header } from '~/components/layouts/header/Header';

import { AppRoutes } from './router/AppRoutes';

function App() {
    //styles
    const weight = useBreakpointValue({
        base: '100%',
        md: 'calc(100vw - 530px)',
    });

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
            <Hide below='md'>
                <NavigationMenu onClick={navigateHandle} />
            </Hide>
            <Container
                as='section'
                maxW={weight}
                minH='calc(100vh - 80px)'
                bg='white'
                gap={['32px', '32px', '32px', '40px', '40px']}
                mt={{ base: '64px', md: '80px' }}
                centerContent
            >
                <AppRoutes />
            </Container>
        </>
    );
}

export default App;
