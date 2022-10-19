export const endpoints = {
    users: {
        list: '/users',
        user: id => `/profile/${id}`,
        follow: id => `/follow/${id}`,
    },
    me: {
        isauth: '/auth/me',
    },
}
