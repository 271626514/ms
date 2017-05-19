<template>
    <div id="map">
        <div class="header">
            <div class="pull-left logo-info">
                <img src="../../assets/imgs/logo.png">
                <span>全网流量资源管理平台</span>
            </div>
        </div>
        <div class="map">
            <div class="map-nav">
                <span class="active">
                    设备视图
                </span>
                <span>
                    端口视图
                </span>
                <span>
                    上行流量
                </span>
                <span>
                    下行流量
                </span>
            </div>
            <div id="map-content">

            </div>
        </div>
        <my-foot></my-foot>
    </div>
</template>
<style lang="less">
#map{}
.map{
    width: 1200px;
    margin: 70px auto;
    padding-top:30px;
}
.map-nav{
    float: right;
    span{
        width: 90px;
        height: 36px;
        font-size: 14px;
        color: #333;
        background: #f0f5fd;
        text-align: center;
        line-height: 36px;
        display: inline-block;
        cursor: pointer;
        &.active{
            background: #3694f2;
            color: #FFF;
         }
    }
}
#map-content{
    height: 490px;
    float: left;
    width: 100%;
}
</style>
<script type="text/ecmascript-6">
    import myFoot from '../../components/common/foot'
    import Highcharts from 'highcharts/highmaps'
    import exporting from 'highcharts/modules/exporting'
    exporting(Highcharts)

    export default{
        data() {
            return {
                map : null
            }
        },
        computed:{

        },
        methods:{
            drawPie(id){
                this.$http.get('../../../static/cp_data.json').then((res)=>{

                        var data = [];
                        console.log(mapdata)
                        Highcharts.each(mapdata.features,function(md,index){

                            data.push({
                                //    name: md.properties.name,
                                //    value: Math.floor((Math.random() * 100) + 1) // 生成 1 ~ 100 随机值
                            })
                        });
                        this.map = new Highcharts.Map(id,{
                            title: {
                                text: '全网设备实时流量'
                            },
                            subtitle: {
                                text: '<a href="https://www.hcharts.cn/mapdata">点击查看地图数据及详情</a>'
                            },
                            mapNavigation: {
                                enabled: true,
                                buttonOptions: {
                                    verticalAlign: 'bottom'
                                }
                            },
                            tooltip: {
                                useHTML: true,
                                headerFormat: '<table><tr><td>{point.name}</td></tr>',
                                pointFormat: '<tr><td>全称</td><td>{point.properties.fullname}</td></tr>' +
                                '<tr><td>行政编号</td><td>{point.properties.areacode}</td></tr>' +
                                '<tr><td>父级</td><td>{point.properties.parent}</td></tr>' +
                                '<tr><td>经纬度</td><td>{point.properties.longitude},{point.properties.latitude}</td></tr>' ,
                                footerFormat: '</table>'
                            },
                            colorAxis: {
                                min: 0,
                                minColor: '#fff',
                                maxColor: '#006cee',
                                labels:{
                                    style:{
                                        "color":"red","fontWeight":"bold"
                                    }
                                }
                            },
                            series: [{
                                data: data,
                                mapData: mapdata,
                                joinBy: 'name',
                                name: '中国地图',
                                states: {
                                    hover: {
                                        color: '#a4edba'
                                    }
                                }
                            }]
                        })
                    })
                }
        },
        mounted(){
            this.drawPie('map-content')
        },
        components:{
            myFoot
        }
    }
</script>
