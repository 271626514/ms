<template>
    <div class=main>
        <Tabs type="card">
            <Tab-pane label="snmp v2 设备">
                <div class="usermanage">
                    <Row>
                        <Col span="2">
                            <Upload action="//jsonplaceholder.typicode.com/posts/" :format="['xlsx']" :on-format-error="handleFormatError" :on-success="uploadSuccess">
                                <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
                            </Upload>
                        </Col>
                        <Col span="2">
                            <a href="#" class="download-text">下载模版</a>
                        </Col>
                    </Row>
                    <div class="snmptabs">
                        <Table width="auto" stripe height="600" border :columns="columns2" :data="snmp2"></Table>
                    </div>
                    <div class="snmptabs" v-if="snmpError.snpmErrData.length">
                        <Table stripe border :columns="snmpError.snpmErrCol" :data="snmpError.snpmErrData"></Table>
                    </div>
                </div>
            </Tab-pane>
            <!--snmp v3 设备区域-->
            <Tab-pane label="snmp v3 设备">
                <div class="usermanage">
                    <Upload action="#" :format="['xlsx']" :on-format-error="handleFormatError">
                        <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
                    </Upload>
                    <div class="snmptabs">
                        <Table width="auto" stripe height="600" border :columns="columns3" :data="snmp3"></Table>
                    </div>
                </div>
            </Tab-pane>
        </Tabs>
        <Modal v-model="dialog.modalalert" width="450" :closable="false">
            <p slot="header" style="color:#f60;text-align:center">
                <Icon type="information-circled"></Icon>
                <span>重要提醒</span>
            </p>
            <div style="text-align:left">
                <p>1、批量添加操作仅支持公网地址设备，私网地址设备信息的填报导入工作请联系集团负责人，联系电话：52686688-1062；</p>
                <p>2、请开通设备SNMP采集权限，总部采集设备地址为117.136.187.8-15、117.136.191.38</p>
            </div>
            <div slot="footer">
                <Button type="info" size="large" long @click="dialog.modalalert=!dialog.modalalert">我知道了</Button>
            </div>
        </Modal>
        <Modal v-model="dialog.waitting" :mask-closable="false" :closable="false">
            <Row style="height:180px">
                <Col span="4" align="center">
                    <i class="demo-spin-icon-load ivu-icon ivu-icon-load-c" style="font-size: 30px; color:#2db7f5;"></i>
                </Col>
                <Col span="12">
                    <p>您的文件提交成功</p>
                    <p>信息正在验证中，请稍后……</p>
                </Col>
            </Row>
            <div slot="footer">
                <Button type="success" @click="success">成功回传</Button>
                <Button type="error" @click="error">失败回传</Button>
            </div>
        </Modal>
    </div>
</template>
<style lang="less">
    .layout-right{
        width: 80%;
    }
    p{
        font-size: 14px;
        margin: 5px 0;
    }
    .ivu-tabs-bar{
        margin-bottom: 0;
    }
    .usermanage{
        padding: 20px;
        border:1px solid #d7dde4;
        border-top:0;
        .user-table{
            margin-top: 20px;
        }
    }
    .label{
        height: 32px;
        line-height: 32px;
    }
    .download-text{
        height: 32px;
        line-height: 32px;
    }
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .mt_15{
        margin-top: -15px;
    }
