import React from 'react'
import s from './UsersBlock.module.css'
import axios from 'axios'

import userPhoto from '../../../assets/images/user.png'
import UserItem from '../UserItem/UserItem'
import PaginationContainer from '../Pagination/PaginationContainer'
import { fetchPages, fetchUsers } from '../../../utils/axios/requests'
import { useDispatch } from 'react-redux'
import {
    fetchTotalPages,
    fetchUsersList,
} from '../../../redux/slices/usersSlice'

const UsersBlock = ({ users, follow, unfollow, currentPage, status }) => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchTotalPages())
        dispatch(fetchUsersList(currentPage))
    }, [])

    React.useEffect(() => {
        dispatch(fetchUsersList(currentPage))
    }, [currentPage])

    if (status === 'loading') {
        return <div>...loading</div>
    }

    return (
        <main className={`${s.users_wrapper} ${s.page_wrapper}`}>
            <div className={s.items}>
                {users
                    ? users.map(user => (
                          <UserItem
                              key={user.id}
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
