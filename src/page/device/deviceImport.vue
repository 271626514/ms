<template>
    <div>
        <div class="module-header">
            <h4>设备导入
                <Tooltip placement="bottom-start">
                    <span class="info-question"></span>
                    <div slot="content">
                        <p>1、批量添加操作仅支持公网地址设备，私网地址设备信息的填报导入工作请联系集团负责人，联系电话：52686688-1062；</p>
                        <p>2、请开通设备SNMP采集权限，总部采集设备地址为117.136.187.8-15、117.136.191.38</p>
                    </div>
                </Tooltip>
                <span class="role-text ml-20">权限选择</span>
                <Select v-model="defaultData.data.value" :label-in-value="true" @on-change="checkData" style="width:300px;margin-left: 15px">
                    <Option v-for="item in selectionList" :value="item.value" :key="item">{{ item.label }}</Option>
                </Select>
            </h4>
        </div>
        <Tabs type="card" :animated="false">
            <Tab-pane label="批量添加snmp V2设备">
                <div class="usermanage">
                    <div class="module-search">
                        <div class="step">
                            <p><span class="step-label">Step 1</span>下载设备添加模版， 点此 <a class="download-text">下载</a></p>
                            <p><span class="step-label">Step 2</span>正确填写设备添加模版并上传，点此<a @click="modal('device_v2')">上传</a></p>
                            <p><span class="step-label">Step 3</span>在待添加设备列表中核对设备信息无误后，点击确定添加 完成操作</p>
                        </div>
                    </div>
                    <div class="module-header mt-20">
                        <h4>待添加snmp V2设备列表
                            <span class="info-text ml-20">已导入<i class="red"> {{snmp2Data.length}} </i>条设备信息</span>
                            <Button type="ghost"  @click="cancelUpload" :disabled="!snmp2DataLength" class="right ml-10 f14">取消添加</Button>
                            <Button type="primary" @click="confirmUpload" :disabled="!snmp2DataLength" class="btn-search right f14">确定添加</Button>
                        </h4>
                    </div>
                    <div class="tableContent">
                        <Table width="auto" stripe border :columns="columns2" :data="snmp2Data" style="margin-top: 10px"></Table>
                    </div>
                </div>
            </Tab-pane>
            <!--snmp v3 设备区域-->
            <Tab-pane label="批量添加snmp V3设备">
                <div class="usermanage">
                    <div class="module-search">
                        <div class="step">
                            <p><span class="step-label">Step 1</span>下载设备添加模版， 点此 <a class="download-text">下载</a></p>
                            <p><span class="step-label">Step 2</span>正确填写设备添加模版并上传，点此<a @click="modal('device_v3')">上传</a></p>
                            <p><span class="step-label">Step 3</span>在待添加设备列表中核对设备信息无误后，点击确定添加 完成操作</p>
                        </div>
                    </div>
                    <div class="module-header mt-20">
                        <h4>待添加snmp V3设备列表
                            <span class="info-text ml-20">已导入<i class="red"> {{snmp3Data.length}} </i>条设备信息</span>
                            <Button type="ghost"  @click="cancelUpload" :disabled="!snmp3DataLength" class="right ml-10 f14">取消添加</Button>
                            <Button type="primary" @click="confirmUpload" :disabled="!snmp3DataLength" class="btn-search right f14">确定添加</Button>
                        </h4>
                    </div>
                    <div class="tableContent">
                        <Table width="auto" stripe border :columns="columns3" :data="snmp3Data" style="margin-top: 10px"></Table>
                    </div>
                </div>
            </Tab-pane>
        </Tabs>
        <!--上传-->
        <button @click="dialog.watting=!dialog.watting">asdasd</button>
        <Modal v-model="dialog.upload" :mask-closable="false" title="文件上传">
            <div class="clearfix uploadModalContent">
                <span class="x-label">上传文件：</span>
                <span class="x-input">{{uploadData.name}}</span>
                <span class="x-button">
                    <Upload action="/cdnManage/upload" :data="this.uploadData.data" :format="['xlsx']" :on-format-error="handleFormatError" :on-success="uploadSuccess" :on-error="uploadError" :before-upload="beforUpload">
                        <Button type="primary">上传文件</Button>
                    </Upload>
                </span>
            </div>
            <p style="width: 75%; margin: 20px auto">
                注意： 请务必使用正确的设备／端口批量导入文件模版，不匹配的模版将导致批量添加操作失败。仅支持上传xls、xlsx类型的文件。
            </p>
            <div class="errorInfo" v-if="dialogError.flag">
                <h6 class="red f16 text-center">上传失败！</h6>
                <p style="width: 75%; margin: 0 auto">{{dialogError.content}}</p>
            </div>
            <div slot="footer">
                <Button type="primary" @click="toPython" :disabled="uploadLoad">确定</Button>
                <Button type="ghost" @click="close">取消</Button>
            </div>
        </Modal>
        <!--等待中-->
        <Modal v-model="dialog.watting" :mask-closable="false" title="提示" class="userRole" :closable="false">
            <div class="clearfix dialog-body">
                <Spin fix v-if="pythonBtn">
                    <Icon type="load-c" size=38 class="demo-spin-icon-load"></Icon>
                    <div>导入中，请稍等...</div>
                </Spin>
                <div v-if="pythodFlag==1" class="x-area">
                    <h3>导入成功！</h3>
                    <p>请在待添加设备列表中确认设备信息</p>
                </div>
                <div v-if="pythodFlag==2" class="x-area">
                    <h3>导入出错！</h3>
                    <p>请在待添加设备列表中检查错误原因，并重新上传正确的文件</p>
                </div>
            </div>
            <div slot="footer">
                <button @click="pythodFlag=2">123123</button>
                <Button type="primary" style="width:85px" class="align f14" @click="pythonShow" :disabled="pythonBtn">确定</Button>
            </div>
        </Modal>
    </div>
