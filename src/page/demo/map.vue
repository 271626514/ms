<template>
    <div id="demo-map-container">
        <h1>
            <span class="select left">
                <Select v-model="defaultSelect.value" @on-change="checkPage">
                    <Option v-for="item in mapList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </span>
            内容流量网络全网资源管理平台
            <b>2017-08-01 18:00</b>
        </h1>
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
    margin: 0 auto;
    padding: 0 20px 20px 20px;
    h1{
        font-size: 24px;
        height: 60px;
        line-height: 60px;
        font-weight: normal;
        color: #FFF;
        position: relative;
        text-align: center;
        .select{
            position: absolute;
            left: 0;
            line-height: normal;
            bottom:-3px;
            width: 300px;
            height: 50px;
            background: url(../../assets/imgs/select_bg.png) no-repeat;
            background-size:contain;
            .ivu-select-dropdown{
                border-radius: 0;
                margin: 0;
                padding: 0;
                min-height: 240px;
                background: transparent;
                color: #FFF;
                font-size: 14px;
                width: 263px !important;
            }
            .ivu-select-selected-value{
                height: 50px;
            }
            .ivu-select-selection{
                border:0;
                background: none;
                height: 50px;
                box-shadow: none;
            }
            .ivu-select-item{
                height: 40px;
                text-align: left;
            }
            .ivu-select-item-selected, .ivu-select-item-selected:hover,.ivu-select-item:hover{
                background: #1d2b46;
                color:#f8db54
            }
            .ivu-select-item.ivu-select-item-selected{
                color: #f8db54;
            }
            .ivu-select-item{
                font-size: 16px !important;
                color: #FFF;
                background: #1d2b46;
                filter:alpha(opacity=80);
                -moz-opacity:0.8;
                -khtml-opacity: 0.8;
                opacity: 0.8;
            }
            .ivu-select-arrow{
                right:35px;
                font-size: 20px;
                color: #FFF;
            }
            .ivu-select-single .ivu-select-selection .ivu-select-placeholder, .ivu-select-single .ivu-select-selection .ivu-select-selected-value{
                font-size: 20px;
                color: #FFF;
                line-height: 50px;
                text-align: left;
                padding-left: 20px;
            }
        }
    }
    .border{
        border: 2px solid #2c3e65;
    }
    .ivu-select.ivu-select-single{
        width: 265px;
        height: 50px;
        margin-left: -35px;
    }
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
.h475{
    height: 475px;
}
.map-container{
    display: flex;
}
.h585{
    height: 585px;
}
.w750{
    width: 750px;
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
                        label: '内容网络点击分析',
                        value: 'map5'
                    },
                    {
                        label: 'IP户籍计划',
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
                this.$router.push('/demo/'+value);
            }
        }
    }

</script>
