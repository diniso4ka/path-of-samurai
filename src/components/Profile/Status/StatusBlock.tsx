import React from 'react'
import s from './StatusBlock.module.css'
import { getStatus, setStatus } from '../../../redux/slices/profileSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'

interface IStatusBlockProps {
    id: number
}

const StatusBlock: React.FC<IStatusBlockProps> = ({ id }) => {
    const user = useAppSelector(state => state.user.user)
    const { status, statusText } = useAppSelector(
        state => state.profile.profileStatus
    )
    const dispatch = useAppDispatch()
    const [editing, setEditing] = React.useState(false)
    const [value, setValue] = React.useState('')

    const checkStatus = () => {
        setValue(statusText)
    }

    const onClickSend = async () => {
        setEditing(!editing)
        if (statusText !== value) {
            await dispatch(setStatus(value))
            await dispatch(getStatus(id))
        }
    }

    React.useEffect(() => {
        dispatch(getStatus(id))
        checkStatus()
    }, [])

    React.useEffect(() => {
        checkStatus()
    }, [statusText])

    if (status === 'loading') {
        return <div>...loading</div>
    }

    return (
        <section className={s.wrapper}>
            {editing && id === user.id ? (
                <>
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
