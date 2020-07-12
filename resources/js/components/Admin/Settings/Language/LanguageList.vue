<template>
<div class="card vue-card-item">
    <div class="card-header">
      <div class="row">
        <div class="col-6">Language List</div>
        <div class="col-6 text-right">
        	<a @click="addLanguage" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#LanguageModal"> <i class="icon fas fa-plus"></i> Add New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive-">
        <thead>
          <tr>
            <!-- <th style="">#</th> -->
            <th style="width: 20%;" scope="col">Language Title</th>
            <th style="width: 15%;" scope="col">Code</th> 
            <th style="width: 15%;" scope="col">Icon</th> 
            <th style="width: 20%;" scope="col">Updated At</th>
            <th style="width: 8%;" scope="col">Status</th>
            <th style="width: 15%; text-align:right;" scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <!-- :key="Language.id" -->
          <tr v-for="(language, index) in Languages" :key="index">
            <!-- <td > id</td> -->
            <td scope="col"> {{ language.lang_name }} </td>
            <td> {{ language.lang_code }} </td>             
            <td >  
                <span v-if="language.lang_icon != null"> 
                  <img :src="'../'+language.lang_icon" height="20px" width="20px"> 
                </span>
                <span v-if="language.lang_icon === null"> <img :src="'../'+NoIconUrl" height="20px" width="20px"> </span>
            </td>
            <td >{{ language.updated_at | formatDate }} </td>

            <td>
            	<span v-show="language.is_enabled === 1" class="green"> Active</span>
            	<span v-show="language.is_enabled === 0" class="red text-bold"> Inactive</span>
            </td>


            <td class="text-right">    
              <a @click="editLanguage(language)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#LanguageModal">
                  <i class="fas fa-edit primary "></i>
              </a> 
              <a @click="DeleteData(language.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                 <i class="far fa-trash-alt red"></i>
              </a>
            </td>

          </tr>

          <tr v-show="Languages.data && !Languages.length">
            <td colspan="6">
              <div class="alert alert-danger text-center red mb-0" role="alert" >Sorry : No data found.</div>
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
 
    export default {
      name: "LanguageList",

      data(){
        return {
          NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
        	Languages: {}, 
         // perPage: 0,                 
        }
      },

      computed: {
      },

      methods:{
      	fetchLanguage(){
	        this.$Progress.start(); //using progress-bar package

	        axios.get('/spa/Language-Info')
	          .then( ( response ) => {

	            this.Languages = response.data; // is an object... use when pagination
	              //this.Languages = response.data.data; //is an object... default 
	            //console.log(response.data); 
	            this.$Progress.finish(); 
	          })
	          .catch( (errors) => {  
	            //console.log(errors); 
	            this.$Progress.fail(); 
	            toastr.warning('Something is wrong!');
	          })
	    },

	    addLanguage(){
	    	FireEvent.$emit('addLanguage');
	    },

	    editLanguage(data){
	    	//alert(data.id);
	    	FireEvent.$emit('editLanguage', data);
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
	              axios.delete('/spa/Language-Info/'+id)
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
       
      
      },

      created(){ 
      		this.fetchLanguage();

      		FireEvent.$on('AfterChange', () => {
		        this.fetchLanguage();
		    });
      },

      mounted() {
        //console.log(this.categories)    
        //this.fetchLanguage();  
      },

    }/*End export default*/
</script>