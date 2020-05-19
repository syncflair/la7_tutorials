/*define All Vue Routers her*/

// import Category from './components/Admin/Category/category.vue'
// import Product from './components/Admin/Product/product.vue'

const Dashboard = () => import('./components/Admin/DashboardAdmin.vue')
const Category = () => import('./components/Admin/Category/category.vue')
const Product = () => import('./components/Admin/Product/product.vue')


// const Category = { template: './components/Admin/Category/category.vue' }
// const Product = { template: './components/Admin/Product/product.vue' }

// const Category = { template: '<div>Category</div>' }
// const Product = { template: '<div>Product</div>' }

//export const routes = [ //Also use with export keyWord
//const routes = [
export const routes = [
	// { path: '/category', component: require('./components/Admin/Category/category.vue') },
	// { path: '/product', component: require('./components/Admin/Product/product.vue')  },
	{ path: '/dashboard', component: Dashboard },
	{ path: '/category', component: Category },
	{ path: '/product', component: Product },
]
