<template>
    <div class="iframe">
        <iframe :src="url" frameborder="0" width="100%" :height="height"></iframe>
    </div>
</template>
<style>
</style>
<script>
import { mapState } from 'vuex';
export default {
    data(){
        return {
           url:'',
           height:""
        }
    },
    computed: {
        ...mapState({
            videoUrls : state => state.map.videoUrls,
        }),
    },
    watch:{
        '$route'(to){
            this.url = this.videoUrls[to.params.name]
        }
    },
    methods:{
        
    },
    created(){
        this.url = this.videoUrls[this.$route.params.name];
        this.height = document.querySelector('#app').clientHeight - 65 + 'px';
        
    },
};
</script>