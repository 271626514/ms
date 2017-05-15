<template>
    <div>
        <div class="module-header">
            <h4>用户账户详情</h4>
        </div>
        <div class="userDetail">
            <div class="item">
                <div class="label">账号：</div>
                <div class="desc">{{userDetail.user_name}}</div>
            </div>
            <div class="item">
                <div class="label">姓名：</div>
                <div class="desc">{{userDetail.name}}</div>
            </div>
            <div class="item">
                <div class="label">手机号码：</div>
                <div class="desc">{{userDetail.tel}}</div>
            </div>
            <div class="item">
                <div class="label">邮箱地址：</div>
                <div class="desc">{{userDetail.email}}</div>
            </div>
            <div class="item">
                <div class="label">公司：</div>
                <div class="desc">{{userDetail.compony}}</div>
            </div>
            <div class="item">
                <div class="label">创建时间：</div>
                <div class="desc">{{userDetail.addDate}}</div>
            </div>
            <div class="item">
                <div class="label">权限分配：</div>
                <div class="desc">{{userDetail.user_role}}</div>
            </div>
            <div class="item">
                <div class="label">账户状态：</div>
                <div class="desc">{{userDetail.user_state}}</div>
            </div>
            <div class="item">
                <div class="label">最近登陆：</div>
                <div class="desc">{{userDetail.login_yet}}</div>
            </div>
        </div>
        <Button type="primary" class="f16" style="width:90px; margin-left:110px">修改信息</Button>
        <Button type="ghost" class="f16 ml-10" style="width:90px;" @click="">返回</Button>
    </div>
</template>
<style lang="less">
.userDetail{
    font-size: 14px;
    padding: 25px 0;
    .item{
        overflow: hidden;
        height: 50px;
    }
    .label{
        color: #666;
        float: left;
        width: 110px;
        text-align: right;
    }
    .desc{
        color: #333;
        float: left;
        margin-left: 10px;
    }
}
</style>
<script type="text/ecmascript-6">
import {userDetail} from '../../../static/data'
export default{
    data() {
        return {
            userDetail:userDetail
        }
    }
}
</script>
