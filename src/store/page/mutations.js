/**
 * Created by syzx9801@163.com on 2017/4/17.
 */
import * as types from '../mutation-types'

export default{
    [types.SET_USER_ID] (state,val) {
        window.localStorage.setItem('userid',val)
        state.users_id=val;
    },
    [types.REMOVE_USER_ID] (state){
        window.localStorage.removeItem('userid');
        state.users_id= "";
    }
}