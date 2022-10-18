import React from 'react'
import s from './UserItem.module.css'
import { Link } from 'react-router-dom'
import { createUserUrl } from '../../../utils/consts'

const UserItem = ({ avatar, name, followed, id, follow, unfollow }) => {
    return (
        <div className={`${s.user_wrapper} ${s.page_wrapper}`}>
            <div className={s.main}>
                <Link to={createUserUrl(id)}>
                    {' '}
                    <img src={avatar} className={s.avatar} />
                </Link>
                <div className={s.name}>{name}</div>
            </div>
            <div className={s.sub}>
                <button
                    className={s.button}
                    onClick={followed ? () => unfollow(id) : () => follow(id)}
                >
                    {followed ? 'unfollow' : 'follow'}
                </button>
            </div>
        </div>
    )
}

export default UserItem
