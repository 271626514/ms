<template>
    <div>
        <Modal v-model="flag" :mask-closable="false" title="提示" :closable="false">
            <div class="clearfix dialog-body">
                <h1>{{title}}</h1>
                <p class="red f16 text-center mt-20">{{content}}</p>
            </div>
            <div slot="footer">
                <Button type="primary" style="width:90px" class="align" @click="flag=!flag">确定</Button>
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
                flag:false
            }
        },
        watch:{
          'dialog':'setFlag'
        },
        methods:{
            setFlag(){
                console.log(123)
                if(this.dialog>0){
                    this.flag = true;
                }
            }
        },
        props: ['title','content','dialog'],
    }
</script>
