<template>
    <Breadcrumb class="bread">
        <Breadcrumb-item v-for="(v,k) in bread">{{v}}</Breadcrumb-item>
    </Breadcrumb>
</template>
<style lang="less">
.bread{
    margin: 20px 20px 20px 250px;
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
