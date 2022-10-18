import React from 'react'
import s from './UsersBlock.module.css'
import axios from "axios";

import userPhoto from '../../../assets/images/user.png'
import UserItem from "../UserItem/UserItem";


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
          {users?users.map((user) =>  <UserItem avatar={user.photos.small ? user.photos.small: userPhoto} name={user.name} id={user.id}/>): null}
          </div>
          {totalPages&& <div className={s.pagination}>
              {+currentPage === 2 && <div onClick={(e)=> onTogglePage(e.target.innerHTML)} className={s.pagination_item}>{1}</div>}

              {+currentPage === 3 && <div onClick={(e)=> onTogglePage(e.target.innerHTML)} className={s.pagination_item}>{1}</div>}
              {+currentPage === 3 && <div onClick={(e)=> onTogglePage(e.target.innerHTML)} className={s.pagination_item}>{2}</div>}

              {+currentPage > 3 && <div onClick={(e)=> onTogglePage(e.target.innerHTML)} className={s.pagination_item}>{currentPage-3}</div>}
              {+currentPage > 3 && <div onClick={(e)=> onTogglePage(e.target.innerHTML)} className={s.pagination_item}>{currentPage-2}</div>}
              {+currentPage > 3 && <div onClick={(e)=> onTogglePage(e.target.innerHTML)} className={s.pagination_item}>{currentPage-1}</div>}



              <div onClick={(e)=> onTogglePage(e.target.innerHTML)} className={`${s.pagination_item} ${s.active}`}>{currentPage}</div>

              <div onClick={(e)=> onTogglePage(e.target.innerHTML)} className={s.pagination_item}>{+currentPage+1}</div>
              <div onClick={(e)=> onTogglePage(e.target.innerHTML)} className={s.pagination_item}>{+currentPage+2}</div>
              <div onClick={(e)=> onTogglePage(e.target.innerHTML)} className={s.pagination_item}>{+currentPage+3}</div>

              {+currentPage <= 3 &&<div onClick={(e)=> onTogglePage(e.target.innerHTML)} className={s.pagination_item}>{+currentPage+4}</div>}
              {+currentPage <= 2 &&<div onClick={(e)=> onTogglePage(e.target.innerHTML)} className={s.pagination_item}>{+currentPage+5}</div>}
              {+currentPage <= 1 &&<div onClick={(e)=> onTogglePage(e.target.innerHTML)} className={s.pagination_item}>{+currentPage+6}</div>}

              {/*<div onClick={(e)=> onTogglePage(e.target.innerHTML)} className={s.pagination_item}>{+currentPage+4}</div>*/}
          </div>}
      </main>
   )
}

export default UsersBlock
