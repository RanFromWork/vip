<template>
  <div class="home">
    hello, home
  </div>
</template>
<style>
</style>
<script>
export default {
    data(){
        return {}
    },
    methods:{
        
    },
    created(){
        this.$Notice.success({
            title: '跳转成功',
            desc: '这里是首页页面'
        });
    },
};
</script>