<template>
    <div>
        <div class="module-header"><h4>用户账户列表<a class="btn-blue w80 pull-right" @click="$router.push('/user/usersAdd');">创建用户</a></h4></div>
        <Table width="auto" stripe height="600" style="margin-top: 20px;font-size:14px;" border :columns="columns" @on-selection-change="con" :data="data"></Table>
        <p class="text-info" v-if="selection.length">已选中<span>{{selection.length}}</span>条记录</p>
        <div class="table-btn-group">
            <Button type="ghost" style="width: 80px" :disabled="BtnDisabled">启用</Button>
            <Button type="ghost" style="width: 80px" :disabled="BtnDisabled">禁用</Button>
            <Button type="ghost" style="width: 80px" :disabled="BtnDisabled">赋权</Button>
        </div>
    </div>
</template>
<style lang="less">
    @import "../../assets/css/me.less";
    .resume .choose span {
        margin-right: 0;
    }
    .text-info{
        margin: 20px 0;
    }
    .table-btn-group{
        margin-top: 20px;
    }
    .user-list p {
        display: inline-block;
        border: 1px solid #91b2fc;
        height: 28px;
        line-height: 28px;
        padding: 0 9px;
        margin-right: 12px;
        font-size: 12px;
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
