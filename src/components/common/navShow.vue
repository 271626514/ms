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
    background: #FFF;
    width: 200px;
    margin-bottom:-3000px;
    padding-bottom:3000px;
    position: fixed;
    left: 0;
    top:67px;
    border-right:1px solid #d2d9e7;
    box-shadow: none;
    overflow-y: auto
}
.accordion{
    margin-top: 10px;
}
.accordion .link {
    position: relative;
    display: block;
    height: 50px;
    border-bottom: 1px solid #e7eeff;
    cursor: pointer;
    color: #7a8599;
    font-size: 14px;
    font-weight: 700;
    line-height: 50px;
    background: no-repeat 30px center;
    -webkit-transition: all .4s ease;
    -o-transition: all .4s ease;
    transition: all .4s ease
}

.accordion .link,.accordion .link i {
    color: #7a8599;
    font-size: 14px;
    -webkit-transition: all .4s ease;
    transition: all .4s ease
}

.accordion .link i {
    position: absolute;
    top: 18px;
    right: 10px
}
.level-1{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e7eeff;
    padding-left: 60px;
    color: #7a8599;
    font-size: 14px;
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
                navList:navlist.data,
                state: 0
            }
        },
        mounted(){

        }
    }
</script>
