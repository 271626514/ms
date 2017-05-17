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
        <Modal v-model="dialog.userrole" :mask-closable="false" title="权限分配" class="userRole">
            <div class="clearfix dialog-body">
                <div class="roleList">
                    <p class="mb-10">已选择{{selection.length}}个用户：</p>
                    <span class="role-item" v-for="i in selection">{{i.username}}</span>
                </div>
                <div class="mt-10">
                    <span class="role-text">批量设置权限：</span>
                    <Select v-model="defaultData.data.value" :label-in-value="true" @on-change="checkRole" style="width:300px;margin-left: 15px">
                        <Option v-for="item in selectionList" :value="item.value" :key="item">{{ item.label }}</Option>
                    </Select>
                </div>
                <p class="red mt-20">如果您发现没有合适的权限，请先去创建权限再批量进行批量操作。</p>
                <p class="red mt-20 text-center f14" v-if="roleState==1">设置成功！</p>
                <p class="red mt-20 text-center f14" v-if="roleState==2">设置失败！Error Code：XXXXX</p>
            </div>
            <div slot="footer">
                <Button type="primary" style="width:80px" class="align f14" @click="userrole_con">确定</Button>
                <Button type="ghost" style="width:80px" class="align f14" @click="dialog.userrole=!dialog.userrole">取消</Button>
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
    .roleList{
        max-height: 150px;
        overflow: auto;
        color: #666;
        font-size: 14px;
        padding-bottom: 10px;
    }
    .role-item{
        display: inline-block;
        border: 1px solid #3694f2;
        padding: 0 9px;
        height: 28px;
        line-height: 28px;
        font-size: 12px;
        margin-right: 12px;
    }
    .role-text{
        font-size: 14px;
        color: #666;
    }
}
.userstate{
    .ivu-modal-footer{
        text-align: center;
    }
    .ivu-modal-wrap{
        z-index: 1000;
    }
}
.userRole{
    .ivu-modal-wrap{
        z-index: 900;
    }
}
</style>
<script type="text/ecmascript-6">
    import {userlisttables,showDataSelection} from '../../../static/data'
    export default{
        data(){
            return {
                columns: userlisttables.columns,
                data: userlisttables.userList,
                selectionList:showDataSelection.dataList,
                selection: [],
                defaultData:{
                    data:{
                        value: 'all',
                        label: '全国数据'
                    }
                },
                roleState: 0,
                userRole: {},   //选择的权限 OBJ
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
            userrole_con(){
                this.$http.post('http://localhost:8080/admin',{data:this.selection,role:this.userRole.value})
                        .then((res)=>{
                            this.roleState = 1;
                            //定时器开启关闭对话框，回归roleState
                        })
                        .catch((res)=>{
                            this.roleState = 2;
                        })
            },
            setUserRoles(){
                this.dialog.userrole = true;
            },
            checkRole(value){
                this.userRole = value
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
        },
        watch(){
            //监听对话框状态重置标志符
        }
    }
</script>
