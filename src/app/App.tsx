import './App.css';

import { Box, Container, useBreakpointValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { NavigationMenu } from '~/components/layouts/aside/NavigationMenu';
import UserSettings from '~/components/layouts/aside/UserSettings';
import { Footer } from '~/components/layouts/footer/Footer';
import { Header } from '~/components/layouts/header/Header';

import { AppRoutes } from './router/AppRoutes';

function App() {
    //styles
    const weight = useBreakpointValue({
        base: '100%',
        md: 'calc(100vw - 530px)',
    });
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
            <Box display={{ base: 'none', md: 'block' }}>
                <NavigationMenu onClick={navigateHandle} />
                <UserSettings />
            </Box>
            <Container
                as='section'
                maxW={weight}
                minH={{ base: 'calc(100vw -80px - 84px)', lg: 'calc(100vh - 80px)' }}
                bg='white'
                gap={['32px', '32px', '32px', '40px', '40px']}
                mt={{ base: '64px', md: '80px' }}
                mb={{ base: '100px', sm: '92px', md: '0' }}
                centerContent
            >
                <AppRoutes />
            </Container>
            <Footer />
        </>
    );
}

export default App;
