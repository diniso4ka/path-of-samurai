import React from 'react'
import s from './Profile.module.css'

import { useLocation, useParams } from 'react-router-dom'

import { fetchUser } from '../../utils/axios/requests'

import StatusBlock from '../../components/Profile/Status/StatusBlock'
import Info from '../../components/Profile/Info/Info'
import PostBlock from '../../components/Profile/Post/PostBlock/PostBlock'
import { setPhoto } from '../../redux/slices/profileSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { IUser } from '../../utils/axios/types'

const Profile: React.FC = () => {
    const user = useAppSelector(state => state.user.user)
    const dispatch = useAppDispatch()
    const [data, setData] = React.useState<IUser>(null)
    const { id } = useParams()
    const location = useLocation()
    const onUploadFile = async e => {
        const formData = new FormData()
        formData.append('image', e.target.files[0])
        await dispatch(setPhoto(formData))
        await fetchMyProfile()
    }

    const fetchMyProfile = async () => {
        fetchUser(user.id).then(res => {
            setData(prev => ({ ...res }))
        })
    }
    const fetchUserProfile = async id => {
        fetchUser(id).then(res => {
            setData(prev => ({ ...res }))
        })
    }

    React.useEffect(() => {
        if (id) {
            fetchUserProfile(id)
        } else {
            fetchMyProfile()
        }
    }, [location])

    if (!data) {
        return <div>Loading...</div>
    }

    return (
        <main className={`${s.profile_wrapper} ${s.page_wrapper}`}>
            <Info handleClick={onUploadFile} data={data} isOwner={!id} />
            <StatusBlock id={id ? id : user.id} />
            <PostBlock />
        </main>
    )
}

export default Profile
