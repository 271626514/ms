<template>
    <div class="tile">
        <div class="module-header"><h4>创建新权限</h4></div>
        <div class="module-roles">
            <div class="title">
                <label>权限名称：</label>
                <Input v-model="rolesName" style="width: 300px;"></Input>
            </div>
            <div class="power-title mt-20">
                <strong>设备管理</strong>
                <p class="power-list"></p>
                <em class="czicon" :class="{on:treeShow==1}" @click="treeShow=1"></em>
            </div>
            <div class="power-tree" :class="{on:treeShow==1}">
                <span class="power-name mt-20">设备列表</span>
                <Tree :data="data.deviceList" show-checkbox @on-check-change="checkDeviceList"></Tree>
                <span class="power-name mt-10">设备上传</span>
                <Tree :data="data.deviceImport" show-checkbox @on-check-change="checkDeviceImport"></Tree>
            </div>
            <div class="power-title mt-20">
                <strong>端口管理</strong>
                <p class="power-list">未选择</p>
                <em class="czicon" :class="{on:treeShow==2}" @click="treeShow=2"></em>
            </div>
            <div class="power-tree" :class="{'on':treeShow==2}">
                <span class="power-name mt-20">端口列表</span>
                <Tree :data="data.portList" show-checkbox @on-check-change="checkPortList"></Tree>
                <span class="power-name mt-10">端口上传</span>
                <Tree :data="data.portImport" show-checkbox @on-check-change="checkPortImport"></Tree>
            </div>
            <!--<div class="power-title mt-20">
                <strong>数据管理</strong>
                <p class="power-list">未选择</p>
                <em class="czicon" :class="{on:treeShow==3}" @click="treeShow=3"></em>
            </div>-->
            <div class="power-tree" :class="{'on':treeShow==3}">
                <ul id="businessTree" class="ztree">
                    <Tree :data="data.other" show-checkbox></Tree>
                </ul>
            </div>
            <Button type="primary" class="f16 mt-20" style="width: 90px;height:36px" @click="roleAdd" :disabled="roleBTN">创建</Button>
            <Button type="ghost" class="f16 mt-20" style="margin-left: 8px; width: 90px;height:36px" @click="$router.push('/user/rolesShow')">取消</Button>
        </div>
        <modal :title="this.modal.title" :content="this.modal.content" :dialog="this.modal.dialog" :url="this.modal.url"></modal>
    </div>
</template>
<style lang="less">
.module-roles{
    padding: 10px 35px;
}

    h4 {
        color: #666;
        font-size: 18px;
        line-height: 48px;
    }

    .tile-content {
        padding: 30px;
    }

    .name label {
        font-weight: normal;
        margin-bottom: 0px;
        color: #666;
        font-size: 14px;
    }

    .name input {
        border: 1px solid #ccc;
        width: 298px;
        height: 28px;
        line-height: 28px;
        font-size: 14px;
        border-radius: 3px;
        outline: none;
    }

    .name span {
        font-size: 12px;
        color: #ff673f;
        display: none;
    }

    .power-title {
        border-left: 4px solid #89acfc;
        box-sizing: border-box;
        padding: 7px 0px 10px 20px;
        background: #f6f7fd;
        overflow: hidden;
        vertical-align: middle;
        display: table;
        width: 100%;
        height: 100%;
    }

    .power-title strong {
        font-size: 18px;
        vertical-align: middle;
        display: table-cell;
        width: 120px;
        color: #333;
        font-weight: normal;
    }

    .power-list {
        font-size: 14px;
        color: #6f6f6f;
        line-height: 24px;
        float: left;
        width: 100%;
        height: 100%;
        margin-bottom: 0px;
    }

    .czicon {
        display: table-cell;
        width: 11px;
        height: 7px;
        vertical-align: middle;
        background: url(../../assets/imgs/ticon.png) no-repeat center;
        padding: 0 19px 0 20px;
        cursor: pointer;
    }

    .czicon.on {
        background: url(../../assets/imgs/bicon.png) no-repeat center
    }

    .power-tree {
        height: 0;
        width: 100%;
        box-sizing: border-box;
        border:1px solid #eaecf5;
        overflow: hidden;
        transition: all 1s ease;
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        -o-transition: all 1s ease;
        -ms-transition: all 1s ease;
        .ivu-tree{
            float: left;
        }
        .power-name{
            float: left;
            font-size: 16px;
            color: #333;
            margin-left: 20px;
            width: 100%;
        }
    }

    .power-tree.on {
        height: auto;
    }
