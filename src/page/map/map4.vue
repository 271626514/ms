<template>
    <div id="map">
        <my-head></my-head>
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
        <h1>全网流量地图（图例）</h1>
        <h2>网络部 <span>2017-06-30 13:00</span></h2>
        <div class="map clearfix">
            <div id="china-charts-map"></div>
            <div id="china-charts-lines"></div>
            <div id="china-charts-bars"></div>
        </div>
        <my-foot></my-foot>
    </div>
</template>
<style lang="less">
    #china-charts-map{
        background: #1b1b1b;
        width: 600px;
        height: 600px;
        margin-bottom: 130px;
        float: left;
    }
    #china-charts-lines,#china-charts-bars{
        float: left;
        width: 600px;
        height: 300px;
    }
</style>
<script type="text/ecmascript-6">
    import echarts from 'echarts';
    import china from 'echarts/map/js/china'
    import myFoot from '../../components/common/foot'
    import myHead from '../../components/common/header-show'
    import {echartData} from '../../assets/js/data'

    let series = [
        {
            name: '中国',
            type: 'map',
            mapType: 'china',
            selectedMode : 'multiple',
            tooltip:{
                formatter: '{b0}'
            },
            label: {
                normal: {
                    show: false,
                    textStyle:{
                        color: '#F3F3F3'
                    }
                },
                emphasis: {
                    show: false,
                    textStyle:{
                        color: '#FFF'
                    }
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#1b1b1b',
                    borderColor: 'rgba(100,149,237,1)'
                },
                emphasis: {
                    areaColor: '#313030',
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                }
            },
            roam: true,
        }
    ];

    let option = {
        backgroundColor: '#1b1b1b',
        tooltip : {
            trigger: 'item',
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            top:'35%',
            right: '1%',
            feature: {
                dataView: {readOnly: true},
                restore: {},
                saveAsImage: {}
            }
        },
        series: series,
    };
    export default{
        data(){
            return {
                width: '1200px'
            }
        },
        methods:{
            drawmap(id){
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption(option);
                this.chart.on('geoselectchanged',(data)=>{
                    console.log(data)
                })
            }
        },
        mounted(){
            this.$nextTick(function() {
                this.drawmap('china-charts-map');
            });
        },
        components:{
            myHead,myFoot
        }
    }
</script>
