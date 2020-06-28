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
	{ path: '/dashboard', component: () => import(/* webpackChunkName: "Dashboard" */ './components/Admin/DashboardAdmin.vue'), meta: { title: 'Dashboard'} },
	//{ path: '/spa/dashboard', component: () => import('./components/Admin/DashboardAdmin.vue'), meta: { title: 'Dashboard'} },
	{ path: '/spa/Parties', name: 'Parties', component: () => import( /* webpackChunkName: "Parties" */ './components/Admin/Client/Parties.vue'), meta: { title: 'Parties'} },
	{ path: '/spa/Categories', name: 'Categories', component: () => import(/* webpackChunkName: "Categories" */ './components/Admin/Category/Categories.vue'), meta: { title: 'Category'} },
	{ path: '/spa/Items', name: 'Items', component: () => import(/* webpackChunkName: "Items" */ './components/Admin/Product/Items.vue'), meta: { title: 'Product'} },
	{ path: '/spa/multiComponent', name: 'multiComponent', component: () => import(/* webpackChunkName: "Multicomponent" */ './components/Admin/MultiComponent/multiComponent.vue'), meta: { title: 'Component Communication'} },
	{ path: '/spa/vuexComponent', name: 'vuexComponent', component: () => import(/* webpackChunkName: "VuexComponent" */ './components/Admin/VuexComponent/vuexComponent.vue'), meta: { title: 'Vuex Component Communication'} },
	{ path: '/spa/formComponent', name: 'formComponent', component: () => import(/* webpackChunkName: "formComponent" */ './components/Admin/FormComponent/formComponent.vue'), meta: { title: 'Vuex Form Component'} },
	



	//settings
	{ path: '/spa/OrganizationInfo', name: 'OrganizationInfo', component: () => import(/* webpackChunkName: "OrganizationInfo" */ './components/Admin/Settings/OrganizationInfo/OrganizationInfo.vue'), meta: { title: 'Organization Information'} },
	{ path: '/spa/BranchInfo', name: 'BranchInfo', component: () => import(/* webpackChunkName: "BranchInfo" */ './components/Admin/Settings/BranchInfo/BranchInfo.vue'), meta: { title: 'BranchInfo Information'} },
	{ path: '/spa/CurrencyMarster', name: 'CurrencyMarster', component: () => import(/* webpackChunkName: "CurrencyMarster" */ './components/Admin/Settings/Currency/CurrencyMarster.vue'), meta: { title: 'Currency Master'} },
	{ path: '/spa/LanguageMaster', name: 'LanguageMaster', component: () => import(/* webpackChunkName: "LanguageMaster" */ './components/Admin/Settings/Language/LanguageMaster.vue'), meta: { title: 'Language Master'} },
	{ path: '/spa/LengthUnit', name: 'LengthUnit', component: () => import(/* webpackChunkName: "LengthUnit" */ './components/Admin/Settings/LengthUnit/LengthUnit.vue'), meta: { title: 'Lenght Unit Master'} },
	{ path: '/spa/WeightUnit', name: 'WeightUnit', component: () => import(/* webpackChunkName: "WeightUnit" */ './components/Admin/Settings/WeightUnit/WeightUnit.vue'), meta: { title: 'Weight Unit Master'} },
	{ path: '/spa/PackageUnit', name: 'PackageUnit', component: () => import(/* webpackChunkName: "PackageUnit" */ './components/Admin/Settings/PackageUnit/PackageUnit.vue'), meta: { title: 'Package Unit Master'} },





	{ path: '/spa/*', component: () => import(/* webpackChunkName: "NotFound" */'./components/Admin/GlobalComponents/NotFound.vue'), meta: { title: 'NotFound'} },

]

//const router = new VueRouter({
export default new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history', //history mode - remove # (hash) from url
  //mode: 'hash', //hash mode = use # (hash) to url (Default mode)
})

