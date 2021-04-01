<template >
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

            <!-- breadcrumb -->
            <Breadcrumb/>
            <!-- End breadcrumb -->

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
    import { mapState } from 'vuex' //for user MapState

    import HeaderTopbar from './Layouts/HeaderTopbar.vue' //Load to every page   

    import HeaderLogoSearchIconsForHome from './Layouts/HeaderLogoSearchIconsForHome.vue' //Load to only Home
    import HeaderVerticalAndSecondaryMenuForHome from './Layouts/HeaderVerticalAndSecondaryMenuForHome.vue' //Load to only Home
    // const HeaderLogoSearchIconsForHome = () => import( /* webpackChunkName: "HeaderLogoSearchIconsForHome-com" */ './Layouts/HeaderLogoSearchIconsForHome.vue')
    // const HeaderVerticalAndSecondaryMenuForHome = () => import( /* webpackChunkName: "HeaderVerticalAndSecondaryMenuForHome-com" */ './Layouts/HeaderVerticalAndSecondaryMenuForHome.vue')

   //import SidebarNavigationHeader1 from './Layouts/SidebarNavigationHeader1.vue' //Load to all

    import HeaderLogoMenuForAllPage from './Layouts/HeaderLogoMenuForAllPage.vue' //Load to all page without home
    import HeaderVerticalAndSearchForAllPage from './Layouts/HeaderVerticalAndSearchForAllPage.vue' //Load to all page without home
    // const HeaderLogoMenuForAllPage = () => import( /* webpackChunkName: "HeaderLogoMenuForAllPage-com" */ './Layouts/HeaderLogoMenuForAllPage.vue')
    // const HeaderVerticalAndSearchForAllPage = () => import( /* webpackChunkName: "HeaderVerticalAndSearchForAllPage-com" */ './Layouts/HeaderVerticalAndSearchForAllPage.vue')
    
    import Breadcrumb from './Layouts/Breadcrumb.vue' //Load to every page
    import AccountSidebarNavigationToggler from './Layouts/AccountSidebarNavigationToggler.vue' //Load to every page
    import SidebarCartContent from './Layouts/SidebarCartContent.vue' //Load to every page
    //const AccountSidebarNavigationToggler = () => import( /* webpackChunkName: "AccountSidebarNavigationToggler-com" */ './Layouts/AccountSidebarNavigationToggler.vue')

    import GoToTopButton from './Layouts/GoToTopButton.vue' //Load to every page
    import FooterComponent from './Layouts/Footer.vue' //Load to every page   
    import FooterFixed from './Layouts/FooterFixed.vue' //Load to every page   
    //const UnitsMasterForm = () => import( /* webpackChunkName: "UnitsMasterForm-com" */ './UnitsMasterForm')

    export default {
        name: "Website-Wrapper-master",

        //Get props form views/admin/dashboard.blade.php
        // props:['user','permissions','settings'], 

        //props:['isitwebsite', 'authcustomer', 'isauthenticated', 'authsupplier', 'issspaauthenticated'],
        
        props: {
          isitwebsite:{
            type: Number,
            required: true,
          },
          
          // authcustomer: {
          //   type: Object,
          //   //required: true
          // },

          // isauthenticated:{
          //   type: Boolean,
          //   //required: true
          // },

          // authsupplier: {
          //   type: Object,
          //   //required: true
          // },

          // issspaauthenticated:{
          //   type: Boolean,
          //   //required: true
          // },
        },

        data (){      
            return {
                mainContentMarginTopWhenHeaderFiexd:'', 
                topHeaderFixedClass:'',   
                        
            }
        },

        components:{ 
            HeaderTopbar, 
            HeaderLogoSearchIconsForHome, 
            HeaderVerticalAndSecondaryMenuForHome, 
            //SidebarNavigationHeader1,
            HeaderLogoMenuForAllPage,
            HeaderVerticalAndSearchForAllPage,
            Breadcrumb,            
            AccountSidebarNavigationToggler, 
            SidebarCartContent,
            GoToTopButton,
            FooterComponent, 
            FooterFixed,
        },

        computed: {
            ...mapState( 'AuthenticationForCustomer', ['isAuthenticated'] ),
        },

        watch: {            
            /*************************************************************************************/ 
                /*Add Remove Class based on window width change (Call from CommonGlobal.js)*/
            /*************************************************************************************/             
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

                  
        },           

        created(){
            // console.log(this.spac_access_token);
            // setTimeout(() => { 
              if( localStorage.getItem('_spac_at') === 'undefined' && localStorage.getItem('_spac_rt') === 'undefined'){
                this.$store.dispatch('AuthenticationForCustomer/clearTokenFromLocalStoreApi' ); 
              }
              else if( localStorage.getItem('_spac_at') === null && localStorage.getItem('_spac_rt') === null ){
                this.$store.commit('AuthenticationForCustomer/IS_AUTHENTICATED_CHECK', false );   
              }
              else{
                this.$store.commit('AuthenticationForCustomer/IS_AUTHENTICATED_CHECK', true );   
              }
            // }, 10);//call after 10000 miliscound
             
            //direct commit (mutations) to resources/js/store/commonStoreForAll.js
            //this.$store.commit('AuthenticationForCustomer/IS_AUTHENTICATED_CHECK', this.isauthenticated );             
            //this.$store.commit('AuthenticationForCustomer/AUTH_CUSTOMER_CHECK', this.authcustomer ); //commit from props


            //this.$store.commit('AuthenticationForSupplier/IS_AUTHENTICATED_CHECK', this.issspaauthenticated );             
            //this.$store.commit('AuthenticationForSupplier/AUTH_SUPPLIER_CHECK', this.authsupplier ); //commit from props

            // this.$store.commit('commonStoreForWebsite/IS_IT_WEBSITE_CHECK', this.isitwebsite ); 
            this.$store.commit('AuthenticationForCustomer/IS_IT_WEBSITE_CHECK', this.isitwebsite ); 

        },

        destroyed() {

        },
           
        mounted() {

            this.$nextTick(function () {
                
                // console.log(this.isAuthenticated); // console.log(this.$route.path);
                if(this.isAuthenticated){
                    // console.log(this.$route.path);
                    const authenticationRoutes = ['CustomerLogin', 'CustomerRegister', 'CustomerPasswordRecover', 'CustomerPasswordReset'];
                    
                    if(authenticationRoutes.includes(this.$route.name)){
                        this.$router.push({ path : '/auth/my-dashboard' }).catch(err => {});
                        console.log(this.$route.name);                 
                    }
                  
                    
                    setTimeout(() => {
                        this.$store.dispatch('AuthenticationForCustomer/fetchAuthCustomerData');
                    }, 300);
                }

            });

            //console.log(localStorage.getItem('access_token'));
            // console.log('One ' + ACCESS_TOKEN);
            // console.log('store' + ACCESS_TOKEN);
            
            // console.log('website-wrapper');
            // console.log('Height: ' +window.innerHeight + ' - Width: ' + window.innerWidth);

            // //  [App.vue specific] When App.vue is finish loading finish the progress bar
            // this.$Progress.finish()


            // alert(this.$refs.screenWidth.clientHeight +' '+  this.$refs.screenWidth.clientWidth);
            //this.toggleBodyClass('screenWidth', 'TestClassTEse');
            // document.getElementsByClassName('screenWidth').classList.add('testClass');
            // document.body.classList.add('testClass');
            // document.getElementsByClassName(‘classname’).classList.remove(‘classname’)
            //console.log(window.innerHeight);
            //alert('Height: ' +window.innerHeight + ' - Width: ' + window.innerWidth);


            //alert(this.$refs.screenWidth.clientHeight + '-' + this.$refs.screenWidth.clientWidth); //working
            //console.log('Width: '+this.window.width+ ' Height: ' + this.window.height ); 

            //call from AccountSidebarNavigationToggler.vue component
            FireEvent.$on('Call_HSCore_components_HSUnfold', () => {
                setTimeout(() => {
                    // initialization of unfold component
                    $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));
               }, 600);
            }); 


            FireEvent.$on('Call_all_javascript_function_for_theme', () => {
              setTimeout(() => {

                // console.log('All javascript Loaded');

                //initialization of HSMegaMenu component
                $('.js-mega-menu').HSMegaMenu({
                    event: 'hover',
                    direction: 'horizontal',
                    pageContainer: $('.container'),
                    breakpoint: 767.98,
                    hideTimeOut: 0
                });               

                // initialization of svg injector module
                $.HSCore.components.HSSVGIngector.init('.js-svg-injector');


                     // initialization of header
                $.HSCore.components.HSHeader.init($('#header'));

                // initialization of animation
                $.HSCore.components.HSOnScrollAnimation.init('[data-animation]');

                // initialization of unfold component
                $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
                    afterOpen: function () {
                        $(this).find('input[type="search"]').focus();
                    }
                });

                

                // initialization of countdowns
                var countdowns = $.HSCore.components.HSCountdown.init('.js-countdown', {
                    yearsElSelector: '.js-cd-years',
                    monthsElSelector: '.js-cd-months',
                    daysElSelector: '.js-cd-days',
                    hoursElSelector: '.js-cd-hours',
                    minutesElSelector: '.js-cd-minutes',
                    secondsElSelector: '.js-cd-seconds'
                });

                // initialization of malihu scrollbar
                $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar'));

                // initialization of forms
                $.HSCore.components.HSFocusState.init();

                // initialization of form validation
                // $.HSCore.components.HSValidation.init('.js-validate', {
                //     rules: {
                //         confirmPassword: {
                //             equalTo: '#signupPassword'
                //         }
                //     }
                // });

                // initialization of show animations
                $.HSCore.components.HSShowAnimation.init('.js-animation-link');

                // initialization of fancybox
                // initialization of popups
                $.HSCore.components.HSFancyBox.init('.js-fancybox');

                // initialization of slick carousel
                $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

                // initialization of go to
                $.HSCore.components.HSGoTo.init('.js-go-to');

                // initialization of hamburgers
                $.HSCore.components.HSHamburgers.init('#hamburgerTrigger');

                // initialization of unfold component
                $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
                    beforeClose: function () {
                        $('#hamburgerTrigger').removeClass('is-active');
                    },
                    afterClose: function() {
                        $('#headerSidebarList .collapse.show').collapse('hide');
                    }
                });

                $('#headerSidebarList [data-toggle="collapse"]').on('click', function (e) {
                    e.preventDefault();

                    var target = $(this).data('target');

                    if($(this).attr('aria-expanded') === "true") {
                        $(target).collapse('hide');
                    } else {
                        $(target).collapse('show');
                    }
                });

                // initialization of unfold component
                $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));

                // initialization of select picker
                $.HSCore.components.HSSelectPicker.init('.js-select');


                // initialization of HSScrollNav component
                $.HSCore.components.HSScrollNav.init($('.js-scroll-nav'), {
                  duration: 700
                });

                // initialization of quantity counter
                $.HSCore.components.HSQantityCounter.init('.js-quantity');

                // initialization of forms
                $.HSCore.components.HSRangeSlider.init('.js-range-slider');



               }, 0);//end setTimeout
            }); // end Call_all_javascript_function_for_theme

            




        }
    }
</script>