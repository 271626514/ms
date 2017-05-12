<template>
    <div>
        <div class="module-header"><h4>数据查询</h4></div>
        <form class="form searchForm">
            <div class="form-group mt-20 form-bg">
                <label for="email">检索用户：</label>
                <input type="text" id="email" class="white-bg mr-20"/>
                <button type="submit" class="btn-blue w80">查询</button>
                <a class="resetTitle">重置</a>
            </div>
            <p class="searchTitle">已查找到 <span>x</span>条数据</p>
            <div class="tile-content mt-20">
                <Table width="auto" stripe height="600" style="margin-top: 20px;font-size:14px;" border :columns="columns" @on-selection-change="con" :data="data"></Table>
            </div>
        </form>
    </div>
</template>
<style lang="less">
    .searchTitle {
        font-size: 14px;
        color: #999;
    }

    .table td a {
        padding: 0 3px;
    }

    .table label {
        font-weight: 400;
    }

    .form-bg {
        padding: 12px 0;
        background: #f6f7fb;
    }

    .form input.white-bg[type=text] {
        background: #fff;
    }
</style>
<script type="text/ecmascript-6">
    import {loglisttables} from '../../../static/data'
    export default{
        data(){
            return {
                columns: loglisttables.columns,
                data: loglisttables.datalist,
                selection: [],
            }
        },
    }
</script>
