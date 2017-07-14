<template>
    <div id="map">
        <my-head :autowidth="width"></my-head>
        <ol class="breadcrumb">
            <li>
                <a href="/">首页</a>
            </li>
            <li>
                <a @click="$router.push('/mapList')">数据视图</a>
            </li>
            <li>
                数据详情
            </li>
        </ol>
        <h1>全网统建CDN、IDC、统建Cache、省建Cache、省建OTT业务流量分析日报（图例）</h1>
        <h2>网络部 <span>2017-06-30 13:00</span></h2>
        <div class="map">
            <div id="map-content">
                <h3>一、统建CDN业务分析</h3>
                <div class="map-wrapper">
                    <div id="map-item-1"></div>
                </div>
                <h3>二、统建Cache业务分析</h3>
                <div class="map-wrapper">
                    <div id="map-item-2"></div>
                </div>
                <h3>三、IDC 业务分析</h3>
                <div class="map-wrapper">
                    <div id="map-item-3"></div>
                </div>
                <h3>四、省建Cache 业务分析</h3>
                <div class="map-wrapper">
                    <div id="map-item-4"></div>
                </div>
                <h3>五、OTT 业务分析</h3>
                <div class="map-wrapper">
                    <div id="map-item-5"></div>
                </div>
            </div>
        </div>
        <my-foot></my-foot>
    </div>
</template>
<style lang="less">
    #map-item-1,#map-item-2,#map-item-3,#map-item-4,#map-item-5{
        width: 1024px;
        height: 480px;
        margin: 0 auto;
    }
    #map-item-5{
        margin-bottom: 30px;
    }
</style>
<script type="text/ecmascript-6">
    import echarts from 'echarts';
    import infographic from '../../assets/js/infographic'
    import myFoot from '../../components/common/foot'
    import myHead from '../../components/common/header'
    import {echartData} from '../../assets/js/data'
    const color = {
        lightblue: '#85cef4',
        blue: '#4ba3fa',
        lightgreen: '#b7e331',
        yellow: '#ffd957',
        orange: '#ff944c',
        envy: '#96afff',
        violet: '#986bff',
        red: '#46d185',
        green: '#ec5845'
    }
    let data2 = [];
    let data3 = [];
    let data4 = [];
    let data5 = [];
    for(let i=0;i<31;i++){
        data2.push((Math.random()* 5).toFixed(2));
        data4.push((Math.random()* 5).toFixed(2));
        data5.push((Math.random()* 10).toFixed(2));
        data3.push((Math.random()* 20).toFixed(2));
    }
    export default{
        data(){
            return {
                chart:null,
                width: '1200px'
            }
        },
        methods:{
            drawbar(id,columns,data1,data2,color) {           //一号柱状图
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption({
                    tooltip: {
                        trigger: 'axis',
                        "axisPointer": {
                            "type": "shadow"
                        },
                    },
                    legend:{
                        data:['入流量Gbps','出流量Gbps']
                    },
                    grid:{
                        bottom:60,
                        height:400
                    },
                    dataZoom:[
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
                    ],
                    toolbox: {
                        feature: {
                            saveAsImage: {},
                            dataView: {},
                            magicType: {
                                type: ['stack', 'tiled','line']
                            },
                            restore: {show: true}
                        },
                        right: 15,
                        top: 10
                    },
                    grid: {
                        left: '5%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            "axisLabel": {
                                "interval": 0,
                                "show": true,
                                "splitNumber": 15,
                                "textStyle": {
                                    "fontFamily": "微软雅黑",
                                    "fontSize": 12
                                }
                            },
                            "data": columns
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '流量,Gbps',
                            max: 25,
                            nameLocation: 'middle',
                            nameGap:30
                        }
                    ],
                    series: [
                        {
                            name: '入流量Gbps',
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
                        },
                        {
                            name: '出流量Gbps',
                            type: 'bar',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideTop'
                                }
                            },
                            itemStyle:{
                                normal:{
                                    color: color[1]
                                }
                            },
                            data: data2
                        }
                    ]
                });
            }
        },
        mounted(){
            this.$nextTick(function() {
                this.drawbar('map-item-1',echartData.data1,data2,data3,[color.lightblue,color.orange]);
                this.drawbar('map-item-2',echartData.data1,data2,data3,[color.yellow,color.violet]);
                this.drawbar('map-item-3',echartData.data1,data4,data5,[color.red,color.green]);
                this.drawbar('map-item-4',echartData.data1,data2,data5,[color.envy,color.red]);
                this.drawbar('map-item-5',echartData.data1,data4,data3,[color.violet,color.blue]);
            });
        },
        components:{
            myHead,myFoot
        }
    }
</script>
