/**
 * Created by syzx9801@163.com on 2017/4/17.
 */
import * as types from '../mutation-types'

export default{
    loginSet({commit},val){
        commit(types.LOGIN_IN,val);
    },
    loginout({commit}){
        commit(types.LOGIN_OUT);
    }
}