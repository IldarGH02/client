import { Route, Routes, useNavigate } from 'react-router-dom';
import { Layout } from '../pages/Layout/Layout';
import { routes_list } from '../features/routes/routes_list';
import './styles.scss'
import { Suspense, useEffect } from 'react';

export const App = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('home')
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
