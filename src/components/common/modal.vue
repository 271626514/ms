<template>
    <div>
        <Modal v-model="error" :mask-closable="false" title="提示" :closable="false">
            <div class="clearfix dialog-body">
                <h1>{{title}}</h1>
                <p class="red f16 text-center mt-20">{{content}}</p>
            </div>
            <div slot="footer">
                <Button type="primary" style="width:90px" class="align" @click="error=!error">确定</Button>
            </div>
        </Modal>
        <Modal v-model="success" :mask-closable="false" title="提示" :closable="false">
            <div class="clearfix dialog-body">
                <h1>{{title}}</h1>
            </div>
            <div slot="footer">
                <Button type="primary" style="width:90px" class="align" @click="reload">确定</Button>
            </div>
        </Modal>
    </div>
</template>
<style lang="less">

</style>
<script type="text/ecmascript-6">
    export default{
        data(){
            return{
                success:false,
                error:false
            }
        },
        watch:{
          'dialog':'setFlag'
        },
        methods:{
            setFlag(){
                if(this.dialog>0){
                    this.success = true;
                }else if(this.dialog<0){
                    this.error = true;
                }
            },
            reload() {
                window.location.reload();
            }
        },
        props: ['title','content','dialog'],
    }
</script>
