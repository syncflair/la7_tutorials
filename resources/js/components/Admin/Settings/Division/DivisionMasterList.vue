<template>
<div class="card vue-card-item">
    <div class="card-header">
      <div class="row">
        <div class="col-md-6 col-sm-9">
          <!-- Vate Rates -->
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
        	<a @click="addDivision" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#DivisionModal"> <i class="icon fas fa-plus"></i> Add New</a>
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
            <th style="width: 15%;" scope="col">Country</th>
            <th style="width: 25%;" scope="col">Details</th>
            <th style="width: 10%; text-align:right;" scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <!-- :key="divisionUnit.id" -->
          <tr v-for="(division, index) in Divisions" :key="index">
            <!-- <td > id</td> -->
            <td scope="col"> {{ division.division_name }} </td>
            <td> {{ division.division_name_lang }} </td> 
            <td > {{ division['belongs_to_country']['country_name'] }}</td>
            <td > {{division.division_desc}} </td>

            <td class="text-right">    
              <a @click="editDivision(division)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#DivisionModal">
                  <i class="fas fa-edit primary "></i>
              </a> 
              <a @click="DeleteData(division.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                 <i class="far fa-trash-alt red"></i>
              </a>
            </td>

          </tr>

          <tr v-show="Divisions && !Divisions.length">
            <td colspan="5">
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
      name: "DivisionMasterList",

      data(){
        return {
          filterBy:'division_name', // this is use for which field use for auto search, default
          SearchByOptions:[
            {'field_name':'division_name', 'show_name':'Name'},
          ],                 
        }
      },

      computed: {
        ...mapState( 
             'DivisionMasterStore', ['Divisions', 'pagination','autoCompleteData']
          ),
      },

      methods:{

  	    addDivision(){
  	    	FireEvent.$emit('addDivision');
  	    },

  	    editDivision(data){
  	    	//alert(data.id);
  	    	FireEvent.$emit('editDivision', data);
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
	              axios.delete('/spa/Division-Info/'+id)
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
          this.$store.dispatch('DivisionMasterStore/fetchData', this.pagination.per_page);
          this.$Progress.finish();
          //console.log(this.pagination.total);
        },
       
        // ################################ For search App ###############################################
          searchData(data){
            this.$store.dispatch('DivisionMasterStore/searching', data ); 
          },      
          AutoCompleteSearch(data){
            if(data != ''){
                this.$store.dispatch('DivisionMasterStore/AutoCompleteSearch', data ); 
            }        
          },
        // ################################ For search App ###############################################
      
      },

      created(){ 
      		this.$store.dispatch('DivisionMasterStore/fetchData'); //call this function at first loading from Action with Modules namespace 

          FireEvent.$on('AfterChange', () => {
              this.$Progress.start();
              this.$store.dispatch('DivisionMasterStore/fetchData', this.pagination.per_page);
              this.$Progress.finish();
          });

          //this event call from Pagination-app component for change number of data show per page
          FireEvent.$on('changPerPage', (data) => {
             this.$store.dispatch('DivisionMasterStore/fetchData',data);
          });

      },

      mounted() {
        //console.log(this.categories)    
      },

    }/*End export default*/
</script>