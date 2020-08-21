<template>
<div class="card vue-card-item">
    <div class="card-header">
      <div class="row">
        <div class="col-6">
          Account Heads
          <!-- <search-app-one 
            :SearchByOptions="SearchByOptions"
            :filterBy="filterBy"
            :autoCompleteData="autoCompleteData"
            :pagination="pagination"
          ></search-app-one> -->

        </div>
        <div class="col-6 text-right">
        	<a @click="addData" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#formModal"> <i class="icon fas fa-plus"></i> Add New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive-">
        <thead>
          <tr>
            <th style="width: 5%;" scope="col">Code</th> 
            <th style="width: 20%;" scope="col">Name</th>
            <th style="width: 20%;" scope="col">Parent</th>             
            <th style="width: 30%;" scope="col">Details</th>
            <th style="width: 5%;" scope="col">Status</th>
            <th style="width: 10%; text-align:right;" scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <template v-for="(ah, index) in allAccountHeads">
            <tr> 
              <td scope="col"> <strong> {{ ah.ah_code }} </strong> </td>           
              <td scope="col"><strong> {{ ah.ah_name }} </strong> </td> 
              <td scope="col">
                 <span v-show="ah.parent_id === null" class="red text-bold"> Parent </span>
                 <span v-show="ah.parent_id != null">{{ ah.ah_name }} </span>
              </td> 
              <td scope="col"> {{ ah.ah_desc }} </td> 
              <td>
              	<span v-show="ah.is_enabled === 1" class="green"> Active</span>
              	<span v-show="ah.is_enabled === 0" class="red text-bold"> Inactive</span>
              </td>
              <td class="text-right">  
                <a @click="ViewDetails(ah.id)" class="btn btn-flat btn-sm"><i class="fas fa-eye primary"></i></a>   
                <a @click="editData(ah)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#formModal"><i class="fas fa-edit primary "></i></a> 
                <a @click="DeleteData(ah.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                   <i class="far fa-trash-alt red"></i>
                 </a>
              </td>
            </tr>

            <template v-if="ah.child_account_head.length > 0"  v-for="c_ahs in ah.child_account_head">
              <!-- child account head's = c_ahs -->
              <tr>  
                <td scope="col"> {{ c_ahs.ah_code }} </td>          
                <td scope="col" > <span class="pl-2"> -- {{ c_ahs.ah_name }} </span> </td> 
                <td scope="col">
                   <span v-show="c_ahs.parent_id != null"> - {{c_ahs.ah_name }} </span> 
                </td> 
                <td scope="col"> {{ c_ahs.ah_desc }} </td> 
                <td>
                  <span v-show="c_ahs.is_enabled === 1" class="green"> Active</span>
                  <span v-show="c_ahs.is_enabled === 0" class="red text-bold"> Inactive</span>
                </td>
                <td class="text-right">  
                  <a @click="ViewDetails(c_ahs.id)" class="btn btn-flat btn-sm"><i class="fas fa-eye primary"></i></a>   
                  <a @click="editData(c_ahs)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#formModal"><i class="fas fa-edit primary "></i></a> 
                  <a @click="DeleteData(c_ahs.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                     <i class="far fa-trash-alt red"></i>
                   </a>
                </td>
              </tr>
            </template><!--Child Template-->
          </template><!--Parent Template-->




          <tr v-show="allAccountHeads && !allAccountHeads.length">
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
      name: "AccountHeadsMasterList",

      data(){
        return {
          filterBy:'ah_name', // this is use for which field use for auto search, default
          SearchByOptions:[
            {'field_name':'ah_name', 'show_name':'Name'},
            {'field_name':'ah_code', 'show_name':'Code'},
          ],                  
        }
      },

      computed: {
        ...mapState( 
             'AccountHeadsMasterSotre', ['allAccountHeads', 'pagination','autoCompleteData']
          ),
      },

      methods:{
      	ViewDetails(id){
          alert(id);
        },

  	    addData(){
  	    	FireEvent.$emit('addData');
  	    },

  	    editData(data){
  	    	//alert(data.id);
  	    	FireEvent.$emit('editData', data);
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
	              axios.delete('/spa/AccountHeads-Info/'+id)
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
          this.$store.dispatch('AccountHeadsMasterSotre/fetchData', this.pagination.per_page);
          this.$Progress.finish();
          //console.log(this.pagination.total);
        },
       
      
      },

      created(){ 
      	this.$store.dispatch('AccountHeadsMasterSotre/fetchData'); //call this function at first loading from Action with Modules namespace 

          FireEvent.$on('AfterChange', () => {
              this.$Progress.start();
              this.$store.dispatch('AccountHeadsMasterSotre/fetchData', this.pagination.per_page);
              this.$Progress.finish();
          });

          //this event call from Pagination-app component for change number of data show per page
          FireEvent.$on('changPerPage', (data) => {
             this.$store.dispatch('AccountHeadsMasterSotre/fetchData',data);
          });


          // //This is come from search-app-one.vue file for serch data
          // FireEvent.$on('searchData', (data) => {
          //    //alert(data.search_key+'-'+data.search_option);
          //    this.$store.dispatch('AccountHeadsMasterSotre/searching', data ); 
          // });
          // //This is come from search-app-one.vue file for Auto Complete data
          // FireEvent.$on('AutoCompleteSearch', (data) => {
          //     //alert(data);
          //     if(data != ''){
          //       this.$store.dispatch('AccountHeadsMasterSotre/AutoCompleteSearch', data ); 
          //     }
          // });
      },

      mounted() {
        //console.log()  
      },

    }/*End export default*/
</script>