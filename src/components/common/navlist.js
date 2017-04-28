/**
 * Created by syzx9801@163.com on 2017/4/28.
 */
export const navlist = {
    user: [
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
                    tag: '用户数据',
                    route: 'showUserData'
                },
                {
                    tag: '自发创意',
                    route: 'showSelfIdea'
                },
                {
                    tag: '众筹数据',
                    route: 'showRaiseData'
                },
                {
                    tag: '应用单位',
                    route: 'showAppUnit'
                }
            ]
        },
        {
            tag: 'WEB内容发布',
            id: 'm75',
            route: 'dataview',
            content: [
                {
                    tag: 'Banner管理',
                    route: 'showWebBanner'
                },
                {
                    tag: '资讯管理',
                    route: 'newsShow'
                }
            ]
        },
        {
            tag: 'APP内容发布',
            id: 'm78',
            content: [
                {
                    tag: 'Banner管理',
                    route: 'showAdvertising'
                }
            ]
        },
        {
            tag: '用户管理',
            id: 'm80',
            content: [
                {
                    tag: '群发列表',
                    route: 'batchMsgList'
                }
            ]
        },
        {
            tag: '项目审批',
            id: 'm82',
            content: [
                {
                    tag: '自发式创意审批',
                    route: 'showProject'
                }
            ]
        },
        {
            tag: '评审管理',
            id: 'm84',
            content: [
                {
                    tag: '评审专家管理',
                    route: 'showReviewMan'
                },
                {
                    tag: '入孵线上评审',
                    route: 'selectReviewAll'
                },
                {
                    tag: '创新出孵评审',
                    route: 'innovateReviewList'
                },
                {
                    tag: '创业出孵评审',
                    route: 'reviewList'
                }
            ]
        },
        {
            tag: '命题管理',
            id: 'm87',
            content: [
                {
                    tag: '小命题管理',
                    route: 'showSmallRequirement'
                },
                {
                    tag: '大命题管理',
                    route: 'bigRequirement'
                },
                {
                    tag: '推广式大命题管理',
                    route: 'extendReqList'
                }
            ]
        },
        {
            tag: '资源管理',
            id: 'm91',
            content: [
                {
                    tag: '资源申请',
                    route: 'resourceList'
                }
            ]
        },
        {
            tag: '孵化管理',
            id: 'm93',
            content: [
                {
                    tag: '出孵管理',
                    route: 'hatchedList'
                }
            ]
        }
    ]
}