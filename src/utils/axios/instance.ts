import axios from 'axios'
import { socialAPI } from './api'

export const api = axios.create({
    baseURL: socialAPI,
    withCredentials: true,
    headers: {
        'API-KEY': '7db87af4-0fc9-4cbd-861a-1c11b56e4eca',
    },
})
