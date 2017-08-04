<template>
    <div>
        <div class="module-header">
            <h4>数据图表列表
                <Button type="primary" @click="$router.push('/export/add')" class="btn-search right f14">新建报表</Button>
            </h4>
        </div>
        <span style="font-size: 14px;">分类 :</span>
        <Select v-model="formItem.select" placeholder="请选择" style="width:160px;margin-left: 15px;">
            <Option value="beijing">北京市</Option>
            <Option value="shanghai">上海市</Option>
            <Option value="shenzhen">深圳市</Option>
        </Select>
        <Input v-model="formItem.input" placeholder="按项目名称搜索" style="width: 240px;margin-left: 8px;"></Input>
        <Button type="primary" style="margin-left:20px" @click="handleSubmit()">搜索</Button>
        <Button type="ghost" style="margin-left: 8px" @click="handleReset()">重置</Button>

        <div class="search-result">
            <p class="search-content">已查找到<span>{{page.totalList}}</span>条数据</p>
        </div>
        <div class="tableContent">
            <Table width="auto" stripe border :columns="columns" :data='dataMap' style="margin-top: 10px" ></Table>
            <!--<div class="page" v-if="dataMap">-->
                <!--<Page :total="page.totalList" :page-size="15" ></Page>-->
            <!--</div>-->
        </div>
        <modal :title="this.modal.title" :content="this.modal.content" :dialog="this.modal.dialog"></modal>
    </div>
</template>
<style lang="less">
</style>
<script type="text/ecmascript-6">
    import {dataMapTables} from '../../assets/js/data'
    import modal from '../../components/common/modal.vue'
    export default{
        data(){
            return {
                formItem:{
                    select:'',
                    input:'',
                    id:''
                },
                page:{
                    totalList:''
                },
                dataMap:[],
                modal:{
                    title:'',
                    content:'',
                    dialog:''
                },
                columns:[
                        {
                            type: 'selection',
                            fixed: 'left',
                            width: 50
                        },
                        {
                            title: 'ID',
                            key: 'id',
                            width:100
                        },
                        {
                            title: '标题',
                            key: 'title',
                        },
                        {
                            title: '分类',
                            key: 'classify',
                            width: 150
                        },
                        {
                            title: '发布者',
                            key: 'publisher',
                            width: 150
                        },
                        {
                            title: '发布状态',
                            key: 'publishStatus',
                            width: 150
                        },
                        {
                            title: '发布时间',
                            key: 'publishTime',
                            width: 250
                        },
                        {
                            title: '编辑时间',
                            key: 'updateTime',
                            width: 250
                        },
                        {
                            title: '操作',
                            key: 'operation',
                            width: 150,
                            render: (fc,obj)=>{
                                return fc('div',[fc('a',{
                                    on:{
                                        click:()=>{
                                            this.detail(obj.row.id)
                                        }
                                    }
                                },`查看`),
                                    fc('a',{
                                    style:{
                                        marginLeft: '10px'
                                    },
                                    on:{
                                        click:()=>{
                                            this.edit(obj.row.id)
                                        }
                                    }
                                },`修改`),
                                    fc('a',{
                                    style:{
                                        marginLeft:'10px'
                                    },
                                    on:{
                                        click:()=>{
                                            this.remove(obj.row.id)
                                        }
                                    }
                                },'删除')
                                ])
                            }
                        },
                    ]
            }
        },
        methods:{
            detail(index){
                this.$store.dispatch('setuserrole',index);
                this.$router.push('/export/detail')
            },
            edit(index){
                this.$store.dispatch('setuserrole',index);
                this.$router.push('/export/edit')
            },
            remove(){
                this.modal.dialog++;
                this.modal.title = '删除成功'
            },
            handleReset(){
                this.formItem.select=''
                this.formItem.input=''
            },
            handleSubmit(){
                this.$http.get().then(()=>{

                })
            }
        },
        mounted(){
            this.$http.get('/export/dataPublish').then((res)=>{
                this.dataMap = res.data.dataPublish;
                console.log('succ');
            }).catch(res=>{
                console.log('获取数据发布列表失败'+res)
            })
        },
        components:{
            modal
        }
    }
</script>
