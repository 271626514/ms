<template>
    <div class="navbar-fixed-top navbar">
        <div class="pull-left logo-info">
            <!--<img src="../../assets/imgs/logo.png">-->
            中移全网流量资源管理
            <i></i>
            <span>系统管理平台</span>
        </div>
        <div class="navbar-header pull-right user-info">
            <div class="photo mr-30">
                <span>{{username}} 你好</span>
                <i></i>
                <a @click="loginout">退出</a>
            </div>
        </div>
    </div>
</template>
<style lang="less">

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
