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
                    <Date-picker type="date" placement="bottom-end" :value="device.beginTime" :options="options" @on-change="setStart" placeholder="选择起始日期" style="width: 155px"></Date-picker>
                </div>
                <div class="line"></div>
                <div class="search-item">
                    <Date-picker type="date" placement="bottom-end" :value="device.endTime" :options="options" @on-change="setFin" placeholder="选择结束日期" style="width: 155px"></Date-picker>
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
                    <Select v-model="device.type" :label-in-value="true" @on-change="v=>{ setOption(v,'type')}" style="width:138px;">
                        <Option v-for="item in deviceTypeList" :value="item.value" :key="item">{{ item.label }}</Option>
                    </Select>
                </div>
                <div class="search-label ml-20">
                    SNMP版本：
                </div>
                <div class="search-item">
                    <Select v-model="device.snmpVersionView" :label-in-value="true" @on-change="selectSMNP" style="width:88px;">
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
                <Button type="primary" class="btn-search ml-20 mt-40" @click.native="searchSubmit" :loading="loading">
                    <span v-if="!loading">立即检索</span>
                    <span v-else>检索中</span>
                </Button>
                <a class="text-blue" @click="reset">清空</a>
            </div>
        </div>
        <div class="search-result">
            <p class="search-content">已查找到<span>{{deviceData.length}}</span>条数据</p>
            <a class="search-download" :href="downloadhref" v-if="deviceData.length">下载检索结果文件</a>
        </div>
        <div class="tableContent">
            <Table width="auto" stripe border :columns="columns" @on-selection-change="con" :data="deviceData" style="margin-top: 10px"></Table>
            <div class="table-set">
                <Button type="ghost" :disabled="BtnDisabled"><a :href="downloadsec">下载所选</a></Button>
                <Button type="ghost" :disabled="BtnDisabled" style="margin-left: 10px" @click="removeall">批量删除</Button>
                <span v-if="selection.length" class="result-info ml-20">已选中 {{selection.length}} 条记录</span>
            </div>
            <div class="page" v-if="deviceData">
                <Page :total="page.totalList" :page-size="15" @on-change="onChange"></Page>
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

        <modal :title="this.modal.title" :content="this.modal.content" :dialog="this.modal.dialog"></modal>
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
    import modal from '../../components/common/modal.vue'
    export default{
        data() {
            return {
                deviceData: [],                     //列表数据
                operatUser: this.$store.getters.getusername,
                roleId:this.$store.getters.getuserRoleId,
                selectionProvence: [],

                deviceTypeList: showDataSelection.deviceTypeList,
                SMNPList: showDataSelection.SMNPList,
                portList: showDataSelection.portList,

                columns: devicetables.columns,      //列表头
                removeColumns:removeData.columns,   //批量删除字段
                removeData:[],
                options: {
                    disabledDate (date) {
                        return date && date.valueOf() > Date.now();
                    }
                },
                device: {               //上传数据
                    ipAddr: '',
                    beginTime: this.getDate(),
                    endTime: this.getDate(),
                    province: '全国',
                    type: '全部',
                    snmpVersionView: '全部',
                    snmpPort: '全部',
                },
                downloadhref:'',
                downloadsec:'',
                page:{
                    totalList: 10,
                    pageNum: 1,
                    pageSize: 15
                },
                loading:false,
                selection: [],
                dialog:{
                    removeAll:false,
                },
                modal:{
                    title:'',
                    content:'',
                    dialog:0
                },
            }
        },
        methods:{
            dataFormat(pageSize,pageNum){       //数据处理
                let str = ''
                for(var item in this.device){
                    str+='&'+item+'=' + this.device[item];
                }
                str+= '&pageSize='+ pageSize + '&pageNum='+ pageNum;
                return str;
            },
            searchSubmit(e,pageSize=15,pageNum = this.page.pageNum) {        //立即检索
                this.loading = true;
                let data = this.dataFormat(pageSize,pageNum);
                this.$http.post('/cdnManage/devicesList',data,config).then(res=>{
                    this.deviceData = res.data.list;
                    this.page.totalList = res.data.totalCount;
                    this.loading = false;
                    this.downloadhref= '/cdnManage/exportDevicesList?totlePage='+this.page.totalList+data;
                }).catch(res=>{
                    this.loading = false;
                })
            },
            remove_con(){       //批量删除同步后台
                this.dialog.removeAll = false;
                let data = '';
                for(var item of this.removeData){
                    data+= '&ids[]='+ item.id;
                }
                this.$http.post('/admin/user',data,config).then(res=>{
                    if(res.data == 'success'){
                        this.modal.dialog++;
                        this.modal.title = '删除成功'
                    }else if(res.data == 'error'){
                        this.modal.dialog--;
                        this.modal.title = '删除失败'
                        this.modal.content = ``
                    }
                }).catch(res=>{
                    this.modal.dialog--;
                    this.modal.title = '删除失败'
                    this.modal.content = `请检查网络，稍后再试`
                })
            },
            onChange(pageNum){         //分页查询
                this.searchSubmit(null,15,pageNum);
                this.page.pageNum = pageNum;
            },
            setStart(date) {
                this.device.beginTime = date;
                if(this.device.endTime && this.device.beginTime>this.device.endTime){
                    alert('起始时间不能晚于结束时间！');
                    return false;
                }
            },
            setFin(date) {
                this.device.endTime = date;
                if(this.device.endTime<this.device.beginTime){
                    alert('结束时间不能早于起始时间！');
                    return false;
                }
            },
            selectDevice(value) {   //切换设备类型
                this.device.type = value.value
            },
            selectSMNP(v) {         //切换smnp
                this.device.snmpVersionView = v.value
            },
            selectProvince(v) {     //切换归属省份
                this.device.province = v.value
            },
            selectPort(v) {         //切换端口
                this.device.snmpPort = v.value
            },
            con(selection){
                this.selection = selection;
                let data = '';
                for(let i of selection){
                    data+= 'ids[]='+i.id + '&';
                }
                this.downloadsec = '/cdnManage/exportSelDevicesList?'+ data.substr(0, data.length-1);
            },
            removeall() {       //激活批量删除Moadl
                this.dialog.removeAll = true;
                this.removeData = this.selection;
            },
            reset(){        //清空检索条件
                this.device.ipAddr = "";
                this.device.beginTime = this.defaultDate
                this.device.endTime = this.defaultDate
                this.device.province = '全国';
                this.device.type = '全部';
                this.device.snmpVersionView = '全部';
                this.device.snmpPort = '全部';
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
            userRoleList(data){     //处理用户列表可用权限
                let roleList = [];
                if(data.checked){
                    roleList.push({label:'全国',value:'全国'})
                }
                for(var item of data.children){
                    if(item.checked){
                        var _temp = {
                            label: item.img,
                            value: item.img
                        }
                        roleList.push(_temp)
                    }
                }
                return roleList;
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
        },
        mounted(){
            //拉取用户的权限列表
            this.$http.get('/role/roles/menus?roleId='+this.roleId+'&type=deviceList').then(res=>{
                this.selectionProvence = this.userRoleList(res.data[0].menuDeviceList[0]);
                this.device.province = this.selectionProvence[0].value;
            }).catch(res=>{
                console.log('获取用户权限数据失败'+res)
            });
            /*//获取设备信息全部数据
            this.$http.get('/cdnManage/devicesList?province='+).then(res=>{
                this.deviceData = res.data;
                this.page.totleList = res.data.totleList;
            }).catch(res=>{
                console.log('获取设备信息列表数据失败'+res);
            })*/
        },
        components:{
            modal
        }
    }
</script>
