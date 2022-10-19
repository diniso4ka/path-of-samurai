import axios from 'axios'
import { socialAPI } from './api'

export const api = axios.create({
    baseURL: socialAPI,
})
