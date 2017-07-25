<template>
    <div id="map">
        <!--<h1>内容流量全网资源平台</h1>-->
        <ul class="header_show">
            <li id="circle1" :style="{width:'300px',height:'300px'}"></li>
            <li id="circle2" :style="{width:'300px',height:'300px'}"></li>
            <li id="circle3" :style="{width:'300px',height:'300px'}"></li>
            <li id="circle4" :style="{width:'300px',height:'300px'}"></li>
        </ul>
        <ul class="footer_show">
            <li class="left">
                <div id="left_top" :style="{width:'480px',height:'300px'}"></div>
                <div id="left_bot" :style="{width:'480px',height:'300px'}"></div>
            </li>
            <li class="right">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                </ul>
                <div id="right_content" :style="{width:'720px',height:'510px'}"></div>
            </li>
        </ul>
    </div>
</template>
<style lang="less">
    #map{
        width:100%;
        height: 900px;
    .header_show{
            width: 1200px;
            margin: 0 auto;
            li{
                float: left;
            }
        }
    .footer_show{
        width: 1200px;
        margin: 0 auto;
        li{
            float: left;
        }
        .left{
            width: 40%;
            height:600px;
            #left_top,#left_bot{
                height:50%;
            }
        }
        .right{
            width: 60%;
            height: 600px;
            ul{
                height: 15%;
                li{
                    float: left;
                    width: 10%;
                }
            }

        }
    }
    }
