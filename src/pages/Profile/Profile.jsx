import React from 'react'
import s from './Profile.module.css'

import Info from '../../components/Profile/Info/Info'
import PostBlock from '../../components/Profile/Post/PostBlock/PostBlock'
import { useLocation, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { fetchUser } from '../../utils/axios/requests'

const Profile = () => {
    const user = useSelector(state => state.users.user)
    const [data, setData] = React.useState(null)
    const { id } = useParams()
    const location = useLocation()

    React.useEffect(() => {
        if (id) {
            fetchUser(id).then(res => {
                setData(prev => ({ ...res }))
            })
        } else {
            setData(prev => ({
                ...user,
            }))
        }
    }, [location])

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
