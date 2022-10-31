import { IPhotos } from '../../redux/slices/config/usersTypes'

export interface IUser {
    userId: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    photos: IPhotos
    contacts: IContacts
}

export interface IContacts {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export interface IUserLoginData {
    email: string
    password: string
    rememberMe: boolean
}
