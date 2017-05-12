/**
 * Created by syzx9801@163.com on 2017/4/28.
 */
export const navlist = {
    user: [
        {
            tag: '用户管理',
            id: 'm1',
            route: 'user',
            content: [
                {
                    tag: '用户列表',
                    route: 'usersShow'
                },
                {
                    tag: '权限列表',
                    route: 'rolesShow'
                }
            ]
        },
        {
            tag: '业务数据管理',
            id: 'm4',
            route: 'export',
            content: [
                {
                    tag: '历史数据',
                    route: 'adminHistoryData'
                },
                {
                    tag: '自定义查询',
                    route: 'customQueryList'
                }
            ]
        },
        {
            tag: '系统管理',
            id: 'm7',
            route:'operateLog',
            content: [
                {
                    tag: '日志管理',
                    route: 'showLogList'
                }
            ]
        }
    ],
    data: [
        {
            tag: '数据管理',
            id: 'm69',
            route: 'dataview',
            content: [
                {
                    tag: '数据总览',
                    route: 'showDataSum'
                },
                {
                    tag: '历史数据下载',
                    route: 'download'
                }
            ]
        },
        {
            tag: '设备管理',
            id: 'm87',
            route: 'device',
            content: [
                {
                    tag: '设备列表',
                    route: 'deviceList'
                },
                {
                    tag: '设备导入',
                    route: 'deviceImport'
                },
                /*{
                    tag: '设备同步',
                    route: 'deviceConcat'
                }*/
            ]
        },
        {
            tag: '端口管理',
            id: 'm88',
            route: 'port',
            content: [
                {
                    tag: '端口列表',
                    route: 'portList'
                },
                {
                    tag: '端口导入',
                    route: 'portImport'
                },
                /*{
                 tag: '端口同步',
                 route: 'portConcat'
                 }*/
            ]
        },
    ]
}