import s from './Navbar.module.css'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAuth } from '../../redux/slices/userSlice'

const Navbar = () => {
    const { user } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const onClickLogout = () => {
        dispatch(logoutAuth())
    }
    return (
        <header className={s.navbar_wrapper}>
            <div></div>
            <div className={s.login}>
                {user ? (
                    <>
                        <button onClick={onClickLogout}>logout</button>
                        {user.login}
                    </>
                ) : (
                    <button>login</button>
                )}
            </div>
        </header>
    )
}

export default Navbar
