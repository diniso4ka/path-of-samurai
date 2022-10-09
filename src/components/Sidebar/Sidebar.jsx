import React from 'react'
import { Link, useParams } from 'react-router-dom'
import s from './Sidebar.module.css'


import * as routes from '../../utils/consts'

const Sidebar = () => {
   const [active, setActive] = React.useState(0)

   return (
      <nav className={s.sidebar_wrapper}>
         <ul className={s.links}>
            <Link to={routes.ROUTE_PROFILE}><li onClick={() => setActive(0)} className={active === 0 ? s.active : ''}> Profile</li></Link>
            <Link to={routes.ROUTE_DIALOGS}> <li onClick={() => setActive(1)} className={active === 1 ? s.active : ''}>Messages</li></Link>
            <Link to={routes.ROUTE_NEWS}> <li onClick={() => setActive(2)} className={active === 2 ? s.active : ''}>News</li></Link>
            <Link to={routes.ROUTE_MUSICS}> <li onClick={() => setActive(3)} className={active === 3 ? s.active : ''}>Musics</li></Link>
            <Link to={routes.ROUTE_SETTINGS}> <li onClick={() => setActive(4)} className={active === 4 ? s.active : ''}>Settings</li></Link>
         </ul>
      </nav >
   )
}

export default Sidebar