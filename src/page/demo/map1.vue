<template>
    <div>
        <div>
            <span class="select">
                <Select v-model="model1" style="width:200px">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </span>

        </div>
        <div class="map">
        </div>
    </div>
</template>
<style lang="less">

</style>
<script type="text/ecmascript-6">
    import echarts from 'echarts'
    export default{

    }
</script>
