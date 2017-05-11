<template>
    <div>
        <div class="module-header">
            <h4>设备列表
                <Select v-model="defaultData.data.value" :label-in-value="true" @on-change="checkData" style="width:300px;margin-left: 15px">
                    <Option v-for="item in selectionList" :value="item.value" :key="item">{{ item.label }}</Option>
                </Select>
            </h4>
        </div>
        <div class="module-search">
            <div class="item">
                <span class="datelabel">上传时间</span>
                <div class="search-item">
                    <Date-picker type="date" placement="bottom-end" :value="defaultDate" :options="options" @on-change="setStart" placeholder="选择起始日期" style="width: 155px"></Date-picker>
                </div>
                <div class="line"></div>
                <div class="search-item">
                    <Date-picker type="date" placement="bottom-end" :value="defaultDate" :options="options" @on-change="setFin" placeholder="选择结束日期" style="width: 155px"></Date-picker>
                </div>
            </div>
            <div class="item">
                <span class="datelabel">设备属性</span>
                <div class="search-label">
                    省份：
                </div>
                <div class="search-item">
                    <Select v-model="defaultData.province.value" :label-in-value="true" @on-change="selectProvince" style="width:88px;">
                        <Option v-for="item in selectionProvence" :value="item.value" :key="item">{{ item.label }}</Option>
                    </Select>
                </div>
                <div class="search-label ml-20">
                    类型：
                </div>
                <div class="search-item">
                    <Select v-model="defaultData.deviceType.value" :label-in-value="true" @on-change="selectDevice" style="width:110px;">
                        <Option v-for="item in deviceTypeList" :value="item.value" :key="item">{{ item.label }}</Option>
                    </Select>
                </div>
                <div class="search-label ml-20">
                    SMNP版本：
                </div>
                <div class="search-item">
                    <Select v-model="defaultData.SMNP.value" :label-in-value="true" @on-change="selectSMNP" style="width:88px;">
                        <Option v-for="item in SMNPList" :value="item.value" :key="item">{{ item.label }}</Option>
                    </Select>
                </div>
                <div class="search-label ml-20">
                    端口：
                </div>
                <div class="search-item">
                    <Select v-model="defaultData.port.value" :label-in-value="true" @on-change="selectPort" style="width:88px;">
                        <Option v-for="item in portList" :value="item.value" :key="item">{{ item.label }}</Option>
                    </Select>
                </div>
            </div>
            <div class="item">
                <span class="datelabel">设备IP检索</span>
                <Input v-model="device.IP" style="width: 350px"></Input>
            </div>
            <div class="search-ctrl">
                <Button type="primary" class="btn-search ml-20 mt-40" @click="searchSubmit">立即检索</Button>
                <a class="text-blue" @click="reset">清空</a>
            </div>
        </div>
        <div class="search-result">
            <p class="search-label">检索条件：</p>
            <p class="search-content">已查找到<span>1161</span>条数据</p>
            <a class="search-download">下载检索结果文件</a>
        </div>
        <div class="tableContent">
            {{device}}
            <Table width="auto" stripe border :columns="columns" @on-selection-change="con" :data="deviceData" style="margin-bottom: 20px"></Table>
            <Button type="info" :disabled="BtnDisabled">下载所选</Button>
            <Button type="error" :disabled="BtnDisabled" style="margin-left: 20px">批量删除</Button>
            <span v-if="selection.length" class="result-info ml-20">已选中 {{selection.length}} 条记录</span>
        </div>
    </div>
</template>
<style lang="less">
.text-blue{
    display: block;
    margin-top:10px;
    text-align: center;
}
.btn-search{
    span{
        font-size: 16px;
    }
}
</style>
<script type="text/ecmascript-6">
    import {showDataSelection,devicetables} from '../../../static/data'
    export default{
        data() {
            return {
                selectionList: showDataSelection.dataList,
                selectionProvence: showDataSelection.dataProvenceList,
                deviceTypeList: showDataSelection.deviceTypeList,
                SMNPList: showDataSelection.SMNPList,
                portList: showDataSelection.portList,
                deviceData: devicetables.deviceData,
                columns: devicetables.columns,
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
