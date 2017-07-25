<template>
    <div>
        <Table border :columns="columns5" :data="data5"></Table>
    </div>
</template>
<style lang="less">

</style>
<script type="text/ecmascript-6">
    import {datahistorytables} from '../../assets/js/data'
    export default {
        data () {
            return {
                columns5: [
                    {
                        title: '数据名称',
                        key: 'dataName',
                        align: 'center',
                        width:400
                    },
                    {
                        title: '更新时间',
                        key: 'upadateTimeView',
                        align: 'center',
                    },
                    {
                        title: '数据下载',
                        key: 'download',
                        align: 'center',
                        width:100,
                        render:(fc,obj)=>{
                            return fc('a',{
                                attrs:{
                                    'href': 'https://segmentfault.com/a/1190000010121051/'
                                },
                                class:['text','fl'],
                                style:{
                                    marginLeft:'10px'
                                },
                                on:{
                                    click:()=>{
                                        this.con(obj.row.id)
                                    }
                                }
                            },'立即下载')
                        }

                    }
                ],
                data5: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        date: '2016-10-03'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗',
                        date: '2016-10-01'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道',
                        date: '2016-10-02'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道',
                        date: '2016-10-04'
                    }
                ]
            }
        },
        methods:{
            con(type){
                console.log(type)
            },
            detail(type){
                console.log(type)
            }
        }
    }
</script>
