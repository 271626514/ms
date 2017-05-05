<template>
    <ol class="breadcrumb">
        <li v-for="(v,k) in bread">{{v}}</li>
    </ol>
</template>
<style lang="less">
.breadcrumb{
    position: absolute;
    top:20px;
    left: 230px;
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
