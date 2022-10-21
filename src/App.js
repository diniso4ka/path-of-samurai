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
import { checkIsAuth } from './utils/axios/requests'

function App({ store }) {
    const dispatch = useDispatch()

    React.useEffect(() => {
        checkIsAuth().then(res => {
            if (res.resultCode === 0) {
                dispatch(saveAuth(res.data))
            }
        })
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
