/**
 * Created by syzx9801@163.com on 2017/4/17.
 */
import * as types from '../mutation-types'

export default{
    [types.LOGIN_IN] (state,val) {
        window.localStorage.setItem('user',JSON.stringify(val))
        state.logStatus=val.logStatus;
        state.user_name=val.user;
        state.user_permission=val.user_permission;
    },
    [types.LOGIN_OUT] (state){
        window.localStorage.removeItem('user');
        state.logStatus = false;
        state.user_name= "";
        state.user_permission= "";
    }
}