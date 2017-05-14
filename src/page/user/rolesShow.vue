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
                <Button type="ghost" style="width: 80px" :disabled="BtnDisabled">批量删除</Button>
                <span v-if="selection.length" class="result-info ml-20">已选中 {{selection.length}} 条记录</span>
            </div>
        </div>
    </div>
</template>
<style lang="less">

</style>
<script type="text/ecmascript-6">
    import {roleslisttables} from '../../../static/data'
    export default{
        data() {
            return {
                columns: roleslisttables.columns,
                data: roleslisttables.roleslist,
                selection: [],
            }
        },
        methods:{
            con(selection){
                this.selection = selection;
            }
        }
    }
</script>
