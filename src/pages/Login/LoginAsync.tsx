import React from 'react'
export const LoginAsync: React.LazyExoticComponent<React.FC<{}>> = React.lazy(
    () => import('./Login')
)
