<template>
<span>
        
    <!-- Navbar Top -->
    <NavbarTop></NavbarTop>
    <!-- End Navbar -->

    <AssideLeftForAdminSupplier></AssideLeftForAdminSupplier>


    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">

        <!-- Vue display here :key="$route.fullPath"--> 
        <router-view></router-view>
        <!-- Vue progress bar display here -->
        <vue-progress-bar></vue-progress-bar>       

    </div>
    <!-- /.content-wrapper -->

    <!-- Right Asside - Control Sidebar -->
    <!-- <AssideRightForAdminSupplier></AssideRightForAdminSupplier> -->
    <!-- /. Right Asside - control-sidebar -->

    <!-- Footer -->
    <FooterforAdminSupplier></FooterforAdminSupplier>
    <!-- End  Footer -->


</span>
</template>

<script>

   import NavbarTop from './Layouts/NavbarTop.vue' //Load to every page
   import AssideLeftForAdminSupplier from './Layouts/AssideLeftForAdminSupplier.vue' //Load to every page
   // import AssideRightForAdminSupplier from './Layouts/AssideRightForAdminSupplier.vue' //Load to every page
   import FooterforAdminSupplier from './Layouts/FooterforAdminSupplier.vue' //Load to every page


    export default {
        name: "Supplier-Admin-Wrapper",
        //Get props form views/admin/dashboard.blade.php
        props:['issspaauthenticated','authsupplier'], 
        data (){      
            return {
                            
            }
        },

        components:{ 
            NavbarTop, 
            AssideLeftForAdminSupplier, 
            // AssideRightForAdminSupplier,
            FooterforAdminSupplier, 
        },

        methods: {          
        },           

        created(){
            //direct commit (mutations) to resources/js/store/commonStoreForAll.js
            this.$store.commit('AuthenticationForSupplier/IS_AUTHENTICATED_CHECK', this.issspaauthenticated ); 
            this.$store.commit('AuthenticationForSupplier/AUTH_SUPPLIER_CHECK', this.authsupplier ); 
            // this.$store.commit('AuthenticationForSupplier/SYSTEM_SETTINGS', this.settings ); 
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
