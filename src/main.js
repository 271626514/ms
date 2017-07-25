import Vue from 'vue'
import App from './App'
import router from './router/config_router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import store from './store/store'
import axios from 'axios'
Vue.use(iView)

Vue.prototype.$http = axios;

Vue.config.productionTip = false

router.beforeEach((to,from,next) => {
    let loginStatus = JSON.parse(window.localStorage.getItem('user')) || null;
    if(!to.meta.browse){
        if(loginStatus){
            next();
        }else{
            next({
                path: '/login',
            })
        }
    }else{
        next();
    }
})
new Vue({
    el: '#app',
    router,
    store:store,
    template: '<App/>',
    components: { App },
})







