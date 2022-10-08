import React from 'react'
import s from './PostBlock.module.css'

import AddPostBlock from '../AddPostBlock/AddPostBlock'
import PostItem from '../PostItem/PostItem'


const PostBlock = () => {
   return (
      <section className={s.wrapper}>
         <AddPostBlock />
         <PostItem name={'Денис'} text={'Привет я гуль'} avatar={'https://www.peoples.ru/character/movie/shrek/shrek_4.jpg'} />
         <PostItem name={'Денис'} text={'Привет я шрек'} />
         <PostItem name={'Денис'} text={'Привет я сруль и я очень люблю смотреть анимеsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'} />

      </section>
   )
}

export default PostBlock