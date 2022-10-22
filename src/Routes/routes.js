import Profile from '../pages/Profile/Profile'
import Dialogs from '../pages/Dialogs/Dialogs'
import Users from '../pages/Users/Users'

import * as routes from '../utils/consts'
import Login from '../pages/Login/Login'

export const publicRoutes = [
    {
        path: routes.ROUTE_LOGIN,
        Component: Login,
    },
]

export const privateRoutes = [
    {
        path: routes.ROUTE_PROFILE,
        Component: Profile,
    },
    {
        path: routes.ROUTE_DIALOGS,
        Component: Dialogs,
    },
    {
        path: routes.ROUTE_USERS,
        Component: Users,
    },
    {
        path: routes.ROUTE_USER,
        Component: Profile,
    },
]
