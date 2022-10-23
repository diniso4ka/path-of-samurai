import React from 'react'
import s from './StatusBlock.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getStatus } from '../../../redux/slices/profileSlice'

const StatusBlock = () => {
    const profile = useSelector(state => state.profile)
    const dispatch = useDispatch()
    const [editing, setEditing] = React.useState(false)
    const [value, setValue] = React.useState('')

    const onSetStatus = () => {}
    React.useEffect(() => {}, [])

    return (
        <section className={s.wrapper}>
            {editing ? (
                <input
                    onChange={e => setValue(e.target.value)}
                    value={value}
                    type={'text'}
                />
            ) : (
                <p onClick={() => setEditing(!editing)}>{value}</p>
            )}
            {editing && <button onClick={onSetStatus}>edit</button>}
        </section>
    )
}

export default StatusBlock
