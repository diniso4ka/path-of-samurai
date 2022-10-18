import s from './Info.module.css'
import React from 'react'
import userPhoto from '../../../assets/images/user.png'
const Info = ({ data }) => {
    return (
        <section className={s.info_wrapper}>
            <img
                src={data.photos.large ? data.photos.large : userPhoto}
                className={s.avatar}
            ></img>
            <div className={s.text_wrapper}>
                <p className={s.text__name}>{data.fullName}</p>
                <p className={s.text__city}>Erevan</p>
                <p className={s.text__education}>Gerevan</p>
                <p className={s.text__birthday}>02.11.2001</p>
                <p className={s.text__website}>...</p>
            </div>
        </section>
    )
}

export default Info
