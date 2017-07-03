<template>
    <div>
        <div class="module-header">
            <h4>设备列表
                <Select v-model="device.province" :label-in-value="true" @on-change="selectProvince" style="width:160px;margin-left: 15px">
                    <Option v-for="item in selectionProvence" :value="item.value" :key="item">{{ item.label }}</Option>
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
                    <Select v-model="device.province" :label-in-value="true" @on-change="selectProvince" style="width:88px;">
                        <Option v-for="item in selectionProvence" :value="item.value" :key="item">{{ item.label }}</Option>
                    </Select>
                </div>
                <div class="search-label ml-20">
                    类型：
                </div>
                <div class="search-item">
                    <Select v-model="device.type" :label-in-value="true" @on-change="selectDevice" style="width:138px;">
                        <Option v-for="item in deviceTypeList" :value="item.value" :key="item">{{ item.label }}</Option>
                    </Select>
                </div>
                <div class="search-label ml-20">
                    SNMP版本：
                </div>
                <div class="search-item">
                    <Select v-model="device.snmpVersion" :label-in-value="true" @on-change="selectSMNP" style="width:88px;">
                        <Option v-for="item in SMNPList" :value="item.value" :key="item">{{ item.label }}</Option>
                    </Select>
                </div>
                <div class="search-label ml-20">
                    端口：
                </div>
                <div class="search-item">
                    <Select v-model="device.snmpPort" :label-in-value="true" @on-change="selectPort" style="width:88px;">
                        <Option v-for="item in portList" :value="item.value" :key="item">{{ item.label }}</Option>
                    </Select>
                </div>
            </div>
            <div class="item">
                <span class="datelabel">设备IP检索</span>
                <Input v-model="device.ipAddr" style="width: 350px"></Input>
            </div>
            <div class="search-ctrl">
                <Button type="primary" class="btn-search ml-20 mt-40" @click="searchSubmit" :loading="loading">
                    <span v-if="!loading">立即检索</span>
                    <span v-else>检索中</span>
                </Button>
                <a class="text-blue" @click="reset">清空</a>
            </div>
        </div>
        <div class="search-result">
            <p class="search-content">已查找到<span>{{deviceData.length}}</span>条数据</p>
            <a class="search-download">下载检索结果文件</a>
        </div>
        <div class="tableContent">
            <Table width="auto" stripe border :columns="columns" @on-selection-change="con" :data="deviceData" style="margin-top: 10px"></Table>
            <div class="table-set">
                <Button type="ghost" :disabled="BtnDisabled" @click="downloadAll">下载所选</Button>
                <Button type="ghost" :disabled="BtnDisabled" style="margin-left: 10px" @click="removeall">批量删除</Button>
                <span v-if="selection.length" class="result-info ml-20">已选中 {{selection.length}} 条记录</span>
            </div>
            <div class="page">
                <Page :total="page.totalList" @on-change="onChange"></Page>
            </div>
        </div>
        <!--批量删除-->
        <Modal v-model="dialog.removeAll" :mask-closable="false" title="批量删除" class="removeAll" width="640">
            <div class="clearfix">
                <div>
                    <p class="mb-10">是否确定删除以下设备？</p>
                    <div class="tableContent">
                        <Table width="auto" stripe border :columns="removeColumns" :data="removeData" style="margin-top: 10px"></Table>
                    </div>
                    <p class="mt-10">操作人员：{{operatUser}}</p>
                    <p class="gray mt-10 f12">注意：</p>
                    <p class="gray f12">删除设备后，将无法对基于该设备继续增加端口信息，已添加的端口则不受影响。</p>
                </div>
            </div>
            <div slot="footer">
                <Button type="primary" style="width:80px" class="align f14" @click="remove_con">确定</Button>
                <Button type="ghost" style="width:80px" class="align f14" @click="dialog.removeAll=!dialog.removeAll">取消</Button>
            </div>
        </Modal>
        <!--操作成功回执-->
        <Modal v-model="dialog.success" :mask-closable="false" title="提示" :closable="false">
            <div class="clearfix dialog-body">
                <h1>删除成功</h1>
            </div>
            <div slot="footer">
                <Button type="primary" style="width:90px" class="align" @click="reload">确定</Button>
            </div>
        </Modal>
        <!--操作失败回执-->
        <Modal v-model="dialog.error" :mask-closable="false" title="提示" :closable="false">
            <div class="clearfix dialog-body">
                <h1>删除失败</h1>
                <p class="red f16 text-center mt-20">{{errorInfo}}</p>
            </div>
            <div slot="footer">
                <Button type="primary" style="width:90px" class="align" @click="dialog.error=!dialog.error">确定</Button>
            </div>
        </Modal>
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
.removeAll{
    .ivu-modal-body{
        padding: 15px 30px;
        font-size: 14px;
        color: #666;
    }
}
.page{
    float: right;
    margin-top: 10px;
}
</style>
<script type="text/ecmascript-6">
    import {showDataSelection,devicetables,removeData,config} from '../../assets/js/data'
    export default{
        data() {
            return {
                roleId:this.$store.getters.getuserRoleId,
                selectionProvence: showDataSelection.dataProvenceList,
                deviceTypeList: showDataSelection.deviceTypeList,
                SMNPList: showDataSelection.SMNPList,
                portList: showDataSelection.portList,

                deviceData: devicetables.deviceData,
                columns: devicetables.columns,

                removeColumns:removeData.columns,
                operatUser: this.$store.getters.getusername,
                removeData:[],
                defaultDate: this.getDate(),
                options: {
                    disabledDate (date) {
                        return date && date.valueOf() > Date.now();
                    }
                },
                device: {               //上传数据
                    ipAddr: '',
                    beginTime: this.getDate(),
                    endTime: this.getDate(),
                    province: 'all',
                    type: 'all',
                    snmpVersion: 'all',
                    snmpPort: 'all',
                },
                page:{
                    totalList: 114,
                    pageNum: 1,
                    pageSize: 15
                },
                loading:false,
                selection: [],
                dialog:{
                    removeAll:false,
                    success: false,
                    error:false,
                },
                errorInfo:''        //同步后台失败的回传错误信息文字
            }
        },
        methods:{
            reset(){        //清空检索条件
                this.device.ipAddr = "";
                this.device.beginTime = this.getDate();
                this.device.endTime = this.getDate();
                this.device.province = 'all';
                this.device.type = 'all';
                this.device.snmpVersion = 'all';
                this.device.snmpPort = 'all';
            },
            searchSubmit() {        //立即检索
                this.loading = true;
                this.$http.post('/admin/user',this.device,config).then(res=>{
                    this.loading = false;
                }).catch(res=>{
                    this.loading = false;
                    console.log(res)
                })
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
            removeall() {       //激活批量删除Moadl
                this.dialog.removeAll = true;
                this.removeData = this.selection;
            },
            remove_con(){       //批量删除同步后台
                this.dialog.removeAll = false;

                this.$http.post('/admin/user',this.removeData,config).then((res)=>{
                    this.dialog.success = true;
                }).catch((res)=>{
                    this.dialog.error = true;
                    this.errorInfo = `${res}`
                })

            },
            reload(){ //重新加载页面
                window.location.reload();
            },
            downloadAll() {     //下载批量选择的设备

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
            },
            dataFormat(data){       //数据处理

            },
            onChange(page){         //分页查询
                console.log(page)
            }
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
        },
        mounted(){
            //拉取用户的权限列表
            this.$http.get('/role/roles/menus?roleId='+this.roleId+'&type=deviceList').then(res=>{
                this.selectionProvence = res.menuDeviceList.children
            }).catch(res=>{
                console.log('获取用户下拉选择数据失败'+res)
            });
            this.$http.get('/cdnManage/devicesList').then(res=>{
                this.deviceData = res.data;
                this.page.totleList = res.data.totleList;
            }).catch(res=>{
                console.log('获取设备信息列表数据失败'+res);
            })
        }
    }
</script>
