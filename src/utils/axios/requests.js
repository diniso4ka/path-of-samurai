import { endpoints } from './endpoints'
import { api } from './instance'

export const fetchUsers = async currentPage => {
    try {
        const res = await api.get(
            `${endpoints.users.list}?page=${currentPage}&count=5`
        )
        return res.data.items
    } catch (err) {
        console.warn(err)
    }
}

export const fetchPages = async () => {
    try {
        const res = await api.get(endpoints.users.list)
        return Math.ceil(res.data.totalCount / 5)
    } catch (err) {
        console.warn(err)
    }
}

export const checkIsAuth = async () => {
    try {
        const res = await api.get(endpoints.me.isauth)
        return res.data
    } catch (err) {
        console.warn(err)
    }
}

export const fetchUser = async id => {
    try {
        const res = await api.get(endpoints.users.user(id))
        return res.data
    } catch (err) {
        console.warn(err)
    }
}

export const fetchUnfollow = async id => {
    try {
        const res = await api.delete(endpoints.users.follow(id))
        return res.data.resultCode
    } catch (err) {
        console.warn(err)
    }
}

export const fetchFollow = async id => {
    try {
        const res = await api.post(endpoints.users.follow(id))
        return res.data.resultCode
    } catch (err) {
        console.warn(err)
    }
}

export const fetchGetStatus = async id => {
    try {
        const res = await api.get(endpoints.profile.getStatus(id))
        return res.data
    } catch (err) {
        console.warn(err)
    }
}

export const fetchSetStatus = async text => {
    try {
        const res = await api.put(endpoints.profile.setStatus, {
            status: text,
        })
        return res.data
    } catch (err) {
        console.warn(err)
    }
}

export const fetchSetPhoto = async formData => {
    try {
        const res = await api.put(endpoints.profile.setPhoto, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        return res.data
    } catch (err) {
        console.warn(err)
    }
}

export const fetchLogin = async user => {
    try {
        const res = await api.post(endpoints.me.login, {
            email: user.email,
            password: user.password,
            rememberMe: user.rememberMe,
        })
        return res
    } catch (err) {
        console.warn(err)
    }
}

export const fetchLogout = async () => {
    try {
        const res = await api.delete(endpoints.me.login)
        return res
    } catch (err) {
        console.warn(err)
    }
}
