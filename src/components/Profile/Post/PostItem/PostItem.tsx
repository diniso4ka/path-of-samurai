import React from 'react'
import s from './PostItem.module.css'

interface IPostItemProps {
    text: string
    avatar: string
    name: string
}

const PostItem: React.FC<IPostItemProps> = ({ text, avatar, name }) => {
    return (
        <section className={s.wrapper}>
            <img
                src={
                    avatar
                        ? avatar
                        : 'https://работазабкрай.рф/static/img/cabinet.png'
                }
                className={s.avatar}
            />
            <div>
                <p className={s.name}>{name}</p>
                <p className={s.text}>{text}</p>
            </div>
        </section>
    )
}

export default PostItem