</style>
<script type="text/ecmascript-6">
import {config} from '../../assets/js/data'
import modal from '../../components/common/modal.vue'
const data = [{
        "checked": false,
        "children": [
            {
                "id": 19,
                "pId": 18,
                "title": "财务公司",
                "checked": false
            },
            {
                "id": 20,
                "pId": 18,
                "title": "采购共享中心",
                "checked": true
            },
            {
                "id": 21,
                "pId": 18,
                "title": "国际公司",
                "checked": false
            },
            {
                "id": 22,
                "pId": 18,
                "title": "杭州研发中心",
                "checked": false
            },
            {
                "id": 23,
                "pId": 18,
                "title": "集团公司",
                "checked": false
            },
            {
                "id": 24,
                "pId": 18,
                "title": "咪咕公司",
                "checked": false
            },
            {
                "id": 25,
                "pId": 18,
                "title": "设计院",
                "checked": false
            },
            {
                "id": 26,
                "pId": 18,
                "title": "中国移动（深圳）有限公司",
                "checked": false
            },
            {
                "id": 27,
                "pId": 18,
                "title": "苏州研发中心",
                "checked": false
            },
            {
                "id": 28,
                "pId": 18,
                "title": "铁通公司",
                "checked": false
            },
            {
                "id": 29,
                "pId": 18,
                "title": "信安中心",
                "checked": false
            },
            {
                "id": 30,
                "pId": 18,
                "title": "信息港中心",
                "checked": false
            },
            {
                "id": 31,
                "pId": 18,
                "title": "研究院",
                "checked": false
            },
            {
                "id": 32,
                "pId": 18,
                "title": "移动学院",
                "checked": false
            },
            {
                "id": 33,
                "pId": 18,
                "title": "在线服务公司",
                "checked": false
            },
            {
                "id": 34,
                "pId": 18,
                "title": "政企分公司",
                "checked": false
            },
            {
                "id": 35,
                "pId": 18,
                "title": "中移互联网公司",
                "checked": false
            },
            {
                "id": 36,
                "pId": 18,
                "title": "中移物联网公司",
                "checked": false
            },
            {
                "id": 37,
                "pId": 18,
                "title": "终端公司",
                "checked": false
            },
            {
                "id": 38,
                "pId": 18,
                "title": "卓望公司",
                "checked": false
            },
            {
                "id": 39,
                "pId": 18,
                "title": "上海移动",
                "checked": false
            },
            {
                "id": 40,
                "pId": 18,
                "title": "云南移动",
                "checked": false
            },
            {
                "id": 41,
                "pId": 18,
                "title": "内蒙古移动",
                "checked": false
            },
            {
                "id": 42,
                "pId": 18,
                "title": "北京移动",
                "checked": false
            },
            {
                "id": 43,
                "pId": 18,
                "title": "吉林移动",
                "checked": false
            },
            {
                "id": 44,
                "pId": 18,
                "title": "四川移动",
                "checked": false
            },
            {
                "id": 45,
                "pId": 18,
                "title": "天津移动",
                "checked": false
            },
            {
                "id": 46,
                "pId": 18,
                "title": "宁夏移动",
                "checked": false
            },
            {
                "id": 47,
                "pId": 18,
                "title": "安徽移动",
                "checked": false
            },
            {
                "id": 48,
                "pId": 18,
                "title": "山东移动",
                "checked": false
            },
            {
                "id": 49,
                "pId": 18,
                "title": "山西移动",
                "checked": false
            },
            {
                "id": 50,
                "pId": 18,
                "title": "广东移动",
                "checked": false
            },
            {
                "id": 51,
                "pId": 18,
                "title": "广西移动",
                "checked": false
            },
            {
                "id": 52,
                "pId": 18,
                "title": "新疆移动",
                "checked": false
            },
            {
                "id": 53,
                "pId": 18,
                "title": "江苏移动",
                "checked": false
            },
            {
                "id": 54,
                "pId": 18,
                "title": "江西移动",
                "checked": false
            },
            {
                "id": 55,
                "pId": 18,
                "title": "河北移动",
                "checked": false
            },
            {
                "id": 56,
                "pId": 18,
                "title": "河南移动",
                "checked": false
            },
            {
                "id": 57,
                "pId": 18,
                "title": "浙江移动",
                "checked": false
            },
            {
                "id": 58,
                "pId": 18,
                "title": "海南移动",
                "checked": false
            },
            {
                "id": 59,
                "pId": 18,
                "title": "湖北移动",
                "checked": false
            },
            {
                "id": 60,
                "pId": 18,
                "title": "湖南移动",
                "checked": false
            },
            {
                "id": 61,
                "pId": 18,
                "title": "甘肃移动",
                "checked": false
            },
            {
                "id": 62,
                "pId": 18,
                "title": "福建移动",
                "checked": false
            },
            {
                "id": 63,
                "pId": 18,
                "title": "西藏移动",
                "checked": false
            },
            {
                "id": 64,
                "pId": 18,
                "title": "贵州移动",
                "checked": false
            },
            {
                "id": 65,
                "pId": 18,
                "title": "辽宁移动",
                "checked": false
            },
            {
                "id": 66,
                "pId": 18,
                "title": "重庆移动",
                "checked": false
            },
            {
                "id": 67,
                "pId": 18,
                "title": "陕西移动",
                "checked": false
            },
            {
                "id": 68,
                "pId": 18,
                "title": "青海移动",
                "checked": false
            },
            {
                "id": 69,
                "pId": 18,
                "title": "黑龙江移动",
                "checked": false
            },
            {
                "id": 70,
                "pId": 18,
                "title": "香港移动",
                "checked": false
            }
        ],
        "depth": 1,
        "img": "",
        "menuId": 18,
        "title": "全国",
        "parentId": 0,
        "sort": 0,
        "type": -2,
        "url": ""
    }]
    export default {
        data () {
            return {
                data:{
                    deviceImport:[],
                    deviceList:[],
                    portImport:[],
                    portList:[]
                },
                rolesName:'',
                treeShow:1,
                roleData:{          //回传后台的数据
                    deviceImport:'',
                    deviceImportTitle:'',
                    deviceList:'',
                    deviceListTitle:'',
                    portImport:'',
                    portImportTitle:'',
                    portList:'',
                    portListTitle:'',
                },
                modal:{
                    title:'',
                    content:'',
                    dialog:0,
                    url:''
                }
            }
        },
        methods:{
            checkDeviceList(arr){
                this.roleData.deviceList = this.arrToString(arr);
            },
            checkDeviceImport(arr){
                this.roleData.deviceImport = this.arrToString(arr);
            },
            checkPortList(arr){
                this.roleData.portList = this.arrToString(arr);
            },
            checkPortImport(arr){
                this.roleData.portImport = this.arrToString(arr);
            },
            arrToString(arr){
                let str = '';
                for(let i=0;i<arr.length;i++){
                    str+='&menuIds[]=' + (arr[i].id||arr[i].menuId)
                }
                return str;
            },
            roleAdd(){
                let data = 'roleName='+this.rolesName + this.roleData.deviceList + this.roleData.deviceImport + this.roleData.portImport + this.roleData.portList
                this.$http.post('localhost',data,config).then((res)=>{
                    if(res.msg=='1'){
                        this.modal.dialog++;
                        this.modal.title = '操作成功';
                        this.modal.url = '/user/rolesShow';
                    }else if(res.msg=='2'){

                    }
                }).catch((res)=>{
                    this.modal.dialog--;
                    this.modal.title = `操作失败`;
                    this.modal.content = `${res}`
                })
            }
        },
        mounted(){
            this.$http.get('/role/roles/menus').then((res)=>{
                this.data.deviceImport = res.data.deviceImport
                this.data.deviceList = res.data.deviceList
                this.data.portImport = res.data.portImport
                this.data.portList = res.data.portList
            }).catch((res)=>{
                let deviceImport = JSON.parse(JSON.stringify(data));
                let deviceList = JSON.parse(JSON.stringify(data));
                let portImport = JSON.parse(JSON.stringify(data));
                let portList = JSON.parse(JSON.stringify(data));
                this.data.deviceImport = deviceImport
                this.data.deviceList = deviceList
                this.data.portImport = portImport
                this.data.portList = portList
            })
        },
        computed:{
            roleBTN() {
                if(this.rolesName){
                    return false;
                }else{
                    return true;
                }
            }
        },
        components:{
            modal
        }
    }
</script>
