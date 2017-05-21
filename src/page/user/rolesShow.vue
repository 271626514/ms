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
                <Button type="ghost" style="width: 80px" :disabled="BtnDisabled" @click="dialog.remove=!dialog.remove">批量删除</Button>
                <span v-if="selection.length" class="result-info ml-20">已选中 {{selection.length}} 条记录</span>
            </div>
        </div>
        <!--批量删除-->
        <Modal v-model="dialog.remove" :mask-closable="false" title="批量删除" class="userRole">
            <div class="clearfix dialog-body">
                <p class="dialog-title">是否确认删除下述权限？</p>
                <ul class="roleBody mt-10">
                    <li class="roleItem mb-5" v-for="i in selection">权限名称：{{i.rolesName}}</li>
                </ul>
                <p class="red mt-20" v-if="isRemove">当一个权限下已分配了有效的用户时，该权限不可被删除。</p>
                <p class="red mt-20 text-center f14" v-if="removeState==1">设置成功！</p>
                <p class="red mt-20 text-center f14" v-if="removeState==2">设置失败！Error Code：XXXXX</p>
            </div>
            <div slot="footer">
                <Button type="primary" style="width:80px" class="align f14" :disabled="isRemove" @click="userrole_con">确定</Button>
                <Button type="ghost" style="width:80px" class="align f14" @click="dialog.remove=!dialog.remove">取消</Button>
            </div>
        </Modal>
        <!--删除权限-->
        <Modal v-model="dialog.remove" :mask-closable="false" title="删除权限" class="userRole">
            <div class="clearfix dialog-body">
                <p class="dialog-title">是否确认删除下述权限？</p>
                <ul class="roleBody mt-10">
                    <li class="roleItem mb-5" v-for="i in selection">权限名称：{{i.rolesName}}</li>
                </ul>
                <p class="red mt-20" v-if="isRemove">当一个权限下已分配了有效的用户时，该权限不可被删除。</p>
                <p class="red mt-20 text-center f14" v-if="removeState==1">设置成功！</p>
                <p class="red mt-20 text-center f14" v-if="removeState==2">设置失败！Error Code：XXXXX</p>
            </div>
            <div slot="footer">
                <Button type="primary" style="width:80px" class="align f14" :disabled="isRemove" @click="userrole_con">确定</Button>
                <Button type="ghost" style="width:80px" class="align f14" @click="dialog.remove=!dialog.remove">取消</Button>
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
    import {roleslisttables} from '../../../static/data'
    export default{
        data() {
            return {
                columns: roleslisttables.columns,
                data: roleslisttables.roleslist,
                selection: [],
                removeState: 0,
                dialog:{
                    remove:false,
                }
            }
        },
        methods:{
            con(selection){
                this.selection = selection;
            },
            detail(index){
                this.$store.dispatch('setuserrole',index);
                this.$router.push('/user/rolesDetail')
            },
            edit(index){
                this.$store.dispatch('setuserrole',index);
            },
            remove(index){

            },
            userrole_con(){

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
        }
    }
</script>
