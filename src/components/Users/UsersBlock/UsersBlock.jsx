import React from 'react'
import s from './UsersBlock.module.css'
import axios from "axios";

import userPhoto from '../../../assets/images/user.png'
import UserItem from "../UserItem/UserItem";
import PaginationContainer from "../Pagination/PaginationContainer";


const UsersBlock = ({ users, follow, unfollow,getUsers,getTotalPages, getCurrentPage, totalPages,currentPage }) => {
    const [load, setLoad]= React.useState(true)
    const fetchPages = async()=>{
        const res = await axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
        getTotalPages(Math.ceil(res.data.totalCount/5))
    }
   const fetchUsers = async ()=>{
      const res = await axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=5`)
     getUsers(res.data.items)
       setLoad(false)
   }
   React.useEffect(()=>{
       fetchPages()
      fetchUsers()
   },[])

    React.useEffect(()=>{
        fetchUsers()
    },[currentPage])

    const onTogglePage = (num)=>{
         getCurrentPage(num)
    }



   return (
      <main  className={`${s.users_wrapper} ${s.page_wrapper}`}>
          <div className={s.items}>
          {users?users.map((user) =>  <UserItem unfollow={unfollow} follow={follow} followed={user.followed} avatar={user.photos.small ? user.photos.small: userPhoto} name={user.name} id={user.id}/>): null}
          </div>
          <PaginationContainer/>
      </main>
   )
}

export default UsersBlock
