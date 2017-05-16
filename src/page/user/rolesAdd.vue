<template>
    <div class="tile">
        <div class="module-header"><h4>创建新权限</h4></div>
        <div class="module-roles">
            <div class="name">
                <label>权限名称：</label>
                <Input v-model="roles.name" style="width: 300px;"></Input>
            </div>
            <div class="power-title mt-20">
                <strong>设备管理</strong>
                <p class="power-list">未选择</p>
                <em class="czicon"></em>
            </div>
            <div class="power-tree on">
                <Tree :data="baseData" show-checkbox></Tree>
            </div>
            <div class="power-title mt-20">
                <strong>端口管理</strong>
                <p class="power-list">未选择</p>
                <em class="czicon"></em>
            </div>
            <div class="power-tree">
                <ul id="contentTree" class="ztree"></ul>
            </div>
            <div class="power-title mt-20">
                <strong>数据管理</strong>
                <p class="power-list">未选择</p>
                <em class="czicon"></em>
            </div>
            <div class="power-tree">
                <ul id="businessTree" class="ztree"></ul>
            </div>
            <Button type="primary" class="f16 mt-20" style="width: 90px;height:36px">创建</Button>
            <Button type="ghost" class="f16 mt-20" style="margin-left: 8px; width: 90px;height:36px" @click="$router.push('/user')">取消</Button>
        </div>
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
        background: url(../../assets/imgs/bicon.png) no-repeat center;
        padding: 0 19px 0 20px;
        cursor: pointer;
    }

    .czicon.on {
        background: url(../../assets/imgs/ticon.png) no-repeat center;
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
    }

    .power-tree.on {
        height: auto;
    }
</style>
<script type="text/ecmascript-6">
    export default {
        data () {
            return {
                roles:{
                    name: ''
                },
                baseData: [
                    {
                        expand: false,
                        title: '设备列表',
                        children: [
                            {
                                title: '全国',
                                expand: false,
                                children: [
                                    {
                                        title: '北京',
                                        checked: true
                                    },
                                    {
                                        title: '浙江',
                                    }
                                ]
                        }]
                    },
                    {
                        expand: false,
                        title: '设备导入',
                        children: [{
                            title: '全国',
                            expand: false,
                            children: [{
                                title: '北京',
                            }, {
                                title: '浙江',
                            }]
                        }]
                    }
                ]
            }
        }
    }
</script>
