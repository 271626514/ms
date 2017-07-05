/**
 * Created by syzx9801@163.com on 2017/4/26.
 */
//前台展现数据
export const showDataSelection = {
    dataList:[
        {
            value: 'all',
            label: '全国数据'
        },
        {
            value: 'hy',
            label: '中移杭州信息技术有限公司'
        },
        {
            value: 'zhejiang',
            label: '浙江省移动公司'
        }
    ],
    dataTypeList: [
        {
            value:'all',
            label: '全部数据'
        },
        {
            value: 'user',
            label: '用户数据'
        },
        {
            value: 'show',
            label: '数据总览'
        }
    ],
    dataProvenceList:[
        {
            value: 'all',
            label: '全国'
        },
        {
            value: 'zhejiang',
            label: '浙江'
        },
        {
            value: 'beijing',
            label: '北京'
        },
        {
            value: 'shanghai',
            label: '上海'
        }
    ],
    deviceTypeList: [
        {
            value: 'all',
            label: '全部'
        },
        {
            value: 'provenceDevice',
            label: '省网设备'
        },
        {
            value: 'cityDevice',
            label: '城网设备'
        },
        {
            value: 'IDCCoreDevice',
            label: 'IDC核心设备'
        },
        {
            value: 'IDCToDevice',
            label: 'IDC汇聚设备'
        },
        {
            value: 'IDCNetDevice',
            label: 'IDC接入设备'
        },
        {
            value: 'CDNDevice',
            label: 'Cache/CDN设备'
        },
        {
            value: 'PBDevice',
            label: 'PB设备-省网核心'
        },
        {
            value: 'PCDevice',
            label: 'PC设备-省网汇入'
        }
    ],
    SMNPList: [
        {
            value: 'all',
            label: '全部'
        },
        {
            value: 'V1',
            label: 'V1'
        },
        {
            value: 'V2C',
            label: 'V2C'
        },
        {
            value: 'V3',
            label: 'V3'
        }
    ],
    portList: [
        {
            value: 'all',
            label: '全部'
        },
        {
            value: 'V1',
            label: 'V1'
        },
        {
            value: 'V2C',
            label: 'V2C'
        },
        {
            value: 'V3',
            label: 'V3'
        }
    ],
    portType:[
        {
            label: '全部',
            value: 'all'
        },
        {
            label: '上联',
            value: 'top'
        },
        {
            label: '下联',
            value: 'bottom'
        },
        {
            label: '级联',
            value: 'concat'
        },
        {
            label: '其他',
            value: 'other'
        }
    ],
    serviceList: [
        {
            label: '全部',
            value: 'all'
        },
        {
            label: '集团出口',
            value: '集团出口'
        },
        {
            label: '他省直连',
            value: '他省直连'
        },
        {
            label: '三方出口',
            value: '三方出口'
        },
        {
            label: 'IDC',
            value: 'IDC'
        },
        {
            label: '统建CDN-IDC',
            value: '统建CDN-IDC'
        },
        {
            label: '统建CDN-省网',
            value: '统建CDN-省网'
        },
        {
            label: '统建CDN-地市',
            value: '统建CDN-地市'
        },
        {
            label: '省建Cache',
            value: '省建Cache'
        },
        {
            label: '第三方CDN',
            value: '第三方CDN'
        },
        {
            label: '手机用户',
            value: '手机用户'
        },
        {
            label: '固网用户',
            value: '固网用户'
        }
    ],
    logTypeList: [
        {
            label: '全部',
            value: 'all'
        },
        {
            label: '新增设备',
            value: 'add'
        },
        {
            label: '修改设备',
            value: 'modify'
        },
        {
            label: '删除设备',
            value: 'delete'
        }
    ],
    sourceList: [
        {
            label: '全部来源',
            value: 'all'
        },
        {
            label: '用户操作',
            value: 'user'
        },
        {
            label: '后台同步',
            value: 'computer'
        }
    ],
    resultList: [
        {
            label: '全部',
            value: 'all'
        },
        {
            label: '成功',
            value: 'success'
        },
        {
            label: '失败',
            value: 'faild'
        },
        {
            label: '异常',
            value: 'error'
        },
    ]
}
export const showDataList = {
    deviceList: [
        {
            title:'已导入数据',
            yesterday: '10355',
            all: '33546'
        }
    ],
    portList: [
        {
            title:'已导入数据',
            yesterday: '10355',
            all: '33546'
        }
    ],
    dataUsageList: [
        {
            title:'已导入数据',
            yesterday: '10355',
            all: '33546'
        }
    ]
}
export const devicetables = {
    columns: [
        {
            type: 'selection',
            fixed: 'left',
            width: 50
        },
        {
            title: '省份',
            key: 'province',
            width: 75
        },
        {
            title: '设备名称',
            key: 'name',
            width: 185
        },
        {
            title: '设备IP',
            key: 'ipAddr',
            width: 180
        },
        {
            title: '所属机房',
            key: 'room',
            width: 280
        },
        {
            title: '设备类型',
            key: 'deviceType',
            width: 200
        },
        {
            title: '上传时间',
            key: 'createTime',
            width: 200
        },
        {
            title: 'snmp版本',
            key: 'snmpVersion',
            width: 140,
            render (row, column, index) {
                const text = row.snmpVersion ? '有':'无';
                return `${text}`;
            }
        },
        {
            title: 'snmp端口',
            key: 'snmpPort',
            width: 140
        },
        {
            title: 'snmp团体字',
            key: 'snmpCommunity',
            width: 200
        },
        {
            title: 'snmpv3配置用户名',
            key: 'snmpv3Securityname',
            width: 200
        },
        {
            title: 'snmpv3安全级别',
            key: 'snmpv3Securitylevel',
            width: 200,
            render (row, column, index) {
                let text = '';
                switch (row.snmpv3Securitylevel) {
                    case 0:
                        text = `低级`;
                        break;
                    case 1:
                        text = `中级`;
                        break;
                    case 2:
                        text = `高级`;
                        break;
                    default:
                        text = `无安全级别`;
                }
                return `${text}`;
            }
        },
        {
            title: 'snmpv3验证字符串',
            key: 'snmpv3Authpassphrase',
            width: 200
        },
        {
            title: 'snmpv3验证协议',
            key: 'snmpv3Authprotocol',
            width: 200
        },
        {
            title: 'snmpv3私有加密协议',
            key: 'snmpv3Privprotocol',
            width: 200
        },
        {
            title: 'snmpv3私有加密字符串',
            key: 'snmpv3Privpassphrase',
            width: 200
        },
        {
            title: '设备状态',
            key: 'status',
            width: 200,
            render (row, column, index) {
                const text = row.status ? '导入已采集':'导入未采集';
                return `${text}`;
            }
        },
        {
            title: '备注',
            key: 'description',
            width:200
        },
    ],
    deviceData: [
        {
            "beginTime":null,
            "endTime":null,
            "id":1,
            "name":"HESJ-PC-IDC-SW01-S9312",
            "province":"??",
            "room":null,
            "type":null,
            "ipAddr":"111.11.25.9",
            "snmpVersion":false,
            "snmpPort":"161",
            "snmpCommunity":"HBnmc311",
            "snmpv3Securityname":"null",
            "snmpv3Securitylevel":0,
            "snmpv3Authpassphrase":"null",
            "snmpv3Privpassphrase":"null",
            "snmpv3Authprotocol":0,
            "snmpv3Privprotocol":0,
            "zbHostid":10393,
            "status":true,
            "createTime":1459440000,
            "lastmodifiedTime":1459440000
        },
        {
            "uploadDate": "2017-03-29 18:39:52",
            "deviceName": "服务器",
            "IP": "192.168.0.131",
            "labs": "杭研海创园3#",
            "deviceType": "PB设备－省网接入层",
            "snmpVersion": "XML-1515",
            "snmpPort": "8080",
            "snmpRaid": "5BB3CDN",
            "snmpv3Name": "root",
            "snmpv3SaveLevel": "AAA",
            "snmpv3Code": "EUurie@804k",
            "snmpv3Protocol": "https",
            "snmpv3Encryp": "ftp",
            "snmpv3EncrypCode": "4297f44b13955235245b2497399d7a93",
            "deviceState": "0"
        },
        {
            "uploadDate": "2017-03-29 18:39:52",
            "deviceName": "服务器",
            "IP": "192.168.0.131",
            "labs": "杭研海创园3#",
            "deviceType": "城域网设备",
            "snmpVersion": "XML-1515",
            "snmpPort": "8080",
            "snmpRaid": "5BB3CDN",
            "snmpv3Name": "root",
            "snmpv3SaveLevel": "AAA",
            "snmpv3Code": "EUurie@804k",
            "snmpv3Protocol": "https",
            "snmpv3Encryp": "ftp",
            "snmpv3EncrypCode": "4297f44b13955235245b2497399d7a93",
            "deviceState": "0"
        },
        {
            "uploadDate": "2017-03-29 18:39:52",
            "deviceName": "服务器",
            "IP": "192.168.0.131",
            "labs": "杭研海创园3#",
            "deviceType": "centos 6.5",
            "snmpVersion": "XML-1515",
            "snmpPort": "8080",
            "snmpRaid": "5BB3CDN",
            "snmpv3Name": "root",
            "snmpv3SaveLevel": "AAA",
            "snmpv3Code": "EUurie@804k",
            "snmpv3Protocol": "https",
            "snmpv3Encryp": "ftp",
            "snmpv3EncrypCode": "4297f44b13955235245b2497399d7a93",
            "deviceState": "0"
        },
        {
            "uploadDate": "2017-03-29 18:39:52",
            "deviceName": "服务器",
            "IP": "192.168.0.131",
            "labs": "杭研海创园3#",
            "deviceType": "centos 7.1",
            "snmpVersion": "XML-1515",
            "snmpPort": "8080",
            "snmpRaid": "5BB3CDN",
            "snmpv3Name": "root",
            "snmpv3SaveLevel": "AAA",
            "snmpv3Code": "EUurie@804k",
            "snmpv3Protocol": "https",
            "snmpv3Encryp": "ftp",
            "snmpv3EncrypCode": "4297f44b13955235245b2497399d7a93",
            "deviceState": "0"
        },
        {
            "uploadDate": "2017-03-29 18:39:52",
            "deviceName": "服务器",
            "IP": "192.168.0.131",
            "labs": "杭研海创园3#",
            "deviceType": "window xp",
            "snmpVersion": "XML-1515",
            "snmpPort": "8080",
            "snmpRaid": "5BB3CDN",
            "snmpv3Name": "root",
            "snmpv3SaveLevel": "AAA",
            "snmpv3Code": "EUurie@804k",
            "snmpv3Protocol": "https",
            "snmpv3Encryp": "ftp",
            "snmpv3EncrypCode": "4297f44b13955235245b2497399d7a93",
            "deviceState": "0"
        }
    ]
}
export const porttables = {
    columns: [
        {
            type: 'selection',
            align: 'center',
            fixed: 'left',
            width: 100
        },
        {
            align: 'center',
            title: '省份',
            width: 100
        },
        {
            title: '设备名称',
            key: 'deviceName',
            width: 200
        },
        {
            title: '设备IP',
            key: 'IP',
            width: 200
        },
        {
            title: '端口名称',
            key: 'portName',
            width: 250
        },
        {
            title: '端口类型',
            key: 'portType',
            width: 200,
            filters: [
                {
                    label: '上联',
                    value: '上联'
                },
                {
                    label: '下联',
                    value: '下联'
                },
                {
                    label: '级联',
                    value: '级联'
                },
                {
                    label: '其他',
                    value: '其他'
                }
            ],
            filterMethod (value, row) {
                return row.deviceType.indexOf(value) > -1;
            }
        },
        {
            title: '上传时间',
            key: 'uploadDate',
            align: 'center',
            width: 200
        },
        {
            title: '业务大类',
            key: 'service',
            width: 200,
            filters: [
                {
                    label: '集团出口',
                    value: '集团出口'
                },
                {
                    label: '他省直连',
                    value: '他省直连'
                },
                {
                    label: '三方出口',
                    value: '三方出口'
                },
                {
                    label: 'IDC',
                    value: 'IDC'
                },
                {
                    label: '统建CDN-IDC',
                    value: '统建CDN-IDC'
                },
                {
                    label: '统建CDN-省网',
                    value: '统建CDN-省网'
                },
                {
                    label: '统建CDN-地市',
                    value: '统建CDN-地市'
                },
                {
                    label: '省建Cache',
                    value: '省建Cache'
                },
                {
                    label: '第三方CDN',
                    value: '第三方CDN'
                },
                {
                    label: '手机用户',
                    value: '手机用户'
                },
                {
                    label: '固网用户',
                    value: '固网用户'
                }
            ],
            filterMethod (value, row) {
                return row.snmpVersion.indexOf(value) > -1;
            }
        },
        {
            title: '业务小类',
            key: 'serviceSuper',
            width: 200
        },
        {
            title: '对端设备',
            key: 'snmpRaid',
            width: 200
        },
        {
            title: '端口状态',
            key: 'portState',
            width: 200,
            render (row, column, index) {
                const text = row.deviceState == 0 ? '导入未采集':'导入已采集';
                return `${text}`;
            }
        },
        {
            title: '备注',
            key: 'description',
            width: 200
        },
    ],
    deviceData: [
        {
            "uploadDate": "2017-03-29 18:39:52",
            "deviceName": "服务器",
            "IP": "192.168.0.131",
            "labs": "杭研海创园3#",
            "deviceType": "城域网设备",
            "snmpVersion": "XML-1515",
            "snmpPort": "8080",
            "snmpRaid": "5BB3CDN",
            "snmpv3Name": "root",
            "snmpv3SaveLevel": "AAA",
            "snmpv3Code": "EUurie@804k",
            "snmpv3Protocol": "https",
            "snmpv3Encryp": "ftp",
            "snmpv3EncrypCode": "4297f44b13955235245b2497399d7a93",
            "deviceState": "0"
        },
        {
            "uploadDate": "2017-03-29 18:39:52",
            "deviceName": "服务器",
            "IP": "192.168.0.131",
            "labs": "杭研海创园3#",
            "deviceType": "城域网设备",
            "snmpVersion": "XML-1515",
            "snmpPort": "8080",
            "snmpRaid": "5BB3CDN",
            "snmpv3Name": "root",
            "snmpv3SaveLevel": "AAA",
            "snmpv3Code": "EUurie@804k",
            "snmpv3Protocol": "https",
            "snmpv3Encryp": "ftp",
            "snmpv3EncrypCode": "4297f44b13955235245b2497399d7a93",
            "deviceState": "0"
        },
        {
            "uploadDate": "2017-03-29 18:39:52",
            "deviceName": "服务器",
            "IP": "192.168.0.131",
            "labs": "杭研海创园3#",
            "deviceType": "centos 6.5",
            "snmpVersion": "XML-1515",
            "snmpPort": "8080",
            "snmpRaid": "5BB3CDN",
            "snmpv3Name": "root",
            "snmpv3SaveLevel": "AAA",
            "snmpv3Code": "EUurie@804k",
            "snmpv3Protocol": "https",
            "snmpv3Encryp": "ftp",
            "snmpv3EncrypCode": "4297f44b13955235245b2497399d7a93",
            "deviceState": "0"
        },
        {
            "uploadDate": "2017-03-29 18:39:52",
            "deviceName": "服务器",
            "IP": "192.168.0.131",
            "labs": "杭研海创园3#",
            "deviceType": "centos 7.1",
            "snmpVersion": "XML-1515",
            "snmpPort": "8080",
            "snmpRaid": "5BB3CDN",
            "snmpv3Name": "root",
            "snmpv3SaveLevel": "AAA",
            "snmpv3Code": "EUurie@804k",
            "snmpv3Protocol": "https",
            "snmpv3Encryp": "ftp",
            "snmpv3EncrypCode": "4297f44b13955235245b2497399d7a93",
            "deviceState": "0"
        },
        {
            "uploadDate": "2017-03-29 18:39:52",
            "deviceName": "服务器",
            "IP": "192.168.0.131",
            "labs": "杭研海创园3#",
            "deviceType": "window xp",
            "snmpVersion": "XML-1515",
            "snmpPort": "8080",
            "snmpRaid": "5BB3CDN",
            "snmpv3Name": "root",
            "snmpv3SaveLevel": "AAA",
            "snmpv3Code": "EUurie@804k",
            "snmpv3Protocol": "https",
            "snmpv3Encryp": "ftp",
            "snmpv3EncrypCode": "4297f44b13955235245b2497399d7a93",
            "deviceState": "0"
        }
    ]
}
export const snmp2tables = {
    columns: [
        {
            type: 'index',
            align: 'center',
            title: '序号',
            fixed: 'left',
            width: 100
        },
        {
            title: '校验',
            align: 'center',
            key: 'check',
            width: 200
        },
        {
            title: '设备状态',
            align: 'center',
            key: 'deviceState',
            width: 100
        },
        {
            title: '省份',
            align: 'center',
            key: 'province',
            width: 100
        },
        {
            title: '设备名称',
            key: 'deviceName',
            align: 'center',
            width: 200
        },
        {
            title: '设备IP',
            key: 'IP',
            align: 'center',
            width: 200
        },
        {
            title: '所属机房',
            key: 'labs',
            align: 'center',
            width: 250
        },
        {
            title: '设备类型',
            key: 'deviceType',
            align: 'center',
            width: 200,
            /*filters: [
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
            }*/
        },
        {
            title: 'snmp版本',
            key: 'snmpVersion',
            align: 'center',
            width: 200,
            /*filters: [
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
            }*/
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
        }
    ],
    snmp2: [
        {
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
            "deviceName": "服务器",
            "IP": "192.168.0.131",
            "labs": "杭研海创园3#",
            "deviceType": "centos 7.1",
            "snmpVersion": "XML-1515",
            "snmpPort": "8080",
            "snmpRaid": "5BB3CDN"
        },
        {
            "deviceName": "服务器",
            "IP": "192.168.0.131",
            "labs": "杭研海创园3#",
            "deviceType": "window xp",
            "snmpVersion": "XML-1515",
            "snmpPort": "8080",
            "snmpRaid": "5BB3CDN"
        }
    ]
}
export const snmp3tables = {
    columns: [
        {
            type: 'index',
            align: 'center',
            title: '序号',
            fixed: 'left',
            width: 100
        },
        {
            title: '校验',
            align: 'center',
            key: 'check',
            width: 200
        },
        {
            title: '设备状态',
            align: 'center',
            key: 'deviceState',
            width: 100
        },
        {
            title: '省份',
            align: 'center',
            key: 'province',
            width: 100
        },
        {
            title: '设备名称',
            key: 'deviceName',
            width: 200
        },
        {
            title: '设备IP',
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
            /*filters: [
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
            }*/
        },
        {
            title: 'snmp版本',
            key: 'snmpVersion',
            width: 200,
            /*filters: [
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
            }*/
        },
        {
            title: 'SNMPv3安全名称',
            key: 'snmpSaveName',
            width: 200
        },
        {
            title: 'SNMPv3安全级别',
            key: 'snmpv3SaveLevel',
            width: 200
        },
        {
            title: 'SNMPv3认证协议',
            key: 'snmpv3Protocol',
            width: 200
        },
        {
            title: 'SNMPv3认证口令',
            key: 'snmpv3Command',
            width: 200
        },
        {
            title: 'SNMPv3加密协议',
            key: 'snmpv3Encryp',
            width: 200
        },
        {
            title: 'SNMPv3私有密钥',
            key: 'snmpv3EncrypCode',
            width: 200
        },
        {
            title: '备注',
            key: 'description',
            width: 200
        }
    ],
    snmp3: [
        {
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
            "deviceName": "服务器",
            "IP": "192.168.0.131",
            "labs": "杭研海创园3#",
            "deviceType": "centos 7.1",
            "snmpVersion": "XML-1515",
            "snmpPort": "8080",
            "snmpRaid": "5BB3CDN"
        },
        {
            "deviceName": "服务器",
            "IP": "192.168.0.131",
            "labs": "杭研海创园3#",
            "deviceType": "window xp",
            "snmpVersion": "XML-1515",
            "snmpPort": "8080",
            "snmpRaid": "5BB3CDN"
        }
    ]
}
export const portCheckTables = {
    columns: [
        {
            type: 'index',
            align: 'center',
            title: '序号',
            fixed: 'left',
            width: 100
        },
        {
            title: '校验',
            align: 'center',
            key: 'check',
            width: 200
        },
        {
            title: '端口状态',
            align: 'center',
            key: 'portState',
            width: 100
        },
        {
            align: 'center',
            title: '省份',
            width: 100
        },
        {
            title: '设备名称',
            key: 'deviceName',
            width: 200
        },
        {
            title: '设备IP',
            key: 'IP',
            width: 200
        },
        {
            title: '端口名称',
            key: 'portName',
            width: 250
        },
        {
            title: '端口类型',
            key: 'portType',
            width: 200,
            /*filters: [
                {
                    label: '上联',
                    value: '上联'
                },
                {
                    label: '下联',
                    value: '下联'
                },
                {
                    label: '级联',
                    value: '级联'
                },
                {
                    label: '其他',
                    value: '其他'
                }
            ],*/
            /*filterMethod (value, row) {
                return row.deviceType.indexOf(value) > -1;
            }*/
        },
        {
            title: '业务大类',
            key: 'service',
            width: 200,
            /*filters: [
                {
                    label: '集团出口',
                    value: '集团出口'
                },
                {
                    label: '他省直连',
                    value: '他省直连'
                },
                {
                    label: '三方出口',
                    value: '三方出口'
                },
                {
                    label: 'IDC',
                    value: 'IDC'
                },
                {
                    label: '统建CDN-IDC',
                    value: '统建CDN-IDC'
                },
                {
                    label: '统建CDN-省网',
                    value: '统建CDN-省网'
                },
                {
                    label: '统建CDN-地市',
                    value: '统建CDN-地市'
                },
                {
                    label: '省建Cache',
                    value: '省建Cache'
                },
                {
                    label: '第三方CDN',
                    value: '第三方CDN'
                },
                {
                    label: '手机用户',
                    value: '手机用户'
                },
                {
                    label: '固网用户',
                    value: '固网用户'
                }
            ],
            filterMethod (value, row) {
                return row.snmpVersion.indexOf(value) > -1;
            }*/
        },
        {
            title: '业务小类',
            key: 'serviceSuper',
            width: 200
        },
        {
            title: '对端设备',
            key: 'snmpRaid',
            width: 200
        },
        /*{
            title: '端口状态',
            key: 'portState',
            width: 200,
            render (row, column, index) {
                const text = row.deviceState == 0 ? '导入未采集':'导入已采集';
                return `${text}`;
            }
        },*/
        {
            title: '备注',
            key: 'description',
            width: 200
        },
    ],
    deviceData: [
        {
            "beginTime":null,
            "endTime":null,
            "id":1,
            "name":"HESJ-PC-IDC-SW01-S9312",
            "province":"??",
            "room":null,
            "type":null,
            "ipAddr":"111.11.25.9",
            "snmpVersion":true,
            "snmpPort":"161",
            "snmpCommunity":"HBnmc311",
            "snmpv3Securityname":"null",
            "snmpv3Securitylevel":0,
            "snmpv3Authpassphrase":"null",
            "snmpv3Privpassphrase":"null",
            "snmpv3Authprotocol":0,
            "snmpv3Privprotocol":0,
            "zbHostid":10393,
            "status":true,
            "createTime":1459440000,
            "lastmodifiedTime":1459440000
        },
        {
            "uploadDate": "2017-03-29 18:39:52",
            "deviceName": "服务器",
            "IP": "192.168.0.131",
            "labs": "杭研海创园3#",
            "deviceType": "城域网设备",
            "snmpVersion": "XML-1515",
            "snmpPort": "8080",
            "snmpRaid": "5BB3CDN",
            "snmpv3Name": "root",
            "snmpv3SaveLevel": "AAA",
            "snmpv3Code": "EUurie@804k",
            "snmpv3Protocol": "https",
            "snmpv3Encryp": "ftp",
            "snmpv3EncrypCode": "4297f44b13955235245b2497399d7a93",
            "deviceState": "0"
        },
        {
            "uploadDate": "2017-03-29 18:39:52",
            "deviceName": "服务器",
            "IP": "192.168.0.131",
            "labs": "杭研海创园3#",
            "deviceType": "centos 6.5",
            "snmpVersion": "XML-1515",
            "snmpPort": "8080",
            "snmpRaid": "5BB3CDN",
            "snmpv3Name": "root",
            "snmpv3SaveLevel": "AAA",
            "snmpv3Code": "EUurie@804k",
            "snmpv3Protocol": "https",
            "snmpv3Encryp": "ftp",
            "snmpv3EncrypCode": "4297f44b13955235245b2497399d7a93",
            "deviceState": "0"
        },
        {
            "uploadDate": "2017-03-29 18:39:52",
            "deviceName": "服务器",
            "IP": "192.168.0.131",
            "labs": "杭研海创园3#",
            "deviceType": "centos 7.1",
            "snmpVersion": "XML-1515",
            "snmpPort": "8080",
            "snmpRaid": "5BB3CDN",
            "snmpv3Name": "root",
            "snmpv3SaveLevel": "AAA",
            "snmpv3Code": "EUurie@804k",
            "snmpv3Protocol": "https",
            "snmpv3Encryp": "ftp",
            "snmpv3EncrypCode": "4297f44b13955235245b2497399d7a93",
            "deviceState": "0"
        },
        {
            "uploadDate": "2017-03-29 18:39:52",
            "deviceName": "服务器",
            "IP": "192.168.0.131",
            "labs": "杭研海创园3#",
            "deviceType": "window xp",
            "snmpVersion": "XML-1515",
            "snmpPort": "8080",
            "snmpRaid": "5BB3CDN",
            "snmpv3Name": "root",
            "snmpv3SaveLevel": "AAA",
            "snmpv3Code": "EUurie@804k",
            "snmpv3Protocol": "https",
            "snmpv3Encryp": "ftp",
            "snmpv3EncrypCode": "4297f44b13955235245b2497399d7a93",
            "deviceState": "0"
        }
    ]
}
export const removeData = {  //设备批量删除
    columns:[       //表头
        {
            title: '省份',
            key: 'province',
            width: 75
        },
        {
            title: '设备名称',
            key: 'deviceName'
        },
        {
            title: '设备IP',
            key: 'IP'
        },
        {
            title: '类型',
            key: 'deviceType'
        }
    ]
}

