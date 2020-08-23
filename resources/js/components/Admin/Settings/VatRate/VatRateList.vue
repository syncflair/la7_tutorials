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
        	<a @click="addVatRate" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#VatRateModal"> <i class="icon fas fa-plus"></i> Add New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive-">
        <thead>
          <tr>
            <!-- <th style="">#</th> -->
            <th style="width: 20%;" scope="col">Title</th>
            <th style="width: 15%;" scope="col">Code</th>             
            <th style="width: 20%;" scope="col">Value</th>
            <th style="width: 20%;" scope="col">Details</th>
            <th style="width: 8%;" scope="col">Status</th>
            <th style="width: 15%; text-align:right;" scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <!-- :key="vatRateUnit.id" -->
          <tr v-for="(vatRate, index) in VatRates" :key="index">
            <!-- <td > id</td> -->
            <td scope="col"> {{ vatRate.vat_name }} </td>
            <td> {{ vatRate.vat_code }} </td> 
            <td > {{vatRate.vat_rate}} 
              <span v-show="vatRate.vat_type === 'Percent' "> (%) </span>
              <span v-show="vatRate.vat_type === 'Fixed' "> (Fixed)  </span>

            </td>
            <td > {{vatRate.vat_desc}} </td>

            <!-- <td >{{ vatRate.updated_at | formatDate }} </td> -->

            <td>
            	<span v-show="vatRate.is_enabled === 1" class="green"> Active</span>
            	<span v-show="vatRate.is_enabled === 0" class="red text-bold"> Inactive</span>
            </td>


            <td class="text-right">    
              <a @click="editVatRate(vatRate)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#VatRateModal">
                  <i class="fas fa-edit primary "></i>
              </a> 
              <a @click="DeleteData(vatRate.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                 <i class="far fa-trash-alt red"></i>
              </a>
            </td>

          </tr>

          <tr v-show="VatRates && !VatRates.length">
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
      name: "VatRateList",

      data(){
        return {
          filterBy:'vat_name', // this is use for which field use for auto search, default
          SearchByOptions:[
            {'field_name':'vat_name', 'show_name':'Title'},
            {'field_name':'vat_code', 'show_name':'Vat Code'},
            {'field_name':'vat_rate', 'show_name':'Vat Rate'},
            {'field_name':'vat_type', 'show_name':'Vat Type'}
          ],                 
        }
      },

      computed: {
        ...mapState( 
             'VatRatesStore', ['VatRates', 'pagination','autoCompleteData']
          ),
      },

      methods:{
      	// fetchVatRate(){
	      //   this.$Progress.start(); //using progress-bar package

	      //   axios.get('/spa/VatRate-Info')
	      //     .then( ( response ) => {

	      //       this.VatRates = response.data; // is an object... use when pagination
	      //         //this.vatRateUn = response.data.data; //is an object... default 
	      //       //console.log(response.data); 
	      //       this.$Progress.finish(); 
	      //     })
	      //     .catch( (errors) => {  
	      //       //console.log(errors); 
	      //       this.$Progress.fail(); 
	      //       toastr.warning('Something is wrong!');
	      //     })
  	    // },

  	    addVatRate(){
  	    	FireEvent.$emit('addVatRate');
  	    },

  	    editVatRate(data){
  	    	//alert(data.id);
  	    	FireEvent.$emit('editVatRate', data);
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
	              axios.delete('/spa/VatRate-Info/'+id)
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
          this.$store.dispatch('VatRatesStore/fetchData', this.pagination.per_page);
          this.$Progress.finish();
          //console.log(this.pagination.total);
        },
       
       // ################################ For search App ###############################################
          searchData(data){
            this.$store.dispatch('VatRatesStore/searching', data );
          },      
          AutoCompleteSearch(data){
            if(data != ''){
                this.$store.dispatch('VatRatesStore/AutoCompleteSearch', data ); 
            }        
          },
        // ################################ For search App ###############################################
      
      },

      created(){ 
      		this.$store.dispatch('VatRatesStore/fetchData'); //call this function at first loading from Action with Modules namespace 

          FireEvent.$on('AfterChange', () => {
              this.$Progress.start();
              this.$store.dispatch('VatRatesStore/fetchData', this.pagination.per_page);
              this.$Progress.finish();
          });

          //this event call from Pagination-app component for change number of data show per page
          FireEvent.$on('changPerPage', (data) => {
             this.$store.dispatch('VatRatesStore/fetchData',data);
          });

      },

      mounted() {
        //console.log(this.categories)    
      },

    }/*End export default*/
</script>