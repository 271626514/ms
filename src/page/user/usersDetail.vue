<template>
    <div>
        <div class="module-header">
            <h4>用户账户详情</h4>
        </div>
        <form class="form" id="resume_form">
            <div class="form-group">
                <label for="user_num" class="label"> 帐号:</label>
                <input type="text" class="mr-20" readonly v-model="formItem.username"/>
            </div>
            <div class="form-group">
                <label for="name" class="label"> 姓名:</label>
                <input type="text" v-model="formItem.name" readonly/>
            </div>
            <div class="form-group">
                <label for="phone_num" class="label">手机号码:</label>
                <input type="text" v-model="formItem.tel" readonly/>
            </div>
            <div class="form-group">
                <label for="email" class="label"> 邮箱地址:</label>
                <input type="text" class="mr-20" v-model="formItem.email" readonly/>
            </div>
            <div class="form-group">
                <label for="company" class="label">公司:</label>
                <input type="text" v-model="formItem.company" readonly/>
            </div>
            <div class="form-group">
                <label for="company" class="label">创建时间:</label>
                <input type="text" v-model="addDate" readonly/>
            </div>
            <div class="form-group">
                <label class="label">权限分配:</label>
                <input type="text" v-model="formItem.permission" readonly/>

            </div>
            <div class="form-group">
                <label class="label">账号状态:</label>
                <Radio-group v-model="formItem.state">
                    <Radio label="1" disabled>已启用</Radio>
                    <Radio label="2" disabled>已禁用</Radio>
                </Radio-group>
            </div>
            <div class="form-group">
                <label for="company" class="label">最近登录:</label>
                <input type="text" v-model="formItem.delayDate" readonly/>
            </div>
            <div class="form-group">
                <label for="company" class="label"></label>
                <a class="btn-blue w80 mr-15" href="user_edit.html">修改信息</a>
                <a class="btn-default w80" @click="$router.push('/user')">返回</a>
            </div>
        </form>
    </div>
</template>
<style lang="less">

</style>
<script type="text/ecmascript-6">
    import {userlisttables} from '../../../static/data'
    export default{
        data(){
            return {
                formItem: {
                    username: '',
                    password: '',
                    name: '',
                    tel: '',
                    email: '',
                    company: '',
                    permission: '',
                    state: '1',
                    addDate: '',
                    delayDate: ''
                }
            }
        }
    }
</script>
