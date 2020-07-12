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
        	<a @click="addDistrict" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#DistrictModal"> <i class="icon fas fa-plus"></i> Add New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive-">
        <thead>
          <tr>
            <!-- <th style="">#</th> -->
            <th style="width: 25%;" scope="col">Title</th>
            <th style="width: 25%;" scope="col">Bn</th>             
            <th style="width: 15%;" scope="col">Division</th>
            <th style="width: 25%;" scope="col">Details</th>
            <th style="width: 10%; text-align:right;" scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(district, index) in Districts" :key="index">
            <!-- <td > id</td> -->
            <td scope="col"> {{ district.district_name }} </td>
            <td> {{ district.district_name_lang }} </td> 
            <td > {{ district['belongs_to_division']['division_name'] }}</td>
            <td > {{district.district_desc}} </td>

            <td class="text-right">    
              <a @click="editDistrict(district)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#DistrictModal">
                  <i class="fas fa-edit primary "></i>
              </a> 
              <a @click="DeleteData(district.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                 <i class="far fa-trash-alt red"></i>
              </a>
            </td>

          </tr>

          <tr v-show="Districts && !Districts.length">
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
      name: "DistrictMasterList",

      data(){
        return {
          filterBy:'district_name', // this is use for which field use for auto search, default
          SearchByOptions:[
            {'field_name':'district_name', 'show_name':'Name'},
          ],                 
        }
      },

      computed: {
        ...mapState( 
             'DistrictMasterStore', ['Districts', 'pagination','autoCompleteData']
          ),
      },

      methods:{

  	    addDistrict(){
  	    	FireEvent.$emit('addDistrict');
  	    },

  	    editDistrict(data){
  	    	//alert(data.id);
  	    	FireEvent.$emit('editDistrict', data);
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
	              axios.delete('/spa/District-Info/'+id)
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
          this.$store.dispatch('DistrictMasterStore/fetchData', this.pagination.per_page);
          this.$Progress.finish();
          //console.log(this.pagination.total);
        },
       
      
      },

      created(){ 
      		this.$store.dispatch('DistrictMasterStore/fetchData'); //call this function at first loading from Action with Modules namespace 

          FireEvent.$on('AfterChange', () => {
              this.$Progress.start();
              this.$store.dispatch('DistrictMasterStore/fetchData', this.pagination.per_page);
              this.$Progress.finish();
          });

          //this event call from Pagination-app component for change number of data show per page
          FireEvent.$on('changPerPage', (data) => {
             this.$store.dispatch('DistrictMasterStore/fetchData',data);
          });


          //This is come from search-app-one.vue file for serch data
          FireEvent.$on('searchData', (data) => {
             //alert(data.search_key+'-'+data.search_option);
             this.$store.dispatch('DistrictMasterStore/searching', data ); 
          });
          //This is come from search-app-one.vue file for Auto Complete data
          FireEvent.$on('AutoCompleteSearch', (data) => {
              //alert(data);
              if(data != ''){
                this.$store.dispatch('DistrictMasterStore/AutoCompleteSearch', data ); 
              }
          });
      },

      mounted() {
        //console.log(this.categories)    
      },

    }/*End export default*/
</script>