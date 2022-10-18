import React from 'react'
import s from './Profile.module.css'

import Info from '../../components/Profile/Info/Info'
import PostBlock from '../../components/Profile/Post/PostBlock/PostBlock'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Profile = () => {
    const user = useSelector(state => state.users.user)
    const [data, setData] = React.useState(null)
    const { id } = useParams()

    const fetchUsers = async id => {
        const { data } = await axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/${id}`
        )
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
