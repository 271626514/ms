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
                <Button type="ghost" style="width: 50px" :disabled="BtnDisabled" @click="setUserState('on')">启用</Button>
                <Button type="ghost" class="ml-10" style="width: 50px" :disabled="BtnDisabled" @click="setUserState('off')">禁用</Button>
                <Button type="ghost" class="ml-10" style="width: 50px" :disabled="BtnDisabled" @click="setUserRoles">赋权</Button>
                <span v-if="selection.length" class="result-info ml-20">已选中 {{selection.length}} 条记录</span>
            </div>
        </div>

        <!--赋权-->
        <Modal v-model="dialog.userrole" :mask-closable="false" title="权限分配" class="userRole">
            <div class="clearfix dialog-body">
                <div class="roleList">
                    <p class="mb-10">已选择{{selection.length}}个用户：</p>
                    <span class="role-item" v-for="i in selection">{{i.userName}}</span>
                </div>
                <div class="mt-10">
                    <span class="role-text">批量设置权限：</span>
                    <Select v-model="defaultData.data.roleId" :label-in-value="true" @on-change="checkRole" style="width:300px;margin-left: 15px">
                        <Option v-for="item in selectionList" :value="item.value" :key="item">{{ item.label }}</Option>
                    </Select>
                </div>
                <p class="red mt-20">如果您发现没有合适的权限，请先去创建权限再批量进行批量操作。</p>
            </div>
            <div slot="footer">
                <Button type="primary" style="width:80px" class="align f14" @click="userrole_con">确定</Button>
                <Button type="ghost" style="width:80px" class="align f14" @click="dialog.userrole=!dialog.userrole">取消</Button>
            </div>
        </Modal>

        <modal :title="this.modal.title" :content="this.modal.content" :dialog="this.modal.dialog"></modal>
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
    import {userlisttables,showDataSelection,config,roleslisttables} from '../../assets/js/data'
    import modal from '../../components/common/modal.vue'
    export default{
        data(){
            return {
                columns: userlisttables.columns,
                data: [],
                selectionList:[],   //批量修改用户权限的下拉数据组
                selection: [],      //多选组
                defaultData:{       //批量修改用户权限的下拉选择默认数据展示
                    data:{}
                },
                roleState: 0,
                roleId: '',
                dialog:{
                    userstate: false,
                    userrole: false,
                    content: ''
                },
                modal:{
                    title:'',
                    content:'',
                    dialog:0
                }
            }
        },
        methods: {
            con(selection){     //多选
                this.selection = selection;
            },
            detail(index){      //查看用户详情
                this.$store.dispatch('setuserid',index);
                this.$router.push('/user/usersDetail')
            },
            remove(index){      //编辑用户详情
                this.$store.dispatch('setuserid',index);
                this.$router.push('/user/usersEdit')
            },
            setUserState(flag){     //启动、停用用户状态
                let data = '';
                for(let i=0;i<this.selection.length;i++){
                    data+= 'userIds[]='+this.selection[i].userId+'&';
                }
                let _data = data+'flag='+flag;
                this.$http.post('/user/users/del',_data,config)
                        .then((res)=>{
                            if(res.data.msg=='success'){
                                this.modal.dialog++;
                                this.modal.title = '操作成功'
                            }else if(res.data.msg=='error'){
                                this.modal.dialog--;
                                this.modal.title = '操作失败'
                                this.modal.content = `${res}`
                            }
                        })
                        .catch((res)=>{
                           console.log('用户账号状态修改失败'+res)
                        })
            },
            userrole_con(){     //批量修改用户权限
                let data = '';
                for(let i=0;i<this.selection.length;i++){
                    data+= 'userIds[]='+this.selection[i].userId+'&';
                }
                let _data = data+'subGroup='+this.roleId;
                this.$http.post('/user/users/usersGetRight',_data,config)
                        .then((res)=>{
                            if(res.data.msg=='success'){
                                this.dialog.userrole = false;
                                this.modal.dialog++;
                                this.modal.title = '操作成功'
                            }else{
                                this.dialog.userrole = false;
                                this.modal.dialog--;
                                this.modal.title = '操作失败'
                                this.modal.content = `${res}`
                            }
                        })
                        .catch(res=>{
                            this.dialog.userrole = false;
                            this.modal.dialog--;
                            this.modal.title = '操作失败'
                            this.modal.content = `${res}`
                        })
            },
            setUserRoles(){
                this.dialog.userrole = true;
            },
            checkRole(value){
                this.roleId = value.value;
            },
            getSelect(arr){
                let _array = [];
                for(let i=0;i<arr.length;i++){
                    let obj = new Object;
                    obj.value = arr[i].roleId;
                    obj.label = arr[i].roleName;
                    _array.push(obj);
                }
                return _array;
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
        mounted(){
            this.$http.get('/user/usersShow')
                .then((res)=>{
                    this.data = res.data.users;
                    this.selectionList = this.getSelect(res.data.roles);    //处理
                    this.defaultData.data = res.data.roles[0];
                }).catch((res)=>{
                    console.log('读取用户列表错误'+res)
            })
        },
        components:{
            modal
        }
    }
</script>
