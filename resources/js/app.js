/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/*Vue*/
window.Vue = require('vue');
Vue.config.productionTip = false //turn on production mode Remove when upload to public


/*VueProgressBar*/
import VueProgressBar from 'vue-progressbar'
const options = { color: '#28a745', failedColor: '#dc3545', thickness: '2px',
  transition: { speed: '0.2s', opacity: '0.6s', termination: 300 },
  autoRevert: true, location: 'top', inverse: false }
Vue.use(VueProgressBar, options)

/*Vuex*/
  import store from './VueVuex'

/*Import & Use Vue Router*/ 
  // import VueRouter from 'vue-router'
  // Vue.use(VueRouter)

  //Import Vue Routers form VueRouters.js file
  //import {routes} from './VueRouters' //import VueRouters (Customize)
  import router from './VueRouters' //import VueRouters (Customize)



  //Use vue router
  // const router = new VueRouter({
  //   routes, // short for `routes: routes`
  //   mode: 'history', //history mode - remove # (hash) from url
  //   //mode: 'hash', //hash mode = use # (hash) to url (Default mode)
  // })
/*Import & Use Vue Router*/ 




//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
//Global Components
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


//Global Components for Admin Childs (Order, Deliver, Packging etc)
Vue.component('admin-child-wrapper', () => import(/* webpackChunkName: "AdminChiledWrapper" */'./components/AdminChild/AdminChildWrapper.vue'));


//Global Components for Supplier
Vue.component('supplier-admin-wrapper', () => import(/* webpackChunkName: "SupplierAdminWrapper" */'./components/AdminSupplier/SupplierAdminWrapper.vue'));


//import counttest from './components/Admin/MultiComponent/countTest.vue';
Vue.component('counttest', () => import(/* webpackChunkName: "counttest-sample" */'./components/Admin/MultiComponent/countTest.vue'));


//pagination
Vue.component('pagination', require('laravel-vue-pagination'));


/*Moment JS - Format Dates*/
import moment from 'moment'  //import moment from 'moment/src/moment'
//Vue.use(moment) //not working properly
window.moment = moment; // use if moment define form data
Vue.prototype.moment = moment //use if moment function use inside component
//window.moment = require('moment'); //work also

/**Vue 2 Editor**/
import Vue2Editor from 'vue2-editor'
Vue.use(Vue2Editor)

/** SweetAlert2 & Toast **/
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

/**Toastr **/
import toastr from 'toastr'
window.toastr = toastr;
/**End Toastr **/

/**V-tooltip (dont want to use)**/  
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


/*vform*/
import { Form, HasError, AlertError } from 'vform'
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)


/*Global VueJs Filter*/
Vue.filter('upText', function(text){
  //return text.toLowerCase()
  //return text.toUpperCase();
  return text.charAt(0).toUpperCase() + text.slice(1)
  //return text[0].toUpperCase() + text.slice(1);
});

/*Global VueJs Filter for date using moment js that import at the top*/
Vue.filter('formatDate', function(data){
  return moment(data).format('Do MMMM YY');
});


/*Register Fire as Globally event to use from any where from apps*/
const FireEvent = new Vue();
window.FireEvent = FireEvent; 


//All common js function for global use
import common from './commonGlobal'
Vue.mixin(common)





/* ####################### router middleware ###########################################*/
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
    }, 500);//call after 500 miliscound
  }

  //For Supplier authentication
  else if(to.meta.authRequiredSupplier === true ){
    setTimeout(() => {
      const isAuthenticated = store.state.AuthenticationForSupplier.isSspaAuthenticated;//this.isSsapAuthenticated get form AuthenticationForCustomer.js
      if ( isAuthenticated !== true) next({ name: 'SupplierLogin' })
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
      }
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

    mounted() {
      setTimeout(() => {
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



