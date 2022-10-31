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
    const res = await api.get(endpoints.users.user(id))
    return res.data
}

export const fetchUnfollow = async id => {
    const res = await api.delete(endpoints.users.follow(id))
    return res.data.resultCode
}

export const fetchFollow = async id => {
    const res = await api.post(endpoints.users.follow(id))
    return res.data.resultCode
}

export const fetchGetStatus = async id => {
    const res = await api.get(endpoints.profile.getStatus(id))
    return res.data
}

export const fetchSetStatus = async text => {
    const res = await api.put(endpoints.profile.setStatus, {
        status: text,
    })
    return res.data
}

export const fetchSetPhoto = async formData => {
    const res = await api.put(endpoints.profile.setPhoto, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    return res.data
}

export const fetchLogin = async user => {
    const res = await api.post(endpoints.me.login, {
        email: user.email,
        password: user.password,
        rememberMe: user.rememberMe,
    })
    return res
}

export const fetchLogout = async () => {
    const res = await api.delete(endpoints.me.login)
    return res
}
