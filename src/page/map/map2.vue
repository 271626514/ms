<template>
    <div id="map">
        <my-head :autowidth="width"></my-head>
        <h1>全网统建CDN、IDC、统建Cache、省建Cache、省建OTT业务流量分析日报</h1>
        <h2>网络部 <span>2017-06-30 13:00</span></h2>
        <div class="map">
            <div id="map-content">
                <h3>一、统建CDN业务分析</h3>
                <div class="map-wrapper">
                    <div id="map-item-1"></div>
                </div>
            </div>
        </div>
        <my-foot></my-foot>
    </div>
</template>
<style lang="less">
    #map-item-1{
        width: 1024px;
        height: 440px;
        margin: 0 auto;

    }
</style>
<script type="text/ecmascript-6">
    import echarts from 'echarts';
    import infographic from '../../assets/js/infographic'
    import myFoot from '../../components/common/foot'
    import myHead from '../../components/common/header'
    import {echartData} from '../../assets/js/data'
    export default{
        data(){
            return {
                chart:null,
                width: '1200px'
            }
        },
        methods:{
            drawbar(id) {           //一号柱状图
                this.chart = echarts.init(document.getElementById(id),infographic);
                this.chart.setOption({
                    title : {
                        text: '全网IDC业务均值',
                        textStyle:{
                            fontWeight: 'normal',
                            fontSize: 14
                        },
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {},
                            dataView: {}
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
                                "rotate": 45,
                                "show": true,
                                "splitNumber": 15,
                                "textStyle": {
                                    "fontFamily": "微软雅黑",
                                    "fontSize": 12
                                }
                            },
                            "data": echartData.data1
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '端口数量，个',
                            max: 100,
                            nameLocation: 'middle',
                            nameGap:30
                        }
                    ],
                    series: [
                        {
                            name: '端口数量',
                            type: 'bar',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            itemStyle:{
                                normal:{
                                    color: function (params){
                                        var colorList = ['#4ba3fa','#85cef4','#ff944c','#ffd957','#b7e331'];
                                        return colorList[params.dataIndex];
                                    }
                                }
                            },
                            barWidth:'50px',
                            data: portData.portNumber
                        }
                    ]
                });
            },
        },
        mounted(){
            this.$nextTick(function() {
                this.drawbar('map-item-1');
            });
        },
        components:{
            myHead,myFoot
        }
    }
</script>
