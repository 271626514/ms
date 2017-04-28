<template>
    <div class="main">
        <div id="ditu"></div>
    </div>
</template>
<style lang="less">
#ditu{
    width: 800px;
    height: 700px;
    margin: 0 auto;
    padding: 20px;
}
</style>
<script type="text/ecmascript-6">
    import echarts from 'echarts'
    import china from 'echarts/map/js/china'
    export default{
        data() {
            return{
                cp_data: [],
            }
        },
        mounted(){
            const that = this;
            let empty = {
                name:"南海诸岛",
                value:0,
                itemStyle:{
                    normal:{
                        opacity:0
                        },
                    label:{show:false}
                    }
            };
            this.$http.get('static/cp_data.json').then(function(res){
                let _array = [];
                for(let i=0;i<res.data.data.length;i++){
                    let _temp = new Object();
                    _temp.name = res.data.data[i].province;
                    _temp.value = Number((res.data.data[i].value/1024/1024/1024).toFixed(2));
                    _array.push(_temp);
                }
                _array.push(empty)
                that.cp_data = _array;
                that.drawPie('ditu');
            });
        },
        methods: {
            drawPie(id){
                this.chart = echarts.init(document.getElementById(id),{width:'700px'})
                this.chart.setOption({
                    title: {
                        text: '全网统建CDN网络流量视图',
                        left: 'center',
                        textStyle: {
                            color: '#333',
                            fontSize: 30
                        }
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    textStyle: {
                        color: '#FFF'
                    },
                    visualMap: {
                        min: 0,
                        max: 200,
                        left: 'left',
                        top: 'bottom',
                        calculable: true,
                        orient: 'horizontal',
                        itemHeight: '200px',
                        left: 'center',
                        calculable: false,
                        text: ['200','0'],
                        top: '50px',
                        textStyle: {
                            color: '#333'
                        },
                        inRange: {
                            color: ['#55C3FF','#2B3439']
                        }
                    },
                    toolbox: {
                        show: false,
                    },
                    series: [
                        {
                            name: '总流量',
                            type: 'map',
                            mapType: 'china',
                            roam: false,
                            itemStyle:{
                                emphasis: {
                                    areaColor:'rgba(0,255,0,0.5)',
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 0,
                                    shadowBlur: 20,
                                    borderWidth: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            },
                            label: {
                                normal: {
                                    show: true,
                                    formatter: '{b}',
                                    textStyle: {
                                        color: '#FFF'
                                    }
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data:this.cp_data
                        }
                    ]
                })
            }
        }
    }
</script>
