import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import AppRouter from './Routes/AppRouter'
import { useDispatch, useSelector } from 'react-redux'
import { checkAuthData } from './redux/slices/userSlice'
import { fetchUsersList } from './redux/slices/usersSlice'

function App() {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)

    React.useEffect(() => {
        dispatch(checkAuthData())
        dispatch(fetchUsersList())
    }, [])

    return (
        <BrowserRouter>
            <div className='app normal'>
                <Navbar />
                {user ? (
                    <section className='content-wrapper'>
                        <Sidebar />
                        <AppRouter />
                    </section>
                ) : (
                    <AppRouter />
                )}
            </div>
        </BrowserRouter>
    )
}

export default App
