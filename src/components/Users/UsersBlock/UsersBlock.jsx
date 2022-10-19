import React from 'react'
import s from './UsersBlock.module.css'
import axios from 'axios'

import userPhoto from '../../../assets/images/user.png'
import UserItem from '../UserItem/UserItem'
import PaginationContainer from '../Pagination/PaginationContainer'
import { api } from '../../../utils/axios/instance'
import { endpoints } from '../../../utils/axios/endpoints'

const UsersBlock = ({
    users,
    follow,
    unfollow,
    getUsers,
    getTotalPages,
    getCurrentPage,
    currentPage,
    loading,
    toggleLoading,
}) => {
    const fetchPages = async () => {
        const res = await api.get(endpoints.users.list)
        getTotalPages(Math.ceil(res.data.totalCount / 5))
    }
    const fetchUsers = async () => {
        toggleLoading(true)
        const res = await api.get(
            `${endpoints.users.list}?page=${currentPage}&count=5`
        )
        getUsers(res.data.items)
        toggleLoading(false)
    }
    React.useEffect(() => {
        fetchPages()
        fetchUsers()
    }, [])

    React.useEffect(() => {
        fetchUsers()
    }, [currentPage])

    const onTogglePage = num => {
        getCurrentPage(num)
    }

    if (loading) {
        return <div>...loading</div>
    }

    return (
        <main className={`${s.users_wrapper} ${s.page_wrapper}`}>
            <div className={s.items}>
                {users
                    ? users.map(user => (
                          <UserItem
                              key={user.id}
                              unfollow={unfollow}
                              follow={follow}
                              followed={user.followed}
                              avatar={
                                  user.photos.small
                                      ? user.photos.small
                                      : userPhoto
                              }
                              name={user.name}
                              id={user.id}
                          />
                      ))
                    : null}
            </div>
            <PaginationContainer />
        </main>
    )
}

export default UsersBlock
