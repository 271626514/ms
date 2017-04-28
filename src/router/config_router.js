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
            path: '/dataview',
            name: '业务数据管理',
            component: path.LAYOUT,
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
                    path: 'upload',
                    name: '批量上传',
                    component: path.DEVICE_UPLOAD
                }
            ]
        }
    ]
})
