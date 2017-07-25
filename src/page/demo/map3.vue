<template>
    <div id="map">
        <div class="main_container">
            <div class="top_show">
                <div id="chart1"></div>
                <div class="top_rightShow">
                    <div id="chart2"></div>
                    <div id="chart3"></div>
                </div>
            </div>
            <div id="chart4"></div>
        </div>
    </div>
</template>
<style lang="less">
#map{
    width: 100%;
    .main_container{
        width: 1200px;
        margin:0 auto;
        height: 900px;
    }
    .top_show{
        width: 100%;
        height: 65%;
        #chart1{
            float: left;
            width: 40%;
            height: 100%;
        }
        .top_rightShow{
            float: left;
            width: 60%;
            height: 100%;
            #chart2{
                width: 100%;
                height: 50%;
                background-color:green;
            }
            #chart3{
                width: 100%;
                height: 50%;
                background-color:yellow;
            }
        }
    }
    #chart4{
        width: 100%;
        height: 35%;
        background-color: #ccc;
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

        },
        mounted(){
            this.$nextTick(function() {
            });
        }
    }
</script>
