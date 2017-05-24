<template>
    <div>
        <div class="module-header">
            <h4>用户信息修改</h4>
        </div>
        <Form :model="formItem" :label-width="120" :rules="userAdd" ref="add">
            <Form-item label="账号：" prop="username">
                <Input v-model="formItem.username" placeholder="6-50位字母或数字" disabled style="width:320px;"></Input>
            </Form-item>
            <Form-item label="密码：" prop="password">
                <Input v-model="formItem.password" placeholder="8-20位大小写字母或数字组合" type="password" style="width:320px;"></Input>
            </Form-item>
            <Form-item label="姓名：" prop="name">
                <Input v-model="formItem.name" style="width:320px;"></Input>
            </Form-item>
            <Form-item label="手机号码：" prop="tel">
                <Input v-model="formItem.tel" style="width:320px;"></Input>
            </Form-item>
            <Form-item label="邮箱地址：" prop="email">
                <Input v-model="formItem.email" placeholder="邮箱是找回密码的重要依据，请务必填写正确" style="width:320px;"></Input>
            </Form-item>
            <Form-item label="公司：" prop="companyName">
                <Input v-model="formItem.companyName" style="width:320px;"></Input>
            </Form-item>
            <Form-item label="权限分配：">
                <Select v-model="formItem.userPermission" placeholder="请选择" style="width: 320px">
                    <Option value="用户组1">用户组1</Option>
                    <Option value="shanghai">上海市</Option>
                    <Option value="shenzhen">深圳市</Option>
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
                username: '',
                password: '',
                name: '',
                tel: '',
                email: '',
                companyName: '',
                userPermission: '',
                state: '1',
            },
            userAdd: {
                password: [
                    { required: true, message: '请填写密码', trigger: 'blur' },
                    { validator: validatePass,trigger: 'blur'}
                ],
                name: [
                    { required: true, message: '请填写姓名', trigger: 'blur' },
                    { type: 'string', max: 20, message: '姓名不能超过20个字符', trigger: 'blur' }
                ],
                tel: [
                    { required: true, message: '请填写手机号', trigger: 'blur' },
                    { validator: validateTel, trigger: 'blur' }
                ],
                email: [
                    { required: true, message: '请填写邮箱', trigger: 'blur' },
                    { type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
                ],
                companyName: [
                    {required: true, message: '请填写公司名称', trigger: 'blur'},
                ]
            }
        }
    },
    methods:{
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {

                }
            })
        },
        getUserDetail:function(){
            this.$http.get('/user/userTail/'+this.userID)
                    .then((res) => {
                        this.userDetail = res.data.user;
                    })
                    .catch((res)=>{
                        this.formItem = userDetail
                    })
        },
    },
    mounted(){
        this.getUserDetail();
    }
}
</script>
