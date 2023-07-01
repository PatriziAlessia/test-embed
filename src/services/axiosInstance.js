import axios from 'axios'

import config from '../../config.js'
import { ROUTE_LOGIN } from '../utilities/constants'
import LocalStorageManager from '../utilities/local-storage-manager'

const axiosConfig = {
    baseURL: config.apiEndpoint,
    headers: {
        common: {
            Authorization: LocalStorageManager.accessToken.get()
                ? `Bearer ${LocalStorageManager.accessToken.get()}`
                : false,
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
        post: {
            'Access-Control-Allow-Origin': '*',
        },
    },
}

// create axios custom instance with custom config
const axiosInstance = axios.create(axiosConfig)

const attemptRefresh = async refreshToken => {
    const url = '/auth/refresh-token'
    try {
        const {
            data: { tokens },
        } = await axiosInstance.post(url, {
            refresh_token: refreshToken,
        })
        LocalStorageManager.accessToken.set(tokens['access_token'])
        LocalStorageManager.refreshToken.set(tokens['refresh_token'])
        return tokens
    } catch (err) {
        LocalStorageManager.removeAuthData()
        return err?.response?.data
    }
}

axiosInstance.interceptors.request.use(request => {
    const token = LocalStorageManager.accessToken.get()
    if (token) request.headers['Authorization'] = `Bearer ${token}`
    return request
})

const endpointToIgnore = [ROUTE_LOGIN]

axiosInstance.interceptors.response.use(
    response => {
        // pass response without change
        return response
    },
    async error => {
        // get error info
        let statusCode = error?.response?.status
        let originalRequest = error.config
        console.log('error', error)
        switch (statusCode) {
            case 401: {
                const refreshToken = LocalStorageManager.refreshToken.get()
                LocalStorageManager.accessToken.remove()
                if (
                    refreshToken &&
                    !originalRequest._retry &&
                    !endpointToIgnore.includes(error.config.url)
                ) {
                    originalRequest._retry = true // prevent infinite retry loop
                    await attemptRefresh(refreshToken)

                    return axiosInstance.request(originalRequest)
                }
                LocalStorageManager.removeAuthData()
                // TODO: reset user in context
                return Promise.reject(error)
            }
            default:
                return Promise.reject(error)
        }
    }
)

export default axiosInstance
