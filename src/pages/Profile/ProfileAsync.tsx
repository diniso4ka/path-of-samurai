import React from 'react'
export const ProfileAsync: React.LazyExoticComponent<React.FC<{}>> = React.lazy(
    () => import('./Profile')
)
