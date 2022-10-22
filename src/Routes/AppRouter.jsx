import { Routes, Route, Navigate } from 'react-router-dom'

import { privateRoutes, publicRoutes } from './routes'
import * as routes from '../utils/consts'
import { useSelector } from 'react-redux'

const AppRouter = () => {
    const user = useSelector(state => state.user)
    return user.user?.id ? (
        <Routes>
            {privateRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path='*' element={<Navigate to={routes.ROUTE_PROFILE} />} />
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path='*' element={<Navigate to={routes.ROUTE_LOGIN} />} />
        </Routes>
    )
}

export default AppRouter
