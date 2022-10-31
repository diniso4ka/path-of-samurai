import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import AppRouter from './Routes/AppRouter'
import { checkAuthData } from './redux/slices/userSlice'
import { fetchUsersList } from './redux/slices/usersSlice'
import { Preloader } from './components/Preloader/Preloader'
import { useAppDispatch, useAppSelector } from './redux/hooks'

const App: React.FC = () => {
    const dispatch = useAppDispatch()
    const { user, status } = useAppSelector(state => state.user)

    React.useEffect(() => {
        dispatch(checkAuthData())
        dispatch(fetchUsersList())
    }, [])

    if (status === 'loading') {
        return (
            <>
                <Navbar />
                <Preloader />
            </>
        )
    }

    return (
        <BrowserRouter>
            <div className='app normal'>
                <Navbar />
                {user ? (
                    <section className='content-wrapper'>
                        <Sidebar />
                        <React.Suspense fallback={<div>...loading</div>}>
                            <AppRouter />
                        </React.Suspense>
                    </section>
                ) : (
                    <React.Suspense fallback={<div>...loading</div>}>
                        <AppRouter />
                    </React.Suspense>
                )}
            </div>
        </BrowserRouter>
    )
}

export default App
