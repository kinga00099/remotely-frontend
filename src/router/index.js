import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Job from "../views/Job";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '*',
            redirect: '/'
        },
        {
            path: '/job/:id',
            component: Job
        }
    ],
    mode: 'history'
})
