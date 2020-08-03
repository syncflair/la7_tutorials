import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


//import all Modules here from store folder
//es6 (VX-VueX)
//const commonStoreForAll = () => import( /* webpackChunkName: "commonStoreForAll-VX" */ './store/commonStoreForAll') 
import commonStoreForAll from './store/commonStoreForAll' 
import CategoryStore from './store/CategoryStore'
import ProductMasterStore from './store/ProductMasterStore'
import PartieStore from './store/PartieStore'
import CustomerForAdminStore from './store/CustomerForAdminStore'
import SupplierForAdminStore from './store/SupplierForAdminStore'
//user Management
import usersAdminStore from './store/usersAdminStore'
//Catalog
import CategoryMasterStore from './store/CategoryMasterStore'
import SpecificationMasterStore from './store/SpecificationMasterStore'
import AttributeValueMasterStore from './store/AttributeValueMasterStore'
import BrandMasterStore from './store/BrandMasterStore'

//Accounting
import ChartOfAccounts from './store/ChartOfAccounts'
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




export default new Vuex.Store({

	modules: {
		commonStoreForAll,
    	CategoryStore,
    	ProductMasterStore,
    	PartieStore,    
        //customer	
    	CustomerForAdminStore,
        //Suppliers
        SupplierForAdminStore,

        //user management
        usersAdminStore,
        //Catalog
        CategoryMasterStore, SpecificationMasterStore, AttributeValueMasterStore, BrandMasterStore,

        //Accounting
        ChartOfAccounts,
        //HRM
        EmployeeMasterStore,

    	//Settings
        BranchInfoStore, CountryStore, VatRatesStore, StatusMasterStore, 
        DivisionMasterStore, DistrictMasterStore, DistrictZoneMasterStore,

        
    }

})