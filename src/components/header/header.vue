<template>
    <div class="header">
        <Menu mode="horizontal" :theme="'dark'" active-name="currentMenu">
        <MenuItem name="home">
            <a href="/#/">首页</a>
        </MenuItem>
        <MenuItem name="variety">
            <a href="/#/variety">综艺</a>
        </MenuItem>
    </Menu>
    </div>
</template>

<style lang="less" scoped>
.header{
    a{
        display: block;
        color:#e2e2e2;
    }
}
</style>

<script>
export default {
    name: 'mg-header',
    props: {
       currentMenu: String
    },
    created(){

    }
}
</script>