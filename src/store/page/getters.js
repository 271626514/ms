/**
 * Created by syzx9801@163.com on 2017/4/18.
 */
export default{
    getuserid :function(state){
        let userid = state.users_id || JSON.parse(localStorage.getItem('userid'));
        return userid;
    }
}