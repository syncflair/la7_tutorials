import { mapState } from 'vuex' //for user MapState

export default {

	data(){
        return {
        	//myName: 'Md. Mahmudur Rahman',
        }
    }, 

    computed: {
    	...mapState( 
            'commonStoreForAll', ['authUser','systemSettings']
	    ),

      ...mapState( 
            'commonStoreForWebsite', ['isitwebsiteCheck']
      ),
	    
    	authPermissionsData(){  //return 'decodet Data';
    		return JSON.parse(this.authPermissions.permission);
    	},


        // isReadPermitted(){
        //    return this.checkUserPermission('read')
        // },
    },

    methods: {  
        // isViewPermitted(modules){
        //     //return this.authPermissionsDecode.;
        // }, 

        // isReadPermitted(module){
        //     return module;
        // },
        // isWritePermitted(module){
        //     return module;
        // },
        // isUpdatePermitted(module){
        //     return module;
        // },
        // isDeletePermitted(module){
        //     return module;
        // }        



        // checkUserPermission(key){
        //     if(!this.userPermission) return true
        //     let isPermitted = false;
        //     for(let d of this.userPermission){
        //         if(this.$route.name==d.name){
        //             if(d[key]){
        //                 isPermitted = true
        //                 break;
        //             }else{
        //                 break
        //             }
        //         }
                
        //     }
        //     return isPermitted
        // }
    },

    created(){ 
        //console.log(this.authPermissionsData);
        //console.log(this.authUser.role);
        //console.log(JSON.parse(this.authPermissions.permission).role.edit);
        //console.log(this.systemSettings);
    },

    mounted(){

      /*
        This is for check that the application is browse as website(public) or as admin, 
        if browse as website then it's value is '1', and if browse as admin then it's value in '' (Empty).
        if value is '1' then work the bellow code (Template script) for website only
      */
      //console.log('Website:' + this.isitwebsiteCheck);
      // if(this.isitwebsiteCheck != ''){
      if(this.isitwebsiteCheck !=  0 ){
          
              //############################# Windown Load ###################################            

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

              //############################# Windown ready ###################################
              
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

              // initialization of popups
             $.HSCore.components.HSFancyBox.init('.js-fancybox');



              // // initialization of countdowns
              // var countdowns = $.HSCore.components.HSCountdown.init('.js-countdown', {
              //     yearsElSelector: '.js-cd-years',
              //     monthsElSelector: '.js-cd-months',
              //     daysElSelector: '.js-cd-days',
              //     hoursElSelector: '.js-cd-hours',
              //     minutesElSelector: '.js-cd-minutes',
              //     secondsElSelector: '.js-cd-seconds'
              // });

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
              $.HSCore.components.HSFancyBox.init('.js-fancybox');



              //Slick slider call from HomePublic.vue component
              // initialization of slick carousel
              //$.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');


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
                // $.HSCore.components.HSScrollNav.init($('.js-scroll-nav'), {
                //   duration: 700
                // });

              // initialization of quantity counter
              $.HSCore.components.HSQantityCounter.init('.js-quantity');

              // initialization of forms
              //$.HSCore.components.HSRangeSlider.init('.js-range-slider');
        
      }//end authUser Check        

    },

} //End Export default