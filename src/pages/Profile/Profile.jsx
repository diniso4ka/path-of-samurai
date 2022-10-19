import React from 'react'
import s from './Profile.module.css'

import Info from '../../components/Profile/Info/Info'
import PostBlock from '../../components/Profile/Post/PostBlock/PostBlock'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { api } from '../../utils/axios/instance'
import { endpoints } from '../../utils/axios/endpoints'

const Profile = () => {
    const user = useSelector(state => state.users.user)
    const [data, setData] = React.useState(null)
    const { id } = useParams()

    const fetchAuthMe = async () => {
        const { data } = await api.get(endpoints.me.isauth, {
            withCredentials: true,
        })
        console.log(data)
    }

    const fetchUsers = async id => {
        const { data } = await api.get(endpoints.users.user(id))
        setData(prev => ({ ...data }))
    }
    React.useEffect(() => {
        if (id) {
            fetchUsers(id)
        } else {
            setData(prev => ({
                ...user,
            }))
        }
        fetchAuthMe()
    }, [])

    if (!data) {
        return <div>Loading...</div>
    }

    return (
        <main className={`${s.profile_wrapper} ${s.page_wrapper}`}>
            <Info data={data} />
            <PostBlock />
        </main>
    )
}

export default Profile
