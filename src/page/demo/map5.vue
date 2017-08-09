<template>
    <div id="map5">
        <div class="map-container clearfix" style="height: 400px;">
            <div class="item" id="map5-map1"></div>
            <div class="item" id="map5-map2"></div>
            <div class="item" id="map5-map3"></div>
        </div>
        <div class="map-container clearfix border" style="height: 360px">
            <div  id="map5-map4"></div>
        </div>
        <div class="map-container clearfix border" style="height: 360px">
            <div  id="map5-map5"></div>
        </div>
    </div>
</template>
<style lang="less">
/*#map5{
    width: 1560px;
    height: 1080px;
    background: url(../../assets/imgs/map5.jpg) no-repeat;
    background-size: contain;
}*/
#map5{
    .item{
        float: left;
    }
    #map5-map1,#map5-map2,#map5-map3{
        width: 520px;
        height: 400px;
        box-sizing: border-box;
        padding:10px;
        border:2px solid #2c3e65;
    }
    #map5-map4,#map5-map5{
        width: 1560px;
        height: 360px;
        float: none;
    }
}
</style>
<script type="text/ecmascript-6">
    import {demo,column,textStyle,labelStyle,seriesLabelStyle,axisLabel,axisLine} from '../../assets/js/demoCharts'
    import echarts from 'echarts/lib/echarts';

    const map5 = {
        map1:{
            name: '手机点击本网率',
            value: 93.4
        },
        map2:{
            name: '流量本网率',
            value: 96.9
        },
        map3:{
            name: '引入深度',
            value: 70.5
        },
        map4(){
            let array = [];
            for(let i=0;i<31;i++){
                array.push((Math.random()*100).toFixed(2))
            }
            return array;
        }
    }
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
    export default{
        data(){
            return {

            }
        },
        methods:{
            drawrose(id,title,data,color){
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption({
                    title : {
                        text: `${title}`,
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
                    calculable: true,
                    series:  {
                        name: `${title}`,
                        type: 'pie',
                        radius: ['45%', '60%'],
                        center: ['50%', '50%'],
                        data: [
                            data,
                            {
                                value:100-data.value,
                                name:'invisible',
                                itemStyle : placeHolderStyle
                            }
                        ],
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br /> {c}%"
                        },
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: true,
                                position: 'center',
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'normal',
                                },
                                formatter: "{c}%"
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'normal'
                                }
                            }
                        },
                        itemStyle: {
                            normal:{
                                color: color
                            },
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffset: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                });
            },
            drawbar(id,title,data) {       //各省指标柱状图
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption({
                    title:{
                        text:`${title}`,
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
                            axisLine,
                            show:true,
                            data:column,
                            axisLabel: {
                                show:true,
                                interval:0,
                                textStyle:{
                                    color: '#c0c6c4',
                                    fontSize: 14
                                },
                                formatter:(val,index)=>{
                                    let arr = [...val].join('\n');
                                    return `${arr}`;
                                }
                            }
                        }
                    ],
                    yAxis: [
                        {
                            show:true,
                            axisLine,
                            type: 'value',
                            splitLine:{
                                show:false
                            },
                            axisLabel:{
                                show:true,
                                textStyle:{
                                    color: '#c0c6c4',
                                    fontSize: 14
                                },
                                formatter: '{value}%'
                            }

                        }
                    ],
                    /*legend:{
                        show:true,
                        data:[title],
                        right:'10%',
                        itemWidth:15,
                        itemHeight:15,
                        top:20,
                        textStyle:{
                            color:'#FFF',
                            fontSize: 14

                        }
                    },*/
                    series: [
                        {
                            name: `${title}`,
                            type: 'bar',
                            barWidth: 25,
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
                            data: data
                        }
                    ]
                });
            },
        },
        mounted(){
            let map4 = map5.map4()
            this.drawrose('map5-map1','手机点击本网率',map5.map1,'#f05f40');
            this.drawrose('map5-map2','流量本网率',map5.map2,'#f0ca39');
            this.drawrose('map5-map3','引入深度',map5.map3,'#4b9fe8');
            this.drawbar('map5-map4','手机点击本网率全网对比',map4)
            this.drawbar('map5-map5','流量本网率全网对比',map4)
        }
    }
</script>
