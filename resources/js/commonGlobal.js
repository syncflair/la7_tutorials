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

      // ...mapState( 
      //       'commonStoreForWebsite', ['isitwebsiteCheck']
      //       //isAuthenticated
      // ),

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
        // console.log('Ok')
        

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

      // console.log(store.state.commonStoreForWebsite.isitwebsiteCheck);

      // console.log(this.$route.meta);

      // console.log(window.Vue);
      // console.log(Vue);

      // console.log('Width: '+this.window.width+ ' Height: ' + this.window.height );
      /*
        This is for check that the application is browse as website(public) or as admin, 
        if browse as website then it's value is '1', and if browse as admin then it's value in '' (Empty).
        if value is '1' then work the bellow code (Template script) for website only
      */  

    },

} //End Export default