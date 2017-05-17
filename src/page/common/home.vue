<template>
    <div class="home">
        <header>
            <div class="pull-left logo-info">
                <img src="../../assets/imgs/logo.png">
                <span>全网流量资源管理平台</span>
            </div>
        </header>
        <div class="homeBg">

        </div>
        <my-foot></my-foot>
    </div>
</template>
<style lang="less">
.home{
    header{
        height: 70px;
        line-height: 70px;
        overflow: hidden;
        width: 100%;
        background: #1c78c0;
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
