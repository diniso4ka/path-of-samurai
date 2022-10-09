import s from './DialogMenu.module.css'
import React from 'react'

import * as routes from '../../../utils/consts'

import DialogMenuItem from '../DialogMenuItem/DialogMenuItem'

const DialogMenu = () => {
   return (
      <section className={s.wrapper}>
         <h2 className={s.title}>Messages</h2>
         <div className={s.items}>
            <DialogMenuItem link={`${routes.ROUTE_DIALOGS}/1`} name={'Denis'} text={'Hello im a shrek'} active={true} />
            <DialogMenuItem link={`${routes.ROUTE_DIALOGS}/2`} name={'Jenya'} text={'Hello im a shrek'} active={false} />
            <DialogMenuItem link={`${routes.ROUTE_DIALOGS}/3`} name={'Savajan'} text={'Hello im a shrek'} active={false} />
            <DialogMenuItem link={`${routes.ROUTE_DIALOGS}/4`} name={'Vlad'} text={'Hello im a shrek'} active={false} />
         </div>
      </section>
   )
}

export default DialogMenu