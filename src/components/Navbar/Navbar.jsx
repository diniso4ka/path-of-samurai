import s from './Navbar.module.css'
import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const { user } = useSelector(state => state.user)
    return (
        <header className={s.navbar_wrapper}>
            <div></div>
            <div className={s.login}>
                {user ? user.login : <button>login</button>}
            </div>
        </header>
    )
}

export default Navbar