</template>
<style lang="less">
.step{
    font-size: 14px;
    p{
        margin-bottom: 10px;
    }
    .step-label{
        color:#3694f2;
        width: 60px;
        display: inline-block;
    }
}
.uploadModalContent{
    padding: 30px 0;
}
.x-input{
    border:1px solid #d7dde4;
    display: inline-block;
    float: left;
    width: 300px;
    height: 32px;
    line-height: 32px;
    padding: 0 10px;
}
.x-label{
    height: 32px;
    line-height: 32px;
    display: inline-block;
    float: left;
}
.x-button{
    float: left;
    margin-left: 10px;
}
.x-area{
    h3{
        font-size: 22px;
        color: #333;
        text-align: center;
        font-weight: normal;
    }
    p{
        font-size: 14px;
        color: #666;
        text-align: center;
        margin-top: 15px;
    }
}
</style>
<script type="text/ecmascript-6">
    import {showDataSelection,snmp2tables,snmp3tables,config} from '../../assets/js/data'
    export default{
        data() {
            return {
                selectionList: showDataSelection.dataList,
                uploadData: {
                    name: '',
                    state: 0,
                    data:{
                        type:''
                    }
                },
                dialog:{
                    success: false,
                    waitting: false,
                    error: false,
                    upload: false,
                    watting: false,
                },
                dialogError:{
                    flag: false,
                    content: ''
                },
                pythondata:[],
                pythodFlag:0,
                snmp2Data:[],
                columns2:snmp2tables.columns,
                snmp3Data: [],
                columns3:snmp3tables.columns,
                defaultData:{
                    data: {
                        value: 'all',
                        label: '全国数据'
                    }
                }
            }
        },
        methods:{
            checkData(value) {      //切换数据来源

            },
            modal(type){        //激活上传文件对话框，同步用户上传文件类型
                this.dialog.upload = true;
                this.uploadData.data.type = type;
            },
            beforUpload(f){                 //文件上传前，文件名同步
                this.uploadData.name = f.name;
            },
            handleFormatError (f) {      //上传格式校验
                this.dialogError.flag = true;
                this.dialogError.content = `文件格式错误，仅支持 xls，xlsx格式文件`;
            },
            uploadError(f){                 //上传失败,网络原因
                this.dialogError.flag = true;
                this.dialogError.content = `网络连接错误，请稍后再试`;
            },
            uploadSuccess(res, file, fileList) {       //上传成功回传
                if(res.code==0){        //有错误
                    this.dialogError.flag = true;
                    this.dialogError.content = res.msg;
                }else if(res.code==1){      //正确
                    this.uploadData.state = 1;
                }
            },
            toPython() {             //点击上传对话框
                this.dialog.upload = false;
                this.dialog.watting = true;
                this.$http.post('/ms/demo',this.dialog,config).then((res)=>{
                    this.pythondata = res.data;
                    this.pythodFlag = res.code;
                })
            },
            pythonShow() {          //数据展示
                if(this.uploadData.data.type=='device_v2'){
                    this.snmp2Data = this.pythondata
                }else if(this.uploadData.data.type=='device_v3'){
                    this.snmp3Data = this.pythondata
                }
                this.dialog.watting = false;
            },
            cancelUpload() {        //取消同步
                this.snmp2Data = [];
                this.snmp3Data = [];
            },
            confirmUpload() {

            },
            close() {
                this.uploadData.name = '';
                this.dialog.upload = false;
            },
            reset() {
                if(!this.dialog.upload){
                    this.dialogError.flag = false;
                    this.dialogError.content = '';
                    this.uploadData.name = '';
                    this.uploadData.state = 0;
                }
            }
        },
        computed:{
            BtnDisabled(){
                if(this.selection.length){
                    return false;
                }else{
                    return true;
                }
            },
            uploadLoad() {
                if(this.uploadData.state!=1){
                    return true;
                }
            },
            snmp2DataLength() {
               if(this.snmp2Data.length>1){
                   return true;
               }else{
                   return false;
               }
            },
            snmp3DataLength() {
                if(this.snmp3Data.length>1){
                    return true;
                }else{
                    return false;
                }
            },
            pythonBtn() {
                if(this.pythondata.length<1){
                    return true;
                }else{
                    return false;
                }
            }
        },
        watch:{
            'dialog.upload':'reset'
        }
    }
</script>