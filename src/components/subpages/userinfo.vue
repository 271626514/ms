<template>
    <div class='main'>
        <Tabs type="card">
            <Tab-pane label="成员管理">
                <div class="usermanage">
                    <Button type="primary" icon="plus-round" @click="modal.modalAdd=!modal.modalAdd">添加成员</Button>
                    <div class="user-table">
                        <Table border stripe :context="self" :columns="columns" :data="userList" width="auto"></Table>
                    </div>
                </div>
            </Tab-pane>
            <Tab-pane label="修改密码">
                <div class="passmanage">
                    <div class="localuser">您的登陆名：{{localuser}}</div>
                    <Row style="height:50px;">
                        <Col span="8">
                        <span class="label">旧密码：</span>
                        </Col>
                        <Col span="8">
                        <Input v-model="pass.password" type="password" placeholder="请输入旧密码" style="width: 215px"></Input>
                        </Col>
                    </Row>
                    <Row style="height:50px;">
                        <Col span="8">
                        <span class="label">新密码：</span>
                        </Col>
                        <Col span="8">
                        <Input v-model="pass.newPass" type="password" placeholder="请输入新密码" style="width: 215px"></Input>
                        </Col>
                    </Row>
                    <Row style="height:50px;">
                        <Col span="8">
                        <span class="label">确认密码：</span>
                        </Col>
                        <Col span="8">
                        <Input v-model="pass.rePass" type="password" placeholder="再次输入新密码" style="width: 215px"></Input>
                        </Col>
                    </Row>
                    <Col offset="7" span="2">
                    <Button type="success" long>确 定</Button>
                    </Col>
                    <Col offset="1" span="2">
                    <Button type="ghost" long>取 消</Button>
                    </Col>
                </div>
            </Tab-pane>
        </Tabs>
        <Modal v-model="modal.modalAdd" :mask-closable="false" title="添加新成员" :closable="false" @on-ok="addNewMember" @on-cancel="cancel" :loading="modal.loading">
            <Row>
                <Col span="6"><span class="label">请设置成员用户名</span></Col>
                <Col span="12"><Input v-model="user.username" style="width: 250px"></Input></Col>
                <Col span="12" offset="6"><span v-if="user.usernameCheck" style="color:#ff3300;margin-top: 15px">用户名错误</span></Col>
            </Row>
            <div slot="footer">
                <Button type="text" @click="cancel">取消</Button>
                <Button type="primary" @click="addNewMember">确定</Button>
            </div>
        </Modal>

        <Modal v-model="modal.modalSet" :mask-closable="false" title="权限设置" :closable="false" @on-ok="setPermission" @on-cancel="cancel">
            <p>
                成员用户名:{{permission.username}}
            </p>
            <Row>
                <Col span="2">
                    <label style="height:32px;line-height: 32px">角色：</label>
                </Col>
                <Col span="8">
                    <Select v-model="permission.userPermission">
                        <Option v-for="item in permissionList" :value="item.value" :key="item" style="width:150px">{{ item.label }}</Option>
                    </Select>
                </Col>
                <Col span="2" offset="2">
                    <label style="height:32px;line-height: 32px">省份：</label>
                </Col>
                <Col span="8">
                    <Select v-model="permission.province">
                        <Option v-for="item in cityList" :value="item.value" :key="item" style="width:150px">{{ item.label }}</Option>
                    </Select>
                </Col>
            </Row>
        </Modal>
    </div>
</template>
<style lang="less">
.ivu-tabs-bar{
    margin-bottom: 0 !important;
}
.usermanage,.passmanage{
    padding: 20px;
    border:1px solid #d7dde4;
    border-top:0;
    .user-table{
        margin-top: 20px;
    }
}
.label{
    height: 32px;
    line-height: 32px;
}
.passmanage{
    min-height: 460px;
    .localuser{
        margin-bottom: 40px;
    }
    .label{
        display: inline-block;
        padding-right: 15px;
        width: 100%;
        height: 32px;
        line-height: 32px;
        text-align: right;
    }
}
</style>
<script type="text/ecmascript-6">
    import {userinfotables} from '../../../static/data'
    export default{
        data() {
            return {
                localuser: this.$store.state.user_name,
                user: {
                    usernameCheck : false,
                    username: "",
                },
                pass: {
                    password: '',
                    newPass: '',
                    rePass: ''
                },
                permission: {
                    username: "",
                    province: "",
                    userPermission: "",
                    label: ""
                },
                permissionNum: "",
                self: this,
                modal:{
                    modalAdd: false,
                    modalSet: false
                },
                cityList: [
                    {
                        value: 'jiangsu',
                        label: '江苏省'
                    },
                    {
                        value: 'heilongjiang',
                        label: '黑龙江省'
                    },
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'zhejiang',
                        label: '浙江省'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                permissionList: [
                    {
                        value: '1',
                        label: '地方用户'
                    },{
                        value: '0',
                        label: '管理员'
                    }
                ],
                columns:userinfotables.columns,
                userList:userinfotables.userList
            }
        },
        methods: {
            init() {
                this.user.username = "";
                this.modal.modalAdd = false;
                this.user.usernameCheck = false;
            },
            addNewMember() {
                if(this.user.username == ""){
                    this.user.usernameCheck = true;
                    return false;
                };
                let user = {
                    "username" : this.user.username,
                    "userPermission": "999"
                }
                this.userList.push(user);
                this.init();
            },
            cancel() {
                this.init();
            },
            setMember(index){
                this.modal.modalSet = !this.modal.modalSet;
                let _temp = new Object();
                _temp.username = this.userList[index].username;
                _temp.userPermission = this.userList[index].userPermission;
                _temp.province = this.userList[index].province;
                //映射
                this.permission = _temp;
                this.permissionNum = index;
            },
            setPermission() {
                this.userList.splice(this.permissionNum,1,this.permission);
                console.log(this.permission);
            },
            remove (index) {
                this.$Modal.warning({
                    title: '删除确认',
                    content: '<p>确认删除成员：<em>'+ this.userList[index].username +'</em>?</p>',
                    onOk: () => {
                        this.$Message.info('处理中');
                        this.userList.splice(index,1);
                    }
                });
            },
            checkProvince() {
                for(let i=0; i<this.cityList.length;i++){
                    if(this.cityList[i].value==this.permission.province){
                        this.permission.label = this.cityList[i].label;
                    }
                }
            }
        },
        watch:{
            'permission.province':'checkProvince'
        }
    }
</script>
