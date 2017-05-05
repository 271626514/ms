import Vue from 'vue';
import Router from 'vue-router';
import store from '../store/store'
import * as path from './path'
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: function(){
                let loginStatus = JSON.parse(window.localStorage.getItem('user')) || null;
                if(loginStatus===null){
                    return '/login'
                }else if(loginStatus.user_name=='admin'){
                    return '/user'
                }else{
                    return '/dataview'
                }
            }
        },
        {
            path: '/login',
            component: path.LOGIN
        },
        {
            path: '/user',
            name: '用户管理',
            component: path.LAYOUT,
            children: [
                {
                    path: '',
                    redirect: ()=>{
                        return 'usersShow'
                    }
                },
                {
                    path: 'usersShow',
                    name: '用户列表',
                    component: path.USERS_SHOW
                },
                {
                    path: 'rolesShow',
                    name: '权限列表',
                    component: path.ROLES_SHOW
                },
                {
                    path: 'usersAdd',
                    name: '创建用户',
                    component: path.USERS_ADD
                },
                {
                    path: 'usersDetail',
                    name: '查看详情',
                    component: path.USERS_DETAIL
                }
            ]
        },
        {
            path: '/export',
            name: '业务数据管理',
            component: path.LAYOUT,
            children: [
                {
                    path: '',
                    redirect: ()=>{
                        return 'adminHistoryData'
                    }
                },
                {
                    path: 'adminHistoryData',
                    name: '历史数据',
                    component: path.ADMIN_HISTORY_DATA
                },
                {
                    path: 'customQueryList',
                    name: '自定义查询',
                    component: path.CUSTOM_QUERY_LIST
                }
            ]
        },
        {
            name: '系统管理',
            path:'/operateLog',
            component: path.LAYOUT,
            children: [
                {
                    path: '',
                    redirect: ()=>{
                        return 'showLogList'
                    }
                },
                {
                    path: 'showLogList',
                    name: '日志管理',
                    component: path.SHOW_LOG_LIST
                }
            ]
        },
        {
            name: '数据管理',
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
                    name: '数据总览',
                    component: path.SHOW_DATA_SUM
                },
                {
                    path: 'download',
                    name: '历史数据下载',
                    component: path.DOWNLOAD
                }
            ]
        },
        {
            name: '设备管理',
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
                    name: '设备列表',
                    component: path.DEVICE_LIST
                },
                {
                    path: 'deviceImport',
                    name: '设备导入',
                    component: path.DEVICE_IMPORT
                },
                {
                    path: 'deviceConcat',
                    name: '设备同步',
                    component: path.DEVICE_CONCAT
                }
            ]
        }
    ]
})
