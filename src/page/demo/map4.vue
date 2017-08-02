<template>
    <div id="map">
        <!--<h1>内容流量全网资源平台</h1>-->
        <ul class="header_show">
            <div class="main_title"><!--实时拥塞--></div>
            <li id="circle1" :style="{width:'520px',height:'340px'}"></li>
            <li id="circle2" :style="{width:'520px',height:'340px'}"></li>
            <li id="circle3" :style="{width:'520px',height:'340px'}"></li>
        </ul>
        <ul class="footer_show">
            <li class="left">
                <div id="left_top" :style="{width:'640px',height:'350px'}"></div>
                <div id="left_bot" :style="{width:'640px',height:'350px'}"></div>
            </li>
            <li class="right">
                <ul>
                    <li v-for="(item,index) in mapData" class="map-icon" @click="changeMap(index)" :class="['map-icon-'+index,{'active':index==mapindex}]"></li>
                </ul>
                <div id="right_content" :style="{width:'750px',height:'694px'}"></div>
            </li>
        </ul>
    </div>
</template>
<style lang="less">
    .main_title{
        border: 2px solid #2c3e65;
        font-size: 32px;
        border-bottom: none;
        text-align: center;
        color: white;
        line-height: 75px;
    }
    #map{
        width:100%;
        height: 900px;
    .header_show{
            li{
                float: left;
            }
            #circle1{
                border: 2px solid #2c3e65;
                border-right:none;
                border-bottom:none;
                border-top: none ;
            }
            #circle3{
                border: 2px solid #2c3e65;
                border-left: none;
                border-bottom: none;
                border-top:none;
            }
        }
    .footer_show{
        li{
            float: left;
        }
        li.left{
            width: 640px;
            height:680px;
            #left_top,#left_bot{
                height:50%;
                border: 2px solid #2c3e65;
            }
            #left_top{
                border-bottom:none;
            }
    }
        li.right{
            width: 920px;
            height: 700px;
            float: left;
            border: 2px solid #2c3e65;
            border-left:none;
            ul{
                width: 120px;
                float: left;
                li{
                    display: inline-block;
                    margin-left: 25px;
                    width: 65px;
                    height: 65px;
                    margin-top:10px;
                    cursor:pointer;
                    &:hover,&.active{
                         border:2px solid #52a5f7;
                    }
                 }
            }
            #right_content{
                float: left;
            }
        }
    }
    .map-icon{

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
</style>
<script type="text/ecmascript-6">
    import echarts from 'echarts'
    import {axisLine,axisLabel,textStyle} from '../../assets/js/demoCharts'

    const jamLinkRole = {
        legendData:['腾讯','爱奇艺','百度','阿里巴巴','搜狐','360','优酷土豆网'],
        jamBandwidthG:[610,300,90,70,40,20,10],
        all: 114,
        jamPercent:[6.40,5.42,9.47,1.82,9.30,6.25,0.40],
        jamSolve:["腾讯", "爱奇艺", "阿里巴巴", "优酷土豆网","百度", "360", "芒果TV","搜狐","汽车之家","PPTV"],
    };
    const dataStyle = {
        normal: {
            label: {show:false},
            labelLine: {show:false}
        }
    };
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
        data() {
            return {
                chart: null,
                mapindex: 0,
                width: '1200px',
                mapData:[
                    {name:'腾讯', value:[
                        {name: '安徽',value: 6 },
                        {name: '北京',value: 0 },
                        {name: '福建',value: 4 },
                        {name: '甘肃',value: 0 },
                        {name: '广东',value: 0 },
                        {name: '广西',value: 0 },
                        {name: '海南',value: 0 },
                        {name: '河北',value: 0 },
                        {name: '河南',value: 6 },
                        {name: '黑龙江',value: 0 },
                        {name: '湖北',value: 0 },
                        {name: '湖南',value:0 },
                        {name: '吉林',value: 0 },
                        {name: '江苏',value: 17 },
                        {name: '江西',value: 0 },
                        {name: '辽宁',value: 6 },
                        {name: '宁夏',value: 0 },
                        {name: '山东',value: 0 },
                        {name: '山西',value: 0 },
                        {name: '陕西',value: 4 },
                        {name: '上海',value: 0 },
                        {name: '四川',value: 0 },
                        {name: '天津',value: 0 },
                        {name: '西藏',value: 0 },
                        {name: '新疆',value: 0 },
                        {name: '云南',value: 4 },
                        {name: '浙江',value: 4 },
                        {name: '重庆',value: 10 },
                        {name: '贵州',value: 0 },
                        {name: '内蒙古',value: 0 },
                        {name: '青海',value: 0 },
                    ]},
                    {name:'爱奇艺', value:[
                        {name: '安徽',value: 3 },
                        {name: '北京',value: 0 },
                        {name: '福建',value: 0 },
                        {name: '甘肃',value: 0 },
                        {name: '广东',value: 0 },
                        {name: '广西',value: 0 },
                        {name: '海南',value: 2 },
                        {name: '河北',value: 0 },
                        {name: '河南',value: 23 },
                        {name: '黑龙江',value: 0 },
                        {name: '湖北',value: 2 },
                        {name: '湖南',value:0 },
                        {name: '吉林',value: 0 },
                        {name: '江苏',value: 0 },
                        {name: '江西',value: 0 },
                        {name: '辽宁',value: 0 },
                        {name: '宁夏',value: 0 },
                        {name: '山东',value: 0 },
                        {name: '山西',value: 0 },
                        {name: '陕西',value: 0 },
                        {name: '上海',value: 0 },
                        {name: '四川',value: 0 },
                        {name: '天津',value: 0 },
                        {name: '西藏',value: 0 },
                        {name: '新疆',value: 0 },
                        {name: '云南',value: 0 },
                        {name: '浙江',value: 0 },
                        {name: '重庆',value: 0 },
                        {name: '贵州',value: 0 },
                        {name: '内蒙古',value: 0 },
                        {name: '青海',value: 0 },
                    ]},
                    {name:'阿里巴巴', value:[
                        {name: '安徽',value: 0 },
                        {name: '北京',value: 0 },
                        {name: '福建',value: 0 },
                        {name: '甘肃',value: 0 },
                        {name: '广东',value: 2 },
                        {name: '广西',value: 0 },
                        {name: '海南',value: 0 },
                        {name: '河北',value: 0 },
                        {name: '河南',value: 0 },
                        {name: '黑龙江',value: 0 },
                        {name: '湖北',value: 0 },
                        {name: '湖南',value:0 },
                        {name: '吉林',value: 0 },
                        {name: '江苏',value: 0 },
                        {name: '江西',value: 0 },
                        {name: '辽宁',value: 0 },
                        {name: '宁夏',value: 0 },
                        {name: '山东',value: 5 },
                        {name: '山西',value: 0 },
                        {name: '陕西',value: 0 },
                        {name: '上海',value: 0 },
                        {name: '四川',value: 0 },
                        {name: '天津',value: 0 },
                        {name: '西藏',value: 0 },
                        {name: '新疆',value: 0 },
                        {name: '云南',value: 0 },
                        {name: '浙江',value: 0 },
                        {name: '重庆',value: 0 },
                        {name: '贵州',value: 0 },
                        {name: '内蒙古',value: 0 },
                        {name: '青海',value: 0 },
                    ]},
                    {name:'优酷土豆网', value:[
                        {name: '安徽',value: 0 },
                        {name: '北京',value: 1 },
                        {name: '福建',value: 0 },
                        {name: '甘肃',value: 0 },
                        {name: '广东',value: 0 },
                        {name: '广西',value: 0 },
                        {name: '海南',value: 0 },
                        {name: '河北',value: 0 },
                        {name: '河南',value: 0 },
                        {name: '黑龙江',value: 0 },
                        {name: '湖北',value: 0 },
                        {name: '湖南',value:0 },
                        {name: '吉林',value: 0 },
                        {name: '江苏',value: 0 },
                        {name: '江西',value: 0 },
                        {name: '辽宁',value: 0 },
                        {name: '宁夏',value: 0 },
                        {name: '山东',value: 0 },
                        {name: '山西',value: 0 },
                        {name: '陕西',value: 0 },
                        {name: '上海',value: 0 },
                        {name: '四川',value: 0 },
                        {name: '天津',value: 0 },
                        {name: '西藏',value: 0 },
                        {name: '新疆',value: 0 },
                        {name: '云南',value: 0 },
                        {name: '浙江',value: 0 },
                        {name: '重庆',value: 0 },
                        {name: '贵州',value: 0 },
                        {name: '内蒙古',value: 0 },
                        {name: '青海',value: 0 },
                    ]},
                    {name:'百度', value:[
                        {name: '安徽',value: 0 },
                        {name: '北京',value: 0 },
                        {name: '福建',value: 0 },
                        {name: '甘肃',value: 0 },
                        {name: '广东',value: 8 },
                        {name: '广西',value: 0 },
                        {name: '海南',value: 0 },
                        {name: '河北',value: 0 },
                        {name: '河南',value: 0 },
                        {name: '黑龙江',value: 0 },
                        {name: '湖北',value: 0 },
                        {name: '湖南',value:0 },
                        {name: '吉林',value: 0 },
                        {name: '江苏',value: 0 },
                        {name: '江西',value: 0 },
                        {name: '辽宁',value: 0 },
                        {name: '宁夏',value: 0 },
                        {name: '山东',value: 0 },
                        {name: '山西',value: 0 },
                        {name: '陕西',value: 0 },
                        {name: '上海',value: 0 },
                        {name: '四川',value: 0 },
                        {name: '天津',value: 0 },
                        {name: '西藏',value: 0 },
                        {name: '新疆',value: 0 },
                        {name: '云南',value: 1 },
                        {name: '浙江',value: 0 },
                        {name: '重庆',value: 0 },
                        {name: '贵州',value: 0 },
                        {name: '内蒙古',value: 0 },
                        {name: '青海',value: 0 },
                    ]},
                    {name:'易视腾科技', value:[
                        {name: '安徽',value: 0 },
                        {name: '北京',value: 0 },
                        {name: '福建',value: 0 },
                        {name: '甘肃',value: 0 },
                        {name: '广东',value: 0 },
                        {name: '广西',value: 0 },
                        {name: '海南',value: 0 },
                        {name: '河北',value: 0 },
                        {name: '河南',value: 0 },
                        {name: '黑龙江',value: 0 },
                        {name: '湖北',value: 0 },
                        {name: '湖南',value:0 },
                        {name: '吉林',value: 0 },
                        {name: '江苏',value: 0 },
                        {name: '江西',value: 0 },
                        {name: '辽宁',value: 0 },
                        {name: '宁夏',value: 0 },
                        {name: '山东',value: 0 },
                        {name: '山西',value: 0 },
                        {name: '陕西',value: 0 },
                        {name: '上海',value: 0 },
                        {name: '四川',value: 0 },
                        {name: '天津',value: 0 },
                        {name: '西藏',value: 0 },
                        {name: '新疆',value: 0 },
                        {name: '云南',value: 0 },
                        {name: '浙江',value: 0 },
                        {name: '重庆',value: 0 },
                        {name: '贵州',value: 0 },
                        {name: '内蒙古',value: 0 },
                        {name: '青海',value: 0 },
                    ]},
                    {name:'芒果TV', value:[
                        {name: '安徽',value: 1 },
                        {name: '北京',value: 0 },
                        {name: '福建',value: 0 },
                        {name: '甘肃',value: 0 },
                        {name: '广东',value: 0 },
                        {name: '广西',value: 0 },
                        {name: '海南',value: 0 },
                        {name: '河北',value: 0 },
                        {name: '河南',value: 0 },
                        {name: '黑龙江',value: 0 },
                        {name: '湖北',value: 0 },
                        {name: '湖南',value:0 },
                        {name: '吉林',value: 0 },
                        {name: '江苏',value: 1 },
                        {name: '江西',value: 0 },
                        {name: '辽宁',value: 0 },
                        {name: '宁夏',value: 0 },
                        {name: '山东',value: 0 },
                        {name: '山西',value: 0 },
                        {name: '陕西',value: 0 },
                        {name: '上海',value: 0 },
                        {name: '四川',value: 0 },
                        {name: '天津',value: 0 },
                        {name: '西藏',value: 0 },
                        {name: '新疆',value: 0 },
                        {name: '云南',value: 0 },
                        {name: '浙江',value: 0 },
                        {name: '重庆',value: 0 },
                        {name: '贵州',value: 0 },
                        {name: '内蒙古',value: 0 },
                        {name: '青海',value: 0 },
                    ]},
                    {name:'搜狐', value:[
                        {name: '安徽',value: 0 },
                        {name: '北京',value: 0 },
                        {name: '福建',value: 0 },
                        {name: '甘肃',value: 0 },
                        {name: '广东',value: 0 },
                        {name: '广西',value: 0 },
                        {name: '海南',value: 0 },
                        {name: '河北',value: 0 },
                        {name: '河南',value: 0 },
                        {name: '黑龙江',value: 0 },
                        {name: '湖北',value: 4 },
                        {name: '湖南',value:0 },
                        {name: '吉林',value: 0 },
                        {name: '江苏',value: 0 },
                        {name: '江西',value: 0 },
                        {name: '辽宁',value: 0 },
                        {name: '宁夏',value: 0 },
                        {name: '山东',value: 0 },
                        {name: '山西',value: 0 },
                        {name: '陕西',value: 0 },
                        {name: '上海',value: 0 },
                        {name: '四川',value: 0 },
                        {name: '天津',value: 0 },
                        {name: '西藏',value: 0 },
                        {name: '新疆',value: 0 },
                        {name: '云南',value: 0 },
                        {name: '浙江',value: 0 },
                        {name: '重庆',value: 0 },
                        {name: '贵州',value: 0 },
                        {name: '内蒙古',value: 0 },
                        {name: '青海',value: 0 },
                    ]},
                    {name:'新浪', value:[
                        {name: '安徽',value: 0 },
                        {name: '北京',value: 0 },
                        {name: '福建',value: 0 },
                        {name: '甘肃',value: 0 },
                        {name: '广东',value: 0 },
                        {name: '广西',value: 0 },
                        {name: '海南',value: 0 },
                        {name: '河北',value: 0 },
                        {name: '河南',value: 0 },
                        {name: '黑龙江',value: 0 },
                        {name: '湖北',value: 0 },
                        {name: '湖南',value:0 },
                        {name: '吉林',value: 0 },
                        {name: '江苏',value: 1 },
                        {name: '江西',value: 0 },
                        {name: '辽宁',value: 0 },
                        {name: '宁夏',value: 0 },
                        {name: '山东',value: 0 },
                        {name: '山西',value: 0 },
                        {name: '陕西',value: 0 },
                        {name: '上海',value: 0 },
                        {name: '四川',value: 0 },
                        {name: '天津',value: 0 },
                        {name: '西藏',value: 0 },
                        {name: '新疆',value: 0 },
                        {name: '云南',value: 0 },
                        {name: '浙江',value: 0 },
                        {name: '重庆',value: 0 },
                        {name: '贵州',value: 0 },
                        {name: '内蒙古',value: 0 },
                        {name: '青海',value: 0 },
                    ]},
                ]
            };
        },
        methods:{
            drawPie1(id){
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption({
                    title:{
                        text:`拥塞链路 \n ${jamLinkRole.all}`,
                        x: 'center',
                        y: '50%',
                        itemGap: 50,
                        textStyle
                    },
                    gird:{
                        top:'20%'
                    },
                    tooltip : {
                        show: true,
                        formatter: "{b} : {c}",
                        backgroundColor:'rgba(255,255,255,0.9)',
                        padding:10,
                        textStyle:{
                            color: '#333'
                        },
                    },
                    color:['#4CDEEF', '#AFFD87','#566EFF','#EF5E80','#F4D64A','#F27554','#3ABAA0'],
                    legend: {
                        orient : 'vertical',
                        x : document.getElementById('circle1').offsetWidth / 2+100,
                        y : 60,
                        itemGap:5,
                        itemWidth:15,
                        itemHeight:15,
                        data:jamLinkRole.legendData,
                        textStyle:{
                            color:'white'
                        }
                    },
                    series : [
                        {
                            name:'1',
                            type:'pie',
                            clockWise:false,
                            radius : ['70%','80%'],
                            itemStyle : dataStyle,
                            endAngle:'',
                            data:[
                                {
                                    value:61,
                                    name:'腾讯'
                                },
                                {
                                    value:39,
                                    name:'invisible',
                                    itemStyle : placeHolderStyle
                                }
                            ]
                        },
                        {
                            name:'2',
                            type:'pie',
                            clockWise:false,
                            radius : ['60%', '70%'],
                            itemStyle : dataStyle,
                            data:[
                                {
                                    value:30,
                                    name:'爱奇艺'
                                },
                                {
                                    value:70,
                                    name:'invisible',
                                    itemStyle : placeHolderStyle
                                }
                            ]
                        },
                        {
                            name:'3',
                            type:'pie',
                            clockWise:false,
                            radius : ['50%', '60%'],
                            itemStyle : dataStyle,
                            data:[
                                {
                                    value:9,
                                    name:'百度'
                                },
                                {
                                    value:91,
                                    name:'invisible',
                                    itemStyle : placeHolderStyle
                                }
                            ]
                        },
                        {
                            name:'4',
                            type:'pie',
                            clockWise:false,
                            radius : ['40%', '50%'],
                            itemStyle : dataStyle,
                            data:[
                                {
                                    value:7,
                                    name:'阿里巴巴'
                                },
                                {
                                    value:93,
                                    name:'invisible',
                                    itemStyle : placeHolderStyle
                                }
                            ]
                        },
                        {
                            name:'5',
                            type:'pie',
                            clockWise:false,
                            radius : ['30%', '40%'],
                            itemStyle : dataStyle,
                            data:[
                                {
                                    value:4,
                                    name:'搜狐'
                                },
                                {
                                    value:96,
                                    name:'invisible',
                                    itemStyle : placeHolderStyle
                                }
                            ]
                        },
                        {
                            name:'6',
                            type:'pie',
                            clockWise:false,
                            radius : ['20%', '30%'],
                            itemStyle : dataStyle,
                            data:[
                            {
                                value:4,
                                name:'360'
                            },
                            {
                                value:96,
                                name:'invisible',
                                itemStyle : placeHolderStyle
                            },
                        ]},
                        {
                            name:'7',
                                type:'pie',
                            clockWise:false,
                            radius : ['10%', '20%'],
                            itemStyle : dataStyle,
                            data:[
                            {
                                value:1,
                                name:'优酷土豆网'
                            },
                            {
                                value:99,
                                name:'invisible',
                                itemStyle : placeHolderStyle
                            }
                        ]}
                    ]
                })
            },
            drawPie2(id){
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption({
                    title: {
                        text: '拥塞带宽',
                        x:'center',
                        textStyle,
                        y:10
                    },
                    legend: {
                        x: document.getElementById("circle2").offsetWidth/3*2,
                        y:20,
                        data: ['拥塞带宽(单位Gbps)'],
                        itemWidth:18,
                        itemHeight:18,
                        textStyle:{
                            color:'white'
                        }
                    },
                    color:['#F27554'],
                    tooltip: {
                        trigger: 'axis',
                        backgroundColor:'rgba(255,255,255,0.9)',
                        padding:10,
                        textStyle:{
                            color: '#333'
                        },
                    },
                    grid: {
                        bottom: '10%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data:jamLinkRole.legendData,
                        axisLabel:{
                            interval:0,//横轴信息全部显示
                        },
                        axisLine,
                        splitLine:{
                            show:false
                        }
                    },
                    yAxis: {
                        type: 'value',
                        max:600,
                        splitLine:{
                            show:false
                        },
                        axisLine
                    },
                    series: [
                        {
                            name:'拥塞带宽(单位Gbps)',
                            type:'line',
                            data:jamLinkRole.jamBandwidthG,
                            symbol:'diamond',
                            symbolSize:'15'
                        }
                    ]
                })
            },
            drawPie3(id){
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption({
                    title: {
                        text: '拥塞占比',
                        x:'center',
                        textStyle,
                        y:10
                    },
                    legend: {
                        x: document.getElementById("circle3").offsetWidth/3*2,
                        y:20,
                        data: ['拥塞占比'],
                        icon:"circle",
                        textStyle:{
                            color:'white'
                        }
                    },
                    grid: {
                        left:"3%",
                        bottom: '10%',
                        containLabel: true
                    },
                    xAxis: {
                        show:false,
                        data:jamLinkRole.legendData,
                        boundaryGap: false,
                        axisLabel:{
                            interval:'auto',//横轴信息全部显示
                        },
                        axisLine,
                        splitLine:{
                            show:false
                        }
                    },
                    yAxis: {
                        max:12,
                        splitLine: {
                            show:false
                        },
                        axisLine,
                        axisLabel: {
                            show: true,
                            interval: 'auto',
                            formatter: '{value}.00 %'
                        },
                    },
                    series: [{
                        name: '拥塞占比',
                        data:jamLinkRole.jamPercent,
                        type: 'scatter',
                        symbolSize: function (data) {
                            return data * 10;
                        },
                        label: {
                            emphasis: {
                                show: true,
                                position: 'top',
                            }
                        },
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    position: 'inside',
                                    formatter: '{b}:\n{c}%'
                                },
                                color:'#57B3f5'
                            }
                        }
                    }]
                })
            },
            drawLine(id){
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption({
                    title:{
                        text:"ICP 拥塞链路分析(2017年)",
                        x:'center',
                        y:20,
                        textStyle,
                    },
                    tooltip : {
                        trigger: 'axis',
                        backgroundColor:'rgba(255,255,255,0.9)',
                        padding:10,
                        textStyle:{
                            color: '#333'
                        },
                    },
                    legend:{
                      data:["拥塞链路数","解决拥塞链路数"],
                        x:document.getElementById("left_top").offsetWidth/3*2+80,
                        y:25,
                        textStyle:{
                          color:'white'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '2%',
                        containLabel: true
                    },
                    color:['#EF5E80','#F4D64A'],
                    xAxis : [
                        {
                            type : 'category',
                            data : ['1月份','2月份','3月份','4月份','5月份','6月份',],
                            splitLine:{
                                show:false
                            },
                            axisLine
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            max:140,
                            splitLine:{
                                show:false
                            },
                            splitNumber:7,
                            axisLine
                        }
                    ],
                    series : [
                        {
                            name:'拥塞链路数',
                            type:'line',
                            data:[95, 87, 89, 101, 133, 115],
                            symbol:'diamond',
                            symbolSize: 14,
                        },
                        {
                            name:'解决拥塞链路数',
                            type:'line',
                            data:[32,43,39,42,45,48],
                            symbol:'rect',
                            symbolSize: 10,
                        }
                    ]
                })
            },
            drawLine2(id){
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption({
                    title: {
                        text: 'ICP 拥塞解决分析(2017年)',
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
                    legend: {
                        data: ['解决拥塞链路数'],
                        x:document.getElementById("left_bot").offsetWidth/3*2+70,
                        itemWidth:15,
                        itemHeight:15,
                        y:30,
                        textStyle:{
                            color:'white'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        splitLine:{
                            show:false
                        },
                        axisLine
                    },
                    yAxis :
                        {
                            type : 'category',
                            data:["腾讯", "爱奇艺", "阿里巴巴", "优酷土豆网","百度", "360", "芒果TV","搜狐","汽车之家","PPTV"],
                            inverse:true,
                            axisLine
                        },
                    series: [
                        {
                            name:'解决拥塞链路数',
                            type:'bar',
                            barWidth: '60%',
                            data:[72,65,35,32,15,8,7,6,5,4],
                            itemStyle:{
                                normal:{
                                    color:'#3ABAA0'
                                }
                            }
                        }
                    ]
                })
            },
            drawMap(id){
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption({
                    backgroundColor: '#1d2b46',
                    title:{
                        text:'拥塞地图',
                        textStyle,
                        left:'40%',
                        y:20
                    },
                    legend:{
                        data:['腾讯'],
                        right:'10%',
                        itemWidth:15,
                        itemHeight:15,
                        top:30,
                        textStyle:{
                            color:'#FFF',
                            fontSize: 14
                        }
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    visualMap: {
                        min: 0,
                        max: 5,
                        left: '5%',
                        bottom:'10%',
                        text: ['高','低'],           // 文本，默认为数值文本
                        calculable: true,
                        inRange: {
                            color: ['#1d2b46', '#ef5e80']
                        },
                        textStyle:{
                            color:'#5971a3'
                        }
                    },
                    series: [
                        {
                            name: '腾讯',
                            type: 'map',
                            mapType: 'china',
                            roam: false,
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#ef5e80',
                                    areaColor: '#ef5e80',
                                    borderColor: 'rgba(100,149,237,1)',
                                    opacity: '0.6'
                                },
                                emphasis: {
                                    areaColor: '#FF678C',
                                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                                    shadowBlur: 10,
                                    opacity: '0.8'
                                }
                            },
                            data:this.mapData[0].value
                        }]
                });
            },
            changeMap(index){
                this.mapindex = index;
                this.chart = echarts.init(document.getElementById('right_content'));
                this.chart.setOption({
                    title:{
                        text:'拥塞地图',
                        textStyle,
                        left:'40%',
                        y:20
                    },
                    legend:{
                        data:[this.mapData[index].name],
                        right:'10%',
                        itemWidth:15,
                        itemHeight:15,
                        top:30,
                        textStyle:{
                            color:'#FFF',
                            fontSize: 14
                        }
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    visualMap: {
                        min: 0,
                        max: 5,
                        left: '5%',
                        bottom:'10%',
                        text: ['高','低'],
                        calculable: true,
                        inRange: {
                            color: ['#1d2b46', '#ef5e80']
                        },
                        textStyle:{
                            color:'#5971a3'
                        }
                    },
                    series:[
                        {
                            name: this.mapData[index].name,
                            type: 'map',
                            mapType: 'china',
                            roam: false,
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#ef5e80',
                                    areaColor: '#ef5e80',
                                    borderColor: 'rgba(100,149,237,1)',
                                    opacity: '0.6'
                                },
                                emphasis: {
                                    areaColor: '#FF678C',
                                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                                    shadowBlur: 10,
                                    opacity: '0.8'
                                }
                            },
                            data:this.mapData[index].value
                        }]
                })
            }
        },
        mounted(){
            this.$nextTick(function() {
                this.drawPie1("circle1");
                this.drawPie2("circle2");
                this.drawPie3("circle3");
                this.drawLine("left_top");
                this.drawLine2("left_bot");
                this.drawMap("right_content");
            });
        }
    }
</script>
