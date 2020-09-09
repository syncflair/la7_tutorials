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
const options = { color: '#28a745', failedColor: '#dc3545', thickness: '4px',
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


//Global Components for Customer
Vue.component('customer-admin-wrapper', () => import(/* webpackChunkName: "CustomerAdminWrapper" */'./components/AdminCustomer/CustomerAdminWrapper.vue'));

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
  timer: 3000,
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


const app = new Vue({
    el: '#app',
    router, //use Vue router from globally
    store,
    watch: { //for title
      '$route':{
        handler: (to, from) => {
          document.title = to.meta.title || 'Sorboraho'
        },
         //immediate: true,
      }
    },

  

    /*Global print function. add this @click.prevent="printMe" to any link that you want to print*/
    printMe(){
      window.print();
    },

    /*// Register components as globaly ....*/
    components: { 
      //counttest, 
    }, 

    


});
