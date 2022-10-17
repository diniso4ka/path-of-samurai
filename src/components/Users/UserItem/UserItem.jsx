import React from 'react'
import s from './UserItem.module.css'

const UserItem = ({avatar, name, followed, id}) => {
	return (
		<div className={`${s.user_wrapper} ${s.page_wrapper}`}>
			<div className={s.main}>
				<img src={avatar} className={s.avatar}/>
				<div className={s.name}>{name}</div>
			</div>
			<div className={s.sub}>
				<button className={s.button} onClick={followed ? () => unfollow(id) : () => follow(id)}>{followed ? 'unfollow' : 'follow'}</button>
			</div>
		</div>
	)
}

export default UserItem
