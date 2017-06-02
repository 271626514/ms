<template>
    <div>
        <div class="module-header">
            <h4>端口列表
                <Select v-model="port.province" :label-in-value="true" @on-change="checkData" style="width:300px;margin-left: 15px">
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
                <span class="datelabel">端口属性</span>
                <div class="search-label">
                    省份：
                </div>
                <div class="search-item">
                    <Select v-model="port.province" :label-in-value="true" @on-change="selectProvince" style="width:88px;">
                        <Option v-for="item in selectionProvence" :value="item.value" :key="item">{{ item.label }}</Option>
                    </Select>
                </div>
                <div class="search-label ml-20">
                    端口类型：
                </div>
                <div class="search-item">
                    <Select v-model="port.portType" :label-in-value="true" @on-change="selectPortType" style="width: 80px">
                        <Option v-for="item in portTypeList" :value="item.value" :key="item">{{ item.label }}</Option>
                    </Select>
                </div>
                <div class="search-label ml-20">
                    业务大类：
                </div>
                <div class="search-item">
                    <Select v-model="port.service" :label-in-value="true" @on-change="selectService" style="width: 130px">
                        <Option v-for="item in serviceList" :value="item.value" :key="item">{{ item.label }}</Option>
                    </Select>
                </div>
            </div>
            <div class="item">
                <span class="datelabel">设备IP检索</span>
                <Input v-model="port.IP" style="width: 350px"></Input>
            </div>
            <div class="search-ctrl">
                <Button type="primary" class="btn-search ml-20 mt-40" @click="searchSubmit">立即检索</Button>
                <a class="text-blue" @click="reset">清空</a>
            </div>
        </div>
        <div class="search-result">
            <p class="search-content">已查找到<span>1161</span>条数据</p>
            <a class="search-download">下载检索结果文件</a>
        </div>
        <div class="tableContent">
            <Table width="auto" stripe border :columns="columns" @on-selection-change="con" :data="portData" style="margin-top: 10px"></Table>
            <div class="table-set">
                <Button type="ghost" :disabled="BtnDisabled">下载所选</Button>
                <Button type="ghost" :disabled="BtnDisabled" style="margin-left: 10px">批量删除</Button>
                <span v-if="selection.length" class="result-info ml-20">已选中 {{selection.length}} 条记录</span>
            </div>
        </div>
    </div>
</template>
<style lang="less"></style>
<script type="text/ecmascript-6">
    import {showDataSelection,porttables} from '../../assets/js/data'
    export default{
        data() {
            return {
                selectionList: showDataSelection.dataList,
                selectionProvence: showDataSelection.dataProvenceList,
                portTypeList: showDataSelection.portType,
                serviceList: showDataSelection.serviceList,
                portData: porttables.deviceData,
                columns: porttables.columns,
                defaultDate: this.getDate(),
                options: {
                    disabledDate (date) {
                        return date && date.valueOf() > Date.now();
                    }
                },
                port: {
                    IP: '',
                    startDate:'',
                    finDate: '',
                    province: 'all',
                    portType: 'all',
                    service: 'all'
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
            selectProvince(v) {     //切换归属省份
                this.device.province = v.value
            },
            selectPortType(value) {   //切换端口类型
                this.device.portType = value.value
            },
            selectService(v) {         //切换业务大类
                this.device.service = v.value
            },
            con(selection){
                this.selection = selection;
            },
            getDate(){
                let date = new Date();
                let seperator1 = "-";
                let month = date.getMonth() + 1;
                let strDate = date.getDate();
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                let currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                return currentdate;
            }
        },
        mounted(){

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
