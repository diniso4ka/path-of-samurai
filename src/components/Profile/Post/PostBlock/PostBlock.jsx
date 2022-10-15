import React from 'react'
import s from './PostBlock.module.css'

import AddPostBlock from '../AddPostBlock/AddPostBlock'
import PostItem from '../PostItem/PostItem'
import { useSelector } from 'react-redux'


const PostBlock = () => {
   const { posts } = useSelector((state) => state.profile)

   return (
      <section className={s.wrapper}>
         <AddPostBlock />
         <div className={s.post_items}>
            {posts.map((user) => <PostItem name={user.name} text={user.message} avatar={user.avatar ? user.avatar : ''} key={user.id} />)}
         </div>
      </section>
   )
}

export default PostBlock