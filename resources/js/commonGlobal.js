import { mapState } from 'vuex' //for user MapState

export default {

	data(){
        return {
        	//myName: 'Md. Mahmudur Rahman',
        }
    }, 

    computed: {
    	...mapState( 
            'commonStoreForAll', ['authUser','systemSettings']
	        //'commonStoreForAll', ['authUser','authPermissions']
	    ),
	    
    	authPermissionsData(){  //return 'decodet Data';
    		return JSON.parse(this.authPermissions.permission);
    	},


        // isReadPermitted(){
        //    return this.checkUserPermission('read')
        // },
    },

    methods: {  
        isViewPermitted(modules){
            //return this.authPermissionsDecode.;
        }, 

        isReadPermitted(module){
            return module;
        },
        isWritePermitted(module){
            return module;
        },
        isUpdatePermitted(module){
            return module;
        },
        isDeletePermitted(module){
            return module;
        }        



        // checkUserPermission(key){
        //     if(!this.userPermission) return true
        //     let isPermitted = false;
        //     for(let d of this.userPermission){
        //         if(this.$route.name==d.name){
        //             if(d[key]){
        //                 isPermitted = true
        //                 break;
        //             }else{
        //                 break
        //             }
        //         }
                
        //     }
        //     return isPermitted
        // }
    },

    created(){ 
        //console.log(this.authPermissionsData);
        //console.log(this.authUser.role);
        //console.log(JSON.parse(this.authPermissions.permission).role.edit);
        //console.log(this.systemSettings);

    }
} //End Export default