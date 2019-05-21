import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Job from "../views/Job";
import NotFound from "../views/NotFound";

import Auth from "@okta/okta-vue";
import authConfig from '../auth/auth.config.js'

const options = authConfig;

Vue.use(Auth, authConfig
);

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '*',
            component: NotFound
        },
        {
            path: '/job/:id',
            component: Job,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/implicit/callback',
            component: Auth.handleCallback(),
        },
    ],
    mode: 'history',
    scrollBehavior () {
        return { x: 0, y: 0 }
    }

});

router.beforeEach(Vue.prototype.$auth.authRedirectGuard());

export default router;
