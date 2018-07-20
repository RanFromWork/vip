import Vue from 'vue'
import Router from 'vue-router'
import Home from '@views/home/home'
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
        ...Variety,
    ]
})
