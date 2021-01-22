import Vue from 'vue';
import store from './VueVuex' /*this.$store is not available in the router object. So import vuex here to use store*/
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

	
	/********************************************************/
	/* Master Admin Panel */
	/********************************************************/
	//{ path: '/dashboard', component: Dashboard, meta: { title: 'Dashboard'} },
	{ path: '/dashboard', name: 'Dashboard', component: () => import(/* webpackChunkName: "Dashboard" */ './components/Admin/DashboardAdmin.vue'), meta: { title: 'Dashboard'} },
	//{ path: '/spa/dashboard', component: () => import('./components/Admin/DashboardAdmin.vue'), meta: { title: 'Dashboard'} },
	
	//User Role permission management
	{ path: '/spa/UserMaster', name: 'UserMaster', component: () => import(/* webpackChunkName: "UserMaster" */ './components/Admin/AdminUsers/User/UserMaster.vue'), meta: {authRequiredAdmin: true, title: 'User Master'} },
	{ path: '/spa/RoleMaster', name: 'RoleMaster', component: () => import(/* webpackChunkName: "RoleMaster" */ './components/Admin/AdminUsers/Role/RoleMaster.vue'), meta: {authRequiredAdmin: true, title: 'Role Master'} },
	{ path: '/spa/PermissionMaster', name: 'PermissionMaster', component: () => import(/* webpackChunkName: "PermissionMaster" */ './components/Admin/AdminUsers/Permission/PermissionMaster.vue'), meta: {authRequiredAdmin: true, title: 'Permission Master'} },
	
	//Catalog
	{ path: '/spa/ProductMaster', name: 'ProductMaster', component: () => import(/* webpackChunkName: "ProductMaster" */ './components/Admin/Catalog/Products/ProductMaster.vue'),
	  children: [
	  	{ path: '/spa/ProductMaster', name: 'ProductMasterList', component: () => import(/* webpackChunkName: "ProductMasterList" */ './components/Admin/Catalog/Products/ProductMasterList.vue'), meta: {authRequiredAdmin: true, title: 'Product Master'}, },
		{ path: '/spa/ProductMasterForm', name: 'ProductMasterForm', component: () => import(/* webpackChunkName: "ProductMasterForm" */ './components/Admin/Catalog/Products/ProductMasterForm.vue'), meta: {authRequiredAdmin: true, title: 'Product Update'}, },
	  ]
	},
	{ path: '/spa/Categories', name: 'Categories', component: () => import(/* webpackChunkName: "CategoryMaster" */ './components/Admin/Catalog/Category/CategoryMaster.vue'), meta: {authRequiredAdmin: true, title: 'Category Master'} },
	
	{ path: '/spa/AttirbuteMaster', name: 'AttirbuteMaster', component: () => import(/* webpackChunkName: "AttirbuteMaster" */ './components/Admin/Catalog/Attribute/AttirbuteMaster.vue'), meta: {authRequiredAdmin: true, title: 'Attribute Master'} },
	{ path: '/spa/AttributeValueMaster', name: 'AttributeValueMaster', component: () => import(/* webpackChunkName: "AttributeValueMaster" */ './components/Admin/Catalog/AttributeValue/AttributeValueMaster.vue'), meta: {authRequiredAdmin: true, title: 'Attribute Value Master'} },
	{ path: '/spa/SpecificationMaster', name: 'SpecificationMaster', component: () => import(/* webpackChunkName: "SpecificationMaster" */ './components/Admin/Catalog/Specification/SpecificationMaster.vue'), meta: {authRequiredAdmin: true, title: 'Specification Master'} },
	{ path: '/spa/BrandMaster', name: 'BrandMaster', component: () => import(/* webpackChunkName: "BrandMaster" */ './components/Admin/Catalog/Brand/BrandMaster.vue'), meta: {authRequiredAdmin: true, title: 'Brand Master'} },


	{ path: '/spa/Category-demo', name: 'Category-demo', component: () => import(/* webpackChunkName: "Category-demo" */ './components/Admin/Catalog/Category/Category-demo.vue'), meta: { title: 'Category-Demo'} },
	{ path: '/spa/GiftVoucher', name: 'GiftVoucher', component: () => import(/* webpackChunkName: "GiftVoucher" */ './components/Admin/Catalog/GiftVoucher/GiftVouchers.vue'), meta: {authRequiredAdmin: true, title: 'GiftVoucher'} },
	{ path: '/spa/Reviews', name: 'Reviews', component: () => import(/* webpackChunkName: "Reviews" */ './components/Admin/Catalog/Reviews/Reviews.vue'), meta: {authRequiredAdmin: true, title: 'Reviews'} },
	
	//Sales
	{ path: '/spa/Orders', name: 'Orders', component: () => import(/* webpackChunkName: "Orders" */ './components/Admin/Sales/Orders/Orders.vue'), meta: {authRequiredAdmin: true, title: 'Orders'} },
	{ path: '/spa/Returns', name: 'Returns', component: () => import(/* webpackChunkName: "Returns" */ './components/Admin/Sales/Returns/Returns.vue'), meta: {authRequiredAdmin: true, title: 'Returns'} },

	//Purchase
	{ path: '/spa/Store', name: 'Store', component: () => import(/* webpackChunkName: "Store" */ './components/Admin/Purchase/Store/Storage.vue'), meta: {authRequiredAdmin: true, title: 'Storage'} },
	{ path: '/spa/PurchaseOrderMaster', name: 'PurchaseOrderMaster', component: () => import(/* webpackChunkName: "PurchaseOrderMaster" */ './components/Admin/Purchase/Purchase/PurchaseOrderMaster.vue'), meta: {authRequiredAdmin: true, title: 'Purchase order master'},
	  children: [
	  	{ path: '/spa/PurchaseOrderMaster', name: 'PurchaseOrderList', component: () => import(/* webpackChunkName: "PurchaseOrderList" */ './components/Admin/Purchase/Purchase/PurchaseOrderList.vue'), meta: {authRequiredAdmin: true, title: 'Purchase Orders'},  },
	  	{ path: '/spa/PurchaseOrderForm', name: 'PurchaseOrderForm', component: () => import(/* webpackChunkName: "PurchaseOrderForm" */ './components/Admin/Purchase/Purchase/PurchaseOrderForm.vue'), meta: {authRequiredAdmin: true, title: 'Purchase Form'},  },
	  	{ path: '/spa/PurchaseSingleOrderView', name: 'PurchaseSingleOrderView', component: () => import(/* webpackChunkName: "PurchaseSingleOrderView" */ './components/Admin/Purchase/Purchase/PurchaseSingleOrderView.vue'), meta: {authRequiredAdmin: true, title: 'PUrchase Order View'},  },
	  
	  ]	
	},

	//Customers
	{ path: '/spa/CustomerMaster', name: 'CustomerMaster', component: () => import( /* webpackChunkName: "CustomerMaster" */ './components/Admin/Customers/Customers/CustomerMaster.vue'), meta: {authRequiredAdmin: true, title: 'Customer'},
		children: [
	  	{ path: '/spa/CustomerMaster', name: 'CustomerMasterList', component: () => import(/* webpackChunkName: "CustomerMasterList" */ './components/Admin/Customers/Customers/CustomerMasterList.vue'), meta: {authRequiredAdmin: true, title: 'Customers'}, },
	  	{ path: '/spa/CustomerMasterForm', name: 'CustomerMasterForm', component: () => import(/* webpackChunkName: "CustomerMasterForm" */ './components/Admin/Customers/Customers/CustomerMasterForm.vue'), meta: {authRequiredAdmin: true, title: 'Customer'},},
	  ]
	},
	{ path: '/spa/CustomerGroupMaster', name: 'CustomerGroupMaster', component: () => import( /* webpackChunkName: "CustomerGroupMaster" */ './components/Admin/Customers/CustomerGroup/CustomerGroupMaster.vue'), meta: {authRequiredAdmin: true, title: 'Customer Group'} },
	{ path: '/spa/CustomerMembershipMaster', name: 'CustomerMembershipMaster', component: () => import( /* webpackChunkName: "CustomerMembershipMaster" */ './components/Admin/Customers/Membership/CustomerMembershipMaster.vue'), meta: {authRequiredAdmin: true, title: 'Customer Group'} },

	//Suppliers
	{ path: '/spa/SupplierMaster', name: 'SupplierMaster', component: () => import( /* webpackChunkName: "SupplierMaster" */ './components/Admin/Suppliers/Suppliers/SupplierMaster.vue'), meta: {authRequiredAdmin: true, title: 'Supplier Master'} },
	{ path: '/spa/BrandShopMaster', name: 'BrandShopMaster', component: () => import( /* webpackChunkName: "BrandShopMaster" */ './components/Admin/Suppliers/BrandShop/BrandShopMaster.vue'), meta: {authRequiredAdmin: true, title: 'Brand Shop'} },
	{ path: '/spa/VendorMaster', name: 'VendorMaster', component: () => import( /* webpackChunkName: "VendorMaster" */ './components/Admin/Suppliers/Vendor/VendorMaster.vue'), meta: {authRequiredAdmin: true, title: 'Vendor Master'}, 
	  children: [
	  	{ path: '/spa/VendorMaster', name: 'VendorMasterList', component: () => import(/* webpackChunkName: "VendorMasterList" */ './components/Admin/Suppliers/Vendor/VendorMasterList.vue'), meta: {authRequiredAdmin: true, title: 'Vendors'}, },
	  	{ path: '/spa/VendorMasterForm', name: 'VendorMasterForm', component: () => import(/* webpackChunkName: "VendorMasterForm" */ './components/Admin/Suppliers/Vendor/VendorMasterForm.vue'), meta: {authRequiredAdmin: true, title: 'Vendor'},},
		// { path: '*', redirect: '/spa/VendorMasterList' }
	  ]
	},

	//Test-link
	{ path: '/spa/multiComponent', name: 'multiComponent', component: () => import(/* webpackChunkName: "Multicomponent" */ './components/Admin/MultiComponent/multiComponent.vue'), meta: {authRequiredAdmin: true, title: 'Component Communication'} },
	{ path: '/spa/vuexComponent', name: 'vuexComponent', component: () => import(/* webpackChunkName: "VuexComponent" */ './components/Admin/VuexComponent/vuexComponent.vue'), meta: {authRequiredAdmin: true, title: 'Vuex Component Communication'} },
	{ path: '/spa/formComponent', name: 'formComponent', component: () => import(/* webpackChunkName: "formComponent" */ './components/Admin/FormComponent/formComponent.vue'), meta: {authRequiredAdmin: true, title: 'Vuex Form Component'} },
	

	//Accounting
	{ path: '/spa/ChartOfAccounts', name: 'ChartOfAccounts', component: () => import(/* webpackChunkName: "ChartOfAccounts" */ './components/Admin/Accounting/COA/ChartOfAccounts.vue'), meta: {authRequiredAdmin: true, title: 'Chart Of Accounts'} },
	{ path: '/spa/AccountHeadsMaster', name: 'AccountHeadsMaster', component: () => import(/* webpackChunkName: "AccountHeadsMaster" */ './components/Admin/Accounting/AccountHead/AccountHeadsMaster.vue'), meta: {authRequiredAdmin: true, title: 'Account Head'} },
	{ path: '/spa/AccountDetailsMaster', name: 'AccountDetailsMaster', component: () => import(/* webpackChunkName: "AccountDetailsMaster" */ './components/Admin/Accounting/AccountDetails/AccountDetailsMaster.vue'), meta: {authRequiredAdmin: true, title: 'Bank Accounts'} },

	{ path: '/spa/BankAccountMaster', name: 'BankAccountMaster', component: () => import(/* webpackChunkName: "BankAccountMaster" */ './components/Admin/Accounting/BankAccount/BankAccountMaster.vue'), meta: {authRequiredAdmin: true, title: 'Bank Accounts'} },
	{ path: '/spa/CashAccountMaster', name: 'CashAccountMaster', component: () => import(/* webpackChunkName: "CashAccountMaster" */ './components/Admin/Accounting/CashAccount/CashAccountMaster.vue'), meta: {authRequiredAdmin: true, title: 'Cash Accounts'} },

	//HRM
	{ path: '/spa/JobTitleMaster', name: 'JobTitleMaster', component: () => import(/* webpackChunkName: "JobTitleMaster" */ './components/Admin/HRM/JobTitle/JobTitleMaster.vue'), meta: {authRequiredAdmin: true, title: 'Job Title'} },
	{ path: '/spa/EmployeeMaster', name: 'EmployeeMaster', component: () => import(/* webpackChunkName: "EmployeeMaster" */ './components/Admin/HRM/Employee/EmployeeMaster.vue'), meta: {authRequiredAdmin: true, title: 'Employee Master'}, 
	  children: [
	  	{ path: '/spa/EmployeeMaster', name: 'EmployeeMasterList', component: () => import(/* webpackChunkName: "EmployeeMasterList" */ './components/Admin/HRM/Employee/EmployeeMasterList.vue'), meta: {authRequiredAdmin: true, title: 'Employees'},  },
	  	//{ path: '/spa/EmployeeMasterList', name: 'EmployeeMasterList', component: () => import(/* webpackChunkName: "EmployeeMasterList" */ './components/Admin/HRM/Employee/EmployeeMasterList.vue'), },
	  	{ path: '/spa/EmployeeMasterForm', name: 'EmployeeMasterForm', component: () => import(/* webpackChunkName: "EmployeeMasterForm" */ './components/Admin/HRM/Employee/EmployeeMasterForm.vue'), meta: {authRequiredAdmin: true, title: 'Employee'}, },
		// { path: '*', redirect: '/spa/EmployeeMasterList' }
	  ]	
	},
	{ path: '/spa/DepartmentMaster', name: 'DepartmentMaster', component: () => import(/* webpackChunkName: "DepartmentMaster" */ './components/Admin/HRM/Department/DepartmentMaster.vue'), meta: {authRequiredAdmin: true, title: 'Department'} },
	
	//settings
	{ path: '/spa/SettingsMaster', name: 'SettingsMaster', component: () => import(/* webpackChunkName: "SettingsMaster" */ './components/Admin/Settings/Settings/SettingsMaster.vue'), meta: {authRequiredAdmin: true, title: 'Settings'} },
	{ path: '/spa/OrganizationInfo', name: 'OrganizationInfo', component: () => import(/* webpackChunkName: "OrganizationInfo" */ './components/Admin/Settings/OrganizationInfo/OrganizationInfo.vue'), meta: {authRequiredAdmin: true, title: 'Organization Information'} },
	{ path: '/spa/BranchInfo', name: 'BranchInfo', component: () => import(/* webpackChunkName: "BranchInfo" */ './components/Admin/Settings/BranchInfo/BranchInfo.vue'), meta: {authRequiredAdmin: true, title: 'BranchInfo Information'} },
	{ path: '/spa/CurrencyMarster', name: 'CurrencyMarster', component: () => import(/* webpackChunkName: "CurrencyMarster" */ './components/Admin/Settings/Currency/CurrencyMarster.vue'), meta: {authRequiredAdmin: true, title: 'Currency '} },
	{ path: '/spa/LanguageMaster', name: 'LanguageMaster', component: () => import(/* webpackChunkName: "LanguageMaster" */ './components/Admin/Settings/Language/LanguageMaster.vue'), meta: {authRequiredAdmin: true, title: 'Language'} },
	{ path: '/spa/UnitsMaster', name: 'UnitsMaster', component: () => import(/* webpackChunkName: "UnitsMaster" */ './components/Admin/Settings/Units/UnitsMaster.vue'), meta: {authRequiredAdmin: true, title: 'Unit'} },
	{ path: '/spa/LengthUnit', name: 'LengthUnit', component: () => import(/* webpackChunkName: "LengthUnit" */ './components/Admin/Settings/LengthUnit/LengthUnit.vue'), meta: {authRequiredAdmin: true, title: 'Lenght Unit'} },
	{ path: '/spa/WeightUnit', name: 'WeightUnit', component: () => import(/* webpackChunkName: "WeightUnit" */ './components/Admin/Settings/WeightUnit/WeightUnit.vue'), meta: {authRequiredAdmin: true, title: 'Weight Unit'} },
	{ path: '/spa/PackageUnit', name: 'PackageUnit', component: () => import(/* webpackChunkName: "PackageUnit" */ './components/Admin/Settings/PackageUnit/PackageUnit.vue'), meta: {authRequiredAdmin: true, title: 'Package Unit'} },
	{ path: '/spa/VatRate', name: 'VatRate', component: () => import(/* webpackChunkName: "VatRate" */ './components/Admin/Settings/VatRate/VatRate.vue'), meta: {authRequiredAdmin: true, title: 'Vat Rate'} },
	{ path: '/spa/UserStatus', name: 'UserStatus', component: () => import(/* webpackChunkName: "UserStatus" */ './components/Admin/Settings/UserStatus/UserStatus.vue'), meta: {authRequiredAdmin: true, title: 'User Status'} },
	{ path: '/spa/StatusMaster', name: 'StatusMaster', component: () => import(/* webpackChunkName: "StatusMaster" */ './components/Admin/Settings/StatusMaster/StatusMaster.vue'), meta: {authRequiredAdmin: true, title: 'Status'} },
	{ path: '/spa/PaymentMethod', name: 'PaymentMethod', component: () => import(/* webpackChunkName: "PaymentMethod" */ './components/Admin/Settings/PaymentMethod/PaymentMethod.vue'), meta: {authRequiredAdmin: true, title: 'Payment Method'} },
	{ path: '/spa/CountryMaster', name: 'CountryMaster', component: () => import(/* webpackChunkName: "CountryMaster" */ './components/Admin/Settings/Country/CountryMaster.vue'), meta: {authRequiredAdmin: true, title: 'Country'} },
	{ path: '/spa/DivisionMaster', name: 'DivisionMaster', component: () => import(/* webpackChunkName: "DivisionMaster" */ './components/Admin/Settings/Division/DivisionMaster.vue'), meta: {authRequiredAdmin: true, title: 'Division'} },
	{ path: '/spa/DistrictMaster', name: 'DistrictMaster', component: () => import(/* webpackChunkName: "DistrictMaster" */ './components/Admin/Settings/District/DistrictMaster.vue'), meta: {authRequiredAdmin: true, title: 'District'} },
	{ path: '/spa/DistrictZoneMaster', name: 'DistrictZoneMaster', component: () => import(/* webpackChunkName: "DistrictZoneMaster" */ './components/Admin/Settings/DistrictZone/DistrictZoneMaster.vue'), meta: {authRequiredAdmin: true, title: 'Zone/Area'} },
	

	{ path: '/spa/OrderStatusMaster', name: 'OrderStatusMaster', component: () => import(/* webpackChunkName: "OrderStatusMaster" */ './components/Admin/Settings/OrderStatus/OrderStatusMaster.vue'), meta: {authRequiredAdmin: true, title: 'Order Status'} },
	{ path: '/spa/StockStatusMaster', name: 'StockStatusMaster', component: () => import(/* webpackChunkName: "StockStatusMaster" */ './components/Admin/Settings/StockStatus/StockStatusMaster.vue'), meta: {authRequiredAdmin: true, title: 'Stock Status'} },
	{ path: '/spa/ReturnStatusMaster', name: 'ReturnStatusMaster', component: () => import(/* webpackChunkName: "ReturnStatusMaster" */ './components/Admin/Settings/ReturnStatus/ReturnStatusMaster.vue'), meta: {authRequiredAdmin: true, title: 'Return Status'} },
	{ path: '/spa/ReturnActionMaster', name: 'ReturnActionMaster', component: () => import(/* webpackChunkName: "ReturnActionMaster" */ './components/Admin/Settings/ReturnAction/ReturnActionMaster.vue'), meta: {authRequiredAdmin: true, title: 'Return Action'} },
	{ path: '/spa/PaymentStatusMaster', name: 'PaymentStatusMaster', component: () => import(/* webpackChunkName: "PaymentStatusMaster" */ './components/Admin/Settings/PaymentStatus/PaymentStatusMaster.vue'), meta: {authRequiredAdmin: true, title: 'Payment Status'} },

	//Reports
	{ path: '/spa/ReportMaster', name: 'ReportMaster', component: () => import(/* webpackChunkName: "ReportMaster" */ './components/Admin/Reports/ReportMaster.vue'),
	  children: [	  
	  	{ path: '/spa/SalesReportMaster', name: 'SalesReportMaster', component: () => import(/* webpackChunkName: "SalesReportMaster" */ './components/Admin/Reports/Sales/SalesReportMaster.vue'),meta: {authRequiredAdmin: true, title: 'Sales'}, },
	  	{ path: '/spa/LoanReportMaster', name: 'LoanReportMaster', component: () => import(/* webpackChunkName: "LoanReportMaster" */ './components/Admin/Reports/Loans/LoanReportMaster.vue'), meta: {authRequiredAdmin: true, title: 'Loan Reports'}, },
	  	{ path: '/spa/StockReportMaster', name: 'StockReportMaster', component: () => import(/* webpackChunkName: "StockReportMaster" */ './components/Admin/Reports/Stock/StockReportMaster.vue'), meta: {authRequiredAdmin: true, title: 'Stock Reports'}, },
	  	{ path: '/spa/CashFlowReportMaster', name: 'CashFlowReportMaster', component: () => import(/* webpackChunkName: "CashFlowReportMaster" */ './components/Admin/Reports/CashFlow/CashFlowReportMaster.vue'), meta: {authRequiredAdmin: true, title: 'Cash flow Reports'}, },
	  	{ path: '/spa/SuppliersReportMaster', name: 'SuppliersReportMaster', component: () => import(/* webpackChunkName: "SuppliersReportMaster" */ './components/Admin/Reports/Suppliers/SuppliersReportMaster.vue'), meta: {authRequiredAdmin: true, title: 'Supplier Reports'}, },
      ] //end Children
	},//end Reports

	//not found page for Admin panel
	{ path: '/spa/*', component: () => import(/* webpackChunkName: "NotFound" */'./components/Admin/GlobalComponents/NotFound.vue'), meta: { title: 'Not Found'} },



	/********************************************************/
	/* Admin Child Routes */
	/********************************************************/
	//Admin Supervisor
	{ path: '/dashboard-supervisor', component: () => import(/* webpackChunkName: "DashboardAdminChildSupervisor" */ './components/AdminChild/AdminSupervisor/DashboardAdminChildSupervisor.vue'), meta: { title: 'Dashboard'} },
	//Admin Delivery
	{ path: '/dashboard-delivery', component: () => import(/* webpackChunkName: "DashboardAdminChildDelivery" */ './components/AdminChild/AdminDelivery/DashboardAdminChildDelivery.vue'), meta: { title: 'Dashboard'} },
	//Admin Packaging
	{ path: '/dashboard-packaging', component: () => import(/* webpackChunkName: "DashboardAdminChildPackaging" */ './components/AdminChild/AdminPackaging/DashboardAdminChildPackaging.vue'), meta: { title: 'Dashboard'} },
	//Admin Order
	{ path: '/dashboard-Order', component: () => import(/* webpackChunkName: "DashboardAdminChildOrder" */ './components/AdminChild/AdminOrder/DashboardAdminChildOrder.vue'), meta: { title: 'Dashboard'} },
	//Admin Sales
	{ path: '/dashboard-Sales', component: () => import(/* webpackChunkName: "DashboardAdminChildSales" */ './components/AdminChild/AdminSales/DashboardAdminChildSales.vue'), meta: { title: 'Dashboard'} },
	//Admin Storage
	{ path: '/dashboard-Storage', component: () => import(/* webpackChunkName: "DashboardAdminChildStorage" */ './components/AdminChild/AdminStorage/DashboardAdminChildStorage.vue'), meta: { title: 'Dashboard'} },
	//Admin Purchase
	{ path: '/dashboard-Purchase', component: () => import(/* webpackChunkName: "DashboardAdminChildPurchase" */ './components/AdminChild/AdminPurchase/DashboardAdminChildPurchase.vue'), meta: { title: 'Dashboard'} },
	//Admin GuestUser
	{ path: '/dashboard-GuestUser', component: () => import(/* webpackChunkName: "DashboardAdminChildGuestUser" */ './components/AdminChild/AdminGuestUser/DashboardAdminChildGuestUser.vue'), meta: { title: 'Dashboard'} },

	//Admin child profile for all 
	{ path: '/spaa/admin-user-profile', component: () => import(/* webpackChunkName: "AdminChildUserProfile" */ './components/AdminChild/AdminChildProfile/AdminChildProfileMaster.vue'), meta: { title: 'Profile'} },
	//not found page for Admin child
	{ path: '/spaa/*', component: () => import(/* webpackChunkName: "AdminChildNotFound" */'./components/AdminChild/GlobalComponents/NotFound.vue'), meta: { title: 'Not Found'} },



	/********************************************************/
	/* Supplier Admin Routes */
	/********************************************************/
	{ path: '/dashboard-supplier', component: () => import(/* webpackChunkName: "DashboardSupplierAdmin" */ './components/AdminSupplier/DashboardSupplierAdmin.vue'), meta: { title: 'Dashboard'} },
	{ path: '/spas/supplier-profile', component: () => import(/* webpackChunkName: "SupplierProfileMaster" */ './components/AdminSupplier/Profile/SupplierProfileMaster.vue'), meta: { title: 'Profile'} },
	{ path: '/spas/supplier-new-order-list', component: () => import(/* webpackChunkName: "SupplierNewOrderList" */ './components/AdminSupplier/Orders/SupplierNewOrderList.vue'), meta: { title: 'New Order'} },
	{ path: '/spas/supplier-all-order', component: () => import(/* webpackChunkName: "SupplierAllOrder" */ './components/AdminSupplier/Orders/SupplierAllOrder.vue'), meta: { title: 'All Order'} },
	{ path: '/spas/supplier-order-delivered', component: () => import(/* webpackChunkName: "SupplierOrderDelivered" */ './components/AdminSupplier/Orders/SupplierOrderDelivered.vue'), meta: { title: 'Order Delivered'} },
	{ path: '/spas/supplier-product-list', component: () => import(/* webpackChunkName: "SupplierProductList" */ './components/AdminSupplier/Product/SupplierProductList.vue'), meta: { title: 'Products'} },
	{ path: '/spas/supplier-payment-history', component: () => import(/* webpackChunkName: "SupplierPaymentHistory" */ './components/AdminSupplier/Payment/SupplierPaymentHistory.vue'), meta: { title: 'Payment History'} },
	{ path: '/spas/supplier-amount-receivable', component: () => import(/* webpackChunkName: "SupplierAmountReceivable" */ './components/AdminSupplier/Payment/SupplierAmountReceivable.vue'), meta: { title: 'Amount Receivable'} },
	{ path: '/spas/supplier-producct-Return', component: () => import(/* webpackChunkName: "SupplierProductReturn" */ './components/AdminSupplier/Return/SupplierProductReturn.vue'), meta: { title: 'Return'} },
	{ path: '/spas/supplier-producct-Replace', component: () => import(/* webpackChunkName: "SupplierProductReplace" */ './components/AdminSupplier/Replace/SupplierProductReplace.vue'), meta: { title: 'Replace'} },
	//not found page for Customer Admin Panel
	{ path: '/spas/*', component: () => import(/* webpackChunkName: "NotFoundSupplierAdmin" */'./components/AdminSupplier/GlobalComponents/NotFound.vue'), meta: { title: 'Not Found'} },



	/********************************************************/
	/* website */
	/********************************************************/	
	//{ path: '/home', name: 'home', component: () => import(/* webpackChunkName: "website-home-public" */ './components/Website/Public/Home/HomePublic.vue'), meta: { title: 'Welcome To Sorboraho'} },
	//{ path: '/contact', name: 'contact', component: () => import(/* webpackChunkName: "website-contact-public" */ './components/Website/Public/Contact/ContactPublic.vue'), meta: { title: 'Contact Us'} },
	
  	{ path: '/home', name: 'HomePublic', component: () => import(/* webpackChunkName: "HomePublic-website" */ './components/Website/Public/Home/HomePublic.vue'), },
	{ path: '/shop', name: 'ShopPublic', component: () => import(/* webpackChunkName: "ShopPublic-website" */ './components/Website/Public/Shop/ShopPublic.vue'), meta: { title: 'Shop', breadcrumb: 'Shop'} },
	{ path: '/categories', name: 'CategoriesPublic', component: () => import(/* webpackChunkName: "CategoriesPublic-website" */ './components/Website/Public/Category/CategoriesPublic.vue'), meta: {title: 'Categories',}},
	{ path: '/deals-of-day', name: 'DealsListPublic', component: () => import(/* webpackChunkName: "DealsListPublic-website" */ './components/Website/Public/Deals/DealsListPublic.vue'), meta: { title: 'Deals', breadcrumb: 'Deals'} },
	{ path: '/brands', name: 'BrandsListPublic', component: () => import(/* webpackChunkName: "BrandsListPublic-website" */ './components/Website/Public/Brand/BrandsListPublic.vue'), meta: { title: 'Brands', breadcrumb: 'Brands'} },
	{ path: '/brand', name: 'BrandPublic', component: () => import(/* webpackChunkName: "BrandPublic-website" */ './components/Website/Public/Brand/BrandPublic.vue'), },
	{ path: '/brand-shops', name: 'BrandShopsListPublic', component: () => import(/* webpackChunkName: "BrandShopsListPublic-website" */ './components/Website/Public/BrandShop/BrandShopsListPublic.vue'), meta: { title: 'Brand Shops', breadcrumb: 'Brand Shops'} },
	{ path: '/brand-shop', name: 'BrandShopPublic', component: () => import(/* webpackChunkName: "BrandShopPublic-website" */ './components/Website/Public/BrandShop/BrandShopPublic.vue'), meta: { title: 'Brand Shops', breadcrumb: 'Brand Shop'} },
	{ path: '/single-product', name: 'SingleProductPublic', component: () => import(/* webpackChunkName: "SingleProductPublic-website" */ './components/Website/Public/Product/SingleProductPublic.vue'), meta: { breadcrumb: 'Single Product' }  },
	{ path: '/contact', name: 'ContactPublic', component: () => import(/* webpackChunkName: "ContactPublic-website" */ './components/Website/Public/Contact/ContactPublic.vue'), meta: { title: 'Contact', breadcrumb: 'Contact'} },
	{ path: '/about', name: 'AboutUsPublic', component: () => import(/* webpackChunkName: "AboutUsPublic-website" */ './components/Website/Public/About/AboutUsPublic.vue'), meta: { title: 'About Us', breadcrumb: 'About Us'} },
	{ path: '/gift-card', name: 'GiftCardPublic', component: () => import(/* webpackChunkName: "GiftCardPublic-website" */ './components/Website/Public/GiftCard/GiftCardPublic.vue'), meta: { title: 'Gift Card', breadcrumb: 'Gift Card'} },
	{ path: '/membership', name: 'MembershipPublic', component: () => import(/* webpackChunkName: "MembershipPublic-website" */ './components/Website/Public/Membership/MembershipPublic.vue'), meta: { title: 'Membership', breadcrumb: 'Membership'} },
	{ path: '/terms-and-conditions', name: 'TermsAndConditionsPublic', component: () => import(/* webpackChunkName: "TermsAndConditionsPublic-website" */ './components/Website/Public/TAC/TermsAndConditionsPublic.vue'), meta: {breadcrumb: 'TAC'} },
	{ path: '/faq', name: 'FAQPublic', component: () => import(/* webpackChunkName: "FAQPublic-website" */ './components/Website/Public/FAQ/FAQPublic.vue'), meta: { title: 'FAQ', breadcrumb: 'FAQ'} },
	{ path: '/track-order', name: 'TrackYourOrder', component: () => import(/* webpackChunkName: "TrackYourOrder-website" */ './components/Website/Public/TrackOrder/TrackYourOrder.vue'), meta: { title: 'Track Order', breadcrumb: 'Track Order'} },
	{ path: '/cart', name: 'CartPublic', component: () => import(/* webpackChunkName: "CartPublic-website" */ './components/Website/Public/Cart/CartPublic.vue'), meta: { title: 'Cart', breadcrumb: 'Cart'}},
	{ path: '/checkout', name: 'CheckoutPublic', component: () => import(/* webpackChunkName: "CheckoutPublic-website" */ './components/Website/Public/Checkout/CheckoutPublic.vue'), meta: { title: 'Checkout', breadcrumb: 'Checkout'}},
	{ path: '/wishlist', name: 'WishlistPublic', component: () => import(/* webpackChunkName: "WishlistPublic-website" */ './components/Website/Public/Wishlist/WishlistPublic.vue'), meta: { title: 'Wishlist', breadcrumb: 'Wishlist'}},
	{ path: '/compare', name: 'ComparePublic', component: () => import(/* webpackChunkName: "ComparePublic-website" */ './components/Website/Public/Compare/ComparePublic.vue'), meta: { title: 'Compare', breadcrumb: 'Compare'}},
	{ path: '/my-account', name: 'MyAccountPublic', component: () => import(/* webpackChunkName: "MyAccountPublic-website" */ './components/Website/Public/MyAccount/MyAccountPublic.vue'), meta: { title: 'My Account', breadcrumb: 'My Account'}},
	{ path: '/404', name: '404Public', component: () => import(/* webpackChunkName: "404Public-website" */ './components/Website/Public/404/404Public.vue'), meta: { title: 'Page Not Found', breadcrumb: 'Page Not Found'}},
	


	//Authentication Customer link
	{ path: '/auth/login', name: 'CustomerLogin', component: () => import(/* webpackChunkName: "customer-login-website" */ './components/Website/AuthCustomer/login.vue'), meta: { title: 'Login', },
		beforeEnter: (to, from, next) => {
	  		// const isAuthenticated = localStorage.getItem('isAuthenticated') ? true : false ;
	        if (to.name === 'CustomerLogin' && store.state.AuthenticationForCustomer.isAuthenticated === true) next({ name: 'CustomerDashboard' }) 
	        else next()
	    }
	},
	{ path: '/auth/register', name: 'CustomerRegister', component: () => import(/* webpackChunkName: "customer-register-website" */ './components/Website/AuthCustomer/register.vue'), meta: { title: 'Signup', },
		beforeEnter: (to, from, next) => {
	  		// const isAuthenticated = localStorage.getItem('isAuthenticated') ? true : false ;
	        if (to.name === 'CustomerRegister' && store.state.AuthenticationForCustomer.isAuthenticated === true) next({ name: 'CustomerDashboard' }) 
	        else next()
	    }
	},
	{ path: '/auth/password-recover', name: 'CustomerPasswordRecover', component: () => import(/* webpackChunkName: "customer-password-recover-website" */ './components/Website/AuthCustomer/Password/email.vue'), meta: { title: 'Recover Password', } },
	{ path: '/auth/password-recover/:token', name: 'CustomerPasswordReset', component: () => import(/* webpackChunkName: "customer-password-reset-website" */ './components/Website/AuthCustomer/Password/reset.vue'), meta: { title: 'Reset Password', } },



	/********************************************************/
	/* Customer Admin Area for website */
	/********************************************************/	
  	{ path: '/auth/my-dashboard', name: 'CustomerDashboard', component: () => import(/* webpackChunkName: "customer-dashboard-website-auth" */ './components/Website/AdminCustomer/Dashboard/CustomerDashboard.vue'), meta: {authRequiredCustomer: true, title: 'Dashboard',} },
  	{ path: '/auth/my-orders', name: 'CustomerOrder', component: () => import(/* webpackChunkName: "customer-order-website-auth" */ './components/Website/AdminCustomer/Order/CustomerOrders.vue'), meta: { authRequiredCustomer: true, title: 'Orders', } },
  	{ path: '/auth/my-profile', name: 'CustomerProfile', component: () => import(/* webpackChunkName: "customer-profile-website-auth" */ './components/Website/AdminCustomer/Profile/CustomerProfile.vue'), meta: { authRequiredCustomer: true, title: 'Profile',},
  	 //  beforeEnter: (to, from, next) => {
  		// const isAuthenticated = localStorage.getItem(isAuthenticated);
    //     if (to.name !== 'CustomerLogin' && !isAuthenticated) next({ name: 'CustomerLogin' }) 
    //     else next()
    //   }
  	},
  	{ path: '/auth/my-profile-update', name: 'CustomerProfileUpdate', component: () => import(/* webpackChunkName: "customer-profile-update-website-auth" */ './components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue'), meta: { authRequiredCustomer: true, title: 'Profile Update',} },
  	{ path: '/auth/my-address', name: 'CustomerAddress', component: () => import(/* webpackChunkName: "customer-address-website-auth" */ './components/Website/AdminCustomer/Profile/CustomerAddress.vue'), meta: { authRequiredCustomer: true, title: 'Address',}},
  	{ path: '/auth/my-address-update', name: 'CustomerAddressForm', component: () => import(/* webpackChunkName: "customer-address-form-website-auth" */ './components/Website/AdminCustomer/Profile/CustomerAddressForm.vue'), meta: { authRequiredCustomer: true, title: 'Customer Address'} },
  	{ path: '/auth/my-cart', name: 'CustomerCart', component: () => import(/* webpackChunkName: "customer-cart-website-auth" */ './components/Website/AdminCustomer/Cart/CustomerCart.vue'), meta: { authRequiredCustomer: true, title: 'Cart',} },
  	{ path: '/auth/my-wishlist', name: 'CustomerWishlist', component: () => import(/* webpackChunkName: "customer-wishlist-website-auth" */ './components/Website/AdminCustomer/Wishlist/CustomerWishlist.vue'), meta: { authRequiredCustomer: true, title: 'Wishlist',} },
  	{ path: '/auth/my-vouchers', name: 'CustomerVoucher', component: () => import(/* webpackChunkName: "customer-voucher-website-auth" */ './components/Website/AdminCustomer/Voucher/CustomerVoucher.vue'), meta: { authRequiredCustomer: true, title: 'Voucher', }},
  	{ path: '/auth/my-reviews', name: 'CustomerReviews', component: () => import(/* webpackChunkName: "customer-reviews-website-auth" */ './components/Website/AdminCustomer/Review/CustomerReviews.vue'),  meta: { authRequiredCustomer: true, title: 'Reviews',} },
  	// { path: '/auth/my-reviews', name: 'CustomerReviews', component: () => import(/* webpackChunkName: "customer-reviews-website-auth" */ './components/Website/AdminCustomer/Review/CustomerReviews.vue'),  meta: { title: 'Reviews', breadcrumb: 'Reviews'} },
  	// meta: { title: 'Reviews', breadcrumb: 'Reviews'}



  	//Authentication Supplier link
  	{ path: '/sspa/login', name: 'SupplierLogin', component: () => import(/* webpackChunkName: "supplier-login-website" */ './components/Website/AuthSupplier/login.vue'), meta: { title: 'Login', },
		beforeEnter: (to, from, next) => {
	        if (to.name === 'SupplierLogin' && store.state.AuthenticationForSupplier.isSspaAuthenticated === true) next({ name: 'SupplierDashboard' }) 
	        else next()
	    }
	},

  	/********************************************************/
	/* Supplier Admin Area for website (sspa = supplier single page application ) */
	/********************************************************/	
  	{ path: '/sspa/my-dashboard', name: 'SupplierDashboard', component: () => import(/* webpackChunkName: "supplier-dashboard-website-auth" */ './components/Website/AdminSupplier/Dashboard/SupplierDashboard.vue'), meta: {authRequiredSupplier: true, title: 'Dashboard Supplier',} },
  	{ path: '/sspa/my-orders', name: 'SupplierOrders', component: () => import(/* webpackChunkName: "supplier-orders-website-auth" */ './components/Website/AdminSupplier/Order/SupplierOrders.vue'), meta: {authRequiredSupplier: true, title: 'Orders',} },
  	{ path: '/sspa/my-products', name: 'SupplierProducts', component: () => import(/* webpackChunkName: "supplier-products-website-auth" */ './components/Website/AdminSupplier/Product/SupplierProducts.vue'), meta: {authRequiredSupplier: true, title: 'Products',} },
  	{ path: '/sspa/my-profile', name: 'SupplierProfile', component: () => import(/* webpackChunkName: "supplier-profile-website-auth" */ './components/Website/AdminSupplier/Profile/SupplierProfile.vue'), meta: { authRequiredSupplier: true, title: 'Profile',} },
  	{ path: '/sspa/my-profile-update', name: 'SupplierProfileUpdate', component: () => import(/* webpackChunkName: "supplier-profile-update-website-auth" */ './components/Website/AdminSupplier/Profile/SupplierProfileUpdate.vue'), meta: { authRequiredSupplier: true, title: 'Profile Update',} },
  	{ path: '/sspa/my-replace', name: 'SupplierProductReplace', component: () => import(/* webpackChunkName: "supplier-product-replace-website-auth" */ './components/Website/AdminSupplier/Replace/SupplierProductReplace.vue'), meta: { authRequiredSupplier: true, title: 'Replace',} },
  	{ path: '/sspa/my-return', name: 'SupplierProductReturn', component: () => import(/* webpackChunkName: "supplier-product-return-website-auth" */ './components/Website/AdminSupplier/Return/SupplierProductReturn.vue'), meta: { authRequiredSupplier: true, title: 'Return',} },
  	{ path: '/sspa/my-payment-receivable', name: 'SupplierPaymentReceivable', component: () => import(/* webpackChunkName: "supplier-payment-receivable-website-auth" */ './components/Website/AdminSupplier/Payment/SupplierPaymentReceivable.vue'), meta: { authRequiredSupplier: true, title: 'Payment',} },
  	{ path: '/sspa/my-payment-history', name: 'SupplierPaymentHistore', component: () => import(/* webpackChunkName: "supplier-payment-history-website-auth" */ './components/Website/AdminSupplier/Payment/SupplierPaymentHistory.vue'), meta: { authRequiredSupplier: true, title: 'History',} },
  	



  	//not found page for website
	{ path: '/*', name: 'NotFoundPublic', component: () => import(/* webpackChunkName: "404Public-website" */ './components/Website/Public/404/404Public.vue'), meta: { title: 'Page Not Found', breadcrumb: 'Page Not Found'}},



] //end routes


//const router = new VueRouter({
export default new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history', //history mode - remove # (hash) from url
  //mode: 'hash', //hash mode = use # (hash) to url (Default mode)
})









