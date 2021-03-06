//window._ = require('lodash');
import _debounce from 'lodash/fp/debounce';
//import { cloneDeep, sortBy } from 'lodash/core';


/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');


    //require('jquery-ui-dist/jquery-ui.min.js'); 

    require('bootstrap');

    





    //require('cookie');


	//for Datatables
    //require('datatables.net');

    //require('datatables.net-bs4'); //Main file

    //require('datatables.net-responsive-bs4');
    /*require('datatables.net-buttons');
    require('datatables.net-buttons-bs4');
    require('datatables.net-colreorder');
    require('datatables.net-colreorder-bs4');
    require('datatables.net-fixedcolumns');
    require('datatables.net-fixedcolumns-bs4');
    require('datatables.net-fixedheader');
    require('datatables.net-fixedheader-bs4');
    require('datatables.net-responsive');
    require('datatables.net-responsive-bs4');
    require('datatables.net-rowgroup');
    require('datatables.net-rowgroup-bs4');*/



    // //Custom add
    // require('admin-lte');  
    // require('overlayscrollbars');
    // //require('../../vendor/almasaeed2010/adminlte/dist/js/adminlte');  

} catch (e) {}

// import store from './VueVuex'

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


// window.axios.defaults.baseURL = 'https://api.example.com';
// // Important: If axios is used with multiple domains, the _spac_at (customer access token) will be sent to all of them.
// // See below for an example using Custom instance defaults instead.
window.axios.defaults.headers.post['Accept'] = 'application/json';
window.axios.defaults.headers.post['Content-Type'] = 'application/json';

window._spac_at = localStorage.getItem('_spac_at'); //get from local storage
window._spac_rt = localStorage.getItem('_spac_rt'); //get from local storage
if(_spac_at !== null){    
    window.axios.defaults.headers.common['Authorization'] = 'Bearer '+_spac_at;
    window.axios.defaults.headers.common['RefreshToken'] = _spac_rt;
}
// window.axios.defaults.headers.common['Authorization'] = 'Bearer '+store.state.AuthenticationForCustomer.spac_access_token;
// window.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';





/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });
