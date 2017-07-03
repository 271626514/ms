<template>
    <div>
        <div class="module-header">
            <h4>权限详情</h4>
        </div>
        <div class="userDetail">
            <div class="item">
                <div class="label">权限名称：</div>
                <div class="desc">{{rolesDetail.rolesName}}</div>
            </div>
            <div class="item">
                <div class="label">权限详情：</div>
                <div class="desc-content">
                    <ul>
                        <li class="bg-odd">
                            <span class="title">设备管理</span>
                            <span class="content">未选</span>
                        </li>
                        <li >
                            <span class="title">端口管理</span>
                            <span class="content">未选</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="item">
                <div class="label">创建时间：</div>
                <div class="desc">{{rolesDetail.addDate}}</div>
            </div>
            <div class="item">
                <div class="label">最近修改：</div>
                <div class="desc">{{rolesDetail.updateDate}}</div>
            </div>
            <div class="item">
                <div class="label">用户数量：</div>
                <div class="desc">{{rolesDetail.containUser.length}}</div>
                <div class="desc-content" v-if="rolesDetail.containUser.length">
                    <ul>
                        <li class="user-item" v-for="i in rolesDetail.containUser">{{i.username}}<i>({{i.delayDate}})</i></li>
                    </ul>
                </div>
            </div>
        </div>
        <Button type="primary" class="f16" style="width:90px;margin-left: 40px" @click="toEdit">修改权限</Button>
        <Button type="ghost" class="f16 ml-10" style="width:90px;" @click="$router.push('/user/rolesShow')">返回</Button>
    </div>
</template>
<style lang="less">
.desc-content{
    color: #333;
    float: left;
    width: 100%;
    padding: 15px 35px;
    margin-left: 10px;
    li{
        height:40px;
        line-height: 40px;
        .title,.content{
            float: left;
        }
        .title{
            width: 120px;
            text-align: center;
            font-size: 14px;
            color: #333;
        }
    }
    .user-item{
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        display: inline-block;
        border:1px solid #6db3fa;
        i{
            color: #999;
        }
    }
}
</style>
<script type="text/ecmascript-6">
    import {roleslisttables} from '../../assets/js/data'
    export default{
        data() {
            return {
                rolesDetail:{},
                rolesId: this.$store.getters.getuserrole
            }
        },
        methods:{
            getRoleDetail:function(){
                console.log(123)
                this.$http.get('/admin?id='+this.rolesId)
                        .then((res) => {
                            this.userDetail = res;
                        })
                        .catch((res)=>{
                            this.rolesDetail = roleslisttables.roleslist[this.rolesId]
                        })
            },
            toEdit: function(){
                this.$router.push('/user/rolesEdit')
            }
        },
        mounted(){
            this.getRoleDetail();
        }
    }
</script>
