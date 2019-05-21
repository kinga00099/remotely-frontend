import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        authenticated: null,
        filterText: ''
    },
    mutations: {
        setAuth(state, authenticated) {
            state.authenticated = authenticated.authenticated;
        },
        clearAuthData(state) {
            state.authenticated = null
        },
        setFilterText(state, text){
            state.filterText = text
        }
    },
    actions: {
        async checkIfAuthenticated({commit}, auth) {
            const authenticated = await auth.isAuthenticated();
            commit('setAuth', {authenticated});
        },
        saveFilterText({commit}, text){
            commit('setFilterText', text)
        }
    },
    getters: {
        getAuthStatus(state) {
            return state.authenticated
        },
        getFilterText(state){
            return state.filterText
        }
    }
})
