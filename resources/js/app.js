/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

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
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('router-view-admin-master', require('./components/Admin/AdminMaster.vue').default);


//Use vue router
const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history', //history mode - remove # (hash) from url
  //mode: 'hash', //hash mode = use # (hash) to url (Default mode)
})


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router, //use Vue router from globally
});
