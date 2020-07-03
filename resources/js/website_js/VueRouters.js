import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)


/*Global Components is Here*/
	//Vue.component('counttest', require('./components/countTest.vue'));
/*Global Components is Here*/


/*define All Vue Routers her*/
// import Dashboard from './components/Admin/DashboardAdmin.vue';
// const Dashboard = () => import('./components/Admin/DashboardAdmin.vue')
//const Parties = () => import('./components/Admin/Client/Parties.vue')
//const NotFound = () => import('./components/Admin/NotFound.vue')

const routes = [
//export const routes = [
	//{ path: '/dashboard', component: Dashboard, meta: { title: 'Dashboard'} },
	//{ path: '/dashboard', component: () => import(/* webpackChunkName: "Dashboard" */ './components/Admin/DashboardAdmin.vue'), meta: { title: 'Dashboard'} },

]

//const router = new VueRouter({
export default new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history', //history mode - remove # (hash) from url
  //mode: 'hash', //hash mode = use # (hash) to url (Default mode)
})

