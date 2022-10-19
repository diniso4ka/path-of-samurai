import React from 'react'
import s from './UserItem.module.css'
import { Link } from 'react-router-dom'
import { createUserUrl } from '../../../utils/consts'
import { api } from '../../../utils/axios/instance'
import { endpoints } from '../../../utils/axios/endpoints'

const UserItem = ({ avatar, name, followed, id }) => {
    const [status, setStatus] = React.useState(followed)
    const fetchFollow = async () => {
        const res = await api.post(endpoints.users.follow(id))
        if (res.data.resultCode === 0) {
            setStatus(true)
        }
    }

    const fetchUnfollow = async () => {
        const res = await api.delete(endpoints.users.follow(id))
        if (res.data.resultCode === 0) {
            console.log(status)
            setStatus(false)
        }
    }

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
                {status ? (
                    <button onClick={fetchUnfollow}>unfollow</button>
                ) : (
                    <button onClick={fetchFollow}>follow</button>
                )}
            </div>
        </div>
    )
}

export default UserItem
