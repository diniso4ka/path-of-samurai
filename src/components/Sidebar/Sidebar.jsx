import React from 'react'
import { Link, useParams } from 'react-router-dom'
import s from './Sidebar.module.css'

import * as routes from '../../utils/consts'

const Sidebar = () => {
    const params = String(window.location.pathname)
    const [active, setActive] = React.useState(0)

    const checkParams = params => {
        switch (params) {
            case '/profile':
                setActive(0)
                break
            case '/messages':
                setActive(1)
                break
            case '/news':
                setActive(2)
                break
            case '/musics':
                setActive(3)
                break
            case '/settings':
                setActive(4)
                break
            case '/users':
                setActive(5)
                break
        }
    }

    React.useEffect(() => {
        checkParams(params)
    }, [params])

    return (
        <nav className={s.sidebar_wrapper}>
            <ul className={s.links}>
                <Link to={routes.ROUTE_PROFILE}>
                    <li
                        onClick={() => setActive(0)}
                        className={active === 0 ? s.active : ''}
                    >
                        {' '}
                        Profile
                    </li>
                </Link>
                <Link to={routes.ROUTE_DIALOGS}>
                    {' '}
                    <li
                        onClick={() => setActive(1)}
                        className={active === 1 ? s.active : ''}
                    >
                        Messages
                    </li>
                </Link>
                <Link to={routes.ROUTE_NEWS}>
                    {' '}
                    <li
                        onClick={() => setActive(2)}
                        className={active === 2 ? s.active : ''}
                    >
                        News
                    </li>
                </Link>
                <Link to={routes.ROUTE_MUSICS}>
                    {' '}
                    <li
                        onClick={() => setActive(3)}
                        className={active === 3 ? s.active : ''}
                    >
                        Musics
                    </li>
                </Link>
                <Link to={routes.ROUTE_SETTINGS}>
                    {' '}
                    <li
                        onClick={() => setActive(4)}
                        className={active === 4 ? s.active : ''}
                    >
                        Settings
                    </li>
                </Link>
                <Link to={routes.ROUTE_USERS}>
                    {' '}
                    <li
                        onClick={() => setActive(5)}
                        className={active === 5 ? s.active : ''}
                    >
                        Users
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Sidebar
