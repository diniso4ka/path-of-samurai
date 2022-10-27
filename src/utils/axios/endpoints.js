export const endpoints = {
    users: {
        list: '/users',
        user: id => `/profile/${id}`,
        follow: id => `/follow/${id}`,
    },
    me: {
        isauth: '/auth/me',
        login: '/auth/login',
    },
    profile: {
        getStatus: id => `/profile/status/${id}`,
        setStatus: `/profile/status`,
    },
}
