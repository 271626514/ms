<template>
    <div class="log">
        <div class="module-header">
            <h4>日志操作</h4>
        </div>
        <div class="module-search">
            <div class="item">
                <div class="search-label">上传时间：</div>
                <div class="search-item">
                    <Date-picker type="date" placement="bottom-end" :value="defaultDate" :options="options" @on-change="setStart" placeholder="选择起始日期" style="width: 155px"></Date-picker>
                </div>
                <div class="line"></div>
                <div class="search-item">
                    <Date-picker type="date" placement="bottom-end" :value="defaultDate" :options="options" @on-change="setFin" placeholder="选择结束日期" style="width: 155px"></Date-picker>
                </div>
                <div class="search-label ml-20">
                    类型：
                </div>
                <div class="search-item">
                    <Select v-model="defaultData.logType.value" :label-in-value="true" @on-change="selectLog" style="width:110px;">
                        <Option v-for="item in logTypeList" :value="item.value" :key="item">{{ item.label }}</Option>
                    </Select>
                </div>
                <div class="search-label ml-20">
                    来源：
                </div>
                <div class="search-item">
                    <Select v-model="defaultData.source.value" :label-in-value="true" @on-change="selectSource" style="width:110px;">
                        <Option v-for="item in sourceList" :value="item.value" :key="item">{{ item.label }}</Option>
                    </Select>
                </div>
            </div>
            <div class="item">
                <div class="search-label" style="width:80px;text-align:right;">结果：</div>
                <div class="search-item">
                    <Select v-model="defaultData.result.value" :label-in-value="true" @on-change="selectResult" style="width:110px;">
                        <Option v-for="item in resultList" :value="item.value" :key="item">{{ item.label }}</Option>
                    </Select>
                </div>
                <div class="search-label ml-20" style="width:80px;text-align:right;">用户姓名：</div>
                <Input v-model="log.user" style="width: 350px"></Input>
            </div>
            <div class="search-ctrl">
                <Button type="primary" class="btn-search ml-20 mt-10" @click="getLogData">立即检索</Button>
                <a class="text-blue" @click="reset">清空</a>
            </div>
        </div>
        <div class="search-result">
            <p class="search-content">已查找到<span>{{data.length}}</span>条数据</p>
            <a class="search-download">下载检索结果文件</a>
        </div>
        <div class="tableContent">
            <Table width="auto" stripe height="600" style="margin-top: 10px;" border :columns="columns" :data="data"></Table>
        </div>

    </div>
</template>
<style lang="less">
.log{
    .search-ctrl{
        position: absolute;
        top:25px;
        right:0px;
        width: 140px;
        height: 80px;
        border-left:1px solid #ededed;
    }
}
</style>
<script type="text/ecmascript-6">
    import {loglisttables,showDataSelection,dateOptions} from '../../assets/js/data'
    import * as types from '../../assets/js/const'
    export default{
        data(){
            return {
                columns: loglisttables.columns,
                data: [],
                logTypeList:showDataSelection.logTypeList,
                sourceList: showDataSelection.sourceList,
                resultList: showDataSelection.resultList,
                defaultDate:dateOptions.defaultDate,
                options: dateOptions.options,
                log:{
                    user: '',
                    logType: 'all',
                    source: 'all',
                    result: 'all',
                    startDate:new Date(),
                    finDate: new Date()
                },
                defaultData:{
                    logType:types.logType,
                    source: types.source,
                    result: types.result
                }
            }
        },
        methods:{
            getLogData(){
                this.$http.post('http://localhost:8080/user',this.log)
                        .then(()=>{

                        })
                        .catch((res)=>{
                            this.data = loglisttables.datalist
                        })
            },
            selectLog(value){
                this.log.logType = value.value
            },
            selectSource(value){
                this.log.source = value.value
            },
            selectResult(value){
                this.log.result = value.value
            },
            reset(){
                this.log.user = '';
                this.log.logType = 'all';
                this.log.source = 'all';
                this.log.result = 'all';
                this.log.startDate = new Date();
                this.log.finDate = new Date();
            },
            setStart(date) {
                this.log.startDate = date;
                if(this.log.finDate && this.log.startDate>this.log.startDate){
                    alert('起始时间不能晚于结束时间！');
                    return false;
                }
            },
            setFin(date) {
                this.log.finDate = date;
                if(this.log.startDate<this.log.startDate){
                    alert('结束时间不能早于起始时间！');
                    return false;
                }
            },
        },
        computed:{

        },
        mounted(){
            this.getLogData()
        }
    }
</script>
