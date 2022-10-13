import React from 'react'
import s from './PostBlock.module.css'

import AddPostBlock from '../AddPostBlock/AddPostBlock'
import PostItem from '../PostItem/PostItem'


const PostBlock = ({ store }) => {
   return (
      <section className={s.wrapper}>
         <AddPostBlock store={store} />
         <div className={s.post_items}>
            {store.getState().profilePage.posts.map((user) => <PostItem name={user.name} text={user.message} avatar={user.avatar ? user.avatar : ''} key={user.id} />)}
         </div>
      </section>
   )
}

export default PostBlock