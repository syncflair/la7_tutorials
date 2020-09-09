window._ = require('lodash');

try {
	window.Popper = require('popper.js').default;
	window.$ = window.jQuery = require('jquery');
	require('bootstrap');


	//Custom add
    require('admin-lte');  
    require('overlayscrollbars');

} catch (e) {}

//axios
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

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

//Call Router
import router from './VueRouters' //import VueRouters (Customize)

/*vform*/
import { Form, HasError, AlertError } from 'vform'
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

/**Toastr **/
import toastr from 'toastr'
window.toastr = toastr;
/**End Toastr **/

//global Component
Vue.component('customer-admin-wrapper', require('../components/AdminCustomer/CustomerAdminWrapper.vue').default);
//Vue.component('customer-admin-wrapper', () => import(/* webpackChunkName: "CustomerAdminWrapper" */'../components/AdminCustomer/CustomerAdminWrapper.vue'));


/*Moment - Format Dates*/
import moment from 'moment'

/*Global VueJs Filter for date using moment js that import at the top*/
Vue.filter('formatDate', function(data){
  return moment(data).format('Do MMMM YY');
});

/*Register Fire as Globally event to use from any where from apps*/
const FireEvent = new Vue();
window.FireEvent = FireEvent;




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


});