/**
 * Created by syzx9801@163.com on 2017/4/17.
 */
import * as types from '../mutation-types'

export default{
    setuserid({commit},val){
        commit(types.SET_USER_ID,val);
    },
    removeuserid({commit}){
        commit(types.REMOVE_USER_ID);
    },
    setuserrole({commit},val){
        commit(types.SET_USER_ROLE,val);
    },
    removeuserrole({commit}){
        commit(types.REMOVE_USER_ROLE);
    }
}