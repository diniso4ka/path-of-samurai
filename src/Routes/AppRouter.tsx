import { Routes, Route, Navigate } from 'react-router-dom'

import { privateRoutes, publicRoutes } from './routes'
import * as routes from '../utils/consts'
import React from 'react'
import { useAppSelector } from '../redux/hooks'

const AppRouter: React.FC = () => {
    const user = useAppSelector(state => state.user)
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
