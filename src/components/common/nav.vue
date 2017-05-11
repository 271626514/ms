<template>
    <div class="cm-accordion-menu">
        <ul class="accordion clearfix">
            <li class="level-1" v-for="(item,index) in navList" :class="{open:state==index}" @click="state=index">
                <div class="link" :id="item.id"><i></i>{{item.tag}}<i class="fa fa-plus"></i></div>
                <ul class="submenu clearfix" v-show="state==index">
                    <li class="level-2" v-for="i in item.content">
                        <router-link :to="'/'+ item.route +'/' + i.route">{{i.tag}}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<style lang="less">
.cm-accordion-menu{
    width: 200px;
    border-right:1px solid #d2d9e7;
    bottom: 50px;
    box-shadow: none;
    overflow-y: auto
}
</style>
<script type="text/ecmascript-6">
    import {navlist} from './navlist'
    export default{
        data(){
            return {
                navList:navlist.user,
                state: 0
            }
        },
        mounted(){

        }
    }
</script>
