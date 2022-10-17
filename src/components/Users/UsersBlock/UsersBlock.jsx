import React from 'react'
import s from './UsersBlock.module.css'
import axios from "axios";

import userPhoto from '../../../assets/images/user.png'
import UserItem from "../UserItem/UserItem";


const UsersBlock = ({ users, follow, unfollow }) => {
   const [data, setData]= React.useState([])
   const fetchUsers = async ()=>{
      const res = await axios.get('https://social-network.samuraijs.com/api/1.0/users')
      console.log(res.data.items);
      setData((prev)=>[...res.data.items])
   }
   React.useEffect(()=>{
      fetchUsers()
   },[])

   return (
      <main className={`${s.users_wrapper} ${s.page_wrapper}`}>
         {data?data.map((user) =>  <UserItem avatar={user.photos.small ? user.photos.small: userPhoto} name={user.name} id={user.id}/>): null}
      </main>
   )
}

export default UsersBlock
