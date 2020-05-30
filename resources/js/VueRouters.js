/*define All Vue Routers her*/
// import Dashboard from './components/Admin/DashboardAdmin.vue';
// const Dashboard = () => import('./components/Admin/DashboardAdmin.vue')
//const Parties = () => import('./components/Admin/Client/Parties.vue')
//const NotFound = () => import('./components/Admin/NotFound.vue')

//const routes = [
export const routes = [
	//{ path: '/dashboard', component: Dashboard, meta: { title: 'Dashboard'} },
	{ path: '/dashboard', component: () => import('./components/Admin/DashboardAdmin.vue'), meta: { title: 'Dashboard'} },
	{ path: '/spa/dashboard', component: () => import('./components/Admin/DashboardAdmin.vue'), meta: { title: 'Dashboard'} },
	{ path: '/spa/Parties', name: 'Parties', component: () => import('./components/Admin/Client/Parties.vue'), meta: { title: 'Parties'} },
	{ path: '/spa/Categories', name: 'Categories', component: () => import('./components/Admin/Category/Categories.vue'), meta: { title: 'Category'} },
	{ path: '/spa/Items', name: 'Items', component: () => import('./components/Admin/Product/Items.vue'), meta: { title: 'Product'} },
	{ path: '/spa/multiComponent', name: 'multiComponent', component: () => import('./components/Admin/MultiComponent/multiComponent.vue'), meta: { title: 'Component Communication'} },

	{ path: '/spa/*', component: () => import('./components/Admin/NotFound.vue'), meta: { title: 'NotFound'} },




	/*/ -- for create split chunks js file name for vuer*/
	// { path: '/dashboard', component: () => import(/* webpackChunkName: "dashboard" */ './components/Admin/DashboardAdmin.vue'), meta: { title: 'Dashboard'} },
	// { path: '/spa/dashboard', component: () => import(/* webpackChunkName: "dashboard" */'./components/Admin/DashboardAdmin.vue'), meta: { title: 'Dashboard'} },
	// { path: '/spa/parties', component: () => import( webpackChunkName: "parties" './components/Admin/Client/Parties.vue'), meta: { title: 'Parties'} },
	// { path: '/spa/category', component: () => import(/* webpackChunkName: "category" */'./components/Admin/Category/Category.vue'), meta: { title: 'Category'} },
	// { path: '/spa/product', component: () => import(/* webpackChunkName: "product" */'./components/Admin/Product/Product.vue'), meta: { title: 'Product'} },
]