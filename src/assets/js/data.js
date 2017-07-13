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
            value: '全国',
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
            value: '全部',
            label: '全部'
        },
        {
            value: 1,
            label: '省网设备'
        },
        {
            value: 2,
            label: '城网设备'
        },
        {
            value: 3,
            label: 'IDC核心设备'
        },
        {
            value: 4,
            label: 'IDC汇聚设备'
        },
        {
            value: 5,
            label: 'IDC接入设备'
        },
        {
            value: 6,
            label: 'Cache/CDN设备'
        },
        {
            value: 7,
            label: 'PB设备-省网核心'
        },
        {
            value: 8,
            label: 'PC设备-省网汇入'
        }
    ],
    SMNPList: [
        {
            value: '全部',
            label: '全部'
        },
        {
            value: 1,
            label: 'v1'
        },
        {
            value: 2,
            label: 'V2C'
        },
        {
            value: 3,
            label: 'V3'
        }
    ],
    portList: [
        {
            value: '全部',
            label: '全部'
        }
    ],
    portType:[
        {
            label: '全部',
            value: '全部'
        },
        {
            label: '上联',
            value: 1
        },
        {
            label: '下联',
            value: 2
        },
        {
            label: '级联',
            value: 3
        },
        {
            label: '其他',
            value: 4
        }
    ],
    serviceList: [
        {
            label: '全部',
            value: '全部'
        },
        {
            label: '集团出口',
            value: 2
        },
        {
            label: '他省直连',
            value: 3
        },
        {
            label: '三方出口',
            value: 4
        },
        {
            label: 'IDC',
            value: 5
        },
        {
            label: '统建CDN-IDC',
            value: 6
        },
        {
            label: '统建CDN-省网',
            value: 7
        },
        {
            label: '统建CDN-地市',
            value: 8
        },
        {
            label: '省建Cache',
            value: 9
        },
        {
            label: '第三方CDN',
            value: 10
        },
        {
            label: '手机用户',
            value: 11
        },
        {
            label: '固网用户',
            value: 12
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
            title: '设备ID',
            key: 'id',
            width:100
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
            key: 'type',
            width: 200,
            render(r,c,i){
                let text = '';
                if(r.type==null){
                    text = '';
                }
                return text;
            }
        },
        {
            title: 'SNMP版本',
            key: 'snmpVersion',
            width: 140,
            render (row, column, index) {
                const text = row.snmpVersion ? '有':'无';
                return `${text}`;
            }
        },
        {
            title: 'SNMP端口',
            key: 'snmpPort',
            width: 140,
        },
        {
            title: 'SNMP团体字',
            key: 'snmpCommunity',
            width: 200
        },
        {
            title: 'SNMPv3安全名称',
            key: 'snmpv3Securityname',
            width: 200
        },
        {
            title: 'SNMPv3安全级别',
            key: 'snmpv3Securitylevel',
            width: 200,
        },
        {
            title: 'SNMPv3认证协议',
            key: 'snmpv3Authprotocol',
            width: 200
        },
        {
            title: 'SNMPv3认证口令',
            key: 'snmpv3Authpassphrase',
            width: 200
        },
        {
            title: 'SNMPv3加密协议',
            key: 'snmpv3Privprotocol',
            width: 200
        },
        {
            title: 'SNMPv3私有密钥',
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
        {
            title: '上传时间',
            key: 'createTimeView',
            width: 200
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
            title: '端口ID',
            key: 'id',
            width:100
        },
        {
            title: '设备ID',
            key: 'deviceid',
            width:100
        },
        {
            align: 'center',
            title: '省份',
            key:'province',
            width: 100
        },
        {
            title: '设备名称',
            key: 'devicesName',
            width: 200
        },
        {
            title: '设备IP',
            key: 'devicesIp',
            width: 200
        },
        {
            title: '端口名称',
            key: 'name',
            width: 250
        },
        {
            title: '端口类型',
            key: 'type',
            width: 200,
        },
        {
            title: '业务大类',
            key: 'service1View',
            width: 200,
        },
        {
            title: '业务小类',
            key: 'service2View',
            width: 200
        },
        {
            title: '对端设备',
            key: 'peerDevice',
            width: 200
        },
        {
            title: '端口状态',
            key: 'status',
            width: 200,
            render (row, column, index) {
                const text = row.deviceState == 0 ? '导入未采集':'导入已采集';
                return `${text}`;
            }
        },
        {
            title: '上传时间',
            key: 'createTimeView',
            align: 'center',
            width: 200
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
            width: 200,
            render(row, column, index){
                const text = row.check == '正常无错误'? `<p class="sure">${row.check}</p>`: `<p class="wrong">${row.check}</p>`
                return `${text}`
            }
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
            width: 200
        },
        {
            title: 'snmp版本',
            key: 'snmpVersion',
            align: 'center',
            width: 200,
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
            width: 200,
            render(row, column, index){
                const text = row.check == '正常无错误'? `<p class="sure">${row.check}</p>`: `<p class="wrong">${row.check}</p>`
                return `${text}`
            }
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
        },
        {
            title: 'snmp版本',
            key: 'snmpVersion',
            width: 200,
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
            width: 200,
            render(row, column, index){
                const text = row.check == '正常无错误'? `<p class="sure">${row.check}</p>`: `<p class="wrong">${row.check}</p>`
                return `${text}`
            }
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
        },
        {
            title: '业务大类',
            key: 'service',
            width: 200,
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
            title: '备注',
            key: 'description',
            width: 200
        },
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
            key: 'name'
        },
        {
            title: '设备IP',
            key: 'ipAddr'
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
}

export const BASEURL = '/demoms'  //路径
export const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
}
export const download = {
    headers: {
        'Content-Type': 'application/json',
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
//地图数据
export const mapList = {
    data : [
        {
            title: '国际公司流量分析专题',
            img: 'img-view-1',
            createTime: '2017-06-30 13：00',
            id: '1'
        },
        /*{
            title: '全网统建CDN、IDC、统建Cache、省建Cache、省建OTT业务流量分析日报',
            img: 'img-view-2',
            createTime: '2017-06-20 13：00',
            id: '2'
        }*/
    ]
}
//图表详情数据
export const echartData = {
    //统建CDN业务分析数据
    data1:[]
}