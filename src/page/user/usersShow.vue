<template>
    <div>
        <div class="module-header">
            <h4>用户账户列表
                <Button type="primary" @click="$router.push('/user/usersAdd');" class="btn-search right f14">创建用户</Button>
            </h4>
        </div>
        <div class="tableContent">
            <Table width="auto" stripe height="600" style="margin-top: 10px;" border :columns="columns" @on-selection-change="con" :data="data"></Table>
            <div class="table-set" style="border-top: 0">
                <Button type="ghost" style="width: 50px" :disabled="BtnDisabled" @click="setUserState(1)">启用</Button>
                <Button type="ghost" class="ml-10" style="width: 50px" :disabled="BtnDisabled" @click="setUserState(2)">禁用</Button>
                <Button type="ghost" class="ml-10" style="width: 50px" :disabled="BtnDisabled" @click="setUserRoles">赋权</Button>
                <span v-if="selection.length" class="result-info ml-20">已选中 {{selection.length}} 条记录</span>
            </div>
        </div>
        <!-- 开启禁用 -->
        <Modal v-model="dialog.userstate" :mask-closable="false" title="提示" class="userstate">
            <div class="clearfix dialog-body" v-html="dialog.content"></div>
            <div slot="footer">
                <Button type="primary" style="width:90px" class="align" @click="userstate_con">确定</Button>
            </div>
        </Modal>
        <!--赋权-->
        <Modal v-model="dialog.userrole" :mask-closable="false" title="权限分配" class="userstate">
            <div class="clearfix dialog-body">

            </div>
        </Modal>
    </div>
</template>
<style lang="less">
.dialog-body{
    h1{
        font-size: 22px;
        text-align: center;
        color: #333;
        font-weight: normal;
    }
    .errorInfo{
        font-size: 22px;
        color: #ff5021;
        text-align: center;
    }
}
.userstate{
    .ivu-modal-footer{
        text-align: center;
    }
}
</style>
<script type="text/ecmascript-6">
    import {userlisttables} from '../../../static/data'
    export default{
        data(){
            return {
                columns: userlisttables.columns,
                data: userlisttables.userList,
                selection: [],
                dialog:{
                    userstate: false,
                    userrole: false,
                    content: ''
                }
            }
        },
        methods: {
            con(selection){
                this.selection = selection;
            },
            detail(index){
                this.$store.dispatch('setuserid',index);
                this.$router.push('/user/usersDetail')
            },
            remove(index){
                this.$store.dispatch('setuserid',index);
                this.$router.push('/user/usersEdit')
            },
            setUserState(flag){
                this.$http.post('http://localhost:8080/admin',{data:this.selection,state:flag})
                        .then((res)=>{
                            this.dialog.userstate = true;
                            this.dialog.content = `<h1>操作成功</h1>`
                        })
                        .catch((res)=>{
                            this.dialog.userstate = true
                            this.dialog.content = `<h1>操作失败</h1><p class="errorInfo">${res}</p>`
                        })
            },
            userstate_con(){
                this.dialog.userstate = false;
                //重定向
            },
            setUserRoles(){
                this.dialog.userrole = true;
            }
        },
        computed: {
            BtnDisabled:function(){
                if(this.selection.length){
                    return false;
                }else{
                    return true;
                }
            }
        }
    }
</script>
