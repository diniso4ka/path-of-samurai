import React from 'react'
import s from './PostBlock.module.css'

import AddPostBlock from '../AddPostBlock/AddPostBlock'
import PostItem from '../PostItem/PostItem'


const PostBlock = () => {
   return (
      <section className={s.wrapper}>
         <AddPostBlock />
         <PostItem />
      </section>
   )
}

export default PostBlock