import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import AppRouter from './Routes/AppRouter'
import { api } from './utils/axios/instance'
import { endpoints } from './utils/axios/endpoints'
import { useDispatch } from 'react-redux'
import { saveAuth } from './redux/slices/userSlice'

function App({ store }) {
    const dispatch = useDispatch()
    const checkIsAuth = async () => {
        const res = await api.get(endpoints.me.isauth)
        if (res.data.resultCode === 0) {
            dispatch(saveAuth(res.data.data))
        }
    }
    React.useEffect(() => {
        checkIsAuth()
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
