import React from 'react'
import Dialog from '../../components/Dialogs/Dialog/Dialog'
import DialogMenu from '../../components/Dialogs/DialogMenu/DialogMenu'
import s from './Dialogs.module.css'


const Dialogs = ({ state, store }) => {
   return (
      <main className={`${s.dialogs_wrapper} ${s.page_wrapper}`}>
         <DialogMenu state={state.dialogsPage} />
         <Dialog state={state.dialogsPage} store={store} />
      </main>
   )
}

export default Dialogs