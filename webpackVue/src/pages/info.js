import Vue from 'vue';
import EUI from 'element-ui';
import app from '@app';
import Router from 'vue-router';
import info from '@modules/info/info';
import infoDetail from '@modules/info/info-detail';
import '@element-ui-style';

Vue.config.productionTip = false;
Vue.use(EUI);

Vue.use(Router);
const router = new Router({
    routes: [
        {
            path: '/',
            name: 'info',
            component: info,
            meta: {
                title: '信息'
            }
        },
        {
            path: '/info-detail',
            name: 'info-detail',
            component: infoDetail,
            meta: {
                title: '信息详情'
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
