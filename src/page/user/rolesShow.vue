<template>
    <div class="tile-content mt-10">
        <div class="module-header">
            <h4>权限列表<a @click="$router.push('/user/rolesAdd')" class="btn-blue w80 pull-right">创建新权限</a></h4>
        </div>
        <div class="table-responsive">
            <Table width="auto" stripe height="600" style="margin-top: 20px;font-size:14px;" border :columns="columns" @on-selection-change="con" :data="data"></Table>
            <p class="text-info">以选中<span>xxx</span>条记录</p>
            <div>
                <a class="btn btn-info" id="deletes">批量删除</a>
            </div>
        </div>
    </div>
</template>
<style lang="less">
    .table td a {
        padding: 0 3px;
    }

    .table label {
        font-weight: 400;
        margin-bottom: 0;
    }

    /*弹窗   start*/
    .dialog-sm .width_480 {
        width: 480px;
    }

    .dialog-sm .width_350 {
        width: 350px;
    }

    .modal-body .content {
        max-height: 150px;
        overflow: auto;
    }

    .user-list p {
        height: 28px;
        line-height: 28px;
        padding: 0 9px;
        margin-right: 12px;
        font-size: 12px;
    }

    .form-control {
        display: inline-block;
        width: 290px;
    }

    p.red {
        font-size: 12px;
        color: #ff5021;
    }

    h5.modal-title {
        font-size: 16px;
        color: #666;
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
            }
        }
    }
</script>
