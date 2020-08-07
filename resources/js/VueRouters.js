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
	
	//User Role permission management
	{ path: '/spa/UserMaster', name: 'UserMaster', component: () => import(/* webpackChunkName: "UserMaster" */ './components/Admin/AdminUsers/User/UserMaster.vue'), meta: { title: 'User Master'} },
	{ path: '/spa/RoleMaster', name: 'RoleMaster', component: () => import(/* webpackChunkName: "RoleMaster" */ './components/Admin/AdminUsers/Role/RoleMaster.vue'), meta: { title: 'Role Master'} },
	{ path: '/spa/PermissionMaster', name: 'PermissionMaster', component: () => import(/* webpackChunkName: "PermissionMaster" */ './components/Admin/AdminUsers/Permission/PermissionMaster.vue'), meta: { title: 'Permission Master'} },
	


	//Catalog
	{ path: '/spa/ProductMaster', name: 'ProductMaster', component: () => import(/* webpackChunkName: "ProductMaster" */ './components/Admin/Catalog/Products/ProductMaster.vue'), meta: { title: 'Product Master'},
	  children: [
	  	{ path: '/spa/ProductMaster', name: 'ProductMasterList', component: () => import(/* webpackChunkName: "ProductMasterList" */ './components/Admin/Catalog/Products/ProductMasterList.vue'), },
		{ path: '/spa/ProductMasterForm', name: 'ProductMasterForm', component: () => import(/* webpackChunkName: "ProductMasterForm" */ './components/Admin/Catalog/Products/ProductMasterForm.vue'), },
	  ]
	},
	{ path: '/spa/Categories', name: 'Categories', component: () => import(/* webpackChunkName: "CategoryMaster" */ './components/Admin/Catalog/Category/CategoryMaster.vue'), meta: { title: 'Category Master'} },
	
	{ path: '/spa/AttirbuteMaster', name: 'AttirbuteMaster', component: () => import(/* webpackChunkName: "AttirbuteMaster" */ './components/Admin/Catalog/Attribute/AttirbuteMaster.vue'), meta: { title: 'Attribute Master'} },
	{ path: '/spa/AttributeValueMaster', name: 'AttributeValueMaster', component: () => import(/* webpackChunkName: "AttributeValueMaster" */ './components/Admin/Catalog/AttributeValue/AttributeValueMaster.vue'), meta: { title: 'Attribute Value Master'} },
	{ path: '/spa/SpecificationMaster', name: 'SpecificationMaster', component: () => import(/* webpackChunkName: "SpecificationMaster" */ './components/Admin/Catalog/Specification/SpecificationMaster.vue'), meta: { title: 'Specification Master'} },
	{ path: '/spa/BrandMaster', name: 'BrandMaster', component: () => import(/* webpackChunkName: "BrandMaster" */ './components/Admin/Catalog/Brand/BrandMaster.vue'), meta: { title: 'Brand Master'} },


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
	{ path: '/spa/CustomerMaster', name: 'CustomerMaster', component: () => import( /* webpackChunkName: "CustomerMaster" */ './components/Admin/Customers/Customers/CustomerMaster.vue'), meta: { title: 'Customer Master'} },
	{ path: '/spa/CustomerGroupMaster', name: 'CustomerGroupMaster', component: () => import( /* webpackChunkName: "CustomerGroupMaster" */ './components/Admin/Customers/CustomerGroup/CustomerGroupMaster.vue'), meta: { title: 'Customer Group'} },


	//Suppliers
	{ path: '/spa/SupplierMaster', name: 'SupplierMaster', component: () => import( /* webpackChunkName: "SupplierMaster" */ './components/Admin/Suppliers/Suppliers/SupplierMaster.vue'), meta: { title: 'Supplier Master'} },
	

	//Test-link
	{ path: '/spa/multiComponent', name: 'multiComponent', component: () => import(/* webpackChunkName: "Multicomponent" */ './components/Admin/MultiComponent/multiComponent.vue'), meta: { title: 'Component Communication'} },
	{ path: '/spa/vuexComponent', name: 'vuexComponent', component: () => import(/* webpackChunkName: "VuexComponent" */ './components/Admin/VuexComponent/vuexComponent.vue'), meta: { title: 'Vuex Component Communication'} },
	{ path: '/spa/formComponent', name: 'formComponent', component: () => import(/* webpackChunkName: "formComponent" */ './components/Admin/FormComponent/formComponent.vue'), meta: { title: 'Vuex Form Component'} },
	

	//Accounting
	{ path: '/spa/ChartOfAccounts', name: 'ChartOfAccounts', component: () => import(/* webpackChunkName: "ChartOfAccounts" */ './components/Admin/Accounting/COA/ChartOfAccounts.vue'), meta: { title: 'Chart Of Accounts'} },

	//HRM
	{ path: '/spa/JobTitleMaster', name: 'JobTitleMaster', component: () => import(/* webpackChunkName: "JobTitleMaster" */ './components/Admin/HRM/JobTitle/JobTitleMaster.vue'), meta: { title: 'Job Title'} },
	{ path: '/spa/EmployeeMaster', name: 'EmployeeMaster', component: () => import(/* webpackChunkName: "EmployeeMaster" */ './components/Admin/HRM/Employee/EmployeeMaster.vue'), meta: { title: 'Employee Master'}, 
	  children: [
	  	{ path: '/spa/EmployeeMaster', name: 'EmployeeMasterList', component: () => import(/* webpackChunkName: "EmployeeMasterList" */ './components/Admin/HRM/Employee/EmployeeMasterList.vue'), },
	  	//{ path: '/spa/EmployeeMasterList', name: 'EmployeeMasterList', component: () => import(/* webpackChunkName: "EmployeeMasterList" */ './components/Admin/HRM/Employee/EmployeeMasterList.vue'), },
	  	{ path: '/spa/EmployeeMasterForm', name: 'EmployeeMasterForm', component: () => import(/* webpackChunkName: "EmployeeMasterForm" */ './components/Admin/HRM/Employee/EmployeeMasterForm.vue'), },
		// { path: '*', redirect: '/spa/EmployeeMasterList' }
	  ]	
	},


	
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
	{ path: '/spa/DepartmentMaster', name: 'DepartmentMaster', component: () => import(/* webpackChunkName: "DepartmentMaster" */ './components/Admin/Settings/Department/DepartmentMaster.vue'), meta: { title: 'Department Master'} },
	{ path: '/spa/CountryMaster', name: 'CountryMaster', component: () => import(/* webpackChunkName: "CountryMaster" */ './components/Admin/Settings/Country/CountryMaster.vue'), meta: { title: 'Country Master'} },
	{ path: '/spa/DivisionMaster', name: 'DivisionMaster', component: () => import(/* webpackChunkName: "DivisionMaster" */ './components/Admin/Settings/Division/DivisionMaster.vue'), meta: { title: 'Division Master'} },
	{ path: '/spa/DistrictMaster', name: 'DistrictMaster', component: () => import(/* webpackChunkName: "DistrictMaster" */ './components/Admin/Settings/District/DistrictMaster.vue'), meta: { title: 'District Master'} },
	{ path: '/spa/DistrictZoneMaster', name: 'DistrictZoneMaster', component: () => import(/* webpackChunkName: "DistrictZoneMaster" */ './components/Admin/Settings/DistrictZone/DistrictZoneMaster.vue'), meta: { title: 'Zone/Area Master'} },


	//Reports
	{ path: '/spa/ReportMaster', name: 'ReportMaster', component: () => import(/* webpackChunkName: "ReportMaster" */ './components/Admin/Reports/ReportMaster.vue'), meta: { title: 'Reports'},
	  children: [	  
	  	{ path: '/spa/SalesReportMaster', name: 'SalesReportMaster', component: () => import(/* webpackChunkName: "SalesReportMaster" */ './components/Admin/Reports/Sales/SalesReportMaster.vue'), },
	  	{ path: '/spa/LoanReportMaster', name: 'LoanReportMaster', component: () => import(/* webpackChunkName: "LoanReportMaster" */ './components/Admin/Reports/Loans/LoanReportMaster.vue'), },
	  	{ path: '/spa/StockReportMaster', name: 'StockReportMaster', component: () => import(/* webpackChunkName: "StockReportMaster" */ './components/Admin/Reports/Stock/StockReportMaster.vue'), },
	  	{ path: '/spa/CashFlowReportMaster', name: 'CashFlowReportMaster', component: () => import(/* webpackChunkName: "CashFlowReportMaster" */ './components/Admin/Reports/CashFlow/CashFlowReportMaster.vue'), },
	  	{ path: '/spa/SuppliersReportMaster', name: 'SuppliersReportMaster', component: () => import(/* webpackChunkName: "SuppliersReportMaster" */ './components/Admin/Reports/Suppliers/SuppliersReportMaster.vue'), },
      ] //end Children
	},//end Reports


	//not found page for Admin panel
	{ path: '/spa/*', component: () => import(/* webpackChunkName: "NotFound" */'./components/Admin/GlobalComponents/NotFound.vue'), meta: { title: 'NotFound'} },

]

//const router = new VueRouter({
export default new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history', //history mode - remove # (hash) from url
  //mode: 'hash', //hash mode = use # (hash) to url (Default mode)
})

