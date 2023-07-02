import axios from '../axiosInstance.js'

const DataAPI = {
    getData: {
        method: 'get',
        path: 'https://run.mocky.io/v3/9180cd30-f24b-483d-ab5c-201aabb09659',
        send: function (payload) {
            return axios[this.method](this.path, payload)
        },
    },
}

export default DataAPI
