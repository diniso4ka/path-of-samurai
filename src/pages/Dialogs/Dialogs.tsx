import React from 'react'
import Dialog from '../../components/Dialogs/Dialog/Dialog'
import DialogMenu from '../../components/Dialogs/DialogMenu/DialogMenu'
import s from './Dialogs.module.css'

const Dialogs: React.FC = () => {
    return (
        <main className={`${s.dialogs_wrapper} ${s.page_wrapper}`}>
            <DialogMenu />
            <Dialog />
        </main>
    )
}

export default Dialogs
