import axios from '../axiosInstance.js'

const DataAPI = {
    getData: {
        method: 'get',
        path: 'https://run.mocky.io/v3/e5f5f806-7831-46fd-bd69-de47a9442814',
        send: function (payload) {
            return axios[this.method](this.path, payload)
        },
    },
}

export default DataAPI
