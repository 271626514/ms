<template>
    <div id="accordion" class="cm-accordion-menu black">
        <ul id="accordion-list" class="accordion text-center clearfix">
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
#nav{
    background: #eef1f6;
    width: 200px;
    float: left;
    margin-left: -100%;
    margin-bottom:-3000px;
    padding-bottom:3000px;
}
.router-link-active{
    color:#4276fe !important;
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
