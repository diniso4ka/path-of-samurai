export interface IUserData {
    name: string
    id: number
    photos: IPhotos
    status: string | null
    followed: false | true
}

export interface IPhotos {
    small: string | null
    large: string | null
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}
