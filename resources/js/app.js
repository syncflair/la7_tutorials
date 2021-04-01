/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

  require('./bootstrap');

  //define currentDateTime (Custome by sumon)
  const CurrentDateTime = new Date();
  window.CurrentDateTime = CurrentDateTime; 

/*
* Vue
*/
  // import Vue from 'vue/dist/vue'; //for laravel-mix 6
  // window.Vue = Vue;

  // window.Vue = require('vue');
  window.Vue = require('vue/dist/vue'); //for laravel-mix 6
  Vue.config.productionTip = false //turn on production mode Remove when upload to public


/*
* Vuex
*/
  import store from './VueVuex'

/*
* Import & Use Vue Router
*/ 
  // import VueRouter from 'vue-router'
  // Vue.use(VueRouter)

  //Import Vue Routers form VueRouters.js file
  //import {routes} from './VueRouters' //import VueRouters (Customize)
  import router from './VueRouters' //import VueRouters (Customize)

/*Import & Use Vue Router*/ 



/*
*Vue Lazy load image
*/
  import VueLazyload from 'vue-lazyload'
  Vue.use(VueLazyload)

  //with options
  //const loadimage = require('./static/images/loading.gif');
  // const loadimage = require( window.location.origin + '/static/images/loading.gif')
  // const errorimage = require('./assets/error.gif')

  Vue.use(VueLazyload, {
    preLoad: 1.3,
    //error: errorimage,
    loading: './static/images/loading.gif',
    // loading: loadimage,
    attempt: 1,
    // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
    listenEvents: [ 'scroll' ]
  })


/*
*VueProgressBar
*/
  import VueProgressBar from 'vue-progressbar'
  
  const options = { 
    color: '#28a745', 
    failedColor: '#dc3545', 
    thickness: '2px',
    transition: { speed: '0.2s', opacity: '0.6s', termination: 300 },
    autoRevert: true, 
    location: 'top', 
    inverse: false }
  Vue.use(VueProgressBar, options);





/*
* Global Components
*/
  //Vue.component('example-component', require('./components/ExampleComponent.vue').default);  
  Vue.component('website-wrapper', () => import(/* webpackChunkName: "website-wrapper" */'./components/Website/WebsiteWrapper.vue')); //Website component

  Vue.component('adminwrapper', () => import(/* webpackChunkName: "adminwrapper" */'./components/Admin/AdminWrapper.vue')); //admin dashboard
  Vue.component('pagination-app', () => import(/* webpackChunkName: "pagination-app" */'./components/Admin/GlobalComponents/pagination-app.vue'));
  Vue.component('switch-app', () => import(/* webpackChunkName: "switch-app" */'./components/Admin/GlobalComponents/switch-app.vue'));
  Vue.component('multi-select-app', () => import(/* webpackChunkName: "multi-select-app" */'./components/Admin/GlobalComponents/multi-select-app.vue'));
  Vue.component('multi-select-app-one', () => import(/* webpackChunkName: "multi-select-app-one-global" */'./components/Admin/GlobalComponents/multi-select-app-one.vue'));
  Vue.component('single-select-app-one', () => import(/* webpackChunkName: "single-select-app-one-global" */'./components/Admin/GlobalComponents/single-select-app-one.vue'));
  Vue.component('single-select-app-two', () => import(/* webpackChunkName: "single-select-app-two-global" */'./components/Admin/GlobalComponents/single-select-app-two.vue'));
  Vue.component('auto-complete-app', () => import(/* webpackChunkName: "auto-complete-app" */'./components/Admin/GlobalComponents/auto-complete-app.vue'));
  Vue.component('search-app-one', () => import(/* webpackChunkName: "search-app-one" */'./components/Admin/GlobalComponents/search-app-one.vue'));
  Vue.component('search-app-master', () => import(/* webpackChunkName: "search-app-master" */'./components/Admin/GlobalComponents/search-app-master.vue'));
  Vue.component('my-date-time-global', () => import(/* webpackChunkName: "my-date-time-global" */'./components/Admin/GlobalComponents/my-date-time-global'));
  Vue.component('display-notification-message-app', () => import(/* webpackChunkName: "display-notification-message-app-global" */'./components/Admin/GlobalComponents/display-notification-message-app'));


  //Global Components for Admin Childs (Order, Deliver, Packging etc)
  Vue.component('admin-child-wrapper', () => import(/* webpackChunkName: "AdminChiledWrapper" */'./components/AdminChild/AdminChildWrapper.vue'));

  //Global Components for Supplier
  Vue.component('supplier-admin-wrapper', () => import(/* webpackChunkName: "SupplierAdminWrapper" */'./components/AdminSupplier/SupplierAdminWrapper.vue'));

  //import counttest from './components/Admin/MultiComponent/countTest.vue';
  Vue.component('counttest', () => import(/* webpackChunkName: "counttest-sample" */'./components/Admin/MultiComponent/countTest.vue'));

  //pagination
  Vue.component('pagination', require('laravel-vue-pagination'));


  /*
  * vue-infinite-loading
  */ 
  import InfiniteLoading from 'vue-infinite-loading';
  Vue.use(InfiniteLoading, { /* options */ });
  //vue-infinite-loading
  //Vue.component('InfiniteLoading', require('vue-infinite-loading'));


