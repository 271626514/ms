<template>
    <div>
        <div class="module-header"><h4>历史数据</h4></div>
        <div class="tile-content mt-20">
            <Table width="auto" stripe height="600" style="margin-top: 20px;font-size:14px;" border :columns="columns" @on-selection-change="con" :data="data"></Table>
        </div>
    </div>
</template>
<style lang="less">
    label.error {
        margin-left: 116px;
    }

    .form .form-group {
        margin-bottom: 20px;
        position: relative;
    }

    .dropdown-toggle {
        position: absolute;
        border: none;
        background: none;
        left: 401px;
        top: 4px;
    }

    .caret {
        border-top: 6px dashed;
        border-right: 3px solid transparent;
        border-left: 3px solid transparent;
    }

    .form .form-group label {
        text-align: left;
    }

    .form .form-group label.label {
        display: inline-block;
        width: 113px;
        text-align: right;
        color: #666;
        font-size: 14px;
    }

    .form .form-group select {
        width: 300px;
        border: 1px solid #ccc;
    }

    .date-picker-wrapper .footer {
        display: none;
    }

    .dropdown-menu {
        width: 115px;
        left: 185px;
        border: none;
        z-index: auto;
    }

    .dateRange-picker {
        border-radius: 2px;
        height: 30px;
        width: 300px;
        background: none;
        outline: none;
        border: 1px solid #ccc;
        line-height: 30px;
        padding: 0 0 0 10px;
        text-align: left;
    }

    .form label.error {
        display: inline-block;
        width: auto;
        text-align: left;
        color: #fc6a3c;
        margin-left: 24px;
        margin-top: 0px;
        line-height: 28px;
    }
</style>
<script type="text/ecmascript-6">
    import {datahistorytables} from '../../../static/data'
    export default{
        data(){
            return {
                columns: datahistorytables.columns,
                data: datahistorytables.datalist,
                selection: [],
            }
        },
    }
</script>
