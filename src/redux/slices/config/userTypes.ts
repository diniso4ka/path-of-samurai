export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export interface IAuthData {
    resultCode: number
    messages: string
    data: IUserData
}

export interface IUserData {
    id: number
    email: string
    login: string
}
