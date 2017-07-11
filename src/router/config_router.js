import Vue from 'vue';
import Router from 'vue-router';
import store from '../store/store'
import * as path from './path'
Vue.use(Router);

export default new Router({
//    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: function(){
                return '/home'
            },
            meta: { browse: true }
        },
        {
            path: '/home',
            component: path.HOME,
            meta: { browse: true }
        },
        {
            path: '/login',
            component: path.LOGIN,
            meta: { browse: true }
        },
        {
            path: '/map',
            component: path.MAP,
            meta: { browse: true }
        },
        {
            path: '/forgetPwd',
            component: path.FORGETPASSWORD,
            meta: { browse: true }
        },
        {
            path: '/user',
            component: path.LAYOUT_SHOW,
            children: [
                {
                    path: '',
                    redirect: ()=>{
                        return 'usersShow'
                    }
                },
                {
                    path: 'usersShow',
                    component: path.USERS_SHOW,
                },
                {
                    path: 'rolesShow',
                    component: path.ROLES_SHOW
                },
                {
                    path: 'usersAdd',
                    component: path.USERS_ADD,
                },
                {
                    path: 'usersEdit',
                    component: path.USERS_EDIT,
                },
                {
                    path: 'usersDetail',
                    component: path.USERS_DETAIL,
                },
                {
                    path: 'rolesAdd',
                    component: path.ROLES_ADD,
                },
                {
                    path: 'rolesEdit',
                    component: path.ROLES_EDIT,
                },
                {
                    path: 'rolesDetail',
                    component: path.ROLES_DETAIL,
                }
            ]
        },
        {
            path: '/export',
            component: path.LAYOUT_SHOW,
            children: [
                {
                    path: '',
                    redirect: ()=>{
                        return 'adminHistoryData'
                    }
                },
                {
                    path: 'adminHistoryData',
                    component: path.ADMIN_HISTORY_DATA
                },
                {
                    path: 'customQueryList',
                    component: path.CUSTOM_QUERY_LIST
                },
                {
                    path: 'publicData',
                    component: path.PUBLIC_DATA
                }
            ]
        },
        {
            path:'/operateLog',
            component: path.LAYOUT_SHOW,
            children: [
                {
                    path: '',
                    redirect: ()=>{
                        return 'showLogList'
                    }
                },
                {
                    path: 'showLogList',
                    component: path.SHOW_LOG_LIST
                }
            ]
        },
        {
            path: '/dataview',
            component: path.LAYOUT_SHOW,
            children: [
                {
                    path: '',
                    redirect: ()=>{
                        return 'showDataSum'
                    }
                },
                {
                    path: 'showDataSum',
                    component: path.SHOW_DATA_SUM
                },
                {
                    path: 'download',
                    component: path.DOWNLOAD
                }
            ]
        },
        {
            path: '/device',
            component: path.LAYOUT_SHOW,
            children: [
                {
                    path: '',
                    redirect: ()=>{
                        return 'deviceList'
                    }
                },
                {
                    path: 'deviceList',
                    component: path.DEVICE_LIST
                },
                {
                    path: 'deviceImport',
                    component: path.DEVICE_IMPORT
                },
                {
                    path: 'deviceConcat',
                    component: path.DEVICE_CONCAT
                }
            ]
        },
        {
            path: '/port',
            component: path.LAYOUT_SHOW,
            children: [
                {
                    path: '',
                    redirect: ()=>{
                        return 'portList'
                    }
                },
                {
                    path: 'portList',
                    component: path.PORT_LIST
                },
                {
                    path: 'portImport',
                    component: path.PORT_IMPORT
                },
                {
                    path: 'portConcat',
                    component: path.PORT_CONCAT
                }
            ]
        }
    ]
})
