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
        </div>
        <my-foot></my-foot>
    </div>
</template>
<style lang="less">
    #china-charts-map{
        background: #1b1b1b;
        width: 900px;
        height: 600px;
        margin-bottom: 130px;
        float: left;
    }
    #china-charts-lines{
        float: left;
        margin-top: 100px;
        width: 300px;
        height: 500px;
    }
</style>
<script type="text/ecmascript-6">
    import echarts from 'echarts';
    import china from 'echarts/map/js/china'
    import myFoot from '../../components/common/foot'
    import myHead from '../../components/common/header-show'
    import {echartData} from '../../assets/js/data'
    import {map4,color,colorD} from '../../assets/js/chartsData'

    let data = (type)=>{
        let array = [];
        map4.mapdata.map((item)=>{
            array.push({
                name: item.name,
                value: item.value[type]
            })
        })
        return array;
    }

    let ser = ()=>{
        let array = [];
        let labelArray = [{name:'统建CDN',item:'CDN'},{name:'IDC',item:'IDC'},{name:'省建Cache',item:'PCache'},{name:'统建Cache',item:'Cache'},{name:'省建OTT',item:'POTT'}]
        for(let i=0;i<labelArray.length;i++){
            array.push({
                name: labelArray[i].name,
                type: 'map',
                mapType: 'china',
                selectedMode : 'single',
                zoom: 1.2,
                label: {
                    normal: { show: false},
                    emphasis: { show: false}
                },
                itemStyle: {
                    normal: {
                        color: Object.values(color)[i],
                        areaColor: colorD,
                        borderColor: 'rgba(100,149,237,1)',
                        opacity: '0.6'
                    },
                    emphasis: {
                        areaColor: colorD,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10,
                        opacity: '0.8'
                    }
                },
                roam: true,
                data:data(labelArray[i].item)
            })
        }
        return array;
    }
    let series = ser();
    let option = {
        backgroundColor: '#FFF',
        tooltip : {
            trigger: 'item',
        },
        zoom: 1.5,
        toolbox: {
            show: true,
            top:'0',
            left: '1%',
            feature: {
                dataView: {readOnly: true},
                restore: {},
                saveAsImage: {}
            }
        },
        visualMap: {
            min: 0,
            max: 2500,
            left: 'left',
            top: 'bottom',
            text: ['高','低'],
            calculable: true,
            inRange: {
                color: color
            },
        },
        legend: {
            orient: 'horizontal',
            left: '13%',
            top: '0',
            data:['统建CDN','IDC','省建Cache','统建Cache','省建OTT'],

        },
        tooltip:{
            trigger: 'item',
            formatter: function(obj){
                let data = map4.mapdata[obj.dataIndex];
                return `<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 16px;padding-bottom: 7px;margin-bottom: 7px">
                            全网流量各省数据
                        </div>
                        省份：${data.name}<br/>
                        统建CDN：${data.value.CDN}<br />
                        IDC：${data.value.IDC}<br />
                        统建Cache：${data.value.Cache}<br />
                        省建Cache：${data.value.PCache}<br />
                        省建OTT：${data.value.POTT}<br />
                        总计流量：${data.value.POTT+data.value.CDN+data.value.IDC+data.value.Cache+data.value.PCache}<br />
                        `
            }
        },
        series: series,
    };
    export default{
        data(){
            return {
                width: '1200px',
                province: new Set(),
                chart : null

            }
        },
        methods:{
            drawmap(id){
                let that = this;
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption(option);
                this.chart.on('click',function(data){
                    that.setData(data);
                });
            },
            setData(data){
                let {name,dataIndex} = data;
                let seriesData = [
                    {
                        name:`${name}`,
                        type: 'bar',
                        data:Object.values(map4.mapdata[dataIndex].value)
                    }
                ];
                let option = {
                    title: {
                        text: `${name}流量数据`,
                        left: 'center',
                        textStyle:{
                            fontSize: 16
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter:(item)=>{
                            return `<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 16px;padding-bottom: 7px;margin-bottom: 7px">${name}流量数据</div>
                                    ${item.name}：${item.value}<br/>`
                        }
                    },
                    legend: {
                        data: ['统建CDN','IDC','省建Cache','统建Cache','省建OTT']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    itemStyle:{
                        normal:{
                            color: function (params){
                                return Object.values(color)[params.dataIndex]
                            }
                        }
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01]
                    },
                    yAxis: {
                        type: 'category',
                        data: ['统建CDN','IDC','省建Cache','统建Cache','省建OTT']
                    },
                    series:seriesData
                };
                this.chart = echarts.init(document.getElementById('china-charts-lines'));
                this.chart.setOption(option);
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
