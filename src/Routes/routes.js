import Profile from '../pages/Profile/Profile'
import Dialogs from '../pages/Dialogs/Dialogs'


import * as routes from '../utils/consts'

export const publicRoutes = [
   {
      path: routes.ROUTE_PROFILE,
      Component: <Profile />
   },
   {
      path: routes.ROUTE_DIALOGS,
      Component: <Dialogs />
   }
]

