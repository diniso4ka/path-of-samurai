import { endpoints } from './endpoints'
import { api } from './instance'

export const fetchUsers = async currentPage => {
    const res = await api.get(
        `${endpoints.users.list}?page=${currentPage}&count=5`
    )
    return res.data.items
}

export const fetchPages = async () => {
    const res = await api.get(endpoints.users.list)
    return Math.ceil(res.data.totalCount / 5)
}

export const checkIsAuth = async () => {
    const res = await api.get(endpoints.me.isauth)
    return res.data
}

export const fetchUser = async id => {
    const { data } = await api.get(endpoints.users.user(id))
    return data
}

export const fetchUnfollow = async id => {
    const res = await api.delete(endpoints.users.follow(id))
    return res.data.resultCode
}

export const fetchFollow = async id => {
    const res = await api.post(endpoints.users.follow(id))
    return res.data.resultCode
}
