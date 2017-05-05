<template>
    <div>
        <div class="module-header"><h4>数据查询</h4></div>
        <div class="tile-content mt-20">
            <div class="refer">
                <h4 id="1">新建一个查询</h4>
                <form>
                    <div class="form">
                        <div class="">
                            <div class="form-group">
                                <label for="refer_name">查询名称：</label>
                                <input type="text" id="refer_name" name="name">
                            </div>
                            <div class="form-group">
                                <label class="text-left" for="refer_statement">检索语句：</label>
                                <textarea name="name" id="refer_statement"
                                          placeholder="请输入检索用的SQL语句，仅支持select"></textarea>
                            </div>
                        </div>
                    </div>
                </form>
                <a class="computer btn-blue w120 ml-90">保存语句并计算</a>
                <a class="computer btn-orange ml-10 w80">立即计算</a>
            </div>
            <div class="refer">
                <h4>历史查询</h4>
                <div class="table-responsive">
                    <Table width="auto" stripe height="600" style="margin-top: 20px;font-size:14px;" border :columns="columns" @on-selection-change="con" :data="data"></Table>
                </div>
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
    }

    .module-header h4 {
        border-bottom: 2px solid #eceff9;
        padding-bottom: 16px;
    }

    .refer h4 {
        font-size: 16px;
        color: #333;
        padding: 0 0 20px 0;
    }

    .btn-blue.w120 {
        font-size: 14px;
        height: 30px;
        line-height: 28px;
    }

    .form label {
        text-align: left;
    }

    .dialog-sm .width_450 {
        width: 450px;
    }
</style>
<script type="text/ecmascript-6">
    import {customquerytables} from '../../../static/data'
    export default{
        data(){
            return {
                columns: customquerytables.columns,
                data: customquerytables.datalist,
                selection: [],
            }
        },
    }
</script>