</style>
<script type="text/ecmascript-6">
    const snpmErrData = [
        {
            "snmperrinfo":"格式不正确",
            "deviceName": "服务器",
            "IP": "192.168.0.131",
            "labs": "杭研海创园3#",
            "deviceType": "城域网设备",
            "snmpVersion": "XML-1515",
            "snmpPort": "8080",
            "snmpRaid": "5BB3CDN"
        },
        {
            "snmperrinfo":"snmp版本太低，建议提升版本",
            "deviceName": "服务器",
            "IP": "192.168.0.131",
            "labs": "杭研海创园3#",
            "deviceType": "城域网设备",
            "snmpVersion": "XML-1515",
            "snmpPort": "8080",
            "snmpRaid": "5BB3CDN"
        },
        {
            "deviceName": "服务器",
            "IP": "192.168.0.131",
            "labs": "杭研海创园3#",
            "deviceType": "centos 6.5",
            "snmpVersion": "XML-1515",
            "snmpPort": "8080",
            "snmpRaid": "5BB3CDN"
        },
        {
            "snmperrinfo":"IP地址不能未192.168.0.0",
            "deviceName": "服务器",
            "IP": "192.168.0.131",
            "labs": "杭研海创园3#",
            "deviceType": "centos 7.1",
            "snmpVersion": "XML-1515",
            "snmpPort": "8080",
            "snmpRaid": "5BB3CDN"
        },
        {
            "snmperrinfo":"snmp端口号错误",
            "deviceName": "服务器",
            "IP": "192.168.0.131",
            "labs": "杭研海创园3#",
            "deviceType": "window xp",
            "snmpVersion": "XML-1515",
            "snmpPort": "8080",
            "snmpRaid": "5BB3CDN"
        }
    ];
    import {snmp2tables,snmp3tables} from '../../../static/data'
    export default{
        data() {
            return {
                dialog:{
                    success: false,
                    waitting: false,
                    modalalert: true,
                    error: false
                },
                snmpError:{
                    snpmErrCol:[
                        {
                        title: '错误信息',
                        key: 'snmperrinfo',
                        width: 300
                    },
                        {
                            type: 'index',
                            align: 'center',
                            title: '序号',
                            fixed: 'left',
                            width: 100
                        },
                        {
                            title: '设备名称',
                            key: 'deviceName',
                            width: 200
                        },
                        {
                            title: 'IP地址',
                            key: 'IP',
                            width: 200
                        },
                        {
                            title: '所属机房',
                            key: 'labs',
                            width: 250
                        },
                        {
                            title: '设备类型',
                            key: 'deviceType',
                            width: 200,
                            filters: [
                                {
                                    label: 'IDC核心设备',
                                    value: 'IDC核心设备'
                                },
                                {
                                    label: 'IDC汇聚设备',
                                    value: 'IDC汇聚设备'
                                },
                                {
                                    label: 'IDC接入设备',
                                    value: 'IDC接入设备'
                                },
                                {
                                    label: 'Cache/CDN设备',
                                    value: 'Cache/CDN设备'
                                },
                                {
                                    label: 'PB设备－省网核心层',
                                    value: 'PB设备－省网核心层'
                                },
                                {
                                    label: 'PB设备－省网汇聚层',
                                    value: 'PB设备－省网汇聚层'
                                },
                                {
                                    label: 'PB设备－省网接入层',
                                    value: 'PB设备－省网接入层'
                                },
                                {
                                    label: 'PB设备－省网业务层',
                                    value: 'PB设备－省网业务层'
                                },
                                {
                                    label: '城域网设备',
                                    value: '城域网设备'
                                }
                            ],
                            filterMethod (value, row) {
                                return row.deviceType.indexOf(value) > -1;
                            }
                        },
                        {
                            title: 'snmp版本',
                            key: 'snmpVersion',
                            width: 200,
                            filters: [
                                {
                                    label: 'V1',
                                    value: 'V1'
                                },
                                {
                                    label: 'V2C',
                                    value: 'V2C'
                                },
                                {
                                    label: 'V3',
                                    value: 'V3'
                                }
                            ],
                            filterMethod (value, row) {
                                return row.snmpVersion.indexOf(value) > -1;
                            }
                        },
                        {
                            title: 'snmp端口',
                            key: 'snmpPort',
                            width: 200
                        },
                        {
                            title: 'snmp团体字',
                            key: 'snmpRaid',
                            width: 200
                        }],
                    snpmErrData:[]
                },
                snmp2:snmp2tables.snmp2,
                columns2:snmp2tables.columns,
                snmp3: snmp3tables.snmp3,
                columns3:snmp3tables.columns
            }
        },
        methods: {
            handleFormatError (file) {
                this.$Notice.warning({
                    title: '文件格式不正确',
                    desc: '文件 ' + file.name + ' 格式不正确，请上传 xlsx 文件 。'
                });
            },
            uploadSuccess(response, file, fileList) {
                //请求
                this.dialog.waitting = true;
            },
            success() {
                this.dialog.waitting = false;
                this.$Modal.info({
                    content: '<div class="mt_15"><p>信息保存成功！</p><p>请前往 设备信息列表 中查看</p></div>'
                });
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
            }
        },
        components: {snmp2tables, snmp3tables}
    }
</script>
