import axios from 'axios'
import Vue from 'vue'

const SERVER_URL = 'http://localhost:5000/api/';

const instance = axios.create({
    baseURL: SERVER_URL,
    timeout: 1000
});

export default {
    async execute(method, resource, data, config) {
        let accessToken = await Vue.prototype.$auth.getAccessToken();
        return instance({
            method:method,
            url: resource,
            data,
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            ...config
        })
    },

    getAllJobs() {
        return this.execute('GET','jobs')
    },

    getJobById(id){
        return this.execute('GET', 'job/'+id)
    },

    getFilters(){
        return this.execute('GET', 'types')
    },

    getCompaniesByUser(email) {
        return this.execute('GET',  'company?email='+email)
    }
}
