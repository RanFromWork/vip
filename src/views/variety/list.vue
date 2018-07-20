<template>
    <div class="variety">
        hello, variety
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
            desc: '这里是综艺页面'
        });
    },
};
</script>