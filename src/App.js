import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import AppRouter from './Routes/AppRouter'
import { useDispatch } from 'react-redux'
import { checkAuthData } from './redux/slices/userSlice'
import { fetchUsersList } from './redux/slices/usersSlice'
import { getStatus, setStatus } from './redux/slices/profileSlice'

function App({ store }) {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(checkAuthData())
        dispatch(fetchUsersList())
    }, [])

    return (
        <BrowserRouter>
            <div className='app normal'>
                <Navbar />
                <section className='content-wrapper'>
                    <Sidebar />
                    <AppRouter store={store} />
                </section>
            </div>
        </BrowserRouter>
    )
}

export default App
