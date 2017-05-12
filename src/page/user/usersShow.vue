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
                <Button type="ghost" style="width: 80px" :disabled="BtnDisabled">启用</Button>
                <Button type="ghost" style="width: 80px" :disabled="BtnDisabled">禁用</Button>
                <Button type="ghost" style="width: 80px" :disabled="BtnDisabled">赋权</Button>
                <span v-if="selection.length" class="result-info ml-20">已选中 {{selection.length}} 条记录</span>
            </div>
        </div>
    </div>
</template>
<style lang="less">
</style>
<script type="text/ecmascript-6">
    import {userlisttables} from '../../../static/data'
    export default{
        data(){
            return {
                columns: userlisttables.columns,
                data: userlisttables.userList,
                selection: [],
            }
        },
        methods: {
            con(selection){
                this.selection = selection;
            },
            detail(index){
                this.$router.push('/user/usersDetail')
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
