import { DOMElement, Suspense, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Layout } from '../pages/Layout/Layout';
import { routes_list } from '../features/routes/routes_list';
import './styles.scss'

export const App = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('home')
    }, [])

    useEffect(() => {
        const tg = window.Telegram.WebApp
        const mainButton = tg.MainButton

        mainButton.color = "#df2aff"

    }, [])

    return (
            <div className="main">
                <Suspense fallback="">
                    <Routes>
                        <Route element={<Layout/>}>
                            {
                                routes_list && routes_list.map(({path, element}) => {
                                    return <Route path={path} element={element} key={path}/>
                                })
                            }
                        </Route>
                    </Routes>
                </Suspense>
            </div>
    );
}

export default App;
