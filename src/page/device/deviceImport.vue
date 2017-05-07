<template>
    <div>
        <div class="module-header">
            <h4>设备导入
                <Select v-model="defaultData.data.value" :label-in-value="true" @on-change="checkData" style="width:300px;margin-left: 15px">
                    <Option v-for="item in selectionList" :value="item.value" :key="item">{{ item.label }}</Option>
                </Select>
            </h4>
        </div>
    </div>
</template>
<style lang="less">

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
