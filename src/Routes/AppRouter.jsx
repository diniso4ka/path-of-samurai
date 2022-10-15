import { Routes, Route, Navigate } from 'react-router-dom'

import { publicRoutes } from './routes'
import * as routes from '../utils/consts'


const AppRouter = () => {
   return (
      <Routes>
         {publicRoutes.map(({ path, Component }) =>
            <Route key={path} path={path} element={<Component />} />
         )}
         {/* <Route path='*' element={<Navigate to={routes.ROUTE_PROFILE} />} /> */}
      </Routes>
   )
}

export default AppRouter