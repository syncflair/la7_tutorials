/*define All Vue Routers her*/
// import Category from './components/Admin/Category/category.vue'

const Dashboard = () => import('./components/Admin/DashboardAdmin.vue')
const Parties = () => import('./components/Admin/Client/Parties.vue')
const Category = () => import('./components/Admin/Category/category.vue')
const Product = () => import('./components/Admin/Product/product.vue')


//const NotFound = () => import('./components/Admin/NotFound.vue')

//const routes = [
export const routes = [
	{ path: '/dashboard', component: Dashboard, meta: { title: 'Dashboard'} },
	{ path: '/spa/dashboard', component: Dashboard, meta: { title: 'Dashboard'} },
	{ path: '/spa/parties', component: Parties, meta: { title: 'Parties'} },
	{ path: '/spa/category', component: Category, meta: { title: 'Category'} },
	{ path: '/spa/product', component: Product, meta: { title: 'Product'} },


	//{ path: '*', component: NotFound, meta: { title: 'NotFound'} },
	
]
