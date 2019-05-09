import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Job from "../views/Job";
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
            name: 'Home',
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
                requiresAuth: false
            }
        },
        {
            path: '/implicit/callback',
            component: Auth.handleCallback(),
        },
    ],
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }

});

router.beforeEach(Vue.prototype.$auth.authRedirectGuard());

export default router;
