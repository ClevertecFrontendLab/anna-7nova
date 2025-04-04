import './App.css';

import { Hide } from '@chakra-ui/react';

import { Aside } from '~/components/layouts/aside/Aside';
import { Header } from '~/components/layouts/header/Header';

function App() {
    return (
        <>
            <Header />
            <Hide below='md'>
                <Aside />
            </Hide>
        </>
    );
}

export default App;
