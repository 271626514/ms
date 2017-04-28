<template>
    <div id="content">
        <my-head></my-head>
        <div id="main">
            <div id="container">
                <bread></bread>
                <router-view></router-view>
            </div>
            <my-nav></my-nav>
        </div>
        <my-foot></my-foot>
    </div>
</template>
<style lang="less">
#main{
    width: 100%;
    overflow: hidden;
    zoom: 1;
    #container{
        float: left;
        width: 100%;
        .main{
            width: auto;
            margin: 50px 50px 50px 250px;
        }
        .Breadcrumb{
            margin: 20px 20px 20px 250px;
        }
    }
}
</style>
<script type="text/ecmascript-6">
import myHead from   '../../components/common/header'
import myFoot from '../../components/common/foot'
import myNav from '../../components/common/nav'
import bread from '../../components/common/bread'
export default{
    data() {
        return {

        }
    },
    computed:{
        bread: function(){
            return this.$store.getters.getbreaditem;
        }
    },
    components:{
        myHead,
        myFoot,
        myNav,
        bread
    }
}
</script>
