<template>
    <div class="header">
        <Menu class="menu" mode="horizontal" :theme="'dark'" :active-name="currentMenu" @on-select="jump">
        <MenuItem name="home">
            首页
        </MenuItem>
        <MenuItem name="variety">
            综艺
        </MenuItem>
    </Menu>
    </div>
</template>

<style lang="less" scoped>
.header{
    width: 100%;
    background-color: #495060;
    .menu{
        width: 1200px;
        margin: 0 auto;
    }
}
</style>

<script>
export default {
    name: 'mg-header',
    props: {
       currentMenu: String
    },
    methods:{
        jump(name){
            this.$router.push({
                name: name
            })
        }
    },
    created(){

    },
}
</script>