import React from 'react'
import s from './Sidebar.module.css'

const Sidebar = () => {
   const [active, setActive] = React.useState(0)


   return (
      <nav className={s.sidebar_wrapper}>
         <ul className={s.links}>
            <li onClick={() => setActive(0)} className={active === 0 ? s.active : ''}> Profile</li>
            <li onClick={() => setActive(1)} className={active === 1 ? s.active : ''}>Messages</li>
            <li onClick={() => setActive(2)} className={active === 2 ? s.active : ''}>News</li>
            <li onClick={() => setActive(3)} className={active === 3 ? s.active : ''}>Musics</li>
            <li onClick={() => setActive(4)} className={active === 4 ? s.active : ''}>Settings</li>
         </ul>
      </nav >
   )
}

export default Sidebar