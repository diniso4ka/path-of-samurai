import React from 'react'
import s from './PostBlock.module.css'

import PostItem from '../PostItem/PostItem'
import { useSelector } from 'react-redux'
import AddPostContainer from '../AddPostBlock/AddPostContainer'


const PostBlock = () => {
   const { posts } = useSelector((state) => state.profile)

   return (
      <section className={s.wrapper}>
         <AddPostContainer />
         <div className={s.post_items}>
            {posts.map((user) => <PostItem name={user.name} text={user.message} avatar={user.avatar ? user.avatar : ''} key={user.id} />)}
         </div>
      </section>
   )
}

export default PostBlock