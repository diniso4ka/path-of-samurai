import React from 'react'
import s from './UsersBlock.module.css'
import axios from 'axios'

import userPhoto from '../../../assets/images/user.png'
import UserItem from '../UserItem/UserItem'
import PaginationContainer from '../Pagination/PaginationContainer'
import { fetchPages, fetchUsers } from '../../../utils/axios/requests'

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
    React.useEffect(() => {
        fetchPages().then(res => {
            getTotalPages(res)
        })

        fetchUsers(currentPage).then(res => {
            toggleLoading(true)
            getUsers(res)
            toggleLoading(false)
        })
    }, [])

    React.useEffect(() => {
        fetchUsers(currentPage).then(res => {
            toggleLoading(true)
            getUsers(res)
            toggleLoading(false)
        })
    }, [currentPage])

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
