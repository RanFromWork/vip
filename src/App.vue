<template>
<div id="app">
    <div class="header">
        <mg-header :currentMenu = "currentMenu"></mg-header>
    </div>
    <div class="main">
        <router-view/>
    </div>
</div>
</template>

<style lang="less">
#app{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: 60px;
    box-sizing: border-box;
    .main{
        width: 100%;
        height: 100%; 
    }
}
</style>
<script>
import mgHeader from "@cmp/header/header";
export default {
    components: {
        mgHeader
    },
    data() {
        return {
            currentPath: [{name: "首页", path: "/"}],
            currentMenu: "home"
        };
    },
    watch: {
        '$route' (to) {
            this.currentMenu = this.$route.meta.activeMenu;
        }
    }
};
</script>

