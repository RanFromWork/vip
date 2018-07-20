import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import request from './utils/request';
Vue.prototype.$http = request;

import 'iview/dist/styles/iview.css';
Vue.use(iView);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
