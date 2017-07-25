<template>
    <div id="map1">
        <div class="map-container h350 clearfix">
            <div class="item" id="map1-map1"></div>
            <div class="item" id="map1-map2"></div>
            <div class="item" id="map1-map3"></div>
        </div>
        <div class="map-container clearfix">
            <div class="item" id="map1-map4"></div>
            <div class="item" id="map1-map5"></div>
        </div>
    </div>
</template>
<style lang="less">
#map1{
    .item{
        float: left;
    }
    #map1-map1,#map1-map2,#map1-map3{
        width: 300px;
        height: 300px;
    }
    #map1-map4{
        width: 800px;
        height: 500px;
    }
    #map1-map5{
        width: 300px;
        height: 300px;
    }
}
</style>
<script type="text/ecmascript-6">
    import {demo,color,colorD} from '../../assets/js/demoCharts'
    import echarts from 'echarts'
    const map1 =  {
        name: '端口数量',
        type: 'pie',
        radius: [0, '65%'],
        center: ['50%', '50%'],
        roseType: 'radius',
        data: demo.map1.map1,
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}个 ({d}%)"
        },
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: true
            }
        },
        lableLine: {
            normal: {
                show: false
            },
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            normal:{
                color: function (params){
                    return color[params.dataIndex];
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowOffset: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }
    const map2 = {
        name: '带宽',
        type: 'pie',
        radius: ['45%', '65%'],
        center: ['50%', '50%'],
        data: demo.map1.map2,
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal:{
                color: function (params){
                    return color[params.dataIndex];
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowOffset: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}T ({d}%)"
        },
    }
    const map3 = {
        name: '流量',
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}T"
        },
        itemStyle:{
            normal:{
                color: function (params){
                    return color[params.dataIndex];
                }
            }
        },
        barWidth:'auto',
        data:demo.map1.map3
    }
    let data = (type)=>{
        let array = [];
        demo.map1.map4.map((item)=>{
            array.push({
                name: item.name,
                value: item.value[type]
            })
        })
        return array;
    }

    let ser = ()=>{
        let array = [];
        let labelArray = [{name:'统建CDN',item:'CDN'},{name:'IDC',item:'IDC'},{name:'省建Cache',item:'PCache'},{name:'统建Cache',item:'Cache'},{name:'',item:''}]
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
                        areaColor: '#e0ffff',
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
        visualMap: {
            min: 0,
            max: 2500,
            left: 'left',
            top: 'bottom',
            text: ['高','低'],
            calculable: true,
            inRange: {
                color: ['#e0ffff', '#006edd']
            },
        },
        legend: {
            orient: 'horizontal',
            left: '20%',
            top: '1%',
            data:['统建CDN','IDC','省建Cache','统建Cache'],

        },
        tooltip:{
            trigger: 'item',
            formatter: function(obj){
                let data = demo.map1.map4[obj.dataIndex];
                return `<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 16px;padding-bottom: 7px;margin-bottom: 7px">
                            全网流量地图
                        </div>
                        省份：${data.name}<br/>
                        <b class="echart-circle" style="background: ${Object.values(color)[0]}"></b>统建CDN：${data.value.CDN}GBPS<br />
                        <b class="echart-circle" style="background: ${Object.values(color)[1]}"></b>IDC：${data.value.IDC}GBPS<br />
                        <b class="echart-circle" style="background: ${Object.values(color)[2]}"></b>统建Cache：${data.value.Cache}GBPS<br />
                        <b class="echart-circle" style="background: ${Object.values(color)[3]}"></b>省建Cache：${data.value.PCache}GBPS<br />
                        <b class="echart-circle" style="background: #0063dd"></b>总计流量：${(data.value.POTT+data.value.CDN+data.value.IDC+data.value.Cache+data.value.PCache).toFixed(2)}GBPS<br />
                        `
            }
        },
        series: series,
    };
    export default{
        data(){
            return {

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
                    series:  series,
                    xAxis: [
                        {
                            type: 'category',
                            boundrayGap: false,
                            data:['IDC','CDN','CACHE','OTT'],
                            axisLine:{
                                show: false
                            },
                            splitNumber: 4
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            max: 20,
                            nameLocation: 'middle',
                            nameGap:30
                        }
                    ],
                });
            },
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
                        data:Object.values(demo.map1.map4[dataIndex].value)
                    }
                ];
                let option = {
                    title: {
                        text: `${name}流量数据`,
                        left: 'center',
                        textStyle:{
                            fontSize: 16,
                            fontWeight: 'normal'
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter:(item)=>{
                            return `<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 16px;padding-bottom: 7px;margin-bottom: 7px">${name}流量数据</div>
                                    ${item.name}：${item.value}GBPS<br/>`
                        }
                    },
                    legend: {
                        data: ['统建CDN','IDC','省建Cache','统建Cache']
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
                        data: ['统建CDN','IDC','省建Cache','统建Cache']
                    },
                    series:seriesData
                };
                this.chart = echarts.init(document.getElementById('map1-map5'));
                this.chart.setOption(option);
            }
        },
        mounted(){
            this.$nextTick(function() {
                this.drawrose('map1-map1',map1,'端口');
                this.drawrose('map1-map2',map2,'带宽');
                this.drawbar('map1-map3',map3,'流量');
                this.drawmap('map1-map4');
            });
        }
    }
</script>
