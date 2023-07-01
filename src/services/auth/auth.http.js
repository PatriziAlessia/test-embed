import axios from '../axiosInstance.js'

const AuthAPI = {
    login: {
        method: 'post',
        path: '/auth/login',
        send: function (payload) {
            return axios[this.method](this.path, payload)
        },
    },
    me: {
        method: 'get',
        path: '/me',
        send: function (payload) {
            return axios[this.method](this.path, payload)
        },
    },
}

export default AuthAPI
