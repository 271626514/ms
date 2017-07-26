<template>
    <div id="map2">
        <div class="map-container h360 clearfix">
            <div class="item border" id="map2-map1">
                <h2>采集CP</h2>
                <div class="num-map">
                    <ul><li>0</li><li v-for="index in 9">{{index}}</li></ul>
                    <ul><li>0</li><li v-for="index in 9">{{index}}</li></ul>
                    <ul><li>0</li><li v-for="index in 9">{{index}}</li></ul>
                    <ul><li>0</li><li v-for="index in 9">{{index}}</li></ul>
                </div>
            </div>
            <div class="item border" id="map2-map2"></div>
            <div class="item border" id="map2-map3"></div>
        </div>
        <ul class="goods">
            <li v-for="(item,index) in data" class="map-icon" @click="check(index)" :class="['map-icon-'+index,{'active':index==mapindex}]"></li>
        </ul>
        <div class="map-container clearfix h550">
            <div class="h600 w750 left">
                <div id="map2-map4"></div>
                <div id="map2-map5"></div>
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
        #map2-map1,#map2-map2{
            width: 435px;
            height: 360px;
        }
        #map2-map3{
            width: 690px;
            height: 360px;
        }
        #map2-map4,#map2-map5{
            width: 750px;
            height: 300px;
            float: none;
        }
        .goods{
            padding: 20px;
            border:2px solid #2c3e65;
            border-top:0;
            li{
                display: inline-block;
                margin-left: 25px;
                width: 140px;
                height: 140px;
                cursor:pointer;
                &:hover,&.active{
                    border:2px solid #52a5f7;
                }
            }
            .map-icon-0{
                background: url(../../assets/imgs/map-icon-0.png) no-repeat;
                background-size:contain;
            }
            .map-icon-1{
                background: url(../../assets/imgs/map-icon-1.png) no-repeat;
                background-size:contain;
            }
            .map-icon-2{
                background: url(../../assets/imgs/map-icon-2.png) no-repeat;
                background-size:contain;
            }
            .map-icon-3{
                background: url(../../assets/imgs/map-icon-3.png) no-repeat;
                background-size:contain;
            }
            .map-icon-4{
                background: url(../../assets/imgs/map-icon-4.png) no-repeat;
                background-size:contain;
            }
            .map-icon-5{
                background: url(../../assets/imgs/map-icon-5.png) no-repeat;
                background-size:contain;
            }
            .map-icon-6{
                background: url(../../assets/imgs/map-icon-6.png) no-repeat;
                background-size:contain;
            }
            .map-icon-7{
                background: url(../../assets/imgs/map-icon-7.png) no-repeat;
                background-size:contain;
            }
            .map-icon-8{
                background: url(../../assets/imgs/map-icon-8.png) no-repeat;
                background-size:contain;
            }
        }

    }
</style>
<script type="text/ecmascript-6">
    import echarts from 'echarts'
    import {column,timeColumn,demo,textStyle,labelStyle,seriesLabelStyle,itemHeight,itemWidth,axisLabel,axisLine} from '../../assets/js/demoCharts'
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
        radius: ['45%', '60%'],
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
                    fontSize: '24',
                    fontWeight: 'normal',
                },
                formatter: "{c}T"
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '24',
                    fontWeight: 'normal'
                }
            }
        },
        itemStyle: {
            normal:{
                color: '#ffb54c'
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
                data:demo.map2.map4,
                mapindex: 0,
            }
        },
        methods:{
            drawrose(id,series,title) {
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption({
                    title : {
                        text: title,
                        textStyle,
                        left: 'center',
                        top:20,
                    },
                    tooltip: {
                        trigger: 'item',
                        backgroundColor:'rgba(255,255,255,0.9)',
                        padding:10,
                        textStyle:{
                            color: '#333'
                        }
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
                        textStyle,
                        top:20,
                        left: 'center'
                    },
                    color: ['#3398DB'],
                    tooltip : {
                        trigger: 'item',
                        backgroundColor:'rgba(255,255,255,0.9)',
                        padding:10,
                        textStyle:{
                            color: '#000'
                        },
                    },
                    xAxis : [
                        {
                            show:false,
                            type : 'category',
                            data : ['腾讯','爱奇艺','阿里巴巴','优酷土豆网','百度','易视腾','芒果TV','搜狐','新浪','金山网络'],
                        }
                    ],
                    yAxis : [
                        {
                            show:false,
                            type : 'value',

                        }
                    ],
                    barWidth:30,
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle:{
                                color:'#FFF'
                            },
                            formatter: function(data){
                                return `${data.name}\n${data.data}`
                            }
                        },
                        emphasis:{
                            show:true,
                            position: 'top',
                            textStyle:{
                                color:'#FFF'
                            },
                            formatter: function(data){
                                return `${data.name}\n${data.data}`
                            }
                        }
                    },
                    itemStyle:{
                        normal:{
                            color: function (params){
                                return Object.values(demo.colorTen)[params.dataIndex]
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
            drawpro(id,data1,title) {
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption({
                    title:{
                        text:`${title}分省流量`,
                        textStyle,
                        left: 'center',
                        top:20
                    },
                    tooltip: {
                        trigger: 'item',
                        backgroundColor:'rgba(255,255,255,0.9)',
                        padding:10,
                        textStyle:{
                            color: '#000'
                        },
                    },
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
                            show:false,
                            data: column
                        }
                    ],
                    yAxis: [
                        {
                            show:false,
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
                                    show: false,
                                    position: 'insideTop'
                                }
                            },
                            itemStyle:{
                                normal:{
                                    color: '#affd87'
                                }
                            },
                            data: data1
                        }
                    ]
                });
            },
            drawarea(id,data,title){
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption({
                    title:{
                        text:`${title}分时流量`,
                        textStyle,
                        top:20,
                        left:'center'
                    },
                    tooltip: {
                        trigger: 'axis',
                        backgroundColor:'rgba(255,255,255,0.9)',
                        padding:10,
                        textStyle:{
                            color: '#000'
                        },
                    },
                    xAxis: [
                        {
                            show:false,
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
                            show:false,
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
                                    color: '#52a5f7'
                                }
                            },
                            data: data
                        }
                    ]
                });
            },
            check(index){
                //切换
                this.mapindex = index;
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
                this.drawpro('map2-map4',data1(),title);
                this.drawarea('map2-map5',data2(),title);
            //    this.drawmap('map2-map6',)

            }
        },
        mounted(){
            this.drawrose('map2-map2',map1,'带宽');
            this.drawbar('map2-map3',map2,'ICP流量TOP10');
        }
    }
</script>
