<template>
<div class="card vue-card-item">
    <div class="card-header">
      <div class="row">
        <div class="col-6">
          Category
          <!-- <search-app-one 
            :SearchByOptions="SearchByOptions"
            :filterBy="filterBy"
            :autoCompleteData="autoCompleteData"
            :pagination="pagination"
          ></search-app-one> -->

        </div>
        <div class="col-6 text-right">
        	<a @click="addCategory" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#CategoryModal"> <i class="icon fas fa-plus"></i> Add New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive-">
        <thead>
          <tr>
            <th style="width: 3%;" scope="col">Img</th> 
            <th style="width: 43%;" scope="col">Name</th>
            <th style="width: 15%;" scope="col">Parent</th>             
            <th style="width: 20%;" scope="col">Details</th>
            <th style="width: 4%;" scope="col">Status</th>
            <th style="width: 10%; text-align:right;" scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <template v-for="(category, index) in Categories">
            <tr>    
              <td >
                <img v-if="category.cat_img === null" :src="'../'+NoIconUrl" height="30px" width="30px">
                <img v-if="category.cat_img != null" :src="'../'+category.cat_img" height="30px" width="30px">
           	  </td>
              <td scope="col"> 
                {{ category.cat_name }} 
                <!-- <span v-show="category.cat_name_lang !=null"> ({{category.cat_name_lang}})</span> -->
                <span v-for="(language, i) in category.lang_translation">
                  <span>( {{ language['category_name'] }} ) </span>
                </span>

              </td> 
              <td scope="col">
                 <span v-show="category.parent_id === null" class="red text-bold"> Parent </span>
                 <span v-show="category.parent_id != null">{{ category.category_name }} </span>
              </td> 
              <td scope="col"> {{ category.cat_desc }} </td> 
              <td>
              	<span v-show="category.is_enabled === 1" class="green"> Active</span>
              	<span v-show="category.is_enabled === 0" class="red text-bold"> Inactive</span>
              </td>
              <td class="text-right">  
                <a @click="ViewDetails(category.id)" class="btn btn-flat btn-sm"><i class="fas fa-eye primary"></i></a>   
                <a @click="editCategory(category)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#CategoryModal"><i class="fas fa-edit primary "></i></a> 
                <a @click="DeleteData(category.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                   <i class="far fa-trash-alt red"></i>
                 </a>
              </td>
            </tr>

            <template v-if="category.child_category.length > 0"  v-for="c_category in category.child_category">
              <tr>
              	<td >
	                <img v-if="c_category.cat_img === null" :src="'../'+NoIconUrl" height="30px" width="30px">
	                <img v-if="c_category.cat_img != null" :src="'../'+c_category.cat_img" height="30px" width="30px">
	           	</td>           
                <td scope="col" > 
                  <span class="pl-2"> - {{ c_category.cat_name }} </span> 
                  <!-- <span v-show="c_category.cat_name_lang !=null"> ({{c_category.cat_name_lang}})</span> -->
                  <span v-for="(language, i) in c_category.lang_translation">
                    <span>( {{ language['category_name'] }} ) </span>
                  </span>
                </td> 
                <td scope="col">
                   <span v-show="c_category.parent_id != null"> {{category.cat_name }} </span> 
                </td> 
                <td scope="col"> {{ c_category.cat_desc }} </td> 
                <td>
                  <span v-show="c_category.is_enabled === 1" class="green"> Active</span>
                  <span v-show="c_category.is_enabled === 0" class="red text-bold"> Inactive</span>
                </td>
                <td class="text-right">  
                  <a @click="ViewDetails(c_category.id)" class="btn btn-flat btn-sm"><i class="fas fa-eye primary"></i></a>   
                  <a @click="editCategory(c_category)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#CategoryModal"><i class="fas fa-edit primary "></i></a> 
                  <a @click="DeleteData(c_category.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                     <i class="far fa-trash-alt red"></i>
                   </a>
                </td>
              </tr>

              <template v-if="c_category.sub_child_category.length > 0"  v-for="sc_category in c_category.sub_child_category">
	              <tr>
	              	<td >
		                <img v-if="sc_category.cat_img === null" :src="'../'+NoIconUrl" height="30px" width="30px">
		                <img v-if="sc_category.cat_img != null" :src="'../'+sc_category.cat_img" height="30px" width="30px">
		           	</td>           
	                <td scope="col" > 
                    <span class="pl-4"> -- {{ sc_category.cat_name }} </span>
                    <!-- <span v-show="sc_category.cat_name_lang !=null"> ({{sc_category.cat_name_lang}})</span> -->
                    <span v-for="(language, i) in sc_category.lang_translation">
                      <span>( {{ language['category_name'] }} ) </span>
                    </span>
                  </td> 
	                <td scope="col">
	                   <span v-show="sc_category.parent_id != null"> - {{c_category.cat_name }} </span> 
	                </td> 
	                <td scope="col"> {{ sc_category.cat_desc }} </td> 
	                <td>
	                  <span v-show="sc_category.is_enabled === 1" class="green"> Active</span>
	                  <span v-show="sc_category.is_enabled === 0" class="red text-bold"> Inactive</span>
	                </td>
	                <td class="text-right">  
	                  <a @click="ViewDetails(sc_category.id)" class="btn btn-flat btn-sm"><i class="fas fa-eye primary"></i></a>   
	                  <a @click="editCategory(sc_category)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#CategoryModal"><i class="fas fa-edit primary "></i></a> 
	                  <a @click="DeleteData(sc_category.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
	                     <i class="far fa-trash-alt red"></i>
	                   </a>
	                </td>
	              </tr>
	            </template><!--Child Template-->
            </template><!--Child Template-->
          </template><!--Parent Template-->




          <tr v-show="Categories && !Categories.length">
            <td colspan="6">
              <div class="alert alert-warning text-center red mb-0" role="alert" >Sorry : No data found.</div>
            </td>
          </tr>

        </tbody>
      </table>

    </div>

    <div class="card-footer">      
      <!-- <pagination-app 
          v-if="pagination.last_page >= 1"  
          :pagination="pagination"
          :offset="5"
          @paginate="fetchData()"
      ></pagination-app> -->


    </div>

