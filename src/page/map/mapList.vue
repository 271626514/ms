<template>
    <div>
        <my-head></my-head>
        <div class="map-list">
            首页 > 数据视图
        </div>
        <my-foot></my-foot>
    </div>
</template>
<style lang="less">
.map-list{
    width: 1024px;
    margin: 90px auto;
    font-size: 14px;
}
</style>
<script type="text/ecmascript-6">
    import echarts from 'echarts';
    import myFoot from '../../components/common/foot'
    import myHead from '../../components/common/header'
    export default{
        components:{
            myFoot,myHead
        }
    }
</script>
