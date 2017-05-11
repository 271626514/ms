<template>
    <ol class="breadcrumb">
        <li v-for="(v,k) in bread">
            {{v}}
        </li>
    </ol>
</template>
<style lang="less">
.breadcrumb{
    position: absolute;
    top:20px;
    left: 230px;
    font-size: 14px;
    color: #999;
    li{
        display: inline-block;
        margin-right: 5px;
    }
}
.breadcrumb>li+li:before {
    color: #999;
    content: "\003E"
}
</style>
<script type="text/ecmascript-6">
    export default{
        computed: {
            bread:function(){
                let _bread = [];
                for(let i=0;i<this.$route.matched.length;i++){
                    _bread.push(this.$route.matched[i].name);
                }
                return _bread;
            }
        },
    }
</script>
