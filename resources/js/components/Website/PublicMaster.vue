<template>
<span>   



   <!-- ========== HEADER ========== -->
    <!-- <header id="header" class="u-header u-header-left-aligned-nav d-xl-none u-header--sticky-top-md u-header--sticky-top-sm u-header--sticky-top" style="margin-bottom: 63px; width:100%;">
        <div class="u-header__section">            
            <HeaderLogoMenuFixedToTop></HeaderLogoMenuFixedToTop>
        </div>
    </header> -->

    <header id="header" class="u-header u-header-left-aligned-nav">
        <div class="u-header__section">
            <!--Header Topbar -->
            <HeaderTopbar></HeaderTopbar> <!--Header Tobbar component-->            
            <!-- End Header Topbar -->

            <!-- ################################ Only For home page ############################## -->
            <!-- Logo-Search-header-icons -->
            <HeaderLogoSearchIconsForHome v-if="this.$route.path === '/home' "></HeaderLogoSearchIconsForHome>
            <!-- End Logo-Search-header-icons -->
            <!-- Vertical-and-secondary-menu -->
            <HeaderVerticalAndSecondaryMenuForHome v-if="this.$route.path === '/home' "></HeaderVerticalAndSecondaryMenuForHome>
            <!-- End Vertical-and-secondary-menu -->
            <!-- ################################ Only For home page ############################## -->



            <!-- ################################ Only All page without Home ############################## -->
            <!-- Logo and Menu -->
            <HeaderLogoMenuForAllPage v-if="this.$route.path !== '/home' "></HeaderLogoMenuForAllPage>
            <!-- End Logo and Menu -->

            <!-- Vertical-and-Search-Bar -->
            <HeaderVerticalAndSearchForAllPage v-if="this.$route.path !== '/home' "></HeaderVerticalAndSearchForAllPage>
            <!-- End Vertical-and-Search-Bar -->
            <!-- ################################ Only All page Without home ############################## -->

            <!-- ========== HEADER SIDEBAR ========== -->
            <!-- <SidebarNavigationHeader1></SidebarNavigationHeader1> -->
            <!-- ========== End HEADER SIDEBAR ========== -->
        </div>

    </header>
    <!-- ========== END HEADER ========== -->

    <!-- ========== MAIN CONTENT ========== -->
    <router-view default="{name: 'HomePublic'}"></router-view>    
    <!-- ========== END MAIN CONTENT ========== -->

    


    <!-- ========== FOOTER ========== -->
    <FooterComponent></FooterComponent> <!--Footer component call form vue Layouts Footer.vue-->
    <!-- ========== END FOOTER ========== -->


    <!-- ========== Fixed FOOTER ========== -->
    <footer class="d-xl-none" style="margin-top: 63px"> 
        <FooterFixed></FooterFixed>
    </footer>
    <!-- ========== END Fixed FOOTER ========== -->

    


    <!-- ========== SECONDARY CONTENTS ========== -->
    <!-- Account Sidebar Navigation -->
    <AccountSidebarNavigationToggler></AccountSidebarNavigationToggler>
    <!-- End Account Sidebar Navigation -->
    <!-- ========== END SECONDARY CONTENTS ========== -->



    <!-- ========== Sidebar Cart Content ========== -->
    <SidebarCartContent></SidebarCartContent>
    <!-- ========== End Sidebar Cart Content ========== -->
    
    <!-- Go to Top -->
    <GoToTopButton></GoToTopButton>
    <!-- End Go to Top -->


</span>
</template>

<script>
    import HeaderLogoMenuFixedToTop from './Layouts/HeaderLogoMenuFixedToTop.vue' //Load to every page
    import HeaderTopbar from './Layouts/HeaderTopbar.vue' //Load to every page
    

    //import HeaderLogoSearchIconsForHome from './Layouts/HeaderLogoSearchIconsForHome.vue' //Load to only Home
    //import HeaderVerticalAndSecondaryMenuForHome from './Layouts/HeaderVerticalAndSecondaryMenuForHome.vue' //Load to only Home
    const HeaderLogoSearchIconsForHome = () => import( /* webpackChunkName: "HeaderLogoSearchIconsForHome-com" */ './Layouts/HeaderLogoSearchIconsForHome.vue')
    const HeaderVerticalAndSecondaryMenuForHome = () => import( /* webpackChunkName: "HeaderVerticalAndSecondaryMenuForHome-com" */ './Layouts/HeaderVerticalAndSecondaryMenuForHome.vue')

    import SidebarNavigationHeader1 from './Layouts/SidebarNavigationHeader1.vue' //Load to all

    //import HeaderLogoMenuForAllPage from './Layouts/HeaderLogoMenuForAllPage.vue' //Load to all page without home
    //import HeaderVerticalAndSearchForAllPage from './Layouts/HeaderVerticalAndSearchForAllPage.vue' //Load to all page without home
    const HeaderLogoMenuForAllPage = () => import( /* webpackChunkName: "HeaderLogoMenuForAllPage-com" */ './Layouts/HeaderLogoMenuForAllPage.vue')
    const HeaderVerticalAndSearchForAllPage = () => import( /* webpackChunkName: "HeaderVerticalAndSearchForAllPage-com" */ './Layouts/HeaderVerticalAndSearchForAllPage.vue')
    
    import AccountSidebarNavigationToggler from './Layouts/AccountSidebarNavigationToggler.vue' //Load to every page
    import SidebarCartContent from './Layouts/SidebarCartContent.vue' //Load to every page
    //const AccountSidebarNavigationToggler = () => import( /* webpackChunkName: "AccountSidebarNavigationToggler-com" */ './Layouts/AccountSidebarNavigationToggler.vue')

    import GoToTopButton from './Layouts/GoToTopButton.vue' //Load to every page
    import FooterComponent from './Layouts/Footer.vue' //Load to every page   
    import FooterFixed from './Layouts/FooterFixed.vue' //Load to every page   
    //const UnitsMasterForm = () => import( /* webpackChunkName: "UnitsMasterForm-com" */ './UnitsMasterForm')
    export default {
        name: "Home-Master-website",
        data (){      
            return {                            
            }
        },

        components:{ 
            HeaderLogoMenuFixedToTop,
            HeaderTopbar, 
            HeaderLogoSearchIconsForHome, 
            HeaderVerticalAndSecondaryMenuForHome, 
            SidebarNavigationHeader1,

            HeaderLogoMenuForAllPage,
            HeaderVerticalAndSearchForAllPage,
            
            AccountSidebarNavigationToggler, 
            SidebarCartContent,
            GoToTopButton,
            FooterComponent, 
            FooterFixed,
        }, 

        methods: {          
        },           

        created(){
        },
           
        mounted() {
            //initialization of slick carousel (Slick Slider call from here, otherwise it get error)
            //$.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

            

        },
    }


</script>