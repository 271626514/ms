<template>
    <div>
        <div id="map_container"></div>
    </div>
</template>
<script>
    import highcharts from 'highcharts'
    import exporting from 'highcharts/modules/exporting'
    exporting(highcharts)

    export default{
        data() {
            return {}
        },
        methods:{
            drawPie(id){
                this.chart = new highcharts.Chart(id,{
                    chart: {
                        type: 'bar'                           //指定图表的类型，默认是折线图（line）
                    },
                    title: {
                        text: '我的第一个图表'                 //指定图表标题
                    },
                    xAxis: {
                        categories: ['苹果', '香蕉', '橙子']   //指定x轴分组
                    },
                    yAxis: {
                        title: {
                            text: 'something'                 //指定y轴的标题
                        }
                    },
                    series: [{                                 //指定数据列
                        name: '小明',                          //数据列名
                        data: [1, 0, 4]                        //数据
                    }, {
                        name: '小红',
                        data: [5, 7, 3]
                    }]
                });
            }
        },
        mounted(){
            /*this.$nextTick(function(){
                this.drawPie('table')
            })*/
            this.drawPie('table')

        }
    }
</script>