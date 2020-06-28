<template>
<div class="card vue-card-item">
    <div class="card-header">
      <div class="row">
        <div class="col-md-8 col-sm-6 col-6">Length Unit List</div>
        <div class="col-md-4 col-sm-6 col-6 text-right">
        	<a @click="addLengthUnit" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#LengthUnitModal"> <i class="icon fas fa-plus"></i> Add New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm">
        <thead>
          <tr>
            <!-- <th style="">#</th> -->
            <th style="width: 20%;" scope="col">Length Title</th>
            <th style="width: 15%;" scope="col">Unit</th>             
            <th style="width: 20%;" scope="col">Value</th>
            <th style="width: 20%;" scope="col">Details</th>
            <th style="width: 8%;" scope="col">Status</th>
            <th style="width: 15%; text-align:right;" scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <!-- :key="LengthUnit.id" -->
          <tr v-for="(length, index) in LengthUnits" :key="index">
            <!-- <td > id</td> -->
            <td scope="col"> {{ length.length_title }} </td>
            <td> {{ length.length_unit }} </td> 
            <td > {{length.length_value}} </td>
            <td > {{length.length_desc}} </td>

            <!-- <td >{{ length.updated_at | formatDate }} </td> -->

            <td>
            	<span v-show="length.is_enabled === 1" class="green"> Active</span>
            	<span v-show="length.is_enabled === 0" class="red text-bold"> Inactive</span>
            </td>


            <td class="text-right">    
              <a @click="editLengthUnit(length)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#LengthUnitModal">
                  <i class="fas fa-edit primary "></i>
              </a> 
              <a @click="DeleteData(length.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                 <i class="far fa-trash-alt red"></i>
              </a>
            </td>

          </tr>

          <tr v-show="LengthUnits.data && !LengthUnits.length">
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
      name: "LengthUnitList",

      data(){
        return {
        	LengthUnits: {}, 
         // perPage: 0,                 
        }
      },

      computed: {
      },

      methods:{
      	fetchLengthUnit(){
	        this.$Progress.start(); //using progress-bar package

	        axios.get('/spa/LengthUnit-Info')
	          .then( ( response ) => {

	            this.LengthUnits = response.data; // is an object... use when pagination
	              //this.LengthUn = response.data.data; //is an object... default 
	            //console.log(response.data); 
	            this.$Progress.finish(); 
	          })
	          .catch( (errors) => {  
	            //console.log(errors); 
	            this.$Progress.fail(); 
	            toastr.warning('Something is wrong!');
	          })
	    },

	    addLengthUnit(){
	    	FireEvent.$emit('addLengthUnit');
	    },

	    editLengthUnit(data){
	    	//alert(data.id);
	    	FireEvent.$emit('editLengthUnit', data);
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
	              axios.delete('/spa/LengthUnit-Info/'+id)
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
      		this.fetchLengthUnit();

      		FireEvent.$on('AfterChange', () => {
		        this.fetchLengthUnit();
		    });
      },

      mounted() {
        //console.log(this.categories)    
        //this.fetchLengthUnit();  
      },

    }/*End export default*/
</script>