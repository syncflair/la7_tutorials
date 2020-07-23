<template>
<div class="card vue-card-item">
    <div class="card-header">
      <div class="row">
        <div class="col-6">Weight Unit List</div>
        <div class="col-6 text-right">
        	<a @click="addWeightUnit" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#WeightUnitModal"> 
            <i class="icon fas fa-plus"></i> Add New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive-">
        <thead>
          <tr>
            <!-- <th style="">#</th> -->
            <th style="width: 20%;" scope="col">Weight Title</th>
            <th style="width: 15%;" scope="col">Unit</th>             
            <th style="width: 20%;" scope="col">Value</th>
            <th style="width: 20%;" scope="col">Details</th>
            <th style="width: 8%;" scope="col">Status</th>
            <th style="width: 15%; text-align:right;" scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <!-- :key="WeightUnit.id" -->
          <tr v-for="(weight, index) in WeightUnits" :key="index">
            <!-- <td > id</td> -->
            <td scope="col"> {{ weight.weight_title }} </td>
            <td> {{ weight.weight_unit }} </td> 
            <td > {{weight.weight_value}} </td>
            <td > {{weight.weight_desc}} </td>

            <!-- <td >{{ weight.updated_at | formatDate }} </td> -->

            <td>
            	<span v-show="weight.is_enabled === 1" class="green"> Active</span>
            	<span v-show="weight.is_enabled === 0" class="red text-bold"> Inactive</span>
            </td>


            <td class="text-right">    
              <a @click="editWeightUnit(weight)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#WeightUnitModal">
                  <i class="fas fa-edit primary "></i>
              </a> 
              <a @click="DeleteData(weight.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                 <i class="far fa-trash-alt red"></i>
              </a>
            </td>

          </tr>

          <tr v-show="WeightUnits.data && !WeightUnits.weight">
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
      name: "WeightUnitList",

      data(){
        return {
        	WeightUnits: {}, 
         // perPage: 0,                 
        }
      },

      computed: {
      },

      methods:{
      	fetchWeightUnit(){
	        this.$Progress.start(); //using progress-bar package

	        axios.get('/spa/WeightUnit-Info')
	          .then( ( response ) => {

	            this.WeightUnits = response.data; // is an object... use when pagination
	              //this.weightUn = response.data.data; //is an object... default 
	            //console.log(response.data); 
	            this.$Progress.finish(); 
	          })
	          .catch( (errors) => {  
	            //console.log(errors); 
	            this.$Progress.fail(); 
	            toastr.warning('Something is wrong!');
	          })
	    },

	    addWeightUnit(){
	    	FireEvent.$emit('addWeightUnit');
	    },

	    editWeightUnit(data){
	    	//alert(data.id);
	    	FireEvent.$emit('editWeightUnit', data);
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
	              axios.delete('/spa/WeightUnit-Info/'+id)
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
      		this.fetchWeightUnit();

      		FireEvent.$on('AfterChange', () => {
		        this.fetchWeightUnit();
		    });
      },

      mounted() {
        //console.log(this.categories)    
        //this.fetchWeightUnit();  
      },

    }/*End export default*/
</script>