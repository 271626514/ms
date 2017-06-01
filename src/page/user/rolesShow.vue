<template>
    <div>
        <div class="module-header">
            <h4>权限列表
                <Button type="primary" @click="$router.push('/user/rolesAdd')" class="btn-search right f14">创建新权限</Button>
            </h4>
        </div>
        <div class="tableContent">
            <Table width="auto" stripe height="600" style="margin-top: 10px;" border :columns="columns" @on-selection-change="con" :data="data"></Table>
            <div class="table-set" style="border-top: 0">
                <Button type="ghost" style="width: 80px" :disabled="BtnDisabled" @click="dialog.removeAll=!dialog.removeAll">批量删除</Button>
                <span v-if="selection.length" class="result-info ml-20">已选中 {{selection.length}} 条记录</span>
            </div>
        </div>
        <!--批量删除-->
        <Modal v-model="dialog.removeAll" :mask-closable="false" title="批量删除" class="userRole">
            <div class="clearfix dialog-body">
                <p class="dialog-title">是否确认删除下述权限？</p>
                <ul class="roleBody mt-10">
                    <li class="roleItem mb-5" v-for="i in selection">权限名称：{{i.roleName}}</li>
                </ul>
                <p class="red mt-20" v-if="isRemove">当一个权限下已分配了有效的用户时，该权限不可被删除。</p>
            </div>
            <div slot="footer">
                <Button type="primary" style="width:80px" class="align f14" :disabled="isRemove" @click="userrole_con">确定</Button>
                <Button type="ghost" style="width:80px" class="align f14" @click="dialog.removeAll=!dialog.removeAll">取消</Button>
            </div>
        </Modal>
        <!--操作成功回执-->
        <Modal v-model="dialog.success" :mask-closable="false" title="提示" :closable="false">
            <div class="clearfix dialog-body">
                <h1>删除成功</h1>
            </div>
            <div slot="footer">
                <Button type="primary" style="width:90px" class="align" @click="reload">确定</Button>
            </div>
        </Modal>
        <!--操作失败回执-->
        <Modal v-model="dialog.error" :mask-closable="false" title="提示" :closable="false">
            <div class="clearfix dialog-body">
                <h1>删除失败</h1>
                <p class="red f16 text-center mt-20">{{errorInfo}}</p>
            </div>
            <div slot="footer">
                <Button type="primary" style="width:90px" class="align" @click="dialog.error=!dialog.error">确定</Button>
            </div>
        </Modal>
    </div>
</template>
<style lang="less">
.dialog-title{
    color: #666;
    font-size: 14px;
}
.roleBody{
    max-height: 150px;
    overflow: auto;
}
</style>
<script type="text/ecmascript-6">
    import {roleslisttables} from '../../assets/js/data'
    export default{
        data() {
            return {
                columns: roleslisttables.columns,
            //    data: roleslisttables.roleslist,
                data: [],
                selection: [],
                removeState: 0,
                errorInfo:'',
                dialog:{
                    removeAll:false,
                    success:false,
                    error:false
                }
            }
        },
        methods:{
            con(selection){
                this.selection = selection;
            },
            reload(){
                window.location.reload()
            },
            detail(index){
                this.$store.dispatch('setuserrole',index);
                this.$router.push('/user/rolesDetail')
            },
            edit(index){
                this.$store.dispatch('setuserrole',index);
                this.$router.push('/user/rolesEdit')
            },
            remove(index){
                this.$http.get('/demo/user').then(res=>{
                    this.dialog.success = true;
                }).catch(res=>{
                    this.dialog.error = true;
                    this.errorInfo = `${res}`
                })
            },
            userrole_con(){     //批量删除
                this.dialog.removeAll = false;
                this.$http.get('/demo/user').then(res=>{
                    this.dialog.success = true;
                    window.location.reload()
                }).catch(res=>{
                    this.dialog.error = true;
                    this.errorInfo = `${res}`
                })
            }
        },
        computed: {
            BtnDisabled(){
                if(this.selection.length){
                    return false;
                }else{
                    return true;
                }
            },
            isRemove(){
                let flag = this.selection.some((item,index,array)=>{
                        return item.containUser.length!=0;
                    })
                return flag;
            }
        },
        mounted(){
            this.$http.get('/role/rolesShow').then((res)=>{
                this.data = res.data.rolesList;
            }).catch(res=>{
                this.data = roleslisttables.roleslist
            })
        }
    }
</script>
