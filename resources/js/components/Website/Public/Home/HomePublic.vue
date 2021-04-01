<template>

<!-- ========== MAIN CONTENT ========== -->
    <!-- <main id="content" role="main"> -->
    <span>

        <!-- Slider Section -->
        <HomeSliderSection></HomeSliderSection>
        <!-- End Slider Section -->

        <span>{{authCustomer}}</span>



        <!-- Deal Countdown -->
        <!-- <dealCountDownMain></dealCountDownMain> -->
        <!-- End Deal Countdown -->

        <div class="container">

            <!-- Feature List -->
            <FeatureList></FeatureList>
            <!-- End Feature List -->
            
            <!-- Banner -->
            <BannerSmallFour></BannerSmallFour>
            <!-- End Banner -->

            

            <!-- Deal Countdown -->
            <!-- <dealCountDownMain></dealCountDownMain> -->
            <!-- End Deal Countdown -->

            <!-- Deals of The Day -->
            <dealCountDown></dealCountDown>
            <!-- End Deals of The Day -->

            <!-- Brand Carousel Main Custome By Sumon -->
            <BrandCarouselMain></BrandCarouselMain>
            <!-- End Brand Carousel Main Custome By Sumon -->

            <!-- Brand shop Carousel Main Custome By Sumon -->
            <BrandShopCarousel></BrandShopCarousel>
            <!-- End Brand shop Carousel Main Custome By Sumon -->


            <!-- Tab Prodcut Section -->
            <TabProductSection></TabProductSection>
            <!-- End Tab Prodcut Section -->
            
        </div><!--End container-->





        <div class="container">
            <!-- Prodcut-cards-carousel -->
            <!-- End Prodcut-cards-carousel -->

            <!-- Full banner -->
            <BannerFull></BannerFull>
            <!-- End Full banner -->

            <!-- Small banner -->
            <BannerSmallTwo></BannerSmallTwo>
            <!-- End Small banner -->

            <!-- Recently viewed -->
            <RecentlyView></RecentlyView>
            <!-- End Recently viewed -->

            <!-- Brand Carousel -->
            <!-- End Brand Carousel -->

            <!-- Footer-top-widget -->
            <FooterTopWidget></FooterTopWidget>
            <!-- End Footer-top-widget -->

        </div>

    </span>
    <!-- ========== END MAIN CONTENT ========== -->


</template>

<script>

    import { mapState } from 'vuex' //for user MapState

    import HomeSliderSection from './HomeSliderSection.vue' //Load to only Home Page
    import FeatureList from '../CommonLayouts/FeatureList.vue'    
    import BannerSmallFour from '../CommonLayouts/BannerSmallFour.vue'    
    import BrandCarouselMain from './BrandCarouselMain.vue' //Load to only Home Page
    import BrandShopCarousel from './BrandShopCarousel.vue' //Load to only Home Page
    import dealCountDown from './dealCountDown.vue' //Load to every page
    import dealCountDownMain from './dealCountDownMain.vue'
    import TabProductSection from './TabProductSection.vue'
    import RecentlyView from '../CommonLayouts/RecentlyView.vue'
    import BannerFull from '../CommonLayouts/BannerFull.vue'
    import BannerSmallTwo from '../CommonLayouts/BannerSmallTwo.vue'
    import FooterTopWidget from '../CommonLayouts/FooterTopWidget.vue'
    export default {        

        name: "Home-Public-website",
        data (){      
            return {                            
            }
        },
        components:{
            HomeSliderSection,
            FeatureList,
            BannerSmallFour,
            dealCountDown,
            BrandCarouselMain,
            BrandShopCarousel,
            dealCountDownMain,
            TabProductSection,
            RecentlyView,
            BannerFull,
            BannerSmallTwo,
            FooterTopWidget,
        },

        computed: {

          ...mapState( 'AuthenticationForCustomer', ['authCustomer'] ),
        },

        methods: {          
        },           

        created(){
            //this.$store.dispatch('commonStoreForWebsite/fetchAuthCustomerData'); //get auth customer data 
        },
           
        mounted() {

            //call from AccountSidebarNavigationToggler.vue component
            // FireEvent.$on('Call_HSCore_components_HSUnfold', () => {
            //     setTimeout(() => {
            //         // initialization of unfold component
            //         $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));
            //    }, 600);
            // });

            this.$nextTick(function () {

                FireEvent.$emit('Call_all_javascript_function_for_theme'); // call all javascript for theme


            })//end this.$nextTick





            //############### Windown Load / $(window).on('load', function () {} ###############################
            // window.addEventListener('load', () => {                
            // })

            //############## Windown ready / $(document).on('ready', function () {} #############################
            // document.onreadystatechange = () => { 
            //   if (document.readyState == "complete") { 
            //   } 
            // }//end Document.onreadyStatechange

             
            // setTimeout(() => {            
            //     // initialization of slick carousel (Slick Slider call from here, otherwise it get error)
            //     $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
            // }, 2500);
        },


        updated() {
            // console.log('run-code')



        },
    }
</script>