import s from './Info.module.css'
import React from 'react'
import userPhoto from '../../../assets/images/user.png'
import { useDispatch } from 'react-redux'
import { setPhoto } from '../../../redux/slices/profileSlice'
import { checkIsAuth, handleClick } from '../../../utils/axios/requests'
const Info = ({ data, isOwner, handleClick }) => {
    const dispatch = useDispatch()
    console.log(data)

    return (
        <section className={s.info_wrapper}>
            <div className={s.photo}>
                <img
                    src={data.photos.large ? data.photos.large : userPhoto}
                    className={s.avatar}
                />
                {isOwner && (
                    <input onChange={e => handleClick(e)} type={'file'} />
                )}
            </div>
            <div className={s.text_wrapper}>
                <p className={s.text__name}>{data.fullName}</p>
                <ul className={s.contacts}>
                    <li className={s.contactsItem}>
                        Facebook: {data.contacts.facebook}
                    </li>
                    <li className={s.contactsItem}>
                        Github: {data.contacts.github}
                    </li>
                    <li className={s.contactsItem}>
                        Instagram: {data.contacts.instagram}
                    </li>
                    <li className={s.contactsItem}>Vk: {data.contacts.vk}</li>
                </ul>
                <p className={s.text__birthday}>
                    {data.lookingForAJob
                        ? `Looking for a job: ${data.lookingForAJobDescription}`
                        : ''}
                </p>
            </div>
        </section>
    )
}

export default Info
