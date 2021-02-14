import { mapState } from 'vuex' //for user MapState

export default {

	data(){
        return {
        	//myName: 'Md. Mahmudur Rahman',
          baseURL: window.location.origin, //window.location.host -- to get host name, use for full path img 
          NoImageAvailable: '/FilesStorage/CommonFiles/no-img.png',

          window: {
              width: 0,
              height: 0
          },
          DisplayResponsiveElement: true, //useing for Display responsive element based on window.width

          //Custome message display for success or warning
          display_notification_message: false,
          notification_message_text:'',
          notification_message_type:'', 

        }
    }, 

    computed: {
    	...mapState( 
            'commonStoreForAll', ['authUser','systemSettings']
	    ),

      ...mapState( 
            'commonStoreForWebsite', ['isitwebsiteCheck']
            //isAuthenticated
      ),

      // ...mapState( 
      //       'AuthenticationForCustomer', ['isAuthenticated','authCustomer']
      // ),

      // ...mapState( 
      //       'AuthenticationForSupplier', ['isSspaAuthenticated','authSupplier']
      // ),

      // ...mapState( 
      //       'AuthenticationForAdmin', ['isAdminAuthenticated']
      // ),


	    
    	authPermissionsData(){  //return 'decodet Data';
    		return JSON.parse(this.authPermissions.permission);
    	},


        // isReadPermitted(){
        //    return this.checkUserPermission('read')
        // },
    },

    watch: {
        /*************************************************************************************/ 
            /*Add Remove Class based on window width change (Call from CommonGlobal.js)*/
        /*************************************************************************************/             
        'window.width': function (val) {        
            if( val < 1200 ){              
                    this.DisplayResponsiveElement = false;
            }else if(val > 1200 ){
                    this.DisplayResponsiveElement = true;                
            }
        },
                 
    },

    methods: { 

        /*Window resize handle*/
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        }, 

        //Custome message display for success or warning
        display_message_function(message, type){
              this.display_notification_message = true;
              this.notification_message_text = message; //show message
              this.notification_message_type = type; //show message type (success, warning)

              //remove message
              setTimeout(() => {                
                if( this.notification_message_text !== ''){
                    this.display_notification_message = false;
                }
              }, 9000);//call after 10000 miliscound
          }, 

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

        //window resize is call
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },

    destroyed() {
        //window resize is destroy
        window.removeEventListener('resize', this.handleResize);
    },

    mounted(){

      // console.log(window.Vue);
      // console.log(Vue);

      // console.log('Width: '+this.window.width+ ' Height: ' + this.window.height );
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
              //$.HSCore.components.HSSelectPicker.init('.js-select');


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