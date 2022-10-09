import React from 'react'
import s from './Profile.module.css'

import Info from '../../components/Profile/Info/Info'
import PostBlock from '../../components/Post/PostBlock/PostBlock'

const Profile = ({ data }) => {
   return (
      <main className={`${s.profile_wrapper} ${s.page_wrapper}`}>
         <Info />
         <PostBlock data={data} />
      </main>
   )
}

export default Profile