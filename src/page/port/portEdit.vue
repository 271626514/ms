<template>
    <div class="edit">
        <h2>
            操作须知：
            <span class="">用户：{{username}}</span>
            <span>时间：{{now}}</span>
        </h2>
        <p>1.当前仅支持对标识为可编辑的字段进行编辑，如需变更标识为不可编辑的字段，请直接联系管理员</p>
        <p>2.请按照端口管理要求进行信息的修改，不符合规则的修改将无法生效</p>
        <ul>
            <li>端口类型：请按照实际情况选择：上联、下联、级联</li>
            <li>业务大类：省公司请选择：省网上联、省际直连、三方出口、IDC、ICP直连、统建CDN、省建Cache、省建CDN、第三方CDN、固网用户、手机用户；</li>
            <li>国际公司请选择：付费穿透、付费对等直连、收费客户、免费对等直连、省际直连、统建CDN、IDC</li>
            <li>业务小类：必填字段，请按照业务大类选择对应的业务小类，具体填写方法请参考端口上传模版</li>
            <li>对端设备：必填字段，按照实际情况填写</li>
        </ul>
        <div class="editTable2">
            <table cellspacing="0" cellpadding="0" border="0">
                <tr height="42">
                    <td width="50">ID</td>
                    <td width="50">省份</td>
                    <td width="50">设备名称</td>
                    <td width="50">设备IP</td>
                    <td width="50">端口名称</td>
                    <td width="50">端口类型</td>
                    <td width="50">业务大类</td>
                    <td width="50">业务小类</td>
                    <td width="50">对端设备</td>
                </tr>
                <tr v-for="(item,index) in portData" height="48" :class="{active:index%2==0}">
                    <td>{{item.id}}</td>
                    <td>{{item.province}}</td>
                    <td>{{item.devicesName}}</td>
                    <td>{{item.deviceid}}</td>
                    <td>{{item.name}}</td>
                    <td>
                        <Select v-model="item.type" style="width:100px">
                            <Option v-for="i in typeList" :value="i.value" :key="i.value">{{i.label}}</Option>
                        </Select>
                    </td>
                    <td>
                        <Select v-model="item.serviceView" style="width:100px">
                            <Option v-for="i in typeList2" :value="i.value" :key="i.value">{{i.label}}</Option>
                        </Select>
                     </td>
                    <td>
                        <Input v-model="item.service2View"  style="width: 170px"></Input>
                    </td>
                    <td>
                        <Input v-model="item.peerDevice"  style="width: 80px"></Input>
                    </td>
                </tr>
            </table>
        </div>
        <div class="text-center mt-20">
            <Button type="primary" @click="submit" style="width: 80px">确定</Button>
            <Button type="ghost" @click="cancel" style="margin-left: 10px;width: 80px">取消</Button>
        </div>
        <!---->
        <modal :title="this.modal.title" :content="this.modal.content" :dialog="this.modal.dialog" :url="this.modal.url" :cancel="this.modal.cancel"></modal>
    </div>
</template>
<style lang="less">
.editTable2{
    padding-bottom: 5px;
    width:100%;
    overflow-x: auto;
    table{
        font-size: 14px;
        color: #666;
        width: 100%;
        border:1px solid #e9eaec;
        tr{
            border:1px solid #e9eaec;
            background: #f8f8f9;
            &.active{
                background: #FFF;
                &:hover{
                     background: #ebf7ff;
                 }
            }
            &:hover{
                background: #ebf7ff;
            }
        }
        td{
            text-align: center;
            border:1px solid #e9eaec;
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
                portData:this.$store.state.page.port_list ,
                typeList: showDataSelection.portTypelist,
                typeList2:showDataSelection.portTypelist2,
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

            },
            cancel(){
                this.modal.dialog++;
                this.modal.content = '是否确认取消本次编辑？<br />取消后您已作出的修改将丢失'
                this.modal.url = '/port/portList';
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
