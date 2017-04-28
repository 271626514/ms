<template>
    <div class="main">
        <Row :gutter="16">
            <Col span="2">
                <span class="datelabel">请选择日期：</span>
            </Col>
            <Col span="4">
                <Date-picker type="date" placement="bottom-end" placeholder="选择起始日期" style="width: 215px"></Date-picker>
            </Col>
            <Col span="4">
                <Date-picker type="date" placement="bottom-end" placeholder="选择结束日期" style="width: 215px"></Date-picker>
            </Col>
        </Row>
        <div class="logList">
            <Table border stripe :columns="columns" :data="logdata" width="auto"></Table>
        </div>
    </div>
</template>
<style lang="less">
.main{
    padding: 20px;
    .datelabel{
        height: 32px;
        line-height: 32px;
    }
    .logList{
        margin-top: 20px;
    }
}
</style>
<script type="text/ecmascript-6">
    import {logtables} from '../../../static/data'
    export default{
        data() {
            return {
                columns: logtables.columns,
                logdata: logtables.logdata,
            }
        }
    }
</script>
