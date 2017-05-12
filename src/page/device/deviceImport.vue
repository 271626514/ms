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
        <Tabs type="card">
            <Tab-pane label="批量添加snmp V2设备">
                <div class="usermanage">
                    <div class="module-search">
                        <div class="step">
                            <p><span class="step-label">Step 1</span>下载设备添加模版， 点此 <a class="download-text">下载</a></p>
                            <p><span class="step-label">Step 2</span>正确填写设备添加模版并上传，点此<a @click="dialog.upload=!dialog.upload">上传</a></p>
                            <p><span class="step-label">Step 3</span>在待添加设备列表中核对设备信息无误后，点击确定添加 完成操作</p>
                        </div>
                    </div>
                    <div class="module-header mt-20">
                        <h4>待添加设备列表
                            <span class="info-text ml-20">已导入<i class="red"> 1161 </i>条设备信息</span>
                            <Button type="text"  @click="cancelUpload" :disabled="!snmp2DataLength" class="right blue f14">取消添加</Button>
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
                            <p><span class="step-label">Step 2</span>正确填写设备添加模版并上传，点此<a @click="dialog.upload=!dialog.upload">上传</a></p>
                            <p><span class="step-label">Step 3</span>在待添加设备列表中核对设备信息无误后，点击确定添加 完成操作</p>
                        </div>
                    </div>
                    <div class="module-header mt-20">
                        <h4>待添加设备列表
                            <span class="info-text ml-20">已导入<i class="red"> 1161 </i>条设备信息</span>
                            <Button type="text"  @click="cancelUpload" :disabled="!snmp2DataLength" class="right blue f14">取消添加</Button>
                            <Button type="primary" @click="confirmUpload" :disabled="!snmp2DataLength" class="btn-search right f14">确定添加</Button>
                        </h4>
                    </div>
                    <div class="tableContent">
                        <Table width="auto" stripe border :columns="columns3" :data="snmp3Data" style="margin-top: 10px"></Table>
                    </div>
                </div>
            </Tab-pane>
        </Tabs>
        <!--上传-->
        <Modal v-model="dialog.upload" :mask-closable="false" title="文件上传">
            <div class="clearfix uploadModalContent">
                <span class="x-label">上传文件：</span>
                <span class="x-input">{{uploadData.name}}</span>
                <span class="x-button">
                    <Upload action="//jsonplaceholder.typicode.com/posts/" :format="['xlsx']" :on-format-error="handleFormatError" :on-success="uploadSuccess" :show-upload-list="false">
                        <Button type="primary">上传文件</Button>
                    </Upload>
                </span>
            </div>
            <p style="width: 80%; margin: 0 auto">
                注意： 请务必使用正确的设备／端口批量导入文件模版，不匹配的模版将导致批量添加操作失败。
            </p>
            <div slot="footer">
                <Button type="primary" @click="success" :disabled="uploadLoad">确定</Button>
                <Button type="ghost" @click="close">取消</Button>
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
</style>
<script type="text/ecmascript-6">
    import {showDataSelection,snmp2tables,snmp3tables} from '../../../static/data'
    export default{
        data() {
            return {
                selectionList: showDataSelection.dataList,
                uploadData: {
                    name: '',
                    state: ''
                },
                dialog:{
                    success: false,
                    waitting: false,
                    error: false,
                    upload: false
                },
                snmp2Data:[],
                columns2:snmp2tables.columns,
                snmp3Data: [],
                columns3:snmp3tables.columns,
                defaultData:{
                    data: {
                        value: 'all',
                        label: '全国数据'
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
            checkData(value) {      //切换数据来源

            },
            handleFormatError (file) {      //上传格式校验
                this.$Notice.warning({
                    title: '文件格式不正确',
                    desc: '文件 ' + file.name + ' 格式不正确，请上传 xlsx 文件 。'
                });
            },
            uploadSuccess(response, file, fileList) {       //上传成功回传
                //请求
                this.uploadData.name = file.name;
                this.uploadData.state = 1;
            },
            success() {                     //点击上传对话框
                this.dialog.upload = false;
                this.uploadData.name = '';
                this.uploadData.state = 0;
                this.snmp2Data = snmp2tables.snmp2;
            },
            cancelUpload() {
                this.snmp2Data = [];
            },
            confirmUpload() {

            },
            error() {
                this.dialog.waitting = false;
                this.$Modal.error({
                    content: '<div class="mt_15"><p>信息验证失败！</p><p>请您确认失败原因，修改错误信息后重新上传</p></div>',
                    okText: '我知道了',
                    onOk: () => {
                        this.$set(this.snmpError,'snpmErrData',snpmErrData)
                    },
                });
            },
            loading () {
                const msg = this.$Message.loading('正在加载中...', 0);
                setTimeout(msg, 1500);
            },
            close() {

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
            }
        }
    }
</script>

<!--this.$Modal.info({
content: '<div class="mt_15"><p>信息保存成功！</p><p>请前往 设备信息列表 中查看</p></div>',
});-->