</style>
<script type="text/ecmascript-6">
    import echarts from 'echarts'
    export default{
        data() {
            return {
                chart: null,
                width: '1200px'
            };
        },
        methods:{
            drawPie1(id){
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption({
                    title:{
                        subtext:"拥塞链路数"
                    },
                    tooltip: {},
                    series: [{
                        name: '拥塞链路数',
                        type: 'pie',
                        radius: ['30%', '50%'],
                        data: [
                            {value:61,name:"腾讯"},
                            {value:30,name:"爱奇艺"},
                            {value:9,name:"百度"},
                            {value:7,name:"阿里巴巴"},
                            {value:7,name:"搜狐"},
                            {value:2,name:"360"},
                            {value:1,name:"优酷土豆网"},
                        ]
                    }]
                })
            },
            drawPie2(id){
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption({
                    title:{
                        subtext:"解决拥塞数"
                    },
                    tooltip: {},
                    series: [{
                        name: '解决拥塞数',
                        type: 'pie',
                        radius: ['30%', '50%'],
                        data: [
                            {value:29,name:"腾讯"},
                            {value:19,name:"爱奇艺"},
                            {value:2,name:"百度"},
                            {value:2,name:"阿里巴巴"},
                            {value:1,name:"搜狐"},
                            {value:1,name:"360"},
                            {value:0,name:"优酷土豆网"},
                        ]
                    }]
                })
            },
            drawPie3(id){
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption({
                    title:{
                        subtext:"拥塞带宽(单位G)"
                    },
                    tooltip: {},
                    series: [{
                        name: '拥塞带宽(单位G)',
                        type: 'pie',
                        radius: ['30%', '50%'],
                        data: [
                            {value:610,name:"腾讯"},
                            {value:300,name:"爱奇艺"},
                            {value:90,name:"百度"},
                            {value:70,name:"阿里巴巴"},
                            {value:40,name:"搜狐"},
                            {value:20,name:"360"},
                            {value:10,name:"优酷土豆网"},
                        ]
                    }]
                })
            },
            drawPie4(id){
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption({
                    title:{
                        subtext:"拥塞占比"
                    },
                    tooltip: {
                        formatter: '{b}\n{c}%'
                    },
                    series: [{
                        name: '拥塞占比',
                        type: 'pie',
                        radius: ['30%', '50%'],
                        label: {
                            show: true,
                            position: 'top',
                            formatter: '{b}\n{c}%'
                        },
                        data: [
                            {value:6.40,name:"腾讯"},
                            {value:5.42,name:"爱奇艺"},
                            {value:9.47,name:"百度"},
                            {value:1.82,name:"阿里巴巴"},
                            {value:9.30,name:"搜狐"},
                            {value:6.25,name:"360"},
                            {value:0.40,name:"优酷土豆网"},
                        ]
                    }]
                })
            },
            drawLine(id){
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption({
                    tooltip : {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: 'red'
                            }
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data : ['周一','周二','周三','周四','周五','周六','周日']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'邮件营销',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name:'联盟广告',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name:'视频广告',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name:'直接访问',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name:'搜索引擎',
                            type:'line',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            areaStyle: {normal: {}},
                            data:[820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                })
            },
            drawLine2(id){
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption({
                    tooltip : {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: 'red'
                            }
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data : ['周一','周二','周三','周四','周五','周六','周日']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'邮件营销',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name:'联盟广告',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name:'视频广告',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name:'直接访问',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name:'搜索引擎',
                            type:'line',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            areaStyle: {normal: {}},
                            data:[820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                })
            },
            drawMap(id){
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption({
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data:['msg1','msg2','msg3']
                    },
                    visualMap: {
                        min: 0,
                        max: 2500,
                        left: 'left',
                        top: 'bottom',
                        text: ['高','低'],           // 文本，默认为数值文本
                        calculable: true
                    },
                    series: [
                        {
                            name: 'msg3',
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
                            data:[
                                {name: '北京',value: 80 },
                                {name: '天津',value: 60 },
                                {name: '上海',value: 70 },
                                {name: '重庆',value: 45 },
                                {name: '河北',value: 69 },
                                {name: '河南',value: 85 },
                                {name: '云南',value: 150 },
                                {name: '辽宁',value: 110 },
                                {name: '黑龙江',value: 125 },
                                {name: '湖南',value: 312 },
                                {name: '安徽',value:212 },
                                {name: '山东',value: 245 },
                                {name: '新疆',value: 90 },
                                {name: '江苏',value: 85 },
                                {name: '浙江',value: 75 },
                                {name: '江西',value: 78 },
                                {name: '湖北',value: 96 },
                                {name: '广西',value: 110 },
                                {name: '甘肃',value: 55 },
                                {name: '山西',value: 48 },
                                {name: '内蒙古',value: 115 },
                                {name: '陕西',value: 123 },
                                {name: '吉林',value: 70 },
                                {name: '福建',value: 60 },
                                {name: '贵州',value:86 },
                                {name: '广东',value: 55 },
                                {name: '青海',value: 88 },
                                {name: '西藏',value: 91 },
                                {name: '四川',value: 134 },
                                {name: '宁夏',value: 120 },
                                {name: '海南',value: 108 },
                                {name: '台湾',value: 54 },
                                {name: '香港',value: 98 },
                                {name: '澳门',value: 110 }
                            ]
                        },
                        {
                            name: 'msg2',
                            type: 'map',
                            mapType: 'china',
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data:[
                                {name: '北京',value: 120 },
                                {name: '天津',value: 110 },
                                {name: '上海',value: 100 },
                                {name: '重庆',value: 120 },
                                {name: '河北',value: 100 },
                                {name: '安徽',value: 110},
                                {name: '新疆',value: 50 },
                                {name: '浙江',value: 80 },
                                {name: '江西',value: 60 },
                                {name: '山西',value: 60 },
                                {name: '内蒙古',value: 80 },
                                {name: '吉林',value: 70 },
                                {name: '福建',value: 28 },
                                {name: '广东',value: 75 },
                                {name: '西藏',value: 69 },
                                {name: '四川',value: 73 },
                                {name: '宁夏',value: 46 },
                                {name: '香港',value: 80},
                                {name: '澳门',value: 120 }
                            ]
                        },
                        {
                            name: 'msg1',
                            type: 'map',
                            mapType: 'china',
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data:[
                                {name: '北京',value: 10 },
                                {name: '天津',value: 20 },
                                {name: '上海',value: 30 },
                                {name: '广东',value: 10 },
                                {name: '台湾',value: 20 },
                                {name: '香港',value: 30 },
                                {name: '澳门',value: 40 }
                            ]
                        }
                    ]
                })
            }
        },
        mounted(){
            this.$nextTick(function() {
                this.drawPie1("circle1");
                this.drawPie2("circle2");
                this.drawPie3("circle3");
                this.drawPie4("circle4");
                this.drawLine("left_top");
                this.drawLine2("left_bot");
                this.drawMap("right_content");
            });
        }
    }
</script>
