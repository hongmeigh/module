import Vue from 'vue';
import EUI from 'element-ui';
import app from '@app';
import Router from 'vue-router';
import home from '@modules/home';
import '@element-ui-style';

Vue.config.productionTip = false;
Vue.use(EUI);

Vue.use(Router);
const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: home,
            meta: {
                title: '首页'
            }
        }
    ]
});

new Vue({
    el: '#app',
    router,
    template: '<app />',
    components: {
        app
    }
});
