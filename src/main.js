import Vue from 'vue'
import App from './App.vue'

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import "normalize.css"
import Vuetify from 'vuetify'
import router from './router/index'
import VueLogger from 'vuejs-logger';
import store from './store/store'
import Notify from 'vue2-notify'


Vue.config.productionTip = false;

Vue.use(Vuetify, {
    iconfont: 'md',
    theme: {
        primary: '#212121',
        accent: '#FFC107'
    }
});

Vue.use(Notify, {position:'bottom-right'});

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
    store,
    render: h => h(App),
}).$mount('#app');
