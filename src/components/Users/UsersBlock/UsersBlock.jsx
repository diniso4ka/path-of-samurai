import React from 'react'
import s from './UsersBlock.module.css'


const UsersBlock = ({ users, follow, unfollow }) => {
   return (
      <main className={`${s.users_wrapper} ${s.page_wrapper}`}>
         {users.map((user) => <div>{user.fullName} <button onClick={user.followed ? () => unfollow(user.id) : () => follow(user.id)}>{user.followed ? 'unfollow' : 'follow'}</button></div>)}
      </main>
   )
}

export default UsersBlock