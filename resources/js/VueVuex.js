import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


//import all Modules here from store folder
//es6 (VX-VueX)
//const commonStoreForAll = () => import( /* webpackChunkName: "commonStoreForAll-VX" */ './store/commonStoreForAll') 
import commonStoreForAll from './store/commonStoreForAll' 
import CategoryStore from './store/CategoryStore'
import ProductStore from './store/ProductStore'
import PartieStore from './store/PartieStore'
import CustomerForAdminStore from './store/CustomerForAdminStore'
//user Management
import usersAdminStore from './store/usersAdminStore'
//Catalog
import CategoryMasterStore from './store/CategoryMasterStore'

//Accounting
import ChartOfAccounts from './store/ChartOfAccounts'
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
    	ProductStore,
    	PartieStore,    	
    	CustomerForAdminStore,

        //user management
        usersAdminStore,
        //Catalog
        CategoryMasterStore,

        //Accounting
        ChartOfAccounts,

    	//Settings
        BranchInfoStore, CountryStore, VatRatesStore, StatusMasterStore, 
        DivisionMasterStore, DistrictMasterStore, DistrictZoneMasterStore,

        
    }

})