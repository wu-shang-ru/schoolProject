import Vue from 'vue'
import VueRouter from 'vue-router'

import TestStore from "@/pages/TestStore"
import HomePage from "@/pages/HomePage";
import Login from "@/components/Login";
import Oauth2Redirect from "@/pages/Oauth2Redirect";
import UserInfo from "@/components/UserInfo";
import page404 from "@/pages/page404";
import test from "@/components/test";

Vue.use(VueRouter);

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