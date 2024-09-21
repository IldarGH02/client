import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { HomeStore } from './shared/stores/HomePage/homeStore';
import { UserStore } from './shared/stores/UserStore.ts/UserStore';

interface Store {
    homeStore: HomeStore
    userStore: UserStore
}

const homeStore = new HomeStore()
const userStore = new UserStore()

export const Context = createContext<Store>({
    homeStore,
    userStore
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            homeStore,
            userStore
        }}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Context.Provider>
    </React.StrictMode>
);