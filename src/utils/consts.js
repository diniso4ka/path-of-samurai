export const ROUTE_PROFILE = '/profile'
export const ROUTE_USER = '/user/:id'
export const ROUTE_DIALOGS = '/dialogs'
export const ROUTE_NEWS = '/news'
export const ROUTE_MUSICS = '/musics'
export const ROUTE_SETTINGS = '/settings'
export const ROUTE_USERS = '/users'
export const ROUTE_LOGIN = '/login'

export const createUserUrl = id => {
    return `/user/${id}`
}
