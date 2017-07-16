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
        <h1>全网流量地图 （图例）</h1>
        <h2>网络部 <span>2017-06-30 13:00</span></h2>
        <div class="map">
            <div id="china-map-content">

            </div>
        </div>
        <my-foot></my-foot>
    </div>
</template>
<style lang="less">
#china-map-content{
    background: #1b1b1b;
    width: 100%;
    height: 600px;
    margin-bottom: 130px;
}
</style>
<script type="text/ecmascript-6">
    import echarts from 'echarts';
    import china from 'echarts/map/js/china'
    import myFoot from '../../components/common/foot'
    import myHead from '../../components/common/header'
    import {echartData} from '../../assets/js/data'
    var geoCoordMap = {
        '上海': [121.4648,31.2891],
        '乌鲁木齐': [87.9236,43.5883],
        '兰州': [103.5901,36.3043],
        '北京': [116.4551,40.2539],
        '南京': [118.8062,31.9208],
        '南宁': [108.479,23.1152],
        '南昌': [116.0046,28.6633],
        '合肥': [117.29,32.0581],
        '呼和浩特': [111.4124,40.4901],
        '哈尔滨': [127.9688,45.368],
        '天津': [117.4219,39.4189],
        '太原': [112.3352,37.9413],
        '广州': [113.5107,23.2196],
        '成都': [103.9526,30.7617],
        '拉萨': [91.1865,30.1465],
        '昆明': [102.9199,25.4663],
        '杭州': [119.5313,29.8773],
        '武汉': [114.3896,30.6628],
        '沈阳': [123.1238,42.1216],
        '济南': [117.1582,36.8701],
        '海口': [110.3893,19.8516],
        '石家庄': [114.4995,38.1006],
        '福州': [119.4543,25.9222],
        '西宁': [101.4038,36.8207],
        '西安': [109.1162,34.2004],
        '贵阳': [106.6992,26.7682],
        '郑州': [113.4668,34.6234],
        '重庆': [107.7539,30.1904],
        '银川': [106.3586,38.1775],
        '长春': [125.8154,44.2584],
        '长沙': [113.0823,28.2568],
    };
    var BJData = [
        [{name:'北京'}, {name:'乌鲁木齐',value:95}],
        [{name:'北京'}, {name:'广州',value:90}],
        [{name:'北京'}, {name:'兰州',value:80}],
        [{name:'北京'}, {name:'南宁',value:70}],
        [{name:'北京'}, {name:'南昌',value:60}],
        [{name:'北京'}, {name:'拉萨',value:50}],
        [{name:'北京'}, {name:'长春',value:40}],
        [{name:'北京'}, {name:'昆明',value:30}],
        [{name:'北京'}, {name:'重庆',value:20}],
        [{name:'北京'}, {name:'西安',value:10}]
    ];

    var convertData = function (data) {
        console.log(data);
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord]
                });
            }
        }
        return res;
    };

    var color = '#a6c84c';
    var series = [
        {
            name: '全国CDN流量',
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 2
            },
            lineStyle: {
                normal: {
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(BJData)
        },
        {
            name: '全国CDN流量',
            type: 'lines',
            zlevel: 2,
            symbol: ['none'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                smooth:true,
                symbol: ['none', 'circle'],
                symbolSize: 1
            },
            lineStyle: {
                normal: {
                    color: color,
                    width: 1,
                    opacity: 0.6,
                    curveness: 0.2
                }
            },
            data: convertData(BJData)
        },
        {
            name: '全国CDN流量',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke',
                scale: 3.5
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function (val) {
                return val[2] / 6;
            },
            itemStyle: {
                normal: {
                    color: color
                }
            },
            data: BJData.map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })
        }];

    let option = {
        backgroundColor: '#1b1b1b',
        tooltip : {
            trigger: 'item'
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#1b1b1b',
                    borderColor: 'rgba(100,149,237,1)'
                },
                emphasis: {
                    areaColor: '#1b1b1b'
                }
            }
        },
        dataRange: {
            min : 0,
            max : 100,
            color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
            textStyle:{
                color:'#fff'
            }
        },
        series: series
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
            }
        },
        mounted(){
            this.$nextTick(function() {
                this.drawmap('china-map-content');
            });
        },
        components:{
            myHead,myFoot
        }
    }
</script>
