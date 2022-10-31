import React from 'react'
export const DialogsAsync: React.LazyExoticComponent<React.FC<{}>> = React.lazy(
    () => import('./Dialogs')
)
