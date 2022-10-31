export interface IPost {
    name: string
    avatar: string
    message: string
    id: number
}

export interface IProfileStatus {
    status: Status
    statusText: string
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}
