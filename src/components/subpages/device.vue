<template>
    <div class="main">
        <span></span>
        <Row>
            <Col span="2">
                <span class="datelabel">请选择日期：</span>
            </Col>
            <Col span="22">
                <Col span="6">
                    <Date-picker type="date" placement="bottom-end" :options="options" @on-change="setStart" placeholder="选择起始日期" style="width: 215px"></Date-picker>
                </Col>
                <Col span="6">
                    <Date-picker type="date" placement="bottom-end" :options="options" @on-change="setFin" placeholder="选择结束日期" style="width: 215px"></Date-picker>
                </Col>
            </Col>
        </Row>
        <br />
        <Row>
            <Col span="22" offset="2">
                <Input v-model="value" icon="search" @on-click="search" placeholder="请输入设备IP地址" style="width: 215px"></Input>
            </Col>
        </Row>
        <div class="deviceTable">
            <Row style="width: auto; padding: 0 50px; background: #f5f7f9; height: 60px; line-height: 60px">
                <Col span="3">
                <Button type="info" icon="loop" @click="sync" :disabled="BtnDisabled">同步信息</Button>
                </Col>
                <Col span="3">
                <Button type="success" icon="upload" @click="routeto">批量添加</Button>
                </Col>
                <Col span="3">
                <Button type="error" icon="trash-a" :disabled="BtnDisabled" @click="remove">删除信息</Button>
                </Col>
            </Row>
            <Table width="auto" stripe height="600" border :columns="columns" @on-selection-change="con" :data="deviceData"></Table>
        </div>
    </div>
</template>
<style lang="less">
.el-table .cell{
    text-align: center;
}
.datelabel{
    height: 32px;
    line-height: 32px;
}
.deviceTable{
    margin: 20px 0;
}
</style>
<script type="text/ecmascript-6">
    import {devicetables} from '../../../static/data'
    export default{
        data() {
            return {
                value: '',
                date: {
                    start_date: '',
                    finish_date: ''
                },
                columns: devicetables.columns,
                deviceData: devicetables.deviceData,
                selection: [],      //多选信息
                options: {
                    disabledDate (date) {
                        return date && date.valueOf() > Date.now();
                    }
                }
            }
        },
        methods: {
            search() {
                const msg = this.$Message.loading('请求参数'+this.value+'发出，请稍后', 0);
                setTimeout(msg, 1500);
                //
            },
            pushDate() {
                if(this.date.start_date && this.date.finish_date){
                    const msg = this.$Message.loading('起始'+this.date.start_date+'结束'+this.date.finish_date, 0);
                    setTimeout(msg, 1500);
                }
            },
            setStart(date) {
                this.date.start_date = date;
                if(this.date.finish_date && this.date.start_date>this.date.finish_date){
                    this.$Message.error('起始时间不能晚于结束时间！');
                    return false;
                }
                this.pushDate();
            },
            setFin(date) {
                this.date.finish_date = date;
                if(this.date.finish_date<this.date.start_date){
                    this.$Message.error('结束时间不能早于起始时间！');
                    return false;
                }
                this.pushDate();
            },
            con(selection){
                this.selection = selection;
            },
            sync() {
                //提交信息改变状态
                this.loading();
                //提交请求

            },
            remove() {
                //this.$Message.destroy()
                //提交请求
                this.loading();
            },
            loading () {
                const msg = this.$Message.loading('正在加载中...', 0);
                setTimeout(msg, 1500);
            },
            routeto() {
                this.$router.push('/device/upload');
            }
        },
        computed:{
            BtnDisabled(){
                if(this.selection.length){
                    return false;
                }else{
                    return true;
                }
            }
        }
    }
</script>
