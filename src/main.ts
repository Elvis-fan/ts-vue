import Vue from 'vue';
import App from './App.vue';
import router from './general/router/router';
import store from './general/store/store';
import './plugins/element.js';
import './general/axios/axiosConfig';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');
