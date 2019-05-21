import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        authenticated: null
    },
    mutations: {
        setAuth(state, authenticated) {
            state.authenticated = authenticated.authenticated;
        },
        clearAuthData(state) {
            state.authenticated = null
        }
    },
    actions: {
        async checkIfAuthenticated({commit}, auth) {
            const authenticated = await auth.isAuthenticated();
            commit('setAuth', {authenticated});
        }
    },
    getters: {
        getAuthStatus(state) {
            return state.authenticated
        }
    }
})
