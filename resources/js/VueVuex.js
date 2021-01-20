import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


//import all Modules here from store folder
//es6 (VX-VueX)
//const commonStoreForAll = () => import( /* webpackChunkName: "commonStoreForAll-VX" */ './store/commonStoreForAll') 
import AuthenticationForCustomer from './store/AuthenticationForCustomer'
import AuthenticationForSupplier from './store/AuthenticationForSupplier'
import AuthenticationForAdmin from './store/AuthenticationForAdmin'

import commonStoreForWebsite from './store/commonStoreForWebsite' 


import commonStoreForAll from './store/commonStoreForAll' 
import CategoryStore from './store/CategoryStore'
import ProductMasterStore from './store/ProductMasterStore'
import PartieStore from './store/PartieStore'
//purchase
import PurchaseOrderMasterStore from './store/PurchaseOrderMasterStore'
//customer
import CustomerForAdminStore from './store/CustomerForAdminStore'
//supplier
import SupplierForAdminStore from './store/SupplierForAdminStore'
import BrandShopMasterStore from './store/BrandShopMasterStore'
import VendorMasterStore from './store/VendorMasterStore'
//user Management
import usersAdminStore from './store/usersAdminStore'
//Catalog
import CategoryMasterStore from './store/CategoryMasterStore'
import SpecificationMasterStore from './store/SpecificationMasterStore'
import AttributeValueMasterStore from './store/AttributeValueMasterStore'
import BrandMasterStore from './store/BrandMasterStore'

//Accounting
import ChartOfAccounts from './store/ChartOfAccounts'
import AccountHeadsMasterSotre from './store/AccountHeadsMasterSotre'
//HRM
import EmployeeMasterStore from './store/EmployeeMasterStore'
//Settings
import BranchInfoStore from './store/BranchInfoStore'
import CountryStore from './store/CountryStore'
import VatRatesStore from './store/VatRatesStore'
import StatusMasterStore from './store/StatusMasterStore'
import DivisionMasterStore from './store/DivisionMasterStore'
import DistrictMasterStore from './store/DistrictMasterStore'
import DistrictZoneMasterStore from './store/DistrictZoneMasterStore'


import CashAccountMasterStore from './store/CashAccountMasterStore'




export default new Vuex.Store({

	modules: {
        

        AuthenticationForCustomer,
        AuthenticationForSupplier,
        AuthenticationForAdmin,
        
        commonStoreForWebsite,

		commonStoreForAll, 
    	CategoryStore,
    	ProductMasterStore,
    	PartieStore, 
        //purchase
        PurchaseOrderMasterStore,
        //customer	
    	CustomerForAdminStore,
        //Suppliers
        SupplierForAdminStore, BrandShopMasterStore, VendorMasterStore,

        //user management
        usersAdminStore,
        //Catalog
        CategoryMasterStore, SpecificationMasterStore, AttributeValueMasterStore, BrandMasterStore,

        //Accounting
        ChartOfAccounts, AccountHeadsMasterSotre,
        //HRM
        EmployeeMasterStore,

    	//Settings
        BranchInfoStore, CountryStore, VatRatesStore, StatusMasterStore, 
        DivisionMasterStore, DistrictMasterStore, DistrictZoneMasterStore,


        CashAccountMasterStore,

        
    }

})