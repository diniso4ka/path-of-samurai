import s from './Navbar.module.css'
import React from 'react'
import { logoutAuth } from '../../redux/slices/userSlice'
import { Button, ButtonType } from '../Button/Button'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

const Navbar: React.FC = () => {
    const { user } = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const onClickLogout = () => {
        dispatch(logoutAuth())
    }
    return (
        <header className={s.navbar_wrapper}>
            <div></div>
            <div className={s.login}>
                {user ? (
                    <>
                        <Button
                            type={ButtonType.BUTTON}
                            onHandleClick={onClickLogout}
                        >
                            logout
                        </Button>
                        <span className={s.username}>{user.login}</span>
                    </>
                ) : null}
            </div>
        </header>
    )
}

export default Navbar
