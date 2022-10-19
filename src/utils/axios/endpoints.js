export const endpoints = {
    users: {
        list: '/users',
        user: id => `/profile/${id}`,
    },
    me: {
        isauth: '/auth/me',
    },
}
