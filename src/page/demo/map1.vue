<template>
    <div id="map1">
        <div class="map-container h475 clearfix">
            <div class="item" id="map1-map1"></div>
            <div class="item" id="map1-map2"></div>
            <div class="item" id="map1-map3"></div>
        </div>
        <div class="map-container clearfix border h585">
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
        width: 520px;
        height: 475px;
        box-sizing: border-box;
        padding:10px;
        border:2px solid #2c3e65;
    }
    #map1-map4{
        width: 900px;
        height: 585px;
    }
    #map1-map5{
        width: 350px;
        height: 300px;
        margin-top: 150px;
    }
}
</style>
<script type="text/ecmascript-6">
    import {demo,color,colorD,textStyle,labelStyle,seriesLabelStyle,itemHeight,itemWidth,axisLabel,axisLine} from '../../assets/js/demoCharts'
    import echarts from 'echarts'

    const map1 =  {
        name: '端口数量',
        type: 'pie',
        radius: ['20%', '65%'],
        center: ['50%', '50%'],
        roseType: 'radius',
        data: demo.map1.map1,
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}个 ({d}%)"
        },
        label: {
            normal: {
                show: true,
                textStyle:{
                    color:'#FFF',
                    fontSize: 20
                },
                position: 'inside',
                formatter:'{c}个'
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
                show: true,
                position: 'inside',
                textStyle:{
                    color:'#FFF',
                    fontSize: 20
                },
                formatter:'{c}T'
            },
            emphasis: {
                show: true,
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
                position: 'top',
                textStyle:seriesLabelStyle.textStyle,
                formatter: function(data){
                    return `${data.name}\n${data.data}`
                }
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
                zoom:1.4,
                label: {
                    normal: { show: false},
                    emphasis: { show: false}
                },
                itemStyle: {
                    normal: {
                        color: Object.values(color)[i],
                        areaColor: '#1d2b46',
                        borderColor: 'rgba(100,149,237,1)',
                        opacity: '0.6'
                    },
                    emphasis: {
                        areaColor: '#ff9e40',
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
        backgroundColor: '#1d2b46',
        title:{
            text:'全网地图流量/Gbps',
            textStyle,
            right:20,
            top:20
        },
        right:20,
        zoom:1.4,
        visualMap: {
            min: 0,
            max: 2500,
            left: '5%',
            top: 'center',
            text: ['高','低'],
            calculable: false,
            inRange: {
                color: ['#1d2b46', '#205dda']
            },
            textStyle:{
                color:'#5971a3'
            }
        },
        legend: {
            orient: 'horizontal',
            right: 0,
            bottom: 10,
            itemWidth,
            itemHeight,
            textStyle:labelStyle.textStyle,
            data:['统建CDN','IDC','省建Cache','统建Cache'],
        },
        tooltip:{
            trigger: 'item',
            backgroundColor:'rgba(255,255,255,0.9)',
            padding:10,
            textStyle:{
                color: '#333'
            },
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
                        <b class="echart-circle" style="background: #0063dd"></b>总计流量：${(data.value.CDN+data.value.IDC+data.value.Cache+data.value.PCache).toFixed(2)}GBPS<br />
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
                        textStyle,
                        left: 'center'
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
                        textStyle:labelStyle.textStyle,
                        itemWidth,
                        itemHeight,
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
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        backgroundColor:'rgba(255,255,255,0.9)',
                        padding:10,
                        textStyle:{
                            color: '#333'
                        }
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
                            show:false,
                            splitNumber: 4
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            max: 20,
                            nameLocation: 'middle',
                            nameGap:30,
                            show:false
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
                            color:'#feffff',
                            fontSize:18,
                            fontWeight:'normal'
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        backgroundColor:'rgba(255,255,255,0.9)',
                        padding:10,
                        textStyle:{
                            color: '#333'
                        },
                        formatter:(item)=>{
                            return `<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 16px;padding-bottom: 7px;margin-bottom: 7px">${name}流量数据</div>
                                    ${item.name}：${item.value}GBPS<br/>`
                        }
                    },
                    legend: {
                        data: ['统建CDN','IDC','省建Cache','统建Cache'],
                        textStyle:labelStyle.textStyle,
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
                    barWidth: '60%',
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01],
                        axisLine,
                        splitLine:{
                            lineStyle:axisLine.lineStyle
                        },
                        axisLabel
                    },
                    yAxis: {
                        type: 'category',
                        data: ['统建CDN','IDC','省建Cache','统建Cache'],
                        axisLine,
                        splitLine:{
                            lineStyle:axisLine.lineStyle
                        },
                        axisLabel
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
                this.drawrose('map1-map2',map2,'带宽/TB');
                this.drawbar('map1-map3',map3,'流量/TB');
                this.drawmap('map1-map4');
            });
        }
    }
</script>
