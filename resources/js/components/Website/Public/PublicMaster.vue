<template>
<span>   

   <!-- ========== HEADER ========== -->
   
    <header id="header" class="u-header u-header-left-aligned-nav">
        <div class="u-header__section">
            <!--Header Topbar -->
            <HeaderTopbar></HeaderTopbar> <!--Header Tobbar component-->            
            <!-- End Header Topbar -->

            <!-- ################################ Only For home page ############################## -->
            <!-- Logo-Search-header-icons -->
            <HeaderLogoSearchIconsForHome 
                v-if="this.$route.path === '/home' "
                :topHeaderFixedClass="topHeaderFixedClass"
            ></HeaderLogoSearchIconsForHome>
            <!-- End Logo-Search-header-icons -->
            <!-- Vertical-and-secondary-menu -->
            <HeaderVerticalAndSecondaryMenuForHome v-if="this.$route.path === '/home' "></HeaderVerticalAndSecondaryMenuForHome>
            <!-- End Vertical-and-secondary-menu -->
            <!-- ################################ Only For home page ############################## -->



            <!-- ################################ Only All page without Home ############################## -->
            <!-- Logo and Menu -->
            <HeaderLogoMenuForAllPage 
                v-if="this.$route.path !== '/home' "
                :topHeaderFixedClass="topHeaderFixedClass"
            ></HeaderLogoMenuForAllPage>
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
    <main id="content" role="main" :class="mainContentMarginTopWhenHeaderFiexd">

        <!-- <router-view default="{name: 'HomePublic'}"></router-view>  -->
        <router-view></router-view> 
        <vue-progress-bar></vue-progress-bar>

    </main>   
    <!-- ========== END MAIN CONTENT ========== -->

    


    <!-- ========== FOOTER ========== -->
    <FooterComponent></FooterComponent> <!--Footer component call form vue Layouts Footer.vue-->
    <!-- ========== END FOOTER ========== -->


    <!-- ========== Fixed FOOTER ========== -->
    <footer class="d-xl-none" style="margin-top: 45px"> 
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
    import HeaderTopbar from '../Layouts/HeaderTopbar.vue' //Load to every page
    

    //import HeaderLogoSearchIconsForHome from './Layouts/HeaderLogoSearchIconsForHome.vue' //Load to only Home
    //import HeaderVerticalAndSecondaryMenuForHome from './Layouts/HeaderVerticalAndSecondaryMenuForHome.vue' //Load to only Home
    const HeaderLogoSearchIconsForHome = () => import( /* webpackChunkName: "HeaderLogoSearchIconsForHome-com" */ '../Layouts/HeaderLogoSearchIconsForHome.vue')
    const HeaderVerticalAndSecondaryMenuForHome = () => import( /* webpackChunkName: "HeaderVerticalAndSecondaryMenuForHome-com" */ '../Layouts/HeaderVerticalAndSecondaryMenuForHome.vue')

    import SidebarNavigationHeader1 from '../Layouts/SidebarNavigationHeader1.vue' //Load to all

    //import HeaderLogoMenuForAllPage from './Layouts/HeaderLogoMenuForAllPage.vue' //Load to all page without home
    //import HeaderVerticalAndSearchForAllPage from './Layouts/HeaderVerticalAndSearchForAllPage.vue' //Load to all page without home
    const HeaderLogoMenuForAllPage = () => import( /* webpackChunkName: "HeaderLogoMenuForAllPage-com" */ '../Layouts/HeaderLogoMenuForAllPage.vue')
    const HeaderVerticalAndSearchForAllPage = () => import( /* webpackChunkName: "HeaderVerticalAndSearchForAllPage-com" */ '../Layouts/HeaderVerticalAndSearchForAllPage.vue')
    
    import AccountSidebarNavigationToggler from '../Layouts/AccountSidebarNavigationToggler.vue' //Load to every page
    import SidebarCartContent from '../Layouts/SidebarCartContent.vue' //Load to every page
    //const AccountSidebarNavigationToggler = () => import( /* webpackChunkName: "AccountSidebarNavigationToggler-com" */ './Layouts/AccountSidebarNavigationToggler.vue')

    import GoToTopButton from '../Layouts/GoToTopButton.vue' //Load to every page
    import FooterComponent from '../Layouts/Footer.vue' //Load to every page   
    import FooterFixed from '../Layouts/FooterFixed.vue' //Load to every page   
    //const UnitsMasterForm = () => import( /* webpackChunkName: "UnitsMasterForm-com" */ './UnitsMasterForm')
    export default {
        name: "Home-Master-website",
        data (){      
            return {  
                mainContentMarginTopWhenHeaderFiexd:'', 
                topHeaderFixedClass:'',   
                window: {
                    width: 0,
                    height: 0
                }                            
            }
        },

        components:{ 
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

        watch: {
            /*Add Remove Class based on window width change*/
            'window.width': function (val) {                
                if( val < 1200 ){
                    this.mainContentMarginTopWhenHeaderFiexd = 'mainContentMarginTopWhenHeaderFiexd';
                    this.topHeaderFixedClass = 'u-header--sticky-top';
                }else if(val > 1200 ){
                    this.mainContentMarginTopWhenHeaderFiexd = '';
                    this.topHeaderFixedClass = '';
                }
            },
        },

        methods: { 

            /*Window resize handle*/
            handleResize() {
                this.window.width = window.innerWidth;
                this.window.height = window.innerHeight;
            }         
        },           

        created(){
            //window resize is call
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
        },
           
        destroyed() {
            //window resize is destroy
            window.removeEventListener('resize', this.handleResize);
        },
           
        mounted() {
            //initialization of slick carousel (Slick Slider call from here, otherwise it get error)
            //$.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');


            // alert(this.$refs.screenWidth.clientHeight +' '+  this.$refs.screenWidth.clientWidth);
            //this.toggleBodyClass('screenWidth', 'TestClassTEse');
            // document.getElementsByClassName('screenWidth').classList.add('testClass');
            // document.body.classList.add('testClass');
            // document.getElementsByClassName(‘classname’).classList.remove(‘classname’)
            //console.log(window.innerHeight);
            //alert('Height: ' +window.innerHeight + ' - Width: ' + window.innerWidth);


            //alert(this.$refs.screenWidth.clientHeight + '-' + this.$refs.screenWidth.clientWidth); //working
            //console.log('Width: '+this.window.width+ ' Height: ' + this.window.height );            

        },
    }


</script>