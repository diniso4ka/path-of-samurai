import React from 'react'

import UsersContainer from '../../components/Users/UsersBlock/UsersContainer';
import s from './Users.module.css'


const Users = ({ users }) => {
   console.log(users);
   return (
      <main>
         <UsersContainer />
      </main>
   )
}

export default Users