/*
* Moment JS - Format Dates
*/
  import moment from 'moment'  //import moment from 'moment/src/moment'
  //Vue.use(moment) //not working properly
  window.moment = moment; // use if moment define form data
  Vue.prototype.moment = moment //use if moment function use inside component
  //window.moment = require('moment'); //work also

/*
* Vue 2 Editor
*/
  import Vue2Editor from 'vue2-editor'
  Vue.use(Vue2Editor)

/*
* SweetAlert2 & Toast 
*/
  import Swal from 'sweetalert2' //import sweetAlert2
  window.Swal = Swal; //use sweetAlert2 from globaly

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  window.Toast = Toast; //use Toast from globaly
  /**End SweetAlert2 & Toast **/

/*
* Toastr 
*/
  import toastr from 'toastr'
  window.toastr = toastr;
  /**End Toastr **/

/*
* V-tooltip (dont want to use)
*/  
  import VTooltip from 'v-tooltip'
  Vue.use(VTooltip)
  //Vue.config.productionTip = false;

  //   Vue.directive('tooltip', VTooltip)
  //   Vue.directive('close-popover', VClosePopover)
  // Vue.component('v-popover', VPopover)
  /*End v-tooltip*/


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


/*
* vform
*/
  import { Form, HasError, AlertError } from 'vform'
  window.Form = Form;
  Vue.component(HasError.name, HasError)
  Vue.component(AlertError.name, AlertError)


/*
* Global VueJs Filter
*/
  Vue.filter('upText', function(text){
    //return text.toLowerCase()
    //return text.toUpperCase();
    return text.charAt(0).toUpperCase() + text.slice(1)
    //return text[0].toUpperCase() + text.slice(1);
  });

/*
* Global VueJs Filter for date using moment js that import at the top
*/
  Vue.filter('formatDate', function(data){
    return moment(data).format('Do MMMM YY');
  });


/*
* Register Fire as Globally event to use from any where from apps
*/
  const FireEvent = new Vue();
  window.FireEvent = FireEvent; 


/*
* All common js function for global use
*/
  import common from './commonGlobal'
  Vue.mixin(common)


/* ####################### axios interceptor ###########################################*/
  // Add a request interceptor
  axios.interceptors.request.use( (config) =>  {
   
    //console.log(config);

      // const ExpireTokenIn = localStorage.getItem('_spac_et') - 10000;          
      // console.log(ExpireTokenIn +'-'+ localStorage.getItem('_spac_et'));
     
      //this is for customer
      if(store.state.AuthenticationForCustomer.isitwebsiteCheck === 1){

        if(config.url !== '/api/afc/refresh-token'){
          // const ExpireTokenIn = localStorage.getItem('_spac_et') - 10000; 
          //if expire time is not null
          if(localStorage.getItem('_spac_et') !== null){
            //if expire time lass then Current time
            if( localStorage.getItem('_spac_et') < Date.now() ){
              //now refresh token
              store.dispatch('AuthenticationForCustomer/refreshTokenCustomerApi', config); //refresh token
            }
          }
          // else{
          //   store.dispatch('AuthenticationForCustomer/clearTokenFromLocalStoreApi');
          // }  
        }
      }//check is website or not

      return config; 
      // return Promise.resolve(config);
    }, (error) =>  {
      return Promise.reject(error);
    });


  
  
  // Add a response interceptor
  axios.interceptors.response.use( 
    (config) => {  
      return config; 
    }, 
    (error) =>  {

      // Do something with request error
      // console.log(error.response);
      const originalRequest = error.config;

      //Execute only for website
      // if(store.state.AuthenticationForCustomer.isitwebsiteCheck === 1){
           // Handle Session Timeouts  401 (Unauthorized) Unauthenticated
          // if (error.response.status === 401 && !originalRequest._retry ) {
          
          if (error.response.status === 401 ) {

            if( localStorage.getItem('_spac_at') === 'undefined' && localStorage.getItem('_spac_rt') === 'undefined'){                
              store.dispatch('AuthenticationForCustomer/clearTokenFromLocalStoreApi');              
            }
            else if( localStorage.getItem('_spac_at') === null && localStorage.getItem('_spac_rt') === null ){
                this.$store.commit('AuthenticationForCustomer/IS_AUTHENTICATED_CHECK', false );
            }
            // else{
            //   // originalRequest._retry = true;
            //   store.dispatch('AuthenticationForCustomer/refreshTokenCustomerApi', originalRequest); //refresh token after 401
            // }            

            // return axios(error.response.config.url); //previous route
          }
          
          // // Handle Forbidden
          // if (status === 403) {
          //     console.log({403:error});
          // }

          // // Handle  Not Found
          // if (status === 404) {
          //     console.log({404:error});
          // }
      // }

      return Promise.reject(error);
    });
  

    // axios.interceptors.response.use(undefined, function (err) {
    //   return new Promise(function (resolve, reject) {
    //     if (err.response.status === 401 ) {
    //     // if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
    //     // if you ever get an unauthorized, logout the user
    //       // this.$store.dispatch(AUTH_LOGOUT)
    //        store.dispatch('AuthenticationForCustomer/refreshTokenCustomerApi'); //refresh token
    //     // you can also redirect to /login if needed !
    //     }
    //     throw err;
    //   });
    // });

/* ####################### axios interceptor ###########################################*/


/*
* ####################### router middleware ###########################################
*/
router.beforeEach((to, from, next) => {  

  //For customer authentication
  if(to.meta.authRequiredCustomer === true){ 
    setTimeout(() => {
        // const protectedCustomerRoutes = ['CustomerDashboard', 'CustomerOrder', 'CustomerCart', 'CustomerProfile', 'CustomerProfileUpdate',
        //  'CustomerAddressForm', 'CustomerWishlist', 'CustomerVoucher', 'CustomerReviews'];
        // const isAuthenticated = localStorage.getItem('isAuthenticated') ? true : false ;
        const isAuthenticated = store.state.AuthenticationForCustomer.isAuthenticated;//this.isAuthenticated; //publish from commonGlobal.js and get form AuthenticationForCustomer.js
        // if (protectedCustomerRoutes.includes(to.name) && isAuthenticated !== true) next({ name: 'CustomerLogin' })
        if ( isAuthenticated !== true) next({ name: 'CustomerLogin' })
        else next()
    }, 800);//call after 500 miliscound
  }

  //For Supplier authentication
  else if(to.meta.authRequiredSupplier === true ){
    setTimeout(() => {
      const isSspaAuthenticated = store.state.AuthenticationForSupplier.isSspaAuthenticated;//this.isSsapAuthenticated get form AuthenticationForCustomer.js
      // if ( isSspaAuthenticated !== true) next({ name: 'SupplierLogin' })
      if ( isSspaAuthenticated !== true) next( window.location = '/supplier/login')
      else next()
    }, 800);//call after 800 miliscound
  }
  
  //For admin authentication
  else if(to.meta.authRequiredAdmin === true){
    setTimeout(() => {
      const isAdminAuthenticated = store.state.AuthenticationForAdmin.isAdminAuthenticated;//this.isAdminAuthenticated; get form AuthenticationForCustomer.js
      if (  isAdminAuthenticated !== true) next( window.location = '/login-abc' )
      else next()
    }, 500);//call after 300 miliscound
  }

  //admin authentication for Delivery role
  else if(to.meta.authRequiredDelivery === true){
    setTimeout(() => {
      // store.state.AuthenticationForAdmin.authUser.role_id
      const isAdminAuthenticated = store.state.AuthenticationForAdmin.isAdminAuthenticated;//this.isAdminAuthenticated; get form AuthenticationForCustomer.js
      if (  isAdminAuthenticated !== true) next( window.location = '/login-abc' )
      if( store.state.AuthenticationForAdmin.authUser.role_id !== 13 && isAdminAuthenticated === true) next({name: 'AdminChildPageNotFound'})
      if (to.name === 'AdminChildProfileMaster' && store.state.AuthenticationForAdmin.isAdminAuthenticated === true && to.meta.authRequiredAdminChild === true ) next({ name: 'AdminChildProfileMaster' }) 
      if (to.name === 'AdminChildNotificationMaster' && store.state.AuthenticationForAdmin.isAdminAuthenticated === true && to.meta.authRequiredAdminChild === true) next({ name: 'AdminChildNotificationMaster' }) 
      
      else next()
    }, 500);//call after 300 miliscound
  }

  //admin authentication for Delivery role
  else if(to.meta.authRequiredOrder === true){
    setTimeout(() => {
      // store.state.AuthenticationForAdmin.authUser.role_id
      const isAdminAuthenticated = store.state.AuthenticationForAdmin.isAdminAuthenticated;//this.isAdminAuthenticated; get form AuthenticationForCustomer.js
      if (  isAdminAuthenticated !== true) next( window.location = '/login-abc' )
      if( store.state.AuthenticationForAdmin.authUser.role_id !== 10 && isAdminAuthenticated === true) next({name: 'AdminChildPageNotFound'})
      if (to.name === 'AdminChildProfileMaster' && store.state.AuthenticationForAdmin.isAdminAuthenticated === true && to.meta.authRequiredAdminChild === true) next({ name: 'AdminChildProfileMaster' }) 
      if (to.name === 'AdminChildNotificationMaster' && store.state.AuthenticationForAdmin.isAdminAuthenticated === true && to.meta.authRequiredAdminChild === true) next({ name: 'AdminChildNotificationMaster' }) 

      else next()
    }, 500);//call after 300 miliscound
  }

  else {
      next()
  }

}) //Vue Router Middleware
/* ####################### End router middleware ###########################################*/






 




const app = new Vue({

    el: '#app',
    router, //use Vue router from globally
    store,

    data (){      
        return {                          
        }
    },
    
    watch: { //for title
      '$route':{
        handler: (to, from) => {
          document.title = to.meta.title || 'Sorboraho'
        },
         //immediate: true,
      },


    },  

    computed: {

    },

    /*Global print function. add this @click.prevent="printMe" to any link that you want to print*/
    printMe(){
      window.print();
    },

    /*// Register components as globaly ....*/
    components: { 
      //counttest, 
    }, 

    created(){

      // console.log(store.state.commonStoreForWebsite.isitwebsiteCheck);
      // alert(store.state.AuthenticationForCustomer.isAuthenticated);

      //[App.vue specific] When App.vue is first loaded start the progress bar
        this.$Progress.start()
        //  hook the progress bar to start before we move router-view
        this.$router.beforeEach((to, from, next) => {
          //  does the page we want to go to have a meta.progress object
          if (to.meta.progress !== undefined) {
            let meta = to.meta.progress
            // parse meta tags
            this.$Progress.parseMeta(meta)
          }
          //  start the progress bar
          this.$Progress.start()
          //  continue to next page
          next()
        })
        //  hook the progress bar to finish after we've finished moving router-view
        this.$router.afterEach((to, from) => {
          //  finish the progress bar
          this.$Progress.finish()
        })

    },

    mounted() {
      //[App.vue specific] When App.vue is finish loading finish the progress bar
      this.$Progress.finish();


      setTimeout(() => {
        //console.log(store.state.commonStoreForWebsite.isitwebsiteCheck);
        //console.log(store.state.AuthenticationForAdmin.authUser.role_id);
        //console.log(store.state.AuthenticationForAdmin.isAdminAuthenticated);
      }, 500);
      // console.log(store.state.AuthenticationForCustomer.isAuthenticated); //get access to state
      //console.log(store.getters['AuthenticationForCustomer/isAuthenticated']); //get access to getters
      
      // setTimeout(() => {
      //   console.log(store.getters['AuthenticationForCustomer/isAuthenticated']);
      // }, 1000);



    }, //end mounted   


});



