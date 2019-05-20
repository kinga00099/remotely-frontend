import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Job from "../views/Job";
import Login from "../views/Login";
import NotFound from "../views/NotFound";

import Auth from "@okta/okta-vue";


Vue.use(Auth, {
    issuer: 'https://dev-933332.okta.com/oauth2/default',
    client_id: '0oakfuhbsRD5EH34N356',
    redirect_uri: window.location.origin + '/implicit/callback',
    scope: 'openid profile email'
});

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: Login
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

const onAuthRequired = async (from, to, next) => {
    if (from.matched.some(record => record.meta.requiresAuth) && !(await Vue.prototype.$auth.isAuthenticated())) {
        next({ path: '/login' })
    } else {
        next()
    }
};

router.beforeEach(onAuthRequired);

export default router;
