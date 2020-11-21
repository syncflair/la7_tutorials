<template>
<span>   

   <!-- ========== HEADER ========== -->
    <header id="header" class="u-header u-header-left-aligned-nav">
        <div class="u-header__section">
            <!--Header Topbar -->
            <HeaderTopbar></HeaderTopbar> <!--Header Tobbar component-->            
            <!-- End Header Topbar -->

            <!-- Logo-Search-header-icons -->
            <HeaderLogoSearchIconsForHome></HeaderLogoSearchIconsForHome>
            <!-- End Logo-Search-header-icons -->

            <!-- Vertical-and-secondary-menu -->
            <HeaderVerticalAndSecondaryMenuForHome></HeaderVerticalAndSecondaryMenuForHome>
            <!-- End Vertical-and-secondary-menu -->
        </div>
    </header>
    <!-- ========== END HEADER ========== -->

    <!-- ========== MAIN CONTENT ========== -->
    <router-view default="{name: 'HomePublic'}"></router-view>
    
    <!-- ========== END MAIN CONTENT ========== -->

    <!-- ========== FOOTER ========== -->
    <FooterComponent></FooterComponent> <!--Footer component call form vue Layouts Footer.vue-->
    <!-- ========== END FOOTER ========== -->

    <!-- ========== SECONDARY CONTENTS ========== -->
    <!-- Account Sidebar Navigation -->
    <AccountSidebarNavigationToggler></AccountSidebarNavigationToggler>
    <!-- End Account Sidebar Navigation -->
    <!-- ========== END SECONDARY CONTENTS ========== -->
    
    <!-- Go to Top -->
    <GoToTopButton></GoToTopButton>
    <!-- End Go to Top -->


</span>
</template>

<script>
    import HeaderTopbar from '../Layouts/HeaderTopbar.vue' //this component load to every page of website
    import HeaderLogoSearchIconsForHome from '../Layouts/HeaderLogoSearchIconsForHome.vue' //this component load to every page of website
    import HeaderVerticalAndSecondaryMenuForHome from '../Layouts/HeaderVerticalAndSecondaryMenuForHome.vue' //this component load to every page of website
    import FooterComponent from '../Layouts/Footer.vue' //this component load to every page of website    
    import AccountSidebarNavigationToggler from '../Layouts/AccountSidebarNavigationToggler.vue' //this component load to every page of website
    import GoToTopButton from '../Layouts/GoToTopButton.vue' //this component load to every page of website
    //const UnitsMasterForm = () => import( /* webpackChunkName: "UnitsMasterForm-com" */ './UnitsMasterForm')
    export default {
        name: "Home-Master-website",
        data (){      
            return {                            
            }
        },

        components:{ 
            HeaderTopbar, HeaderLogoSearchIconsForHome, HeaderVerticalAndSecondaryMenuForHome, FooterComponent, AccountSidebarNavigationToggler, GoToTopButton,
        }, 

        methods: {          
        },           

        created(){
        },
           
        mounted() {
            // initialization of slick carousel (Slick Slider call from here, otherwise it get error)
            //$.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
        },
    }


</script>