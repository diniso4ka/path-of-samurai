import { LoginAsync } from '../pages/Login/LoginAsync'
import { ProfileAsync } from '../pages/Profile/ProfileAsync'
import { UserAsync } from '../pages/Users/UserAsync'
import { DialogsAsync } from '../pages/Dialogs/DialogsAsync'

import * as routes from '../utils/consts'

export const publicRoutes = [
    {
        path: routes.ROUTE_LOGIN,
        Component: LoginAsync,
    },
]

export const privateRoutes = [
    {
        path: routes.ROUTE_PROFILE,
        Component: ProfileAsync,
    },
    {
        path: routes.ROUTE_DIALOGS,
        Component: DialogsAsync,
    },
    {
        path: routes.ROUTE_USERS,
        Component: UserAsync,
    },
    {
        path: routes.ROUTE_USER,
        Component: ProfileAsync,
    },
]
