<template>
    <div class="header">
        <Menu class="menu" mode="horizontal" :theme="'dark'" :active-name="currentMenu" @on-select="jump">
            <MenuItem name="home">
                首页
            </MenuItem>
            <MenuItem name="movie">
                电影
            </MenuItem>
            <MenuItem name="tv">
                电视剧
            </MenuItem>
            <MenuItem name="variety">
                综艺
            </MenuItem>
            <div class="pt14">
                <Input v-model="keyWord" @keyup.enter.native="search" class="search-box fl" placeholder="搜索关键字">
                    <Button slot="append" icon="ios-search" @click="search"></Button>
                </Input>
                <Select v-model="activePlatform" class="w200 fr" placeholder="请选择视频平台" @on-change="iframeSelect">
                    <Option v-for="item in platformList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div>
        </Menu>
    </div>
</template>

<style lang="less" scoped>
.header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #495060;
    .pt14{
        padding-top: 14px;
    }
    .w200{
        width: 200px;
    }
    .menu{
        width: 1200px;
        margin: 0 auto;
        .search-box{
            width: 450px;
            margin-left: 50px;
        }
    }
}
</style>

<script>
import { mapState } from 'vuex';
export default {
    name: 'mg-header',
    props: {
       currentMenu: String
    },
    data(){
        return {
            keyWord:'',
            activePlatform: ''
        }
    },
    computed: mapState({
        platformList : state => state.map.platformList,
    }),
    watch:{
        activePlatform(newValue, oldValue){

        }
    },
    methods: {
        search(){
            console.log(this.keyWord)
        },
        jump(name){
            this.$router.push({
                name: name
            })
        },
        iframeSelect(value){
            this.$router.push({
                name:'iframe',
                params:{
                    name: value
                }
            })
        }
    },
    created(){

    },
}
</script>