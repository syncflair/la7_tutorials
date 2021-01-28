<template>
<span>
        
    <!-- Navbar Top -->
    <NavbarTop></NavbarTop>
    <!-- End Navbar -->

    <AssideLeftForAdminChild></AssideLeftForAdminChild>


    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">

        <!-- Vue display here :key="$route.fullPath"--> 
        <router-view></router-view>
        <!-- Vue progress bar display here -->
        <vue-progress-bar></vue-progress-bar>       

    </div>
    <!-- /.content-wrapper -->

    <!-- Right Asside - Control Sidebar -->
        <AssideRightForAdminChild></AssideRightForAdminChild>
    <!-- /. Right Asside - control-sidebar -->

    <!-- Footer -->
    <FooterforAdminChild></FooterforAdminChild>
    <!-- End  Footer -->


</span>
</template>

<script>

    //const HeaderLogoSearchIconsForHome = () => import( /* webpackChunkName: "HeaderLogoSearchIconsForHome-com" */ './Layouts/HeaderLogoSearchIconsForHome.vue')

   import NavbarTop from './Layouts/NavbarTop.vue' //Load to every page
   import AssideLeftForAdminChild from './Layouts/AssideLeftForAdminChild.vue' //Load to every page
   import AssideRightForAdminChild from './Layouts/AssideRightForAdminChild.vue' //Load to every page
   import FooterforAdminChild from './Layouts/FooterforAdminChild.vue' //Load to every page


    export default {
        name: "Admin-Child-Wrapper",
        //Get props form views/admin/dashboard.blade.php
        props:['isadminauthenticated','user','settings'], 
        data (){      
            return {
                            
            }
        },

        components:{ 
            NavbarTop, AssideLeftForAdminChild, AssideRightForAdminChild,
            FooterforAdminChild, 
        },

        methods: {          
        },           

        created(){
            //direct commit (mutations) to resources/js/store/commonStoreForAll.js
            this.$store.commit('AuthenticationForAdmin/IS_AUTHENTICATED_CHECK', this.isadminauthenticated ); 
            this.$store.commit('AuthenticationForAdmin/AUTH_USER', this.user ); 
            this.$store.commit('AuthenticationForAdmin/SYSTEM_SETTINGS', this.settings ); 
            // this.$store.commit('commonStoreForAll/AUTH_USER', this.user ); 
            // this.$store.commit('commonStoreForAll/AUTH_PERMISSIONS', this.permissions ); 
        },
           
        mounted() {
            //console.log(this.user)
            //console.log(this.myName)
            //console.log()
        }
    }
</script>
