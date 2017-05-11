<template>
    <div class="tile">
        <div class="module-header"><h4>创建新权限</h4></div>
        <div class="tile-content">
            <form action="">
                <div class="name">
                    <label>权限名称：</label>
                    <input type="text" name="roleName" id="roleName" value=""/>
                </div>
                <div class="power-title mt-30">
                    <strong>设备管理</strong>
                    <p class="power-list">未选择</p>
                    <em class="czicon"></em>
                </div>
                <div class="power-tree on">
                    <Tree :data="baseData" show-checkbox></Tree>
                </div>
                <div class="power-title mt-30">
                    <strong>端口管理</strong>
                    <p class="power-list">未选择</p>
                    <em class="czicon"></em>
                </div>
                <div class="power-tree">
                    <ul id="contentTree" class="ztree"></ul>
                </div>
                <div class="power-title mt-30">
                    <strong>数据管理</strong>
                    <p class="power-list">未选择</p>
                    <em class="czicon"></em>
                </div>
                <div class="power-tree">
                    <ul id="businessTree" class="ztree"></ul>
                </div>
                <div class="caozuo mt-40 clearfix">
                    <a class="creat btn-blue w80" id="creatRight">创建</a>
                    <a class="cancel btn-default w80" href="./right_list.html">取消</a>
                </div>
            </form>
        </div>
    </div>
</template>
<style lang="less">
    .main-container {
        background: #fff;
    }

    .title {
        padding: 0;
    }

    h4 {
        color: #666;
        font-size: 18px;
        line-height: 48px;
    }

    .tile-content {
        padding: 30px;
    }

    form .name {
        overflow: hidden;
        height: 30px;
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
        overflow: hidden;
        transition: all 3s ease;
        -webkit-transition: all 3s ease;
        -moz-transition: all 3s ease;
        -o-transition: all 3s ease;
        -ms-transition: all 3s ease;
    }

    .power-tree.on {
        height: auto;
    }
</style>
<script type="text/ecmascript-6">
    export default{
        data() {
            return {
                baseData: [{
                    expand: true,
                    title: 'parent 1',
                    children: [{
                        title: 'parent 1-0',
                        expand: true,
                        disabled: true,
                        children: [{
                            title: 'leaf',
                            disableCheckbox: true
                        }, {
                            title: 'leaf',
                        }]
                    }, {
                        title: 'parent 1-1',
                        expand: true,
                        checked: true,
                        children: [{
                            title: '<span style="color: red">leaf</span>',
                        }]
                    }]
                }]
            }
        }
    }
</script>
