import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';

import App from '~/app/App.tsx';
import { store } from '~/store/configure-store.ts';

import { theme } from './components/styles/Theme';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ChakraProvider theme={theme}>
                    <App />
                </ChakraProvider>
            </BrowserRouter>
        </Provider>
    </StrictMode>,
);
