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
            path: '/mapList',
            component: path.MAP_LIST,
            meta: {name: '数据视图'},
        },
        {
            path: '/mapList/map1',
            component: path.MAP_1,
            meta: {name: '视图详情'}
        },
        {
            path: '/mapList/map2',
            component: path.MAP_2,
            meta: {name: '视图详情'}
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
            meta: {name: '用户管理'},
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
                    meta: {name: '用户列表'}
                },
                {
                    path: 'rolesShow',
                    component: path.ROLES_SHOW,
                    meta: {name: '权限列表'}
                },
                {
                    path: 'usersAdd',
                    component: path.USERS_ADD,
                    meta: {name: '用户新增'}
                },
                {
                    path: 'usersEdit',
                    component: path.USERS_EDIT,
                    meta: {name: '用户编辑'}
                },
                {
                    path: 'usersDetail',
                    component: path.USERS_DETAIL,
                    meta: {name: '用户详情'}
                },
                {
                    path: 'rolesAdd',
                    component: path.ROLES_ADD,
                    meta: {name: '权限新增'}
                },
                {
                    path: 'rolesEdit',
                    component: path.ROLES_EDIT,
                    meta: {name: '权限编辑'}
                },
                {
                    path: 'rolesDetail',
                    component: path.ROLES_DETAIL,
                    meta: {name: '权限详情'}
                }
            ]
        },
        {
            path: '/export',
            component: path.LAYOUT_SHOW,
            meta: {name: '业务数据管理'},
            children: [
                {
                    path: '',
                    redirect: ()=>{
                        return 'adminHistoryData'
                    }
                },
                {
                    path: 'adminHistoryData',
                    component: path.ADMIN_HISTORY_DATA,
                    meta: {name: '历史数据'}
                },
                {
                    path: 'customQueryList',
                    component: path.CUSTOM_QUERY_LIST,
                    meta: {name: '自定义查询'}
                },
                {
                    path: 'publicData',
                    component: path.PUBLIC_DATA,
                    meta: {name: '数据发布'}
                }
            ]
        },
        {
            path:'/operateLog',
            component: path.LAYOUT_SHOW,
            meta: {name: '系统管理'},
            children: [
                {
                    path: '',
                    redirect: ()=>{
                        return 'showLogList'
                    }
                },
                {
                    path: 'showLogList',
                    component: path.SHOW_LOG_LIST,
                    meta: {name: '日志管理'}
                }
            ]
        },
        {
            path: '/dataview',
            component: path.LAYOUT_SHOW,
            meta: {name: '数据总览'},
            children: [
                {
                    path: '',
                    redirect: ()=>{
                        return 'showDataSum'
                    }
                },
                {
                    path: 'showDataSum',
                    component: path.SHOW_DATA_SUM,
                    meta: {name: ''}
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
            meta: {name: '设备管理'},
            children: [
                {
                    path: '',
                    redirect: ()=>{
                        return 'deviceList'
                    }
                },
                {
                    path: 'deviceList',
                    component: path.DEVICE_LIST,
                    meta: {name: '设备列表'}
                },
                {
                    path: 'deviceImport',
                    component: path.DEVICE_IMPORT,
                    meta: {name: '设备导入'}
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
            meta: {name: '端口管理'},
            children: [
                {
                    path: '',
                    redirect: ()=>{
                        return 'portList'
                    }
                },
                {
                    path: 'portList',
                    component: path.PORT_LIST,
                    meta: {name: '端口列表'}
                },
                {
                    path: 'portImport',
                    component: path.PORT_IMPORT,
                    meta: {name: '端口导入'}
                },
                {
                    path: 'portConcat',
                    component: path.PORT_CONCAT
                }
            ]
        },
        {
            path: '*',
            component: path.NOTFOUND
        }
    ]
})
