<template>
    <div>
        <div class="module-header">
            <h4>数据查询</h4>
        </div>
        <div class="module-query">
            <h4 class="f16">新建一个查询</h4>
            <div class="query-item">
                <label>查询名称：</label>
                <Input v-model="query.name" style="width: 300px"></Input>
            </div>
            <div class="query-item">
                <label>检索语句：</label>
                <Input v-model="query.sql" type="textarea" :rows="4" style="width:650px;" placeholder="请输入检索用的SQL语句，仅支持select"></Input>
            </div>
            <div class="query-item">
                <Button type="primary" class="btn-search f16 ml-80" style="width:150px" @click="setSearch('save')" :disabled="btnDefault">保存语句并计算</Button>
                <Button type="primary" class="btn-search f16 ml-10 orange" @click="setSearch('get')" :disabled="btnDefault">立即计算</Button>
            </div>
        </div>
        <div class="module-header f16 mt-20">
            <h4>历史查询</h4>
        </div>
        <div class="tableContent">
            <Table width="auto" stripe height="600" style="margin-top: 10px;" border :columns="columns" :data="data"></Table>
        </div>
    </div>
</template>
<style lang="less">
.orange{
    border-color:#ff9e40 !important;
    background-color: #ff9e40 !important;
    &[disabled]{
         border-color:#d7dde4 !important;
         background-color: #f7f7f7 !important;
     }
}
</style>
<script type="text/ecmascript-6">
    import {customquerytables} from '../../../static/data'
    export default{
        data(){
            return {
                columns: customquerytables.columns,
                data: customquerytables.datalist,
                query:{
                    name: '',
                    sql: ''
                }
            }
        },
        methods:{
            setSearch(type){

            },
            copythis(index){
                this.query.sql = this.data[index].SQLDetail;
            }
        },
        computed: {
            btnDefault(){
                if(this.query.name==""||this.query.sql==""){
                    return true;
                }
            }
        }
    }
</script>
