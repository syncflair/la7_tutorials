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
	//Category
	{ path: '/spa/Products', name: 'Products', component: () => import(/* webpackChunkName: "Products" */ './components/Admin/Catalog/Products/Products.vue'), meta: { title: 'Product'} },
	{ path: '/spa/Categories', name: 'Categories', component: () => import(/* webpackChunkName: "CategoryMaster" */ './components/Admin/Catalog/Category/CategoryMaster.vue'), meta: { title: 'Category Master'} },
	{ path: '/spa/Category-demo', name: 'Category-demo', component: () => import(/* webpackChunkName: "Category-demo" */ './components/Admin/Catalog/Category/Category-demo.vue'), meta: { title: 'Category-Demo'} },
	{ path: '/spa/GiftVoucher', name: 'GiftVoucher', component: () => import(/* webpackChunkName: "GiftVoucher" */ './components/Admin/Catalog/GiftVoucher/GiftVouchers.vue'), meta: { title: 'GiftVoucher'} },
	{ path: '/spa/Reviews', name: 'Reviews', component: () => import(/* webpackChunkName: "Reviews" */ './components/Admin/Catalog/Reviews/Reviews.vue'), meta: { title: 'Reviews'} },
	
	//Sales
	{ path: '/spa/Orders', name: 'Orders', component: () => import(/* webpackChunkName: "Orders" */ './components/Admin/Sales/Orders/Orders.vue'), meta: { title: 'Orders'} },
	{ path: '/spa/Returns', name: 'Returns', component: () => import(/* webpackChunkName: "Returns" */ './components/Admin/Sales/Returns/Returns.vue'), meta: { title: 'Returns'} },

	//Purchase
	{ path: '/spa/Purchase', name: 'Purchase', component: () => import(/* webpackChunkName: "Purchase" */ './components/Admin/Purchase/Purchase/Purchase.vue'), meta: { title: 'Purchase'} },
	{ path: '/spa/Store', name: 'Store', component: () => import(/* webpackChunkName: "Store" */ './components/Admin/Purchase/Store/Storage.vue'), meta: { title: 'Storage'} },


	//Customers
	{ path: '/spa/Customers', name: 'Customers', component: () => import( /* webpackChunkName: "Customers" */ './components/Admin/Customers/Customers/Customers.vue'), meta: { title: 'Customers'} },

	//Suppliers
	{ path: '/spa/Suppliers', name: 'Suppliers', component: () => import( /* webpackChunkName: "Suppliers" */ './components/Admin/Suppliers/Suppliers/Suppliers.vue'), meta: { title: 'Suppliers'} },
	

	//Test-link
	{ path: '/spa/multiComponent', name: 'multiComponent', component: () => import(/* webpackChunkName: "Multicomponent" */ './components/Admin/MultiComponent/multiComponent.vue'), meta: { title: 'Component Communication'} },
	{ path: '/spa/vuexComponent', name: 'vuexComponent', component: () => import(/* webpackChunkName: "VuexComponent" */ './components/Admin/VuexComponent/vuexComponent.vue'), meta: { title: 'Vuex Component Communication'} },
	{ path: '/spa/formComponent', name: 'formComponent', component: () => import(/* webpackChunkName: "formComponent" */ './components/Admin/FormComponent/formComponent.vue'), meta: { title: 'Vuex Form Component'} },
	

	//Accounting
	{ path: '/spa/ChartOfAccounts', name: 'ChartOfAccounts', component: () => import(/* webpackChunkName: "ChartOfAccounts" */ './components/Admin/Accounting/COA/ChartOfAccounts.vue'), meta: { title: 'Chart Of Accounts'} },


	//settings
	{ path: '/spa/OrganizationInfo', name: 'OrganizationInfo', component: () => import(/* webpackChunkName: "OrganizationInfo" */ './components/Admin/Settings/OrganizationInfo/OrganizationInfo.vue'), meta: { title: 'Organization Information'} },
	{ path: '/spa/BranchInfo', name: 'BranchInfo', component: () => import(/* webpackChunkName: "BranchInfo" */ './components/Admin/Settings/BranchInfo/BranchInfo.vue'), meta: { title: 'BranchInfo Information'} },
	{ path: '/spa/CurrencyMarster', name: 'CurrencyMarster', component: () => import(/* webpackChunkName: "CurrencyMarster" */ './components/Admin/Settings/Currency/CurrencyMarster.vue'), meta: { title: 'Currency Master'} },
	{ path: '/spa/LanguageMaster', name: 'LanguageMaster', component: () => import(/* webpackChunkName: "LanguageMaster" */ './components/Admin/Settings/Language/LanguageMaster.vue'), meta: { title: 'Language Master'} },
	{ path: '/spa/LengthUnit', name: 'LengthUnit', component: () => import(/* webpackChunkName: "LengthUnit" */ './components/Admin/Settings/LengthUnit/LengthUnit.vue'), meta: { title: 'Lenght Unit Master'} },
	{ path: '/spa/WeightUnit', name: 'WeightUnit', component: () => import(/* webpackChunkName: "WeightUnit" */ './components/Admin/Settings/WeightUnit/WeightUnit.vue'), meta: { title: 'Weight Unit Master'} },
	{ path: '/spa/PackageUnit', name: 'PackageUnit', component: () => import(/* webpackChunkName: "PackageUnit" */ './components/Admin/Settings/PackageUnit/PackageUnit.vue'), meta: { title: 'Package Unit Master'} },
	{ path: '/spa/VatRate', name: 'VatRate', component: () => import(/* webpackChunkName: "VatRate" */ './components/Admin/Settings/VatRate/VatRate.vue'), meta: { title: 'Vat Rate Master'} },
	{ path: '/spa/UserStatus', name: 'UserStatus', component: () => import(/* webpackChunkName: "UserStatus" */ './components/Admin/Settings/UserStatus/UserStatus.vue'), meta: { title: 'User Status Master'} },
	{ path: '/spa/StatusMaster', name: 'StatusMaster', component: () => import(/* webpackChunkName: "StatusMaster" */ './components/Admin/Settings/StatusMaster/StatusMaster.vue'), meta: { title: 'Status  Master'} },
	{ path: '/spa/PaymentMethod', name: 'PaymentMethod', component: () => import(/* webpackChunkName: "PaymentMethod" */ './components/Admin/Settings/PaymentMethod/PaymentMethod.vue'), meta: { title: 'Payment Method Master'} },
	{ path: '/spa/CountryMaster', name: 'CountryMaster', component: () => import(/* webpackChunkName: "CountryMaster" */ './components/Admin/Settings/Country/CountryMaster.vue'), meta: { title: 'Country Master'} },
	
	{ path: '/spa/DivisionMaster', name: 'DivisionMaster', component: () => import(/* webpackChunkName: "DivisionMaster" */ './components/Admin/Settings/Division/DivisionMaster.vue'), meta: { title: 'Division Master'} },
	{ path: '/spa/DistrictMaster', name: 'DistrictMaster', component: () => import(/* webpackChunkName: "DistrictMaster" */ './components/Admin/Settings/District/DistrictMaster.vue'), meta: { title: 'District Master'} },
	{ path: '/spa/DistrictZoneMaster', name: 'DistrictZoneMaster', component: () => import(/* webpackChunkName: "DistrictZoneMaster" */ './components/Admin/Settings/DistrictZone/DistrictZoneMaster.vue'), meta: { title: 'Zone/Area Master'} },


	//not found page for Admin panel
	{ path: '/spa/*', component: () => import(/* webpackChunkName: "NotFound" */'./components/Admin/GlobalComponents/NotFound.vue'), meta: { title: 'NotFound'} },

]

//const router = new VueRouter({
export default new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history', //history mode - remove # (hash) from url
  //mode: 'hash', //hash mode = use # (hash) to url (Default mode)
})

