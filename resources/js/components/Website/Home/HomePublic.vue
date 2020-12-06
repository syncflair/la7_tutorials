<template>

<!-- ========== MAIN CONTENT ========== -->
    <main id="content" role="main">

        <!-- Slider Section -->
        <HomeSliderSection></HomeSliderSection>
        <!-- End Slider Section -->



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

    </main>
    <!-- ========== END MAIN CONTENT ========== -->


</template>

<script>
    import HomeSliderSection from './HomeSliderSection.vue' //Load to only Home Page
    import FeatureList from '../Layouts/FeatureList.vue'    
    import BannerSmallFour from '../Layouts/BannerSmallFour.vue'    
    import BrandCarouselMain from './BrandCarouselMain.vue' //Load to only Home Page
    import BrandShopCarousel from './BrandShopCarousel.vue' //Load to only Home Page
    import dealCountDown from './dealCountDown.vue' //Load to every page
    import dealCountDownMain from './dealCountDownMain.vue'
    import TabProductSection from './TabProductSection.vue'
    import RecentlyView from '../Layouts/RecentlyView.vue'
    import BannerFull from '../Layouts/BannerFull.vue'
    import BannerSmallTwo from '../Layouts/BannerSmallTwo.vue'
    import FooterTopWidget from '../Layouts/FooterTopWidget.vue'
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

        methods: {          
        },           

        created(){
        },
           
        mounted() {
            // initialization of countdowns
             var countdowns = $.HSCore.components.HSCountdown.init('.js-countdown', {
                  yearsElSelector: '.js-cd-years',
                  monthsElSelector: '.js-cd-months',
                  daysElSelector: '.js-cd-days',
                  hoursElSelector: '.js-cd-hours',
                  minutesElSelector: '.js-cd-minutes',
                  secondsElSelector: '.js-cd-seconds'
              });

             // $('#headerSidebarList [data-toggle="collapse"]').on('click', function (e) {
             //      e.preventDefault();

             //      var target = $(this).data('target');

             //      if($(this).attr('aria-expanded') === "true") {
             //          $(target).collapse('hide');
             //      } else {
             //          $(target).collapse('show');
             //      }
             //  });

             
            setTimeout(() => {
                // initialization of slick carousel (Slick Slider call from here, otherwise it get error)
                $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
            }, 2500);
        },
    }
</script>