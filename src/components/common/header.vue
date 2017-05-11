<template>
    <div class="header">
        <div class="pull-left logo-info">
            <img src="../../assets/imgs/logo.png">
            <span>全网流量资源管理平台</span>
        </div>
        <div class="pull-right user-info">
            <span>{{username}} 你好</span>
            <i></i>
            <a @click="loginout">退出</a>
        </div>
    </div>
</template>
<style lang="less">
.header{
    height: 67px;
    width: 100%;
    padding: 0 30px;
    background: #FFF;
    border-bottom: 2px solid #3694f2;
    position: fixed;
    top:0;
    z-index:999;
}
.pull-left{
    float: left;
    line-height: 67px;
    height: 67px;
    img{
        vertical-align: middle;
    }
    span{
        font-size: 18px;
        color: #666;
        padding: 8px 16px;
        border-left: 1px solid #ccc;
        margin-left: 16px;
    }
}
.pull-right{
    float: right;
    height: 67px;
    font-size: 14px;
    color: #666;
    line-height: 67px;
    span{
        padding: 2px 10px;
        border-right:1px solid #ccc;
        margin-right: 10px;
    }
    a{
        color: #3694f2;
    }
}
</style>
<script type="text/ecmascript-6">
    export default{
        computed: {
            username:function(){
                return this.$store.getters.getusername;
            }
        },
        methods: {
            loginout(){
                this.$router.push('/login');
                this.$store.dispatch('loginout');
            }
        }
    }
</script>
