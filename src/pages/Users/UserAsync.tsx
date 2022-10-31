import React from 'react'
export const UserAsync: React.LazyExoticComponent<React.FC<{}>> = React.lazy(
    () => import('./Users')
)
