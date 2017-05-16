<template>
    <div class="cm-accordion-menu">
        <ul class="accordion clearfix">
            <li class="level-1" v-for="(item,index) in navList" :class="{open:state==index}" @click="state=index">
                <div class="link" :id="item.id"><i></i>{{item.tag}}<Icon type="plus"></Icon></div>
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
    font-size: 14px;
    color: #7a8599;
    font-weight: normal;
    left: 0;
    top:67px;
    border-right:1px solid #d2d9e7;
    box-shadow: none;
    overflow-y: auto
}
.accordion{
    margin-top: 10px;
    border-top:1px solid #e7eeff;
}
.level-1{
    color: #7a8599;
    font-size: 14px;
    border-bottom: 1px solid #e7eeff;
    &.open{
        background:#f0f5fd;
        color: #4276fe;
        .submenu{
            border-top:1px solid #e7eeff;
        }
    }
    .submenu{
        background: #FFF;
        padding: 10px 0;
    }
}
.level-2{
    height: 30px;
    line-height: 30px;
    text-align: center;
    a{
        color: #7a8599;
        font-size: 12px;
        &.router-link-active{
            color: #3694f2;
         }
    }
}
.accordion .link {
    position: relative;
    display: block;
    height: 50px;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
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
.accordion li.open i {
    color: #3694f2;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg)
}
.accordion li .link:hover,.accordion li.open .link{
    color: #3694f2;
    background-color: #f0f5fd;
}

.accordion .link i {
    position: absolute;
    top: 18px;
    right: 10px
}
#m1 {
    background-image: url(../../assets/imgs/icon-user.png)
}

.accordion li #m1:hover,.accordion li.open #m1 {
    background-image: url(../../assets/imgs/icon-user-p.png)
}
#m4 {
    background-image: url(../../assets/imgs/icon-date.png)
}

.accordion li #m4:hover,.accordion li.open #m4 {
    background-image: url(../../assets/imgs/icon-date-p.png)
}
#m7 {
    background-image: url(../../assets/imgs/icon-system.png)
}

.accordion li #m7:hover,.accordion li.open #m7 {
    background-image: url(../../assets/imgs/icon-system-p.png)
}
#m69{
    background-image: url(../../assets/imgs/icon-data2.png);
}
.accordion li #m69:hover, .accordion li.open #m69{
    background-image: url(../../assets/imgs/icon-data2-p.png);
}
#m87{
    background-image: url(../../assets/imgs/icon-device.png);
}
.accordion li #m87:hover, .accordion li.open #m87{
    background-image: url(../../assets/imgs/icon-device-p.png);
}
#m88{
    background-image: url(../../assets/imgs/icon-port.png);
}
.accordion li #m88:hover, .accordion li.open #m88{
    background-image: url(../../assets/imgs/icon-port-p.png);
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
