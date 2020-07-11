<template>
<div class="card vue-card-item">
    <div class="card-header">
      <div class="row">
        <div class="col-6 col-xs-9">
          <!-- Branch List -->
          <search-app-one 
            :SearchByOptions="SearchByOptions"
            :filterBy="filterBy"
            :autoCompleteData="autoCompleteData"
            :pagination="pagination"
          ></search-app-one>

        </div>
        <div class="col-6 col-xs-3 text-right">
        	<a @click="addBranch" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#branchModal"> <i class="icon fas fa-plus"></i> Add New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive-">
        <thead>
          <tr>
            <!-- <th style="">#</th> -->
            <th style="width: 8%;" scope="col">Code</th>
            <th style="width: 15%;" scope="col">Name</th>             
            <th style="width: 30%;" scope="col">Details</th>
            <th style="width: 30%;" scope="col">Address</th>
            <th style="width: 8%;" scope="col">Status</th>
            <th style="width: 15%; text-align:right;" scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <!-- :key="Branch.id" -->
          <tr v-for="(branch, index) in branches" :key="index">
            <!-- <td > id</td> -->
            <td scope="col"> {{ branch.branch_code }} </td>
            <td > {{ branch.branch_name }} </td> 
            <td >
               	<span v-show="branch.branch_desc">
               		Details: 
            		<i class="fas fa-info-circle pointer" v-tooltip.auto="{content: branch.branch_desc, classes:'info'}" ></i>
            	</span><br>
            	<span v-show="branch.branch_phone"> Phone: {{branch.branch_phone}} </span><br>
            	<span v-show="branch.branch_email"> Email: {{branch.branch_email}} </span>
            </td>
            <td > 
            	<span>{{ branch.branch_address }}</span> <br>
            	<span v-show="branch.zone"> {{branch.zone}} </span>
            	<span v-show="branch.city"> ,{{branch.city}} </span>
            	<span v-show="branch.state"> ,{{branch.state}} </span><br>
            	<span v-show="branch.country"> {{branch.country}} </span>
            </td>

            <td>
            	<span v-show="branch.is_enabled === 1" class="green"> Active</span>
            	<span v-show="branch.is_enabled === 0" class="red text-bold"> Inactive</span>
            </td>


            <td class="text-right">    
              <a @click="editBranch(branch)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#branchModal">
                  <i class="fas fa-edit primary "></i>
              </a> 
              <a @click="DeleteData(branch.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                 <i class="far fa-trash-alt red"></i>
              </a>
            </td>

          </tr>

          <tr v-show="branches && !branches.length">
            <td colspan="6">
              <div class="alert alert-warning text-center red mb-0" role="alert" >Sorry : No data found.</div>
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
      name: "BranchList",

      data(){
        return {
        	//branches: {}, 
          filterBy:'branch_name', // this is use for which field use for auto search, default
          SearchByOptions:[
            {'field_name':'branch_name', 'show_name':'Name'},
            {'field_name':'branch_code', 'show_name':'Code'},
          ],                  
        }
      },

      computed: {
        ...mapState( 
             'BranchInfoStore', ['branches', 'pagination','autoCompleteData']
          ),
      },

      methods:{
      	
  	    addBranch(){
  	    	FireEvent.$emit('addBranch');
  	    },

  	    editBranch(data){
  	    	//alert(data.id);
  	    	FireEvent.$emit('editBranch', data);
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
	              axios.delete('/spa/Branch-Info/'+id)
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
          this.$store.dispatch('BranchInfoStore/fetchData', this.pagination.per_page);
          this.$Progress.finish();
          //console.log(this.pagination.total);
        },
       
      
      },

      created(){ 
      	this.$store.dispatch('BranchInfoStore/fetchData'); //call this function at first loading from Action with Modules namespace 

          FireEvent.$on('AfterChange', () => {
              this.$Progress.start();
              this.$store.dispatch('BranchInfoStore/fetchData', this.pagination.per_page);
              this.$Progress.finish();
          });

          //this event call from Pagination-app component for change number of data show per page
          FireEvent.$on('changPerPage', (data) => {
             this.$store.dispatch('BranchInfoStore/fetchData',data);
          });


          //This is come from search-app-one.vue file for serch data
          FireEvent.$on('searchData', (data) => {
             //alert(data.search_key+'-'+data.search_option);
             this.$store.dispatch('BranchInfoStore/searching', data ); 
          });
          //This is come from search-app-one.vue file for Auto Complete data
          FireEvent.$on('AutoCompleteSearch', (data) => {
              //alert(data);
              if(data != ''){
                this.$store.dispatch('BranchInfoStore/AutoCompleteSearch', data ); 
              }
          });
      },

      mounted() {
        //console.log(this.categories)    
        //this.fetchBranches();  
      },

    }/*End export default*/
</script>