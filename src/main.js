import Vue from 'vue'
import App from './App.vue'

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import "normalize.css"
import Vuetify from 'vuetify'

import router from './router/index'
import axios from 'axios'


axios.defaults.baseURL = 'http://localhost:5000/api';
axios.defaults.headers.get['Accepts'] = 'application/json';


Vue.use(Vuetify, {
    iconfont: 'md',
    theme: {
        primary: '#78909C',
        accent: '#FFC107'
    }
});
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
