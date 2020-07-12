<template>
<div class="card vue-card-item">
    <div class="card-header">
      <div class="row">
        <div class="col-6">PackageUnit List</div>
        <div class="col-6 text-right">
        	<a @click="addPackageUnit" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#PackageModal"> <i class="icon fas fa-plus"></i> Add New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive-">
        <thead>
          <tr>
            <!-- <th style="">#</th> -->
            <th style="width: 20%;" scope="col">PackageUnit Title</th>
            <th style="width: 15%;" scope="col">Code</th>             
            <th style="width: 20%;" scope="col">Details</th>
            <th style="width: 20%;" scope="col">Icon</th>
            <th style="width: 8%;" scope="col">Status</th>
            <th style="width: 15%; text-align:right;" scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <!-- :key="PackageUnit.id" -->
          <tr v-for="(pacakge_unit, index) in PackageUnits" :key="index">
            <!-- <td > id</td> -->
            <td scope="col"> {{ pacakge_unit.package_title }} </td>
            <td> {{ pacakge_unit.package_unit }} </td> 
            <td > {{pacakge_unit.package_desc}} </td>
            <td >
               <span v-if="pacakge_unit.package_icon != null"> 
                  <img :src="'../'+package.package_icon" height="30px" width="30px"> 
                </span>
                <span v-if="pacakge_unit.package_icon === null"> <img :src="'../'+NoIconUrl" height="30px" width="30px"> </span>
            </td>

            <td>
            	<span v-show="pacakge_unit.is_enabled === 1" class="green"> Active</span>
            	<span v-show="pacakge_unit.is_enabled === 0" class="red text-bold"> Inactive</span>
            </td>


            <td class="text-right">    
              <a @click="editPackageUnit(pacakge_unit)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#PackageModal">
                  <i class="fas fa-edit primary "></i>
              </a> 
              <a @click="DeleteData(pacakge_unit.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                 <i class="far fa-trash-alt red"></i>
              </a>
            </td>

          </tr>

          <tr v-show="PackageUnits.data && !PackageUnits.length">
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
      name: "PackageUnitList",

      data(){
        return {
          NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
        	PackageUnits: {}, 
         // perPage: 0,                 
        }
      },

      computed: {
      },

      methods:{
      	fetchPackageUnit(){
	        this.$Progress.start(); //using progress-bar package

	        axios.get('/spa/PackageUnit-Info')
	          .then( ( response ) => {

	            this.PackageUnits = response.data; // is an object... use when pagination
	              //this.PackageUnit = response.data.data; //is an object... default 
	            //console.log(response.data); 
	            this.$Progress.finish(); 
	          })
	          .catch( (errors) => {  
	            //console.log(errors); 
	            this.$Progress.fail(); 
	            toastr.warning('Something is wrong!');
	          })
	    },

	    addPackageUnit(){
	    	FireEvent.$emit('addPackageUnit');
	    },

	    editPackageUnit(data){
	    	//alert(data.id);
	    	FireEvent.$emit('editPackageUnit', data);
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
	              axios.delete('/spa/PackageUnit-Info/'+id)
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
      		this.fetchPackageUnit();

      		FireEvent.$on('AfterChange', () => {
		        this.fetchPackageUnit();
		    });
      },

      mounted() {
        //console.log(this.categories)    
        //this.fetchPackageUnit();  
      },

    }/*End export default*/
</script>