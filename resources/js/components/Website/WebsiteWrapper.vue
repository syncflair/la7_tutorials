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

            //console.log(this.isitwebsite);
            
             // //############################# Windown Load ###################################            

              // //initialization of HSMegaMenu component
              // $('.js-mega-menu').HSMegaMenu({
              //     event: 'hover',
              //     direction: 'horizontal',
              //     pageContainer: $('.container'),
              //     breakpoint: 767.98,
              //     hideTimeOut: 0
              // });

              // // initialization of svg injector module
              // $.HSCore.components.HSSVGIngector.init('.js-svg-injector');

              // //############################# Windown ready ###################################
              
              // // initialization of header
              // $.HSCore.components.HSHeader.init($('#header'));

              // // initialization of animation
              // $.HSCore.components.HSOnScrollAnimation.init('[data-animation]');

              // // initialization of unfold component
              // $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
              //     afterOpen: function () {
              //         $(this).find('input[type="search"]').focus();
              //     }
              // });

              // // initialization of popups
              // $.HSCore.components.HSFancyBox.init('.js-fancybox');

              // // initialization of countdowns
              // var countdowns = $.HSCore.components.HSCountdown.init('.js-countdown', {
              //     yearsElSelector: '.js-cd-years',
              //     monthsElSelector: '.js-cd-months',
              //     daysElSelector: '.js-cd-days',
              //     hoursElSelector: '.js-cd-hours',
              //     minutesElSelector: '.js-cd-minutes',
              //     secondsElSelector: '.js-cd-seconds'
              // });

              // // initialization of malihu scrollbar
              // $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar'));

              // // initialization of forms
              // $.HSCore.components.HSFocusState.init();

              // // initialization of form validation
              // $.HSCore.components.HSValidation.init('.js-validate', {
              //     rules: {
              //         confirmPassword: {
              //             equalTo: '#signupPassword'
              //         }
              //     }
              // });

              // // initialization of show animations
              // $.HSCore.components.HSShowAnimation.init('.js-animation-link');

              // // initialization of fancybox
              // $.HSCore.components.HSFancyBox.init('.js-fancybox');

              // // initialization of slick carousel
              // $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

              // // initialization of go to
              // $.HSCore.components.HSGoTo.init('.js-go-to');

              // // initialization of hamburgers
              // $.HSCore.components.HSHamburgers.init('#hamburgerTrigger');

              // // initialization of unfold component
              // $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
              //     beforeClose: function () {
              //         $('#hamburgerTrigger').removeClass('is-active');
              //     },
              //     afterClose: function() {
              //         $('#headerSidebarList .collapse.show').collapse('hide');
              //     }
              // });

              // $('#headerSidebarList [data-toggle="collapse"]').on('click', function (e) {
              //     e.preventDefault();

              //     var target = $(this).data('target');

              //     if($(this).attr('aria-expanded') === "true") {
              //         $(target).collapse('hide');
              //     } else {
              //         $(target).collapse('show');
              //     }
              // });

              // // initialization of unfold component
              // $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));

              // // initialization of select picker
              // $.HSCore.components.HSSelectPicker.init('.js-select');

        }
    }
</script>