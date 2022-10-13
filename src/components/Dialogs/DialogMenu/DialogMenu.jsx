import s from './DialogMenu.module.css'
import React from 'react'

import * as routes from '../../../utils/consts'

import DialogMenuItem from '../DialogMenuItem/DialogMenuItem'

const DialogMenu = ({ state }) => {
   const [active, setActive] = React.useState(1)

   return (
      <section className={s.wrapper}>
         <h2 className={s.title}>Messages</h2>
         <div className={s.items}>
            {state.dialogs.map((user) => <DialogMenuItem onClick={() => setActive(user.id)} link={`${routes.ROUTE_DIALOGS}/${user.id}`} name={user.name} text={user.message} avatar={user.avatar} active={active === user.id ? true : false} />)}
         </div>
      </section>
   )
}

export default DialogMenu