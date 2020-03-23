import Vue from 'vue'
import VueRouter from 'vue-router'

import TestStore from "@/pages/TestStore"
import HomePage from "@/pages/HomePage";
import Login from "@/components/Login";
import Oauth2Redirect from "@/pages/Oauth2Redirect";
import UserInfo from "@/components/UserInfo";
import page404 from "@/pages/page404";
import test from "@/components/test";

// 為了加入fontawesome icon 所import -- From Eric
import { library } from '@fortawesome/fontawesome-svg-core'
import { faComment, faUserCircle, faUserFriends, faBars, faSearch} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faComment, faUserCircle, faUserFriends, faBars, faSearch)
Vue.component('font-awesome-icon', FontAwesomeIcon)
// 結束

// import BootstrapVue --From Eric
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import BootstrapVue from 'bootstrap-vue'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: HomePage
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/oauth2/redirect',
            name: 'oauth2',
            component: Oauth2Redirect
        },
        {
            path: '/UserInfo',
            name: 'UserInfo',
            component: UserInfo
        },
        {
            path: '/test',
            name: 'test',
            component: test
        },
        {
            path: '/store',
            name: 'store',
            component: TestStore
        },
        {
            path: '/*',
            name: 'page404',
            component: page404
        },
    ]
})