<template>
<div class="card vue-card-item">
    <div class="card-header">
      <div class="row">
        <div class="col-md-8 col-sm-6 col-6">Vate Rates</div>
        <div class="col-md-4 col-sm-6 col-6 text-right">
        	<a @click="addVatRate" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#VatRateModal"> <i class="icon fas fa-plus"></i> Add New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm">
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
          <tr v-for="(vatRate, index) in VateRates" :key="index">
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

          <tr v-show="VateRates.data && !VateRates.vatRate">
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
      name: "VatRateList",

      data(){
        return {
        	VateRates: {}, 
         // perPage: 0,                 
        }
      },

      computed: {
      },

      methods:{
      	fetchVatRate(){
	        this.$Progress.start(); //using progress-bar package

	        axios.get('/spa/VatRate-Info')
	          .then( ( response ) => {

	            this.VateRates = response.data; // is an object... use when pagination
	              //this.vatRateUn = response.data.data; //is an object... default 
	            //console.log(response.data); 
	            this.$Progress.finish(); 
	          })
	          .catch( (errors) => {  
	            //console.log(errors); 
	            this.$Progress.fail(); 
	            toastr.warning('Something is wrong!');
	          })
	    },

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
       
      
      },

      created(){ 
      		this.fetchVatRate();

      		FireEvent.$on('AfterChange', () => {
		        this.fetchVatRate();
		    });
      },

      mounted() {
        //console.log(this.categories)    
      },

    }/*End export default*/
</script>