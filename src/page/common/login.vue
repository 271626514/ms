<style>
.wrapper{
    position: absolute;
    width: 100%;
    height: 100%;
    /*background: url("../../assets/imgs/login-bg.png") left top no-repeat;*/
    background-size: cover;
}
.content {
    margin: 0 auto;
    width: 346px;
}
.login-logo {
    padding: 35% 0 10%;
}
@media screen and (max-width: 1440px) {
    .login-logo {
        padding: 17% 0 7%;
    }
}
.main-container {
    border-radius: 5px;
    height: 400px;
    background-color: #fff;
    padding-top: 30px;
}
.nav li {
    width: 50%;
}
.nav li:first-child {
    border-right: 1px solid #e6e6e6;
}
.nav li a, .nav li a:focus {
    display: inline;
    margin: 0;
    border: 0;
    padding: 0 25px 17px;
    font-size: 20px;
    line-height: 20px;
    color: #333;
}
.nav li a:hover, .nav li.active a, .nav li.active a:focus, .nav li.active a:hover {
    border: 0;
    border-bottom: 1px solid #5584ff;
    color: #5584ff;
}
.form-group {
    margin-bottom: 10px;
}
.form-control {
    height: 50px;
    font-size: 16px;
    line-height: 36px;
    border-radius: 2px;
    color: #333;
}
.form-relative {
    position: relative;
}
#code-static {
    width: 175px;
}
.get-code, #forget-password {
    position: absolute;
    top: 0;
    right: 15px;
    z-index: 5;
    height: 50px;
    line-height: 50px;
    color: #5584ff;
    cursor: pointer;
}

#get-img {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 4px;
    width: 100px;
    height: 50px;
    cursor: pointer;
    vertical-align: top;
}

.input-error {
    padding-top: 5px;
    height: 20px;
    font-size: 12px;
    line-height: 15px;
    color: #fc6c3f;
    text-align: left;
    text-indent: 1px;
}


#submit-btn {
    width: 280px;
    height: 50px;
    font-size: 20px;
    color: #fff;
    background-color: #38d880;
}
.font-blue {
    color: #5584ff;
    margin: 0;
    float: right;
}

.icon-info {
    width: 18px;
    height: 18px;
    background: url(../../assets/imgs/icon-info-bg.png) no-repeat;
    float: right;
    cursor: pointer;
}

.center {
    margin: 0 33px;
    text-align: center;
}

.tooltip.bottom .tooltip-arrow {
    border-bottom-color: #ccc;
}
</style>
<template>
<div class="wrapper">
    <div class="content">
        <div class="login-logo text-center">
            <!--<img src="../../assets/imgs/login-logo.png">-->
            中国移动全网资源管理平台<br />
            管理员登陆 账号 admin 密码随意6位数<br />
            用户登陆 账号 随意，密码6位数
        </div>
        <div class="main-container">
            <div class="login-box text-center">
                <div>
                    <div class="form-group">
                        <input type="text" id="tel-static" class="form-control" name="name" maxlength="50"
                               placeholder="用户名" v-model="user.user_name">
                        <div class="input-error" id="tel-static-error"></div>
                    </div>

                    <div id="form-forget-password" class="form-group form-relative">
                        <input id="password" class="form-control" type="password" name="password" maxlength="20"
                               placeholder="密码">
                    <span class="point" id="forget-password" data-toggle="tooltip" data-placement="bottom"
                          title="" data-original-title="请通过和创空间APP重置密码。虚拟帐号请向管理员申请重置。">忘记密码？</span>
                        <div class="input-error" id="password-error"></div>
                    </div>

                    <div class="form-group form-relative">
                        <input id="code-static" class="form-control" type="tel" name="code-static" maxlength="4" style="margin-left:-110px"
                               placeholder="验证码">
                        <img id="get-img" src="" alt="4f9r" title="换一换"/>
                        <div class="input-error" id="code-static-error"></div>
                    </div>
                </div>
                <button id="submit-btn" type="button" class="btn btn-submit" @click="handleSubmit()">登录</button>
                <div class="form-group mt-20 mb-30">
                    <div class="center clearfix">
                        <p class="font-blue">申请注册？</p>
                    <span class="mr-10 icon-info point" data-toggle="tooltip" data-placement="bottom" title=""
                          data-original-title="双创系统管理平台仅向特定用户开通。<br/>如您无法登录，请与管理员联系确认授权。<br/>已授权用户可使用和创空间账号密码登录。"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                user_name: '',
                password: '',
                code: ''
            }
        }
    },
    methods: {
        handleSubmit() {
            this.$Message.success('登陆成功，欢迎您!');
            this.$store.dispatch('loginSet',{'user_name':this.user.user_name,'user_permission':1,'logStatus':true});
            if(this.user.user_name=='admin'){
                this.$router.push('/user');
            }else{
                this.$router.push('/dataview');
            }
        }
    }
}
</script>
