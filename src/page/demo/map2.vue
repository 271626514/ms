<template>
    <div id="map2">
        <div class="map-container h350 clearfix">
            <div class="item" id="map2-map1"></div>
            <div class="item" id="map2-map2"></div>
            <div class="item" id="map2-map3"></div>
        </div>
        <ul class="goods">
            <li v-for="(item,index) in data" @click="check(index)">{{item.name}}</li>
        </ul>
        <div class="map-container clearfix h550">
            <div class="map-container left clearfix h550">
                <div class="item" id="map2-map4"></div>
                <div class="item" id="map2-map5"></div>
            </div>
            <div class="map-container left clearfix h550">
                <div class="item" id="map2-map6"></div>
            </div>
        </div>
    </div>
</template>
<style lang="less">
    #map2{
        .item{
            float: left;
        }
        #map2-map1,#map2-map2,#map2-map3{
            width: 300px;
            height: 300px;
        }
        #map2-map4{
            width: 650px;
            height: 250px;
        }
        #map2-map5{
            width: 650px;
            height: 300px;
        }
        .goods{
            li{
                display: inline-block;
                font-size: 14px;
                padding: 5px 10px;
            }
        }
    }
</style>
<script type="text/ecmascript-6">
    import echarts from 'echarts'
    import {demo,color,colorD} from '../../assets/js/chartsData'
    import {column,timeColumn} from '../../assets/js/demoCharts'
    const placeHolderStyle = {
        normal : {
            color: 'rgba(0,0,0,0)',
            label: {show:false},
            labelLine: {show:false}
        },
        emphasis : {
            color: 'rgba(0,0,0,0)'
        }
    };
    const map1 =  {
        name: '带宽',
        type: 'pie',
        radius: ['45%', '65%'],
        center: ['50%', '50%'],
        data: [
            {name:'带宽',value: 30.6},
            {
                value:19.4,
                name:'invisible',
                itemStyle : placeHolderStyle
            }
        ],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}T"
        },
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: true,
                position: 'center',
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                },
                formatter: "{c}T"
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        itemStyle: {
            normal:{
                color: function (params){
                    return demo.color[params.dataIndex];
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowOffset: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    };
    const map2 = [3.06,1.67,1.24,0.79,0.35,0.11,0.09,0.07,0.06,0.06]
    export default{
        data(){
            return {
                data:demo.map2.map4
            }
        },
        methods:{
            drawrose(id,series,title) {
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption({
                    title : {
                        text: title,
                        textStyle:{
                            fontWeight: 'normal',
                            fontSize: 14
                        },
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                    },
                    legend: {
                        orient: 'horizontal',
                        left: 'center',
                        bottom: 0,
                        data: ['IDC','CDN','CACHE','OTT'],
                    },
                    calculable: true,
                    series:  series
                });
            },
            drawbar(id,series,title){
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption({
                    title : {
                        text: title,
                        textStyle:{
                            fontWeight: 'normal',
                            fontSize: 14
                        },
                        left: 'center'
                    },
                    color: ['#3398DB'],
                    tooltip : {
                        trigger: 'axis',
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [{
                            show:false,
                            type : 'category',
                            data : ['腾讯','爱奇艺','阿里巴巴','优酷土豆网','百度','易视腾科技有限公司','芒果TV','搜狐','金山网络'],
                    }],
                    legend: {
                        data: ['腾讯','爱奇艺','阿里巴巴','优酷土豆网','百度','易视腾科技有限公司','芒果TV','搜狐','金山网络']
                    },
                    yAxis : [{
                            show:false,
                            type : 'value',

                    }],
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    itemStyle:{
                        normal:{
                            color: function (params){
                                return Object.values(color)[params.dataIndex]
                            }
                        }
                    },
                    series: [
                        {
                            name:'ICP流量TOP10',
                            type: 'bar',
                            data: series
                        }
                    ]
                });
            },
            drawpro(id,data1,color,title) {
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption({
                    title:{
                        text:`${title}分省流量`,
                        textStyle:{
                            fontWeight: 'normal',
                            fontSize: 14
                        },
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: "shadow"
                        },
                    },
                    /*dataZoom:[
                        {
                            type: 'slider',
                            show: true,
                            xAxisIndex: [0],
                            start: 1,
                            end: 25,
                        },
                        {
                            type: 'inside',
                            xAxisIndex: [0],
                            start: 1,
                            end: 25
                        },
                    ],*/
                    xAxis: [
                        {
                            axisLabel: {
                                interval: 0,
                                show: true,
                                splitNumber: 2,
                                textStyle: {
                                    "fontFamily": "微软雅黑",
                                    "fontSize": 12
                                }
                            },
                            data: column
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            max: 'auto',
                            nameLocation: 'middle',
                            nameGap:30,
                            splitLine:{
                                show:false
                            }
                        }
                    ],
                    series: [
                        {
                            name: `${title}分省流量`,
                            type: 'bar',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideTop'
                                }
                            },
                            itemStyle:{
                                normal:{
                                    color: color[0]
                                }
                            },
                            data: data1
                        }
                    ]
                });
            },
            drawarea(id,data,color,title){
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption({
                    title:{
                        text:`${title}分时流量`,
                        textStyle:{
                            fontWeight: 'normal',
                            fontSize: 14
                        },
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: "shadow"
                        },
                    },
                    /*dataZoom:[
                        {
                            type: 'slider',
                            show: true,
                            xAxisIndex: [0],
                            start: 1,
                            end: 25,
                        },
                        {
                            type: 'inside',
                            xAxisIndex: [0],
                            start: 1,
                            end: 25
                        },
                    ],*/
                    xAxis: [
                        {
                            axisLabel: {
                                interval: 0,
                                show: true,
                                splitNumber: 2,
                                textStyle: {
                                    "fontFamily": "微软雅黑",
                                    "fontSize": 12
                                }
                            },
                            data: timeColumn
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            max: 'auto',
                            nameLocation: 'middle',
                            nameGap:30,
                            splitLine:{
                                show:false
                            }
                        }
                    ],
                    series: [
                        {
                            name: `${title}分时流量`,
                            type: 'line',
                            areaStyle: {normal: {}},
                            itemStyle:{
                                normal:{
                                    color: color[0]
                                }
                            },
                            data: data
                        }
                    ]
                });
            },
            check(index){
                //切换
                let data1 = ()=>{
                    let array = [];
                    for(let i=0;i<31;i++){
                        array.push(parseInt(Math.random()*100));
                    }
                    return array;
                };
                let column = [];
                let data2 = ()=>{
                    let array = [];
                    for(let i=0;i<24;i++){
                        array.push(parseInt(Math.random()*100));
                    }
                    return array;
                }
                let title = this.data[index].name
                this.drawpro('map2-map4',data1(),color,title);
                this.drawarea('map2-map5',data2(),color,title);
                this.drawmap('map2-map6',)
            }
        },
        mounted(){
            this.drawrose('map2-map2',map1,'带宽');
            this.drawbar('map2-map3',map2,'ICP流量TOP10');
        }
    }
</script>
