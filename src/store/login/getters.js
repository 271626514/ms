/**
 * Created by syzx9801@163.com on 2017/4/18.
 */
export default{
    getusername :function(state){
        let username = state.user_name || JSON.parse(localStorage.getItem('user')).user_name;
        return username;
    },
    getLogStatus: function(state){
        let status = state.logStatus || JSON.parse(localStorage.getItem('user')).logStatus;
        return status;
    }
}