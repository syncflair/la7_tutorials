<template>
    <span>
        <!-- Vue display here :key="$route.fullPath"--> 
        <router-view></router-view>
        <!-- Vue progress bar display here -->
        <vue-progress-bar></vue-progress-bar>

        <!-- <h2>Hello</h2> -->

    </span>
</template>

<script>

    export default {
        name: "supplier-Admin-Wrapper",
        //Get props form views/admin/dashboard.blade.php
        //props:['user','permissions','settings'], 
        data (){      
            return {
                            
            }
        },

        methods: {          
        },           

        created(){
            //direct commit (mutations) to resources/js/store/commonStoreForAll.js
            // this.$store.commit('commonStoreForAll/AUTH_USER', this.user ); 
            // this.$store.commit('commonStoreForAll/AUTH_PERMISSIONS', this.permissions ); 
            // this.$store.commit('commonStoreForAll/SYSTEM_SETTINGS', this.settings ); 
        },
           
        mounted() {
            //console.log(this.user)
            //console.log(this.myName)
            //console.log()
        }
    }
</script>
