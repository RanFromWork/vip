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

<style>

</style>
