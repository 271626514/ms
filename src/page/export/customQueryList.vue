<template>
    <div>
        <div class="module-header">
            <h4>数据查询</h4>
        </div>
        <div class="module-query">
            <h4 class="f16">新建一个查询</h4>
            <div class="query-item">
                <label>查询名称：</label>
                <Input v-model="query.name" style="width: 300px"></Input>
            </div>
            <div class="query-item">
                <label>检索语句：</label>
                <Input v-model="query.sql" type="textarea" :rows="4" style="width:650px;" placeholder="请输入检索用的SQL语句，仅支持select"></Input>
            </div>
            <div class="query-item">
                <Button type="primary" class="btn-search f16 ml-80" style="width:150px" @click="setSearch('save')" :disabled="btnDefault">保存语句并计算</Button>
                <Button type="primary" class="btn-search f16 ml-10 orange" @click="setSearch('get')" :disabled="btnDefault">立即计算</Button>
            </div>
        </div>
        <div class="module-header f16 mt-20">
            <h4>历史查询</h4>
        </div>
        <div class="tableContent">
            <Table width="auto" stripe height="600" style="margin-top: 10px;" border :columns="columns" :data="data"></Table>
        </div>
        <Modal v-model="dialog.search" :mask-closable="false" title="数据检索" class="userRole" :closable="false">
            <div class="clearfix dialog-body">
                <div class="search-item" v-if="!searchResult">
                    <p >查询名称：{{query.name}}</p>
                    <p class="mt-20">计算完成，请点击下载结果</p>
                </div>
                <Spin fix>
                    <Icon type="load-c" size=30 class="demo-spin-icon-load" v-if="searchResult"></Icon>
                    <div v-if="searchResult">正在检索，请稍后...</div>
                </Spin>
            </div>
            <div slot="footer">
                <Button type="primary" style="width:85px" class="align f14"  @click="download_con" :disabled="searchResult">下载文件</Button>
            </div>
        </Modal>
    </div>
</template>
<style lang="less">
.orange{
    border-color:#ff9e40 !important;
    background-color: #ff9e40 !important;
    &[disabled]{
         border-color:#d7dde4 !important;
         background-color: #f7f7f7 !important;
     }
}
.dialog-body{
    .ivu-spin-fix{
        position: relative;
    }
}
.demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
}
</style>
<script type="text/ecmascript-6">
    import {customquerytables} from '../../assets/js/data'
    export default{
        data(){
            return {
                columns: customquerytables.columns,
                data: customquerytables.datalist,
                dialog: {
                    search: false
                },
                searchResult:true,
                searchUrl: '',
                query:{
                    name: '',
                    sql: ''
                }
            }
        },
        methods:{
            setSearch(type){
                this.dialog.search = true;
                this.$http.post('http://localhost:8080/admin',this.query)
                        .then((res)=>{
                            if(res.code==1){
                                this.searchResult = false;
                                this.searchUrl = res.url;
                            }else if(res.code==2){

                            }
                        })
                        .catch(res=>{
                            this.searchResult = false;
                        })
            },
            copythis(index){
                this.query.sql = this.data[index].SQLDetail;
            },
            download_con(){
                this.dialog.search = false;
                this.$http.get('demo/user').then(res=>{

                }).catch(res=>{
                    console.log(res);
                })
            },
            reset(){        //初始化
                this.searchResult = true;
                this.searchUrl = '';
            }
        },
        computed: {
            btnDefault(){
                if(this.query.name==""||this.query.sql==""){
                    return true;
                }
            }
        },
        watch:{
            'dialog.search':'reset'
        }
    }
</script>
