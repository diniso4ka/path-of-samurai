import s from './DialogMenuItem.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

const DialogMenuItem = ({ link, avatar, name, text, active }) => {
   return (
      <Link to={link} className={`${s.wrapper} ${active ? s.active : ''}`}>
         <img src={avatar ? avatar : 'https://работазабкрай.рф/static/img/cabinet.png'} className={s.avatar} />
         <div>
            <p className={s.name}>{name}</p>
            <p className={s.text}>{text}</p>
         </div>
      </Link>
   )
}

export default DialogMenuItem