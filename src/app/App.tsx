import './App.css';

import { Hide } from '@chakra-ui/react';

import { Aside } from '~/components/layouts/aside/Aside';
import { Header } from '~/components/layouts/header/Header';
import { MainSection } from '~/components/layouts/sections/MainSection';

function App() {
    return (
        <>
            <Header />
            <Hide below='md'>
                <Aside />
            </Hide>
            <MainSection />
        </>
    );
}

export default App;
