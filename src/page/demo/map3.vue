<template>
    <div id="map">
        <div class="main_container">
            <div class="top_show">
                <div id="chart1"></div>
                <div class="top_rightShow">
                    <div class="chart2">
                        <div id="chart2-1"></div>
                        <div id="chart2-2"></div>
                    </div>
                    <div id="chart3"></div>
                </div>
            </div>
            <div id="chart4"></div>
        </div>
    </div>
</template>
<style lang="less">
#map{
    width: 100%;
    .main_container{
        width: 1600px;
        margin:0 auto;
        height: 1200px;
    }
    .top_show{
        width: 100%;
        height: 65%;
        #chart1{
            float: left;
            width: 40%;
            height: 100%;
            background: url("../../assets/imgs/00002.svg") no-repeat center;
            background-size: 85% 85%;
            background-position-y: 15%;
            border: 2px solid #2c3e65;
            border-right:none;
            border-bottom:none;
        }
        .top_rightShow{
            float: left;
            width: 60%;
            height: 100%;
            .chart2{
                width: 100%;
                height: 50%;
                overflow:hidden;
                #chart2-1{
                    float: left;
                    width: 50%;
                    height: 100%;
                    border: 2px solid #2c3e65;
                    border-right:none;
                    border-bottom:none;
                }
                #chart2-2{
                    float: left;
                    width: 46%;
                    height: 100%;
                    border: 2px solid #2c3e65;
                    border-bottom:none;
                }
            }
            #chart3{
                width: 96%;
                height: 50%;
                background-color:yellow;
                border: 2px solid #2c3e65;
                border-bottom:none;
            }
        }
    }
    #chart4{
        width: 97.6%;
        height: 28%;
        border: 2px solid #2c3e65;
    }
}
</style>
<script type="text/ecmascript-6">

    import echarts from 'echarts'
    import {axisLine,axisLabel,textStyle,map3data} from '../../assets/js/demoCharts'
    const builderJson = {
        "all": 180,
        "charts": {
            "TeliaSonera": 40,
            "Level3": 40,
            "Akamai": 50,
            "PCCW": 50,
            "NTT": 60,
            "GTT": 60,
            "HKIX": 80,
            "EIE": 110,
            "卓越亚马逊": 120,
            "苹果": 160,
        },
        "all1": 180,
        "components": {
            "TeliaSonera": 28.6,
            "Level3": 24.9,
            "Akamai": 28.9,
            "PCCW": 28.3,
            "NTT": 44.3,
            "GTT": 37.4,
            "HKIX": 24.2,
            "EIE": 39.9,
            "卓越亚马逊": 22.8,
            "苹果": 128.3,
        },
        "ie": 9743
    };
    let weekend = Object.keys(map3data.qsfx);
    let data = Object.values(map3data.qsfx);
    let tag = (name)=>{
        let array = [];
        for(let i of data){
            for(let j=0;j<i.length;j++){
                if(name==i[j].name){
                    array.push(i[j].trafficins)
                }
            }
        }
        return array;
    }
    let ffzl = tag('付费直连');
    let ffct = tag('付费穿透');
    let mfzl = tag('免费直连');
    let sfkh = tag('收费客户');

    let tagA = ()=>{
        let a = map3data.qsfx;
        let t = '付费直连';
        let name = [];
        return name;
    };
    export default{
        data() {
            return {
                chart: null,
                width: '1200px',
                weekend:map3data.qsfx,
            };
        },
        methods:{
            drawTube(id){
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption({
                    title: {
                        text: '宽带流量',
                        x:'center',
                        y:20,
                        textStyle,
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        },
                        backgroundColor:'rgba(255,255,255,0.9)',
                        padding:10,
                        textStyle:{
                            color: '#333'
                        },
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        axisLine,
                        data: ['付费穿透','付费直连','免费直连','收费客户']
                    },
                    yAxis: {
                        type: 'value',
                        max:'900',
                        splitLine:{
                            show:false
                        },
                        axisLine,
                        splitNumber:10
                    },
                    series: [
                        {
                            name: '宽带',
                            type: 'bar',
                            data: [250,40,848,357],
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,//是否展示
                                        position: 'top',
                                    },
                                    color:'#5cb1ef'
                                }
                            },
                        },
                        {
                            name: '流量',
                            type: 'bar',
                            data: [163.5,12.4,246.3,131.4],
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,//是否展示
                                        position: 'top',
                                    },
                                    color:'#6ce296'
                                }
                            },
                        }
                    ]
                })
            },
            drawGuage(id){
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption({
                    title:{
                        text:'国际流量付费率',
                        x:'center',
                        y:20,
                        textStyle
                    },
                    tooltip : {
                        formatter: "{a} <br/>{b} : {c}%",
                    },
                    series: [
                        {
                            type: 'gauge',
                            detail: {
                                formatter:'{value}%',
                                textStyle:{
                                    color:'white'
                                },
                                offsetCenter: [0, '50%'],
                            },
                            data: [{value: 48.47}],
                            radius:'150',
                            center: ['50%', '60%'],
                            pointer:{
                            },
                            axisLabel:{
                                show:false
                            },
                            axisTick:{
                                show:false
                            },
                            axisLine: {            // 坐标轴线
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: [[0.2, '#5cb1ef'], [0.7, '#F4D64A'], [1, '#EF5E80']],
                                    width:'28'
                                }
                            },
                            splitLine:{
                                show:false
                            },
                        }
                    ]
                })
            },
            drawTube2(id){
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption({
                    tooltip: {
                        backgroundColor:'rgba(255,255,255,0.9)',
                        padding:10,
                        textStyle:{
                            color: '#333'
                        },
                    },
                    title: [{
                        text: 'Top 10客户',
                        x: '50%',
                        y:'10',
                        textAlign: 'center',
                        textStyle
                    }, ],
                    grid: [{
                        top: 50,
                        left:5,
                        width: '50%',
                        bottom:50,
                        containLabel: true
                    }, {
                        top: 50,
                        width: '45%',
                        left: '45%',
                        bottom:50,
                        containLabel: true
                    }],
                    legend: {
                        left:'45%',
                        bottom:'20',
                        data: ['宽带','流量'],
                        itemWidth:15,
                        itemHeight:15,
                        textStyle:{
                            color: 'white',
                        }
                    },
                    xAxis: [{
                        show:false
                    }, {
                        type: 'value',
                        max: builderJson.all,
                        gridIndex: 1,
                        splitLine: {
                            show: false
                        },
                        show:false
                    }],
                    yAxis: [{
                        type: 'category',
                        data: Object.keys(builderJson.charts),
                        axisLabel: {
                            interval: 0,
                        },
                        splitNumber:10,
                        axisLine:{
                            show:false,
                            lineStyle:{
                                color:'#30436d'
                            }
                        },
                        axisTick:{
                            show:false,
                        },
                        splitLine: {
                            show: false
                        },
                        axisLine

                    }, {
                        show:false,
                        gridIndex: 1,
                        type: 'category',
                        data: Object.keys(builderJson.charts),
                        axisLabel: {
                            interval: 0,
                        },
                        splitLine: {
                            show: false
                        }
                    }],
                    series: [{
                        name:'宽带',
                        type: 'bar',
                        stack: 'chart',
                        z: 3,
                        label: {
                            normal: {
                                position: 'right',
                                show: true,
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#5cb1ef'
                            }
                        },
                        barWidth:15,
                        data: Object.keys(builderJson.charts).map(function(key) {
                            return builderJson.charts[key];
                        })
                    }, {
                        type: 'bar',
                        stack: 'chart',
                        silent: true,
                        itemStyle: {
                            normal: {
                                color: '#1d2b46'
                            }
                        },
                        data: Object.keys(builderJson.charts).map(function(key) {
                            return builderJson.all - builderJson.charts[key];
                        })
                    }, {
                        name:'流量',
                        type: 'bar',
                        stack: 'component',
                        xAxisIndex: 1,
                        yAxisIndex: 1,
                        z: 3,
                        label: {
                            normal: {
                                position: 'right',
                                show: true,
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: '#f27554'
                            }
                        },
                        barWidth:15,
                        data: Object.keys(builderJson.components).map(function(key) {
                            return builderJson.components[key];
                        })
                    }, {
                        type: 'bar',
                        stack: 'component',
                        silent: true,
                        xAxisIndex: 1,
                        yAxisIndex: 1,
                        itemStyle: {
                            normal: {
                                color: '#1d2b46'
                            }
                        },
                        data: Object.keys(builderJson.components).map(function(key) {
                            return builderJson.all - builderJson.components[key];
                        })
                    }, ]
                })
            },
            drawLine(id){
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption({
                    title: {
                        text: '一周流量分析',
                        x:'45%',
                        y:20,
                        textStyle
                    },
                    brush: {
                        toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
                        xAxisIndex: 0
                    },
                    toolbox: {
                        feature: {
                            magicType: {
                                type: ['stack', 'tiled']
                            },
                            dataView: {}
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '10%',
                    },
                    xAxis: [
                        {
                            show:false,
                            type: 'category',
                            boundaryGap: false,
                            data: weekend,
                            splitLine: {
                                show: false
                            },
                        }
                    ],
                    yAxis: [
                        {
                            show:false,
                            type: 'value',
                            splitLine: {
                                show: false
                            },
                        }
                    ],
                    series: [
                        {
                            name: '付费直连',
                            type: 'line',
                            areaStyle: {normal: {}},
                            data: ffzl,
                            smooth:true,
                            itemStyle: {
                                normal: {
                                    color:'#D5CB68'
                                }
                            },
                        },
                        {
                            name: '付费穿透',
                            type: 'line',
                            areaStyle: {normal: {}},
                            data: ffct,
                            smooth:true,
                            itemStyle: {
                                normal: {
                                    color:'#5b9fe2'
                                }
                            },
                        },
                        {
                            name: '免费直连',
                            type: 'line',
                            areaStyle: {normal: {}},
                            data: mfzl,
                            smooth:true,
                            itemStyle: {
                                normal: {
                                    color:'#6c5095'
                                }
                            },
                        },
                        {
                            name: '收费客户',
                            type: 'line',
                            areaStyle: {normal: {}},
                            data: sfkh,
                            smooth:true,
                            itemStyle: {
                                normal: {
                                    color:'#c55475'
                                }
                            },
                        },
                    ]
                })
            }
        },
        mounted(){
            this.$nextTick(function() {
                this.drawTube("chart2-1");
                this.drawGuage("chart2-2");
                this.drawTube2('chart3');
                this.drawLine('chart4');
            });

        }
    }
</script>