//管理后台数据
export const userlisttables = {
    columns:[
        {
            type: 'selection',
            align: 'center',
            width: 100
        },
        {
            type: 'index',
            align: 'center',
            title: '序号',
            width: 100
        },
        {
            title: '账户名称',
            key: 'userName',
            align: 'center',
        },
        {
            title: '公司',
            key: 'company',
            align: 'center',
        },
        {
            title: '权限分配',
            key: 'roleName',
            align: 'center',

        },
        {
            title: '状态',
            key: 'state',
            align: 'center',
            width: 170
        },
        {
            title: '最近在线',
            key: 'delayDate',
            align: 'center',
            width: 170,
            render (row,column,index){
                if(row.loginStatus){
                    return `当前在线`
                }else{
                    return `${row.lastTime}`
                }
            }
        },
        {
            title: '操作',
            key: 'action',
            width: 160,
            align: 'center',
            render (row, column, index) {
                return `<a @click="detail(${row.userId})">查看</a> <a style="margin-left: 10px" @click="remove(${row.userId})">修改</a>`;
            }
        }
    ],
    userList:[
        {
            "userId": "3309",
            "roleName": "18867102619",
            "companyName": "杭研",
            "userPermission": "cmcciw用户权限",
            "state": "1",
            "delayDate": "当前在线",
            "addDate": "2017.05.01"
        },
    ],
}
export const roleslisttables = {
    columns:[
        {
            type: 'selection',
            width: 100
        },
        {
            type: 'index',
            title: '序号',
            width: 100
        },
        {
            title: '权限名称',
            key: 'roleName',
            width: 200
        },
        {
            title: '权限详情',
            key: 'roleDesc',
        },
        {
            title: '用户数量',
            key: 'usersCount',
            align: 'center',
            width: 100
        },
        {
            title: '操作',
            key: 'action',
            width: 240,
            align: 'center',
            render (row, column, index) {
                if(row.usersCount<1){
                    return `<a @click="detail(${row.roleId})">查看</a> <a style="margin-left: 10px" @click="edit(${row.roleId})">修改</a> <a style="margin-left: 10px" @click="remove(${row.roleId})">删除</a>`;
                }else{
                    return `<a @click="detail(${row.roleId})">查看</a> <a style="margin-left: 10px" @click="edit(${row.roleId})">修改</a>`
                }
            }
        }
    ],
    roleslist:[
        {
            id: 1,
            roleId: 0,
            roleName: "河南省",
            rolesDetail: "设备管理：河南， 端口管理：河南，数据管理：河南，其他：未选择",
            addDate: '2016.09.12',
            updateDate: '2016.09.18',
            usersCount: 7,
            containUser: [
                {
                    username: 'sijiaqing001',
                    delayDate: '2016.09.13'
                }
            ],
        },
        {
            id:2,
            roleId:1,
            roleName: "高级权限",
            rolesDetail: "设备管理：全国， 端口管理：全国，数据管理：全国，其他：未选择",
            addDate: '2016.09.12',
            updateDate: '2016.09.18',
            usersCount: 0,
            containUser: [],
        }
    ],
}
export const datahistorytables = {
    columns:[
        {
            title: '数据名称',
            key: 'dataName',
            align: 'center',
            width:400
        },
        {
            title: '更新时间',
            key: 'updateDate',
            align: 'center',
        },
        {
            title: '数据下载',
            key: 'downloadData',
            align: 'center',
            width:100,
            render (row, column, index) {
                return `<a>立即下载</a>`;
            }

        }
    ],
    datalist:[
        {
            dataName: "2017年04月01日-2017年04月30日",
            updateDate: "2017年05月01日"
        }
    ],
}
export const customquerytables = {
    columns:[
        {
            title: '查询名称',
            key: 'queryName',
            align: 'center',
            width: 200
        },
        {
            title: 'SQL语句详情',
            key: 'SQLDetail',
            align: 'center',
        },
        {
            title: '创建时间',
            key: 'addDate',
            align: 'center',
            width: 200
        },
        {
            title: '操作',
            key: 'action',
            align: 'center',
            width: 200,
            render (row, column, index) {
                return `<a @click="copythis(${index})">复制</a>`;
            }

        }
    ],
    datalist:[
        {
            queryName: "测试",
            SQLDetail: `select * from project where (projectId ＜= 143 and projectId ＞= 143) or name="＜a href='http://www.baidu.com'＞点我1＜/a＞";`,
            addDate: '2017年05月03日'
        }
    ],
}
export const loglisttables = {
    columns:[
        {
            title: 'ID',
            key: 'Id',
            width: 200
        },
        {
            title: '操作类型',
            key: 'logType',
            width: 100
        },
        {
            title: '来源',
            key: 'source',
            width: 100
        },
        {
            title: '用户姓名',
            key: 'userName',
            width: 200,
        },
        {
            title: '操作详情',
            key: 'actionDetail'
        },
        {
            title: '操作时间',
            key: 'actionDate',
            width: 200
        },
        {
            title: '结果',
            key: 'result',
            width: 100
        }
    ],
    datalist:[
        {
            Id: "18123124121231",
            logType: "add",
            userName: "admin",
            source: "用户操作",
            actionDetail: 'xijianjun4: 修改项目 ID:[8846] 名称:[测试返场]的原始状态:[1300] 当前状态[100]',
            actionDate: '2017-05-03 11:14:12',
            result: 'success'
        }
    ],
}

//用户详情
export const userDetail = {
    username: 'zhejiangyidong001',
    name: '龙傲天',
    password: '123456789a',
    tel: '13146779111',
    email: 'syzx9801@163.com',
    companyName: '中国移动杭州研发公司',
    addDate: '2016.09.12',
    userPermission: '用户组1',
    state: '2',
    delayDate: '2016.09.18'
}

//权限详情
export const rolesObj = {
    rolesName: '管理员',
    addDate: '2016.09.12',
    updateDate: '2016.09.18',
    containUser: [
        {
            username: 'sijiaqing001',
            delayDate: '2016.09.13'
        }
    ]
}

export const BASEURL = '/demoms'  //路径
export const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
}

export const dateOptions = {
    defaultDate:new Date(),
    options: {
        disabledDate (date) {
            return date && date.valueOf() > Date.now();
        }
    },
}
//数据处理
export const defaultSelection = {

}
