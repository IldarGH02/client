import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { HomeStore } from './shared/stores/HomePage/homeStore';
import { UserStore } from './shared/stores/UserStore/UserStore';
import { CountStore } from './shared/stores/CountStore/CountStore';

interface Store {
    homeStore: HomeStore
    userStore: UserStore
    countStore: CountStore
}

const homeStore = new HomeStore()
const userStore = new UserStore()
const countStore = new CountStore()

export const Context = createContext<Store>({
    homeStore,
    userStore,
    countStore
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            homeStore,
            userStore,
            countStore
        }}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Context.Provider>
    </React.StrictMode>
);