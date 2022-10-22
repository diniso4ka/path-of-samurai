import React from 'react'
import s from './UserItem.module.css'
import { Link } from 'react-router-dom'
import { createUserUrl } from '../../../utils/consts'
import { fetchFollow, fetchUnfollow } from '../../../utils/axios/requests'

const UserItem = ({ avatar, name, followed, id }) => {
    const [status, setStatus] = React.useState(followed)
    const follow = async () => {
        fetchFollow(id).then(res => {
            if (res === 0) {
                setStatus(true)
            }
        })
    }

    const unfollow = async () => {
        fetchUnfollow(id).then(res => {
            if (res === 0) {
                setStatus(false)
            }
        })
    }

    return (
        <div className={`${s.user_wrapper} ${s.page_wrapper}`}>
            <div className={s.main}>
                <Link to={createUserUrl(id)}>
                    <img src={avatar} className={s.avatar} />
                </Link>
                <div className={s.name}>{name}</div>
            </div>
            <div className={s.sub}>
                {status ? (
                    <button onClick={unfollow}>unfollow</button>
                ) : (
                    <button onClick={follow}>follow</button>
                )}
            </div>
        </div>
    )
}

export default UserItem
