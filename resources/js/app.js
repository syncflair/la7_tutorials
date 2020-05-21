/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/*axios*/
window.axios = require('axios');
//import axios from 'axios';
//window.axios = axios;
//axios.defaults.baseURL = 'http://127.0.0.1:8000'

/*Vue*/
window.Vue = require('vue');

/*Moment - Format Dates*/
import moment from 'moment'

/*VueProgressBar*/
import VueProgressBar from 'vue-progressbar'
const options = { color: '#bffaf3', failedColor: '#874b4b', thickness: '5px',
  transition: { speed: '0.2s', opacity: '0.6s', termination: 300 },
  autoRevert: true, location: 'top', inverse: false }
Vue.use(VueProgressBar, options)

/*Import & Use Vue Router*/ 
import VueRouter from 'vue-router'
Vue.use(VueRouter)


//Vue.config.productionTip = false //turn on production mode Remove when upload to public

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

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


//Import Vue Routers form VueRouters.js file
import {routes} from './VueRouters' //import VueRouters (Customize)
//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('router-view-admin-master', require('./components/Admin/AdminMaster.vue').default);


//Use vue router
const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history', //history mode - remove # (hash) from url
  //mode: 'hash', //hash mode = use # (hash) to url (Default mode)
})

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
  return moment(data).format('Do MMMM YYYY');
});


/*Register Fire as Globally event to use from any where from apps*/
const Fire = new Vue();
window.Fire = Fire; 


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router, //use Vue router from globally
    
    watch: { //for title
      '$route':{
        handler: (to, from) => {
          document.title = to.meta.title || 'Sorboraho'
        },
         immediate: true,
      }
    },

});
