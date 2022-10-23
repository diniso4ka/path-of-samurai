import React from 'react'
import s from './StatusBlock.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getStatus, setStatus } from '../../../redux/slices/profileSlice'

const StatusBlock = () => {
    const profile = useSelector(state => state.profile)
    const dispatch = useDispatch()
    const [editing, setEditing] = React.useState(false)
    const [value, setValue] = React.useState('')

    const checkStatus = () => {
        setValue(profile.profileStatus.statusText)
    }

    const onClickSend = async () => {
        setEditing(!editing)
        await dispatch(setStatus(value))
        await dispatch(getStatus(26364))
    }

    React.useEffect(() => {
        dispatch(getStatus(26364))
        checkStatus()
    }, [])

    React.useEffect(() => {
        checkStatus()
    }, [profile.profileStatus.statusText])

    return (
        <section className={s.wrapper}>
            {editing ? (
                <>
                    {' '}
                    <input
                        onChange={e => setValue(e.target.value)}
                        value={value}
                        type={'text'}
                    />
                    <button onClick={onClickSend}>edit</button>
                </>
            ) : (
                <p onClick={() => setEditing(!editing)}>
                    {value ? value : 'status'}
                </p>
            )}
        </section>
    )
}

export default StatusBlock
