import Vue from 'vue'
import Router from 'vue-router'
import Home from '@views/home/home'
import Iframe from '@views/iframe/iframe'
import Variety from '@/router/modules/variety'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            meta: {
                activeMenu: 'home',
                crumbs: [{ name: "首页", path: "" }]
            },
            component: Home
        },
        {
            path: '/iframe/:name',
            name: 'iframe',
            meta: {
                activeMenu: 'iframe',
                crumbs: [{ name: "首页", path: "" }]
            },
            component: Iframe
        },
        ...Variety,
    ]
})
