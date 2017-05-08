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
            align: 'center',
            fixed: 'left',
            width: 100
        },
        {
            title: '省份',
            key: 'province',
            align: 'center',
            width: 200
        },
        {
            title: '设备名称',
            key: 'deviceName',
            align: 'center',
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
            title: '上传时间',
            key: 'uploadDate',
            align: 'center',
            width: 200
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
        },
        {
            title: 'snmpv3配置用户名',
            key: 'snmpv3Name',
            width: 200
        },
        {
            title: 'snmpv3安全级别',
            key: 'snmpv3SaveLevel',
            width: 200
        },
        {
            title: 'snmpv3验证字符串',
            key: 'snmpv3Code',
            width: 200
        },
        {
            title: 'snmpv3验证协议',
            key: 'snmpv3Protocol',
            width: 200
        },
        {
            title: 'snmpv3私有加密协议',
            key: 'snmpv3Encryp',
            width: 200
        },
        {
            title: 'snmpv3私有加密字符串',
            key: 'snmpv3EncrypCode',
            width: 200
        },
        {
            title: '设备状态',
            key: 'deviceState',
            width: 200,
            render (row, column, index) {
                const text = row.deviceState == 0 ? '导入未采集':'导入已采集';
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

export const porttables = {
    columns: [
        {
            type: 'selection',
            align: 'center',
            fixed: 'left',
            width: 100
        },
        {
            type: 'index',
            align: 'center',
            title: '序号',
            fixed: 'left',
            width: 100
        },
        {
            title: '上传时间',
            key: 'uploadDate',
            align: 'center',
            width: 200
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
        }
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
export const logtables = {
    columns:[
        {
            title: '日期',
            key: 'dateTime',
            width: 200
        },
        {
            title: '操作',
            key: 'action',
        }
    ],
    logdata:[
        {"dateTime":"2016-10-22 17:00:00","action":"新用户登陆"},
        {"dateTime":"2016-10-22 17:00:00","action":"用户操作数据库"},
        {"dateTime":"2016-10-22 17:00:00","action":"用户修改密码"},
        {"dateTime":"2016-10-22 17:00:00","action":"用户删除了数据"},
        {"dateTime":"2016-10-22 17:00:00","action":"用户操作数据库"},
        {"dateTime":"2016-10-22 17:00:00","action":"用户操作数据库"},
        {"dateTime":"2016-10-22 17:00:00","action":"用户操作数据库"}
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
export const userinfotables = {
    columns:[
        {
            title: '成员用户名',
            key: 'username',
            width: 270
        },{
            title: '用户权限',
            key: 'userPermission',
            width: 270,
            render (row,column,index){
                let text = "";
                if(row.userPermission==0){
                    text = '管理员'
                }else if(row.userPermission==1){
                    text = '地方用户-'+row.label
                }else if(row.userPermission==99){
                    text = ''
                }
                return `${text}`
            }
        },{
            title: '操作',
            key: 'action',
            width: 259,
            align: 'center',
            render (row, column, index) {
                if(row.userPermission==99){
                    return ``
                }else{
                    return `<i-button type="primary" icon="settings" @click="setMember(${index})">权限设置</i-button> <i-button type="error" icon="trash-a" @click="remove(${index})">删除成员</i-button>`;
                }
            }
        }
    ],
    userList:[
        {"username":"13146779142","province":"jiangsu","userPermission":"1","label":"江苏省"},
        {"username":"中国移动杭州研发中心-洪承畴","province":"heilongjiang","userPermission":"1","label":"黑龙江省"},
        {"username":"syzx9801@163.com","userPermission":"0","province":""}
    ],
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
            key: 'username',
            align: 'center',
        },
        {
            title: '公司',
            key: 'companyName',
            align: 'center',
        },
        {
            title: '权限分配',
            key: 'userPermission',
            align: 'center',

        },
        {
            title: '状态',
            key: 'state',
            align: 'center',
            width: 170,
            render (row,column,index){
                let text = "";
                if(row.state==1){
                    text = '已启用'
                }else if(row.state==2){
                    text = '已禁用'
                }else if(row.state==99){
                    text = ''
                }
                return `${text}`
            }
        },
        {
            title: '最近在线',
            key: 'delayDate',
            align: 'center',
            width: 170,
        },
        {
            title: '操作',
            key: 'action',
            width: 160,
            align: 'center',
            render (row, column, index) {
                if(row.userPermission==99){
                    return ``
                }else{
                    return `<a @click="detail(${index})">查看</a> <a style="margin-left: 10px" @click="remove(${index})">修改</a>`;
                }
            }
        }
    ],
    userList:[
        {
            "username": "18867102619",
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
            title: '权限名称',
            key: 'rolesName',
            align: 'center',
        },
        {
            title: '权限详情',
            key: 'rolesDetail',
            align: 'center',
        },
        {
            title: '用户数量',
            key: 'rolesNumber',
            align: 'center',

        },
        {
            title: '操作',
            key: 'action',
            width: 240,
            align: 'center',
            render (row, column, index) {
                if(row.userPermission==99){
                    return ``
                }else{
                    return `<a @click="detail(${index})">查看</a> <a style="margin-left: 10px" @click="remove(${index})">修改</a> <a @click="detail(${index})">删除</a>`;
                }
            }
        }
    ],
    roleslist:[
        {
            rolesName: "河南省",
            rolesDetail: "设备管理：河南， 端口管理：河南，数据管理：河南，其他：未选择",
            rolesNumber: "1"
        },
    ],
}
export const datahistorytables = {
    columns:[
        {
            title: '数据名称',
            key: 'dataName',
            align: 'center',
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
            title: '用户名',
            key: 'userName',
            align: 'center',
            width: 200
        },
        {
            title: 'IP地址',
            key: 'IP',
            align: 'center',
            width: 200
        },
        {
            title: '浏览器',
            key: 'browser',
            align: 'center',
            width: 400
        },
        {
            title: '操作内容',
            key: 'actionDetail',
            align: 'center',

        },
        {
            title: '操作时间',
            key: 'actionDate',
            align: 'center',
            width: 200
        }
    ],
    datalist:[
        {
            userName: "admin",
            IP: `172.23.11.56`,
            browser: 'Mozilla/5.0 （Windows NT 6.3; WOW64） AppleWebKit/537.36 （KHTML, like Gecko） Chrome/45.0.2454.101 Safari/537.36',
            actionDetail: 'xijianjun4: 修改项目 ID:[8846] 名称:[测试返场]的原始状态:[1300] 当前状态[100]',
            actionDate: '2017-05-03 11:14:12'
        }
    ],
}