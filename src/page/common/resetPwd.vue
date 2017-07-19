<template>
    <div>
        <my-head-show></my-head-show>
        <div class="main-container reset">
            <h4>重置密码</h4>
            <Form label-position="right" :label-width="120" class="resetPwd" :rules="resetPwd" :model="formItem" ref="pwd">
                <Form-item label="设置新密码:" prop="newPassword">
                    <Input type="password" v-model="formItem.newPassword" style="width: 300px" prop="password"></Input>
                </Form-item>
                <Form-item label="确认新密码:" prop="ensurePassword">
                    <Input type="password" v-model="formItem.ensurePassword" style="width: 300px"  prop="password"></Input>
                </Form-item>
                <Form-item>
                    <Button type="primary" class="btn-submit" style="width: 300px;" @click="handleSubmit('pwd')">确定
                    </Button>
                </Form-item>
            </Form>
            <vmodal :title="modal.title" :content="modal.content" :dialog="modal.dialog" :url="modal.url" :color="modal.color"></vmodal>
        </div>
        <my-foot></my-foot>
    </div>
</template>
<style lang="less" >
/*@import "../../assets/css/me.less";*/
.reset {
    margin-top: 240px;
    background-color: #fff;
    height: 300px;
    padding:2px 37px;
    h4{
        width: 360px !important;
        color: #000;
        font-weight:500;
        margin: 0 auto !important;
        font-size: 20px !important;
    }
}

.resetPwd{
    width: 420px;
    margin: 10px auto;
}
</style>
<script type="text/ecmascript-6">
    import myHeadShow from '../../components/common/header-show'
    import myFoot from '../../components/common/foot'
    import vmodal from '../../components/common/modal.vue'

    export default{
        components:{
            myHeadShow,myFoot,vmodal
        },
        data() {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.formItem.ensurePassword !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.pwd.validateField('ensurePassword');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.formItem.newPassword) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                formItem: {
                    newPassword: '',
                    ensurePassword: '',
                },
                resetPwd:{
                    newPassword: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    ensurePassword: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
                },
                modal:{
                    title:'',
                    content:'',
                    dialog:0,
                    url: '',
                    color: 'green'
                },
                user:{
                    userId: '',
                    uuid: ''
                }
            }
        },
        methods:{
            handleSubmit(pwd){
                this.$refs[pwd].validate((valid) => {
                    if(valid){
                        if(this.formItem.newPassword != this.formItem.ensurePassword){
                            this.$Message.error('两次输入的密码不一致!');
                        }else{
                            this.$http.get('getpassword/reset.html?password='+this.formItem.newPassword+'&userId='+this.user.userId+'&uuid='+this.user.uuid)
                                .then(res=>{
                                if(res.data = 'success'){
                                    this.modal.dialog++;
                                    this.modal.title = '提示';
                                    this.modal.content = '<p style="color:green">您的密码已修改成功！</p>';
                                    this.modal.url='/login';
                                }else if(res.data == 'error'){
                                    this.modal.dialog--;
                                    this.modal.title = '操作失败';
                                    this.modal.content = `<p style="color:#ff5021">请求失败，请稍后再试</p>`;
                                    this.modal.url='/login';
                                }
                            }).catch(res=>{
//                                this.$router.push('/resetPwdExpire')
                                console.log('error');
                            })
                        }
                    }
                })
            },
            // 获取url中的参数
            getUrlKey:function(name){
                let _this =window;
                return _this.decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
            }
        },
        mounted:function (){
           this.user.userId  = this.getUrlKey("userId");
            this.user.uuid = this.getUrlKey("uuid");
            console.log("userId:"+this.user.userId);
            console.log("uuid:"+this.user.uuid);
        }
    }
</script>
