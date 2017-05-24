<template>
    <div>
        <div class="module-header">
            <h4>创建一个新用户</h4>
        </div>
        <Form :model="formItem" :label-width="120" :rules="userAdd" ref="add">
            <Form-item label="账号：" prop="userName">
                <Input v-model="formItem.userName" placeholder="6-50位字母或数字" style="width:320px;"></Input>
            </Form-item>
            <Form-item label="密码：" prop="password">
                <Input v-model="formItem.password" placeholder="8-20位大小写字母或数字组合" type="password" style="width:320px;"></Input>
            </Form-item>
            <Form-item label="姓名：" prop="userRelname">
                <Input v-model="formItem.userRelname" style="width:320px;"></Input>
            </Form-item>
            <Form-item label="手机号码：" prop="tel">
                <Input v-model="formItem.tel" style="width:320px;"></Input>
            </Form-item>
            <Form-item label="邮箱地址：" prop="email">
                <Input v-model="formItem.email" placeholder="邮箱是找回密码的重要依据，请务必填写正确" style="width:320px;"></Input>
            </Form-item>
            <Form-item label="公司：" prop="company">
                <Input v-model="formItem.company" style="width:320px;"></Input>
            </Form-item>
            <Form-item label="权限分配：">
                <Select v-model="formItem.userPermission" placeholder="请选择" style="width: 320px">
                    <Option value="beijing">北京市</Option>
                    <Option value="shanghai">上海市</Option>
                    <Option value="shenzhen">深圳市</Option>
                </Select>
            </Form-item>
            <Form-item label="账号状态：">
                <Radio-group v-model="formItem.state">
                    <Radio label="已启用">已启用</Radio>
                    <Radio label="已禁用" style="margin-left: 20px;">已禁用</Radio>
                </Radio-group>
            </Form-item>
            <Form-item>
                <Button type="primary" class="f16" style="width: 90px;height:36px" @click="handleSubmit('add')">创建</Button>
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
    import { validatePass,validateTel } from '../../../static/formrule'
    import { config } from '../../../static/data'
    import md5 from 'md5'
    export default{
        data () {
            return {
                formItem: {
                    userName: '',
                    password: '',
                    userRelname: '',
                    tel: '',
                    email: '',
                    company: '',
                    roleName: '',
                    state: '已禁用',
                },
                dialog:{
                    userstate:false,
                },
                userAdd: {
                    userName:[
                        { required: true, message: '请填写用户名', trigger: 'blur' },
                        { type: 'string', min: 6, message: '账号不能少于6位', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        /*{ validator: validatePass,trigger: 'blur'}*/
                    ],
                    userRelname: [
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
                    company: [
                        {required: true, message: '请填写公司名称', trigger: 'blur'},
                    ]
                }
            }
        },
        methods:{
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        let data = 'userName='+this.formItem.userName+'&password='+md5(this.formItem.userPassword)+'&userRelname='+this.formItem.userRelname+'&tel='+this.formItem.tel+'&email='+this.formItem.email+'&company='+this.formItem.company+'&state='+this.formItem.state
                        this.$http.post('',data,config).then(()=>{

                        }).catch()
                    }
                })
            }
        }
    }
</script>
