<template>
    <div class="edit">
        <h2>编辑设备信息</h2>
        <h3>
            <span>用户：<i>{{username}}</i></span>
            <span style="margin-left: 40px">时间：<i>{{now}}</i></span>
        </h3>
        <div class="editInfo">
            <p class="c3 mb-5">操作须知：</p>
            <p>1.当前仅支持对标识为可编辑的字段进行编辑，如需变更标识为不可编辑的字段，请直接联系管理员</p>
            <p>2.请按照端口管理要求进行信息的修改，不符合规则的修改将无法生效</p>
            <ul class="ml-10">
                <li>设备名称：请准确填写，不能为空</li>
                <li>所在机房：请准确填写，不能为空</li>
                <li>设备类型：省公司请选：省网设备、城域网设备、IDC设备、骨干网设备；国际公司请选择：国际设备</li>
                <li>SNMP端口：请填写1-65535内的有效端口值</li>
            </ul>
        </div>
        <div class="editTable mt-20">
            <table cellspacing="0" cellpadding="0" border="0">
                <tr height="42" style="background: #dce8fc; color: #333">
                    <td width="75">ID</td>
                    <td width="75">省份</td>
                    <td width="150">设备名称</td>
                    <td width="120">设备IP</td>
                    <td width="280">所属机房</td>
                    <td width="120">设备类型</td>
                    <td width="100">SNMP版本</td>
                    <td width="130">SNMP端口</td>
                    <td width="150">SNMP团体字</td>
                    <td width="150">SNMPv3安全名称</td>
                    <td width="150">SNMPv3安全级别</td>
                    <td width="150">SNMPv3认证协议</td>
                    <td width="150">SNMPv3认证口令</td>
                    <td width="150">SNMPv3加密协议</td>
                    <td width="150">SNMPv3私有密钥</td>
                </tr>
                <tr v-for="(item,index) in deviceData" height="48" :class="{active:index%2==0}">
                    <td>{{item.id}}</td>
                    <td>{{item.province}}</td>
                    <td><Input v-model="item.name" placeholder="请输入设备名称" style="width: 150px"></Input></td>
                    <td>{{item.ipAddr}}</td>
                    <td><Input v-model="item.room" placeholder="请输入机房" style="width: 270px"></Input></td>
                    <td>
                        <Select v-model="item.type" style="width:100px">
                            <Option v-for="i in typeList" :value="i.value" :key="i.value">{{i.label}}</Option>
                        </Select>
                    </td>
                    <td>{{item.snmpVersion}}</td>
                    <td><Input v-model="item.snmpPort" placeholder="请输入设备端口" style="width: 150px"></Input></td>
                    <td>{{item.snmpCommunity}}</td>
                    <td>{{item.snmpv3Securityname}}</td>
                    <td>{{item.snmpv3Securitylevel}}</td>
                    <td>{{item.snmpv3Authprotocol}}</td>
                    <td>{{item.snmpv3Authpassphrase}}</td>
                    <td>{{item.snmpv3Privprotocol}}</td>
                    <td>{{item.snmpv3Privpassphrase}}</td>
                </tr>
            </table>
        </div>
        <div class="text-center mt-20">
            <Button type="primary" @click="submit" style="width: 80px">确定</Button>
            <Button type="ghost" @click="cancel" style="margin-left: 10px;width: 80px">取消</Button>
        </div>
        <!---->
        <modal :title="this.modal.title" :content="this.modal.content" :dialog="this.modal.dialog" :url="this.modal.url" :cancel="this.modal.cancel"></modal>
        <!---->
        <Modal v-model="dialog" :mask-closable="false" title="提示" class="userRole cdn-modal" :closable="false">
            <div class="clearfix dialog-body">
                <h1>正在与数据库同步数据中，请稍候...</h1>
                <p class="f14 text-center mt-10"> 请勿离开或关闭此页面</p>
                <Spin fix class="mt-10">
                    <Icon type="load-c" size=38 class="demo-spin-icon-load"></Icon>
                </Spin>
            </div>
            <div slot="footer">
                <span></span>
            </div>
        </Modal>
    </div>
</template>
<style lang="less">
.edit{
    h2{
        padding-bottom: 10px;
        font-size: 18px;
        color: #666;
        border-bottom: 2px solid #eceff9;
    }
    h3{
        padding: 15px 0;
        font-size: 14px;
        font-weight: normal;
        color:#333;
        i{
            color: #666;
        }
    }
    .editInfo{
        color: #666;
        line-height: 1.7;
        font-size: 14px;
    }
}
.editTable{
    padding-bottom: 5px;
    width:100%;
    overflow-x: auto;
    table{
        font-size: 14px;
        text-align: center;
        color: #999;
        width: 2100px;
        tr{
            background: #f1f5fc;
            &.active{
                background: #FFF;
            }
            td:first-child{
                color:#666;
            }
        }
    }
}
</style>
<script type="text/ecmascript-6">
    import {edittables,config,showDataSelection} from '../../assets/js/data'
    import modal from '../../components/common/modal.vue'
    export default{
        data(){
            return {
                deviceData:this.$store.state.page.device_list ,
                typeList: showDataSelection.deviceTypeList,
                dialog:false,
                modal:{
                    title: '',
                    content: '',
                    url:'',
                    dialog: 0,
                    cancel: ''
                }
            }
        },
        methods:{
            submit(){
                //启动等待框
                /*this.dialog = true;*/
                //修改失败
               /* this.modal.dialog--;
                this.modal.title='您输入的信息不正确，请检查后重新输入';
                this.modal.content = '错误原因:有无效信息'*/
                //同步成功
                /*this.modal.dialog++;
                this.modal.title = '信息修改成功'
                this.modal.content = '点击确定返回设备列表页面'
                this.modal.url = '/device/deviceList';*/
                //同步失败
                this.modal.dialog--;
                this.modal.title='添加失败';
                this.modal.content = `网络原因`
            },
            cancel(){
                this.modal.title = '是否确认取消本次编辑？'
                this.modal.content = '取消后您已作出的修改将丢失'
                this.modal.url = '/device/deviceList';
                this.modal.cancel = 'cancel'
            }
        },
        computed: {
            username:function(){
                return this.$store.getters.getusername;
            },
            now: function(){
                const D = new Date();
                let YY = D.getFullYear();
                let MM = (D.getMonth()+1)<10?'0'+(D.getMonth()+1):(D.getMonth()+1);
                let DD = D.getDate()<10?'0'+D.getDate():D.getDate();
                let HH = D.getHours()<10?'0'+D.getHours():D.getHours();
                let MI = D.getMinutes()<10?'0'+D.getMinutes():D.getMinutes();
                let SS = D.getSeconds()<10?'0'+D.getSeconds():D.getSeconds();
                let string = YY+ '-' + MM + '-'+ DD +'  ' + HH + ':' + MI ;
                return string;
            }
        },
        components:{
            modal
        }
    }
</script>
