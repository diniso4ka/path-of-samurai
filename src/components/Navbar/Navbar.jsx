import s from './Navbar.module.css'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAuth } from '../../redux/slices/userSlice'
import { Button } from '../Button/Button'

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
                        <Button onHandleClick={onClickLogout}>logout</Button>
                        <span className={s.username}>{user.login}</span>
                    </>
                ) : null}
            </div>
        </header>
    )
}

export default Navbar
