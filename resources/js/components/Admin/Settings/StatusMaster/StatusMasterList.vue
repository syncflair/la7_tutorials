<template>
<div class="card vue-card-item">
    <div class="card-header">
      <div class="row">
        <div class="col-md-6 col-sm-9">
          <!-- Vate Rates -->
          <search-app-one 
            :SearchByOptions="SearchByOptions"
            :filterBy="filterBy"
            :autoCompleteData="autoCompleteData"
            :pagination="pagination"
          ></search-app-one>
        </div>
        <div class="col-md-6 col-sm-3 text-right">
        	<a @click="addStatusMaster" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#StatusMasterModal"> <i class="icon fas fa-plus"></i> Add New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive-">
        <thead>
          <tr>
            <!-- <th style="">#</th> -->
            <th style="width: 20%;" scope="col">Title</th>
            <th style="width: 15%;" scope="col">Slug</th>             
            <th style="width: 20%;" scope="col">Status Type</th>
            <th style="width: 20%;" scope="col">Details</th>
            <th style="width: 8%;" scope="col">Status</th>
            <th style="width: 15%; text-align:right;" scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <!-- :key="m_statusUnit.id" -->
          <tr v-for="(m_status, index) in StatusMaster" :key="index">
            <!-- <td > id</td> -->
            <td scope="col"> {{ m_status.status_name }} </td>
            <td> {{ m_status.status_slug }} </td> 
            <td > {{ m_status.status_type }}
              <!-- <span v-show="m_status.status_type === '' "> (%) </span>
              <span v-show="m_status.status_type === 'Fixed' "> (Fixed)  </span> -->

            </td>
            <td > {{m_status.status_desc}} </td>

            <!-- <td >{{ m_status.updated_at | formatDate }} </td> -->

            <td>
            	<span v-show="m_status.is_enabled === 1" class="green"> Active</span>
            	<span v-show="m_status.is_enabled === 0" class="red text-bold"> Inactive</span>
            </td>


            <td class="text-right">    
              <a @click="editStatusMaster(m_status)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#StatusMasterModal">
                  <i class="fas fa-edit primary "></i>
              </a> 
              <a @click="DeleteData(m_status.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                 <i class="far fa-trash-alt red"></i>
              </a>
            </td>

          </tr>

          <tr v-show="StatusMaster && !StatusMaster.length">
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
      name: "StatusMasterList",

      data(){
        return {
          filterBy:'status_name', // this is use for which field use for auto search, default
          SearchByOptions:[
            {'field_name':'status_name', 'show_name':'Title'},
            {'field_name':'status_slug', 'show_name':'Slug'},
            {'field_name':'status_type', 'show_name':'Status Type'}
          ],                 
        }
      },

      computed: {
        ...mapState( 
             'StatusMasterStore', ['StatusMaster', 'pagination','autoCompleteData']
          ),
      },

      methods:{

  	    addStatusMaster(){
  	    	FireEvent.$emit('addStatusMaster');
  	    },

  	    editStatusMaster(data){
  	    	//alert(data.id);
  	    	FireEvent.$emit('editStatusMaster', data);
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
	              axios.delete('/spa/StatusMaster-Info/'+id)
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
          this.$store.dispatch('StatusMasterStore/fetchData', this.pagination.per_page);
          this.$Progress.finish();
          //console.log(this.pagination.total);
        },
       
      
      },

      created(){ 
      		this.$store.dispatch('StatusMasterStore/fetchData'); //call this function at first loading from Action with Modules namespace 

          FireEvent.$on('AfterChange', () => {
              this.$Progress.start();
              this.$store.dispatch('StatusMasterStore/fetchData', this.pagination.per_page);
              this.$Progress.finish();
          });

          //this event call from Pagination-app component for change number of data show per page
          FireEvent.$on('changPerPage', (data) => {
             this.$store.dispatch('StatusMasterStore/fetchData',data);
          });


          //This is come from search-app-one.vue file for serch data
          FireEvent.$on('searchData', (data) => {
             //alert(data.search_key+'-'+data.search_option);
             this.$store.dispatch('StatusMasterStore/searching', data ); 
          });
          //This is come from search-app-one.vue file for Auto Complete data
          FireEvent.$on('AutoCompleteSearch', (data) => {
              //alert(data);
              if(data != ''){
                this.$store.dispatch('StatusMasterStore/AutoCompleteSearch', data ); 
              }
          });
      },

      mounted() {
        //console.log(this.categories)    
      },

    }/*End export default*/
</script>