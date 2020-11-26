<template>
    <span>
        <!-- Vue display here :key="$route.fullPath"--> 
        <router-view></router-view>
        <!-- Vue progress bar display here -->
        <!-- <vue-progress-bar></vue-progress-bar> -->
    </span>
</template>

<script>

    export default {
        name: "Website-Wrapper-master",
        //Get props form views/admin/dashboard.blade.php
        // props:['user','permissions','settings'], 
        props:['isitwebsite'], 

        
        data (){      
            return {
                            
            }
        },

        methods: {          
        },           

        created(){
            //direct commit (mutations) to resources/js/store/commonStoreForAll.js
            this.$store.commit('commonStoreForAll/IS_IT_WEBSITE_CHECK', this.isitwebsite ); 


        },
           
        mounted() {
        }
    }
</script>