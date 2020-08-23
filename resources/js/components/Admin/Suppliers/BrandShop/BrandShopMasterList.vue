<template>
<div class="card vue-card-item">
    <div class="card-header">
      <div class="row">
        <div class="col-md-6 col-sm-9">
          <search-app-master 
            @searchData="searchData"
            @AutoCompleteSearch="AutoCompleteSearch"
            :SearchByOptions="SearchByOptions"
            :filterBy="filterBy"
            :autoCompleteData="autoCompleteData"
            :pagination="pagination"
          ></search-app-master>

        </div>
        <div class="col-md-6 col-sm-3 text-right">
          <a @click="reloadThis" class="btn btn-primary btn-flat btn-sm" title="reload"> <i class="fas fa-sync-alt"></i> </a>
        	<a @click="addBrandShop" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#formModal"> <i class="icon fas fa-plus"></i> Add New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive-">
        <thead>
          <tr>           
            <th style="width: 6%;" scope="col">Image</th>
            <th style="width: 20%;" scope="col">Name</th>
            <th style="width: 45%;" scope="col">Details</th>
            <th style="width: 10%;" scope="col">Status</th>            
            <th style="width: 15%; text-align:right;" scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(bs, index) in BrandShops" :key="index">
            
            <td> <!-- {{ bs.brand_shop_title }}  -->
                <span v-if="bs.bs_img != null"> 
                  <!-- <img :src="'../'+bs.bs_img" height="20px" width="20px">  -->
                  <img :src="bs.bs_img" height="20px" width="20px">  
                </span>
                <span v-if="bs.bs_img === null"> <img :src="'../'+NoIconUrl" height="30px" width="60px"> </span>
            </td> 

            <td scope="col"> {{ bs.brand_shop_title }} </td>
            <td > <span v-html="bs.brand_shop_desc"></span> </td>

            <td>
              <span v-show="bs.is_enabled === 1" class="green"> Active</span>
              <span v-show="bs.is_enabled === 0" class="red text-bold"> Inactive</span>
            </td>
            

            <td class="text-right">    
              <a @click="editBrandShop(bs)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#formModal">
                  <i class="fas fa-edit primary "></i>
              </a> 
              <a @click="DeleteData(bs.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                 <i class="far fa-trash-alt red"></i>
              </a>
            </td>

          </tr>

          <tr v-if="BrandShops && !BrandShops.length">
            <td colspan="5">
              <div class="alert alert-warning text-center mb-0" role="alert" >Sorry : No data found.</div>
            </td>
          </tr>

        </tbody>
      </table>

    </div>

    <div class="card-footer">      
      <pagination-app 
          v-if="pagination.last_page >= 1"  
          :pagination="pagination"
          :offset="5"
          @paginate="fetchData()"          
      ></pagination-app>
    </div>

</div><!--/vue-card-item -->
</template>

<script>

    import { mapState } from 'vuex' //for user MapState
 
    export default {
      name: "BrandShopsMasterList",

      data(){
        return {
          NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
        	
          //User for search 
          filterBy:'brand_shop_title', // this is use for which field use for auto search, default
          SearchByOptions:[
            {'field_name':'brand_shop_title', 'show_name':'Name'},
          ],
        }
      },

      computed: {
          ...mapState( 
             'BrandShopMasterStore', ['BrandShops', 'pagination','autoCompleteData']
          ),
      },

      methods:{
      	// fetchData(){
	      //   this.$Progress.start(); //using progress-bar package

	      //   axios.get('/spa/BrandShop-Info')
	      //     .then( ( response ) => {

	      //       this.BrandShops = response.data; // is an object... use when pagination
	      //         //this.BrandShops = response.data.data; //is an object... default 
	      //       //console.log(response.data); 
	      //       this.$Progress.finish(); 
	      //     })
	      //     .catch( (errors) => {  
	      //       //console.log(errors); 
	      //       this.$Progress.fail(); 
	      //       toastr.warning('Something is wrong!');
	      //     })
  	    // },

  	    addBrandShop(){
  	    	FireEvent.$emit('addBrandShop');
  	    },

  	    editBrandShop(data){
  	    	//alert(data.id);
  	    	FireEvent.$emit('editBrandShop', data);
  	    },

  	    DeleteData(id){
	        Swal.fire({
	            title: 'Are you sure to Delete?',
	            text: "You won't be able to revert this!",
	            icon: 'warning',
	            showCancelButton: true,
	            confirmButtonColor: '#3085d6',
	            cancelButtonColor: '#d33',  
	            confirmButtonText: 'Yes, delete it!'
	          }).then( (result) => {

	            if ( result.value ) {  
	              axios.delete('/spa/BrandShop-Info/'+id)
	                .then( ({data}) => {

	                  if(data.success){                  
	                    FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update               
	                    toastr.warning(data.success); 
	                  }   
	                  if(data.errors){
	                    toastr.warning(data.errors);                 
	                  }

	                })                          
	                .catch(() => {
	                  toastr.warning('Something is wrong!');
	                })
	            }else{
	              toastr.info( 'Your data is safe!');
	            }

	          })
	      }, //end delete

        //Function call from Pagination-app.vue
        fetchData(){
          //this function call from Pagination-app component
          this.$Progress.start();
          this.$store.dispatch('BrandShopMasterStore/fetchData', this.pagination.per_page);
          this.$Progress.finish();
          //console.log(this.pagination.total);
        },

        reloadThis(){
          this.fetchData();
        },
       
        // ################################ For search App ###############################################
          searchData(data){
            this.$store.dispatch('BrandShopMasterStore/searching', data ); 
          },      
          AutoCompleteSearch(data){
            if(data != ''){
                this.$store.dispatch('BrandShopMasterStore/AutoCompleteSearch', data );  
            }        
          },
        // ################################ For search App ###############################################
      
      },

      created(){ 

        this.$store.dispatch('BrandShopMasterStore/fetchData'); //call this function at first loading from Action with Modules namespace 

      	FireEvent.$on('AfterChange', () => {
		        this.$Progress.start();
            this.$store.dispatch('BrandShopMasterStore/fetchData', this.pagination.per_page);
            this.$Progress.finish();
		    });

        //this event call from Pagination-app component for change number of data show per page
        FireEvent.$on('changPerPage', (data) => {
           this.$store.dispatch('BrandShopMasterStore/fetchData',data);
        });


      },

      mounted() {
        //console.log(this.categories)    
        //this.fetchData();  
      },

    }/*End export default*/
</script>