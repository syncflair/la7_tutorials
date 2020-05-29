/*define All Vue Routers her*/
// import Dashboard from './components/Admin/DashboardAdmin.vue';
// import Parties from './components/Admin/Client/Parties.vue';
// import Category from './components/Admin/Category/Category.vue';
// import Product from './components/Admin/Product/Product.vue';

// const Dashboard = () => import('./components/Admin/DashboardAdmin.vue')
//const Parties = () => import('./components/Admin/Client/Parties.vue')
//const Category = () => import('./components/Admin/Category/Category.vue')
//const Product = () => import('./components/Admin/Product/Product.vue')


//const NotFound = () => import('./components/Admin/NotFound.vue')

//const routes = [
export const routes = [
	//{ path: '/dashboard', component: Dashboard, meta: { title: 'Dashboard'} },
	{ path: '/dashboard', component: () => import('./components/Admin/DashboardAdmin.vue'), meta: { title: 'Dashboard'} },
	{ path: '/spa/dashboard', component: () => import('./components/Admin/DashboardAdmin.vue'), meta: { title: 'Dashboard'} },
	{ path: '/spa/parties', component: () => import('./components/Admin/Client/Parties.vue'), meta: { title: 'Parties'} },
	{ path: '/spa/category', component: () => import('./components/Admin/Category/Category.vue'), meta: { title: 'Category'} },
	{ path: '/spa/product', component: () => import('./components/Admin/Product/Product.vue'), meta: { title: 'Product'} },

	// { path: '/dashboard', component: () => import(/* webpackChunkName: "dashboard" */ './components/Admin/DashboardAdmin.vue'), meta: { title: 'Dashboard'} },
	// { path: '/spa/dashboard', component: () => import(/* webpackChunkName: "dashboard" */'./components/Admin/DashboardAdmin.vue'), meta: { title: 'Dashboard'} },
	// { path: '/spa/parties', component: () => import( webpackChunkName: "parties" './components/Admin/Client/Parties.vue'), meta: { title: 'Parties'} },
	// { path: '/spa/category', component: () => import(/* webpackChunkName: "category" */'./components/Admin/Category/Category.vue'), meta: { title: 'Category'} },
	// { path: '/spa/product', component: () => import(/* webpackChunkName: "product" */'./components/Admin/Product/Product.vue'), meta: { title: 'Product'} },

	//{ path: '*', component: NotFound, meta: { title: 'NotFound'} },
	
]


// /* webpackChunkName: "dashboard" */ -- for create split chunks js file for vuer