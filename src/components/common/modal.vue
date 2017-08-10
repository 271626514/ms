<template>
    <div>
        <!--失败回执-->
        <Modal v-model="error" :mask-closable="false" title="提示" :closable="false">
            <div class="clearfix dialog-body">
                <h1>{{title}}</h1>
                <p class="red f16 text-center mt-20">{{content}}</p>
            </div>
            <div slot="footer">
                <Button type="primary" style="width:90px" class="align" @click="error=!error">确定</Button>
            </div>
        </Modal>
        <!--成功回执-->
        <Modal v-model="success" :mask-closable="false" title="提示" :closable="false">
            <div class="clearfix dialog-body">
                <h1>{{title}}</h1>
                <p class="red f16 text-center mt-20">{{content}}</p>
            </div>
            <div slot="footer">
                <Button type="primary" style="width:90px" class="align" @click="reload">确定</Button>
            </div>
        </Modal>
        <!--返回列表回执-->
        <Modal v-model="redirect" :mask-closable="false" title="提示" :closable="false">
            <div class="clearfix dialog-body">
                <h1>{{title}}</h1>
                <p class="f16 text-center mt-20" v-html="content"></p>
            </div>
            <div slot="footer">
                <Button type="primary" style="width:90px" class="align" @click="$router.push(path)">确定</Button>
            </div>
        </Modal>
        <!--带有取消的返回列表回执-->
        <Modal v-model="redirect_cancel" :mask-closable="false" title="提示" :closable="false">
            <div class="clearfix dialog-body">
                <h1>{{title}}</h1>
                <p class="f16 text-center mt-20" v-html="content"></p>
            </div>
            <div slot="footer" style="text-align: center">
                <Button type="primary" style="width:80px" @click="$router.push(path)">确定</Button>
                <Button type="ghost" style="width:80px" @click="redirect_cancel=!redirect_cancel">返回修改</Button>
            </div>
        </Modal>
    </div>
</template>
<style lang="less"></style>
<script type="text/ecmascript-6">
    export default{
        data(){
            return{
                success:false,
                error:false,
                redirect:false,
                redirect_cancel:false,
                path:''
            }
        },
        watch:{
          'dialog':'setFlag'
        },
        methods:{
            setFlag(){
                console.log(this.url)
                if(this.url){
                    if(!this.cancel){
                        this.redirect = true
                        this.path = this.url
                    }else{
                        this.redirect_cancel = true
                        this.path = this.url
                    }
                }else if(this.dialog>0){
                    this.success = true;
                }else if(this.dialog<0){
                    this.error = true;
                }
            },
            reload() {
                window.location.reload();
            },
        },
        props: ['title','content','dialog','url','cancel']
    }
</script>
