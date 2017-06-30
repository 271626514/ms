<template>
    <div class="home">
        <header>
            <div class="pull-left logo-info">
                <a @click="$router.push('/home')"><img src="../../assets/imgs/logo_home.png" id="logoToHome"></a>
                <span>全网流量资源管理平台</span>
                <div class="pull-right">
                    <a>在线文档</a>
                    <a>关于我们</a>
                </div>
            </div>
        </header>
        <div class="homeBg">
            <img src="../../assets/imgs/map.png" width="72%" />
            <span class="login" @click="$router.push('/login')">用户登录</span>
            <span id="map" @click="$router.push('/map')">数据汇总</span>
        </div>
        <my-foot></my-foot>
    </div>
</template>
<style lang="less">
    #logoToHome{
        cursor: pointer;
    }
.home{
    position:relative;
    header{
        height: 70px;
        line-height: 70px;
        overflow: hidden;
        width: 100%;
        color: #FFF;
        background:-moz-linear-gradient(top, #1a71bb, #1d80c7);
        background:-webkit-gradient(linear, 0 0, 0 bottom, from(#1a71bb), to(#1d80c7));
        background:-o-linear-gradient(top, #1a71bb, #1d80c7);
    }
    .logo-info{
        width: 1200px;
        margin: 0 auto;
        float:none;
        span{
            color: #FFF;
        }
    }
    .homeBg{
        width: 100%;
        background: url("../../assets/imgs/home_bg.jpg") no-repeat;
        background-size: cover;
        width: 100%;
        position: fixed;
        text-align: center;
        min-height: 1100px;
        .map{
            background: url("../../assets/imgs/map.png") no-repeat;
            width: 1200px;
            height: 663px;
            margin: 0 auto;
        }
        .title{
            background: url("../../assets/imgs/title.png") no-repeat;
            width: 1200px;
            height: 130px;
            position: absolute;
            top:300px;
        }
        .login{
            display: inline-block;
            width: 156px;
            height: 56px;
            line-height: 56px;
            color: #fff;
            background: #feb343;
            font-size: 24px;
            position: absolute;
            cursor: pointer;
            border-radius: 3px;
            top:50%;
            left: 40%;
            margin-left: -78px;
        }
        #map{
            display: inline-block;
            width: 156px;
            height: 56px;
            line-height: 56px;
            color: #fff;
            background: #feb343;
            font-size: 24px;
            position: absolute;
            cursor: pointer;
            border-radius: 3px;
            top:50%;
            left: 60%;
            margin-left: -78px;
        }
    }
    .footer{
        border:0;
    }
    .pull-right{
        float: right;
        height: 67px;
        font-size: 14px;
        color: #666;
        line-height: 67px;
        a{
            color: #FFF;
            margin-right: 45px;
        }
    }
}

</style>
<script type="text/ecmascript-6">
import myFoot from '../../components/common/foot'
export default{
    components:{
        myFoot
    }
}
</script>
