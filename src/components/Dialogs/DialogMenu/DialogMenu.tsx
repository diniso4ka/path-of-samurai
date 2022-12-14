import s from './DialogMenu.module.css'
import React from 'react'

import * as routes from '../../../utils/consts'

import DialogMenuItem from '../DialogMenuItem/DialogMenuItem'
import { useAppSelector } from '../../../redux/hooks'

const DialogMenu: React.FC = () => {
    const { dialogs } = useAppSelector(state => state.dialogs)
    const [active, setActive] = React.useState<number>(1)

    return (
        <section className={s.wrapper}>
            <h2 className={s.title}>Messages</h2>
            <div className={s.items}>
                {dialogs.map(user => (
                    <DialogMenuItem
                        key={user.id}
                        onClick={() => setActive(user.id)}
                        link={`${routes.ROUTE_DIALOGS}/${user.id}`}
                        name={user.name}
                        text={user.message}
                        avatar={user.avatar}
                        active={active === user.id ? true : false}
                    />
                ))}
            </div>
        </section>
    )
}

export default DialogMenu
