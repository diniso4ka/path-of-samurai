import React from 'react'
import s from './Sidebar.module.css'

const Sidebar = () => {
   return (
      <nav className={s.sidebar_wrapper}>
         <ul className={s.links}>
            <li className={`${s.links_item} ${s.active}`} >Profile</li>
            <li>Messages</li>
            <li>News</li>
            <li>Musics</li>
            <li>Settings</li>
         </ul>
      </nav>
   )
}

export default Sidebar