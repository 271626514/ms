<template>
    <div>
        <my-head :autowidth="width"></my-head>
        <div class="map-list">
            首页 > 数据视图
            <div class="map-content mt-20">
                <ul>
                    <li class="map-item clearfix" v-for="item in mapList">
                        <span class="map-img" :class="item.img" @click="$router.push('/maplist/map'+item.id)"></span>
                        <!--<img class="map-img" :src="`../../assets/imgs/` + item.img" @click="$router.push('/maplist/map'+item.id)" />-->
                        <span class="title f16" @click="$router.push('/maplist/map'+item.id)">{{item.title}}</span>
                        <span class="create-time right">{{item.createTime}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <my-foot></my-foot>
    </div>
</template>
<style lang="less">
.map-list{
    width: 1024px;
    margin: 90px auto;
    font-size: 14px;
    color: #666;
}
.map-item{
    height: 80px;
    line-height: 60px;
    padding: 10px 0;
    border-bottom: 1px solid #f6f6f6;
}
.map-img{
    float: left;
    width: 55px;
    height: 55px;
    padding: 3px;
    border:1px solid #f6f6f6;
    cursor: pointer;
    &.img-view-1{
        background: url(../../assets/imgs/img-view-1.jpg) no-repeat;
     }
    &.img-view-2{
         background: url(../../assets/imgs/img-view-2.jpg) no-repeat;
     }
    &.img-view-3{
         background: url(../../assets/imgs/img-view-3.jpg) no-repeat;
     }
}
.title{
    float: left;
    margin-left: 20px;
    cursor: pointer;
}
.create-time{
    color: #666;
}
</style>
<script type="text/ecmascript-6">
    import {mapList} from '../../assets/js/data'
    import echarts from 'echarts';
    import myFoot from '../../components/common/foot'
    import myHead from '../../components/common/header'
    export default{
        data(){
            return {
                mapList: mapList.data,
                width:'1200px'
            }
        },
        components:{
            myFoot,myHead
        }
    }
</script>