</div><!--/vue-card-item -->
</template>

<script>

    import { mapState } from 'vuex' //for user MapState
 
    export default {
      name: "CategoryMasterList",
      
      data(){
        return {
          NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',

          filterBy:'cat_name', // this is use for which field use for auto search, default
          SearchByOptions:[
            {'field_name':'cat_name', 'show_name':'Name'},
          ],              
        }
      },

      computed: {
        ...mapState( 'CategoryMasterStore', ['Categories', 'pagination','autoCompleteData'] ),
        // ...mapState( 'commonStoreForAll', ['allLanguages'] ),

      },

      methods:{

      	ViewDetails(id){
          alert(id);
        },

  	    addCategory(){
  	    	FireEvent.$emit('addCategory');
  	    },

  	    editCategory(data){
  	    	//alert(data.id);
  	    	FireEvent.$emit('editCategory', data);
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
	              axios.delete('/spa/CategoryMaster-Info/'+id)
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
          this.$store.dispatch('CategoryMasterStore/fetchData', this.pagination.per_page);
          this.$Progress.finish();
          //console.log(this.pagination.total);
        },
       
      
      },

      created(){ 
        

      	  this.$store.dispatch('CategoryMasterStore/fetchData'); //call this function at first loading from Action with Modules namespace 

	      FireEvent.$on('AfterChange', () => {
	          this.$Progress.start();
	          this.$store.dispatch('CategoryMasterStore/fetchData', this.pagination.per_page);
	          this.$Progress.finish();
	      });

	      //this event call from Pagination-app component for change number of data show per page
	      FireEvent.$on('changPerPage', (data) => {
	         this.$store.dispatch('CategoryMasterStore/fetchData',data);
	      });


	      // //This is come from search-app-one.vue file for serch data
	      // FireEvent.$on('searchData', (data) => {
	      //    //alert(data.search_key+'-'+data.search_option);
	      //    this.$store.dispatch('CategoryMasterStore/searching', data ); 
	      // });
	      // //This is come from search-app-one.vue file for Auto Complete data
	      // FireEvent.$on('AutoCompleteSearch', (data) => {
	      //     //alert(data);
	      //     if(data != ''){
	      //       this.$store.dispatch('CategoryMasterStore/AutoCompleteSearch', data ); 
	      //     }
	      // });
      },

      mounted() {
        //console.log() 
      },

    }/*End export default*/
</script>