<template>
    <div>
        <div class="module-header">
            <h4>历史数据</h4>
        </div>
        <div class="tableContent">
            <Table width="auto" stripe height="600" style="margin-top: 10px;" border :columns="columns" :data="data"></Table>
        </div>
    </div>
</template>
<style lang="less">
</style>
<script type="text/ecmascript-6">
    import {datahistorytables} from '../../assets/js/data'
    export default{
        data(){
            return {
                columns: datahistorytables.columns,
                data: []
            }
        },
        mounted(){
            this.$http.get('/export/adminHistoryData').then(res=>{
                this.data = res.data.adminHistoryDataList
            }).catch(res=>{
                console.log('获取历史默认数据失败'+res)
            })
        }
    }
</script>
