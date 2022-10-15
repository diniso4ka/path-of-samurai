import React from 'react'
import s from './Profile.module.css'

import Info from '../../components/Profile/Info/Info'
import PostBlock from '../../components/Profile/Post/PostBlock/PostBlock'

const Profile = () => {
   return (
      <main className={`${s.profile_wrapper} ${s.page_wrapper}`}>
         <Info />
         <PostBlock />
      </main>
   )
}

export default Profile