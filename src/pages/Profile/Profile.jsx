import React from 'react'
import s from './Profile.module.css'

import { useLocation, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { fetchUser } from '../../utils/axios/requests'

import StatusBlock from '../../components/Profile/Status/StatusBlock'
import Info from '../../components/Profile/Info/Info'
import PostBlock from '../../components/Profile/Post/PostBlock/PostBlock'

const Profile = () => {
    const user = useSelector(state => state.user.user)
    const [data, setData] = React.useState(null)
    const { id } = useParams()
    const location = useLocation()

    React.useEffect(() => {
        if (id) {
            fetchUser(id).then(res => {
                setData(prev => ({ ...res }))
            })
        } else {
            fetchUser(user.id).then(res => {
                setData(prev => ({ ...res }))
            })
        }
    }, [location])

    if (!data) {
        return <div>Loading...</div>
    }

    return (
        <main className={`${s.profile_wrapper} ${s.page_wrapper}`}>
            <Info data={data} />
            <StatusBlock id={id ? id : user.id} />
            <PostBlock />
        </main>
    )
}

export default Profile
