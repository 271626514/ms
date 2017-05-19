<style lang="less">
@import "../../assets/css/me.less";
.wrapper{
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("../../assets/imgs/login-bg.jpg") left top no-repeat;
    background-size: cover;
}
.content {
    margin: 0 auto;
    width: 420px;
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
    height: 360px;
    background-color: #fff;
    padding:46px 37px;
}
.login{
    .ivu-input{
        width: 100%;
        float: left;
        border: 1px solid #ccc;
        border-radius: 2px;
        height: 44px;
        line-height: 44px;
        padding: 0 10px;
        font-size: 16px;
    }
    .input-item{
        position: relative;
    }
    .point{
        position: absolute;
        top:7px;
        right:10px;
        color: #3694f2;
        font-size: 14px;
    }
    .code-item{
        position: absolute;
        top:0px;
        right:0px;
        width: 96px;
        background: #eaf2fd;
        height: 44px;
        cursor: pointer;
    }
    .btn-submit{
        width: 100%;
        height: 44px;
        border-radius: 2px;
        border:0;
        background: #3694f2;
        color: #FFF;
        font-size: 16px;
        cursor:pointer;
        margin-top: 20px;
    }
}

</style>
<template>
<div class="wrapper">
    <div class="content">
        <div class="login-logo text-center">
            <img src="../../assets/imgs/login-logo.png">
        </div>
        <div class="main-container login">
            <Form :model="user" :rules="login" ref="login">
                <Form-item prop="user_name">
                    <Input v-model="user.user_name" placeholder="用户名" :maxlength="50"></Input>
                </Form-item>
                <Form-item prop="password" class="input-item">
                    <Input type="password" v-model="user.password" placeholder="密码" :maxlength="20"></Input>
                    <a class="point" @click="">忘记密码？</a>
                </Form-item>
                <Form-item prop="code">
                    <Input v-model="user.code" placeholder="输入验证码" :maxlength="4" style="width:240px;"></Input>
                    <span class="code-item" @click="getCode">
                        <img :src="imgSrc">
                    </span>
                </Form-item>
                <Form-item>
                    <Button type="primary" class="btn-submit" @click="handleSubmit()">登  录</Button>
                </Form-item>
            </Form>
        </div>
    </div>
</div>
</template>

<script>
import { validatePass,validateTel } from '../../../static/formrule'
const data1 = {"checked":false,"children":[{"checked":false,"children":[{"checked":false,"children":[],"depth":"","id":2,"name":"用户列表","parent":false,"parentId":"1","resouce":"/usersShow"},{"checked":false,"children":[],"depth":"","id":3,"name":"权限列表","parent":false,"parentId":"1","resouce":"/rolesShow"}],"depth":"","id":1,"name":"用户管理","parent":true,"parentId":"0","resouce":"/user"},{"checked":false,"children":[{"checked":false,"children":[],"depth":"","id":5,"name":"历史数据","parent":false,"parentId":"4","resouce":"/adminHistoryData"},{"checked":false,"children":[],"depth":"","id":6,"name":"自定义查询","parent":false,"parentId":"4","resouce":"/customQueryList"}],"depth":"","id":4,"name":"业务数据管理","parent":true,"parentId":"0","resouce":"/export"},{"checked":false,"children":[{"checked":false,"children":[],"depth":"","id":8,"name":"日志管理","parent":false,"parentId":"7","resouce":"/showLogList"}],"depth":"","id":7,"name":"系统管理","parent":true,"parentId":"0","resouce":"/operateLog"}],"depth":"","id":0,"name":"root","parent":false,"parentId":"","resouce":""}
export default {
    data() {
        return {
            user: {
                user_name: '',
                password: '',
                code: ''
            },
            imgSrc: '',
            login: {
                user_name:[
                    { required: true, message: '请填写用户名', trigger: 'blur' },
                    { type: 'string', min: 5, message: '账号不能少于5位', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请填写密码', trigger: 'blur' },
                    { validator: validatePass,trigger: 'blur'}
                ],
                code: [
                    { required: true, message: '请填写验证码', trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        handleSubmit() {
            this.$refs['login'].validate((valid) => {
                if(valid){
                //    this.$http.post('/demoms/main',{user_name:this.user.user_name,password:this.user.password,code:this.user.code})
                    this.$http.get('/demoms/main').then((res)=>{

                    }).catch((res)=>{
                        this.$Message.success('登陆成功，欢迎您!');
                        console.log(data1);
                        this.$store.dispatch('loginSet',{'user_name':this.user.user_name,'user_permission':1,'logStatus':true});
                        if(this.user.user_name=='admin'){
                            this.$router.push('/user');
                        }else{
                            this.$router.push('/dataview');
                        }
                    })
                    /*.then((res)=>{
                        console.log(res);
                    }).catch((res) => {
                        console.log('error')
                    });*/
                }
            })
        },
        getCode() {
            console.log(123)
        }
    }
}
</script>
