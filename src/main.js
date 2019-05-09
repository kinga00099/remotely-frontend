import Vue from 'vue'
import App from './App.vue'

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import "normalize.css"
import Vuetify from 'vuetify'
import router from './router/index'
import axios from 'axios'
import VueLogger from 'vuejs-logger';


Vue.config.productionTip = false;

axios.defaults.baseURL = 'http://localhost:5000/api';
axios.defaults.headers.get['Accepts'] = 'application/json';


Vue.use(Vuetify, {
    iconfont: 'md',
    theme: {
        primary: '#212121',
        accent: '#FFC107'
    }
});


const options = {
    isEnabled: true,
    logLevel : 'debug',
    stringifyArguments : false,
    showLogLevel : true,
    showMethodName : false,
    separator: '|',
    showConsoleColors: true
};
Vue.use(VueLogger, options);


new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
