import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { HomeStore } from './shared/stores/HomePage/homeStore';

interface Store {
    homeStore: HomeStore
}

const homeStore = new HomeStore()

export const Context = createContext<Store>({
    homeStore
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            homeStore
        }}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Context.Provider>
    </React.StrictMode>
);