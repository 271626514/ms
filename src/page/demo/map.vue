<template>
    <div id="demo-map-container">
        <div class="clearfix">
            <span class="select pull-left">
                <Select v-model="defaultSelect.value" style="width:200px">
                    <Option v-for="item in mapList" :value="item.value" :key="item.value" @click="checkPage">{{ item.label }}</Option>
                </Select>
            </span>
            <span class="update-time pull-right">
                2017-08-01 18:00
            </span>
        </div>
        <div class="demo-map-item">
            <router-view></router-view>
        </div>
    </div>
</template>
<style lang="less">
#demo-map-container{
    background: #1d2b46;
    width: 1600px;
    height: 1200px;
}
.demo-map-item{
    background: #1d2b46;
}
.update-time{
    font-size: 14px;
    color: #FFF;
}
.clearfix{
    overflow: hidden;
    zoom: 1;
}
.h350{
    height: 350px;
}
</style>
<script type="text/ecmascript-6">

    export default{
        data(){
            return {
                mapList:[
                    {
                        label:'全网流量分析',
                        value: 'map1'
                    },
                    {
                        label: '互联网流量分析',
                        value: 'map2'
                    },
                    {
                        label: '国际流量分析',
                        value: 'map3'
                    },
                    {
                        label: '拥塞监控效果提升',
                        value: 'map4'
                    },
                    {
                        label: 'tab5',
                        value: 'map5'
                    },
                    {
                        label: 'tab6',
                        value: 'map6'
                    }
                ],
                defaultSelect:{
                    label:'全网流量分析',
                    value: 'map1'
                }
            }
        },
        methods:{
            checkPage(value){

            }
        }
    }

</script>
