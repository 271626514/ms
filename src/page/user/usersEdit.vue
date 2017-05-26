<template>
    <div>
        <div class="module-header">
            <h4>用户信息修改</h4>
        </div>
        <Form :model="formItem" :label-width="120" :rules="userAdd" ref="add">
            <Form-item label="账号：" prop="userName">
                <Input v-model="formItem.userName" placeholder="6-50位字母或数字" disabled style="width:320px;"></Input>
            </Form-item>
            <Form-item label="密码：" prop="password">
                <Input v-model="formItem.password" placeholder="8-20位大小写字母或数字组合" type="password" style="width:320px;"></Input>
            </Form-item>
            <Form-item label="姓名：" prop="userRelname">
                <Input v-model="formItem.userRelname" style="width:320px;"></Input>
            </Form-item>
            <Form-item label="手机号码：" prop="phone">
                <Input v-model="formItem.phone" style="width:320px;"></Input>
            </Form-item>
            <Form-item label="邮箱地址：" prop="email">
                <Input v-model="formItem.email" placeholder="邮箱是找回密码的重要依据，请务必填写正确" style="width:320px;"></Input>
            </Form-item>
            <Form-item label="公司：" prop="company">
                <Input v-model="formItem.company" style="width:320px;"></Input>
            </Form-item>
            <Form-item label="权限分配：">
                <Select v-model="formItem.roleId" placeholder="请选择" style="width: 320px" :label-in-value="true" @on-change="checkRole">
                    <Option v-for="item in rolesList" :value="item.value" :key="item">{{ item.label }}</Option>
                </Select>
            </Form-item>
            <Form-item label="账号状态：">
                <Radio-group v-model="formItem.state">
                    <Radio label="1">已启用</Radio>
                    <Radio label="2" style="margin-left: 20px;">已禁用</Radio>
                </Radio-group>
            </Form-item>
            <Form-item>
                <Button type="primary" class="f16" style="width: 90px;height:36px" @click="handleSubmit('add')">确定</Button>
                <Button type="ghost" class="f16" style="margin-left: 8px; width: 90px;height:36px" @click="$router.push('/user')">取消</Button>
            </Form-item>
        </Form>
        <!---->
        <Modal v-model="dialog.userstate" :mask-closable="false" title="提示" class="userstate">
            <div class="clearfix dialog-body" v-html="dialog.content"></div>
            <div slot="footer">
                <Button type="primary" style="width:90px" class="align" @click="userstate_con">确定</Button>
            </div>
        </Modal>
    </div>
</template>
<style lang="less">
</style>
<script type="text/ecmascript-6">
import { validatePass,validateTel} from '../../../static/formrule'
import {userDetail,config} from '../../../static/data'
import {BASEURL} from '../../../static/const'
export default{
    data () {
        return {
            userID: this.$store.getters.getuserid,
            formItem: {
                userName: '',
                password: '',
                userRelname: '',
                phone: '',
                email: '',
                company: '',
                roleId: '',
                state: '1',
            },
            userAdd: {
                password: [
                    { required: true, message: '请填写密码', trigger: 'blur' },
                    { validator: validatePass,trigger: 'blur'}
                ],
                userRelname: [
                    { required: true, message: '请填写姓名', trigger: 'blur' },
                    { type: 'string', max: 20, message: '姓名不能超过20个字符', trigger: 'blur' }
                ],
                phone: [
                    { required: true, message: '请填写手机号', trigger: 'blur' },
                    { validator: validateTel, trigger: 'blur' }
                ],
                email: [
                    { required: true, message: '请填写邮箱', trigger: 'blur' },
                    { type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
                ],
                company: [
                    {required: true, message: '请填写公司名称', trigger: 'blur'},
                ]
            },
            rolesList:[],
            dialog:{
                userstate:false,
                content:''
            },
        }
    },
    methods:{
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    let data = 'userId='+this.userID+'userName='+this.formItem.userName+'&userPassword='+this.formItem.userPassword+'&userRelname='+this.formItem.userRelname+'&phone='+this.formItem.phone+'&email='+this.formItem.email+'&company='+this.formItem.company+'&state='+this.formItem.state+'&roleId='+this.formItem.roleId
                    this.$http.post('/user/users/update',data,config).then((res)=>{
                        this.dialog.userstate = true;
                        this.dialog.content = `<h1>操作成功</h1>`
                    }).catch((res)=>{
                        this.dialog.userstate = true;
                        this.dialog.content = `<h1>操作成功</h1>`
                    })
                }
            })
        },
        getUserDetail:function(){
            this.$http.get('/user/userTail/'+this.userID)
                    .then((res) => {
                        this.formItem = res.data.user;
                        this.rolesList = this.getSelect(res.data.roles);
                    })
                    .catch((res)=>{
                        this.formItem = userDetail
                    })
        },
        getSelect(arr){
            let _array = [];
            for(let i=0;i<arr.length;i++){
                let obj = new Object;
                obj.value = arr[i].roleId;
                obj.label = arr[i].roleName;
                _array.push(obj);
            }
            return _array;
        },
        userstate_con(){
            this.$router.push("/user")
        },
        checkRole(value){
            this.formItem.roleId = value.value;
        },
    },
    mounted(){
        this.getUserDetail();
    }
}
</script>
