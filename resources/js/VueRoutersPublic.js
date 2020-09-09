import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)


/*Global Components is Here*/
	//Vue.component('counttest', require('./components/countTest.vue'));
/*Global Components is Here*/


/*define All Vue Routers her*/
import DashboardCustomer from './components/AdminCustomer/DashboardCustomerAdmin.vue';
//import CustomerProfileMaster from './components/AdminCustomer/Profile/ProfileMaster.vue';
//import DashboardCustomer from '../components/AdminCustomer/DashboardCustomerAdmin.vue';
// const Dashboard = () => import('./components/Admin/DashboardAdmin.vue')
//const Parties = () => import('./components/Admin/Client/Parties.vue')
//const NotFound = () => import('./components/Admin/NotFound.vue')

const routes = [
//export const routes = [
	{ path: '/dashboard-customer', component: DashboardCustomer, meta: { title: 'Customer Dashboard'} },
	//{ path: '/CustomerProfileMaster', component: CustomerProfileMaster, meta: { title: 'Profile'} },
	//{ path: '/dashboard', component: () => import(/* webpackChunkName: "Dashboard" */ './components/Admin/DashboardAdmin.vue'), meta: { title: 'Dashboard'} },
	//{ path: '/dashboard-customer', component: () => import(/* webpackChunkName: "customer-Dashboard" */ '../components/AdminCustomer/DashboardCustomerAdmin.vue'), meta: { title: 'Dashboard'} },
	//{ path: '/sap/CustomerProfileMaster', component: () => import(/* webpackChunkName: "CustomerProfileMaster" */ '../components/AdminCustomer/Profile/ProfileMaster.vue'), meta: { title: 'Profile'} },

]

//const router = new VueRouter({
export default new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history', //history mode - remove # (hash) from url
  //mode: 'hash', //hash mode = use # (hash) to url (Default mode)
})

