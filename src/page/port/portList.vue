<template>
    <div>
        <div class="module-header">
            <h4>端口列表
                <Select v-model="defaultData.data.value" :label-in-value="true" @on-change="checkData" style="width:300px;margin-left: 15px">
                    <Option v-for="item in selectionList" :value="item.value" :key="item">{{ item.label }}</Option>
                </Select>
            </h4>
        </div>
        <Row>
            <Col span="2">
            <span class="datelabel">按上传时间：</span>
            </Col>
            <Col span="22">
            <div class="search-label">
                起始时间
            </div>
            <div class="search-item">
                <Date-picker type="date" placement="bottom-end" :value="defaultDate" :options="options" @on-change="setStart" placeholder="选择起始日期" style="width: 215px"></Date-picker>
            </div>
            <div class="search-label ml-20">
                截止时间
            </div>
            <div class="search-item">
                <Date-picker type="date" placement="bottom-end" :value="defaultDate" :options="options" @on-change="setFin" placeholder="选择结束日期" style="width: 215px"></Date-picker>
            </div>
            </Col>
        </Row>
        <br />
        <Row>
            <Col span="2">
            <span class="datelabel">按端口属性：</span>
            </Col>
            <Col span="22">
            <div class="search-label">
                归属省份
            </div>
            <div class="search-item short">
                <Select v-model="defaultData.province.value" :label-in-value="true" @on-change="selectProvince">
                    <Option v-for="item in selectionProvence" :value="item.value" :key="item">{{ item.label }}</Option>
                </Select>
            </div>
            <div class="search-label ml-20">
                端口类型
            </div>
            <div class="search-item short">
                <Select v-model="defaultData.deviceType.value" :label-in-value="true" @on-change="selectDevice">
                    <Option v-for="item in deviceTypeList" :value="item.value" :key="item">{{ item.label }}</Option>
                </Select>
            </div>
            <div class="search-label ml-20">
                业务大类
            </div>
            <div class="search-item short">
                <Select v-model="defaultData.SMNP.value" :label-in-value="true" @on-change="selectSMNP">
                    <Option v-for="item in SMNPList" :value="item.value" :key="item">{{ item.label }}</Option>
                </Select>
            </div>
            </Col>
        </Row>
        <br />
        <Row>
            <Col span="2">
            <span class="datelabel">按设备IP检索：</span>
            </Col>
            <Col span="22">
            <Input v-model="device.IP" placeholder="请输入设备IP" style="width: 300px"></Input>
            </Col>
        </Row>
        <Col offset="2" style="margin-top: 20px">
        <button class="btn-blue w120" @click="searchSubmit">立即检索</button>
        <a class="ml-20" @click="reset">清空检索条件</a>
        </Col>
        <Row style="margin-top: 20px">
            <Col span="2">
            <span class="datelabel">检索结果：</span>
            </Col>
            <Col span="22">
            <span class="search-result">总共找到1230条记录，当前为您显示第 1-50条</span>
            <br />
            <span class="search-result"><a>点击下载</a> 检索结果文件</span>
            </Col>
        </Row>
        <div class="tableContent">
            {{device}}
            <Table width="auto" stripe border :columns="columns" @on-selection-change="con" :data="portData" style="margin-bottom: 20px"></Table>
            <Button type="info" :disabled="BtnDisabled">下载所选</Button>
            <Button type="error" :disabled="BtnDisabled" style="margin-left: 20px">批量删除</Button>
            <span v-if="selection.length" class="result-info ml-20">已选中 {{selection.length}} 条记录</span>
        </div>
    </div>
</template>
<style lang="less">
    .datelabel{
        font-size: 14px;
        height: 30px;
        line-height: 30px;
    }
    .search-item,.search-label{
        float: left;
    }
    .search-label{
        width: 80px;
        height: 30px;
        line-height: 30px;
    }
    .search-item{
        width: 220px;
    input{
        width: 215px !important;
    }
    }
    .search-item.short{
        width: 150px;
    input{
        width: 150px !important;
    }
    }
    .search-result{
        height: 30px;
        line-height: 30px;
    }
    .tableContent{
        padding-top: 10px;
        margin-top: 10px;
        border-top:2px solid #eceff9;
    tr{
        height: 66px;
    }
    }
</style>
<script type="text/ecmascript-6">
    import {showDataSelection,porttables} from '../../../static/data'
    export default{
        data() {
            return {
                selectionList: showDataSelection.dataList,
                selectionProvence: showDataSelection.dataProvenceList,
                deviceTypeList: showDataSelection.deviceTypeList,
                SMNPList: showDataSelection.SMNPList,
                portList: showDataSelection.portList,
                portData: porttables.deviceData,
                columns: porttables.columns,
                defaultData:{
                    province: {
                        value: 'all',
                        label: '全国'
                    },
                    data: {
                        value: 'all',
                        label: '全国数据'
                    },
                    deviceType: {
                        value: 'all',
                        label: '全部'
                    },
                    SMNP: {
                        value: 'all',
                        label: '全部'
                    },
                    port: {
                        value: 'all',
                        label: '全部'
                    }
                },
                options: {
                    disabledDate (date) {
                        return date && date.valueOf() > Date.now();
                    }
                },
                device: {
                    IP: '',
                    startDate:'',
                    finDate: '',
                    province: 'all',
                    deviceType: 'all',
                    SMNP: 'all',
                    port: 'all',
                },
                selection: []
            }
        },
        methods:{
            reset(){

            },
            searchSubmit() {        //立即检索

            },
            setStart(date) {
                this.device.startDate = date;
                if(this.device.finish_date && this.device.start_date>this.device.finish_date){
                    alert('起始时间不能晚于结束时间！');
                    return false;
                }
            },
            setFin(date) {
                this.device.finDate = date;
                if(this.device.finish_date<this.device.start_date){
                    alert('结束时间不能早于起始时间！');
                    return false;
                }
            },
            checkData(value) {      //切换数据来源

            },
            selectDevice(value) {   //切换设备类型
                this.device.deviceType = value.value
            },
            selectSMNP(v) {         //切换smnp
                this.device.SMNP = v.value
            },
            selectProvince(v) {     //切换归属省份
                this.device.province = v.value
            },
            selectPort(v) {         //切换端口
                this.device.port = v.value
            },
            con(selection){
                this.selection = selection;
            },
        },
        computed:{
            defaultDate(){
                return new Date();
            },
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
