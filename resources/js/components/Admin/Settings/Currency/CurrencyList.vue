<template>
<div class="card vue-card-item">
    <div class="card-header">
      <div class="row">
        <div class="col-6 ">Currency List</div>
        <div class="col-6 text-right">
        	<a @click="addCurrency" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#currencyModal"> <i class="icon fas fa-plus"></i> Add New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive-">
        <thead>
          <tr>
            <!-- <th style="">#</th> -->
            <th style="width: 20%;" scope="col">Currency Title</th>
            <th style="width: 25%;" scope="col">Code</th>             
            <th style="width: 20%;" scope="col">Value (Equal to 1$)</th>
            <th style="width: 10%;" scope="col">Updated At</th>
            <th style="width: 10%;" scope="col">Status</th>
            <th style="width: 10%; text-align:right;" scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <!-- :key="currency.id" -->
          <tr v-for="(currency, index) in Currencies" :key="index">
            <!-- <td > id</td> -->
            <td scope="col"> {{ currency.currency_name }} </td>
            <td> {{ currency.currency_code }} / {{ currency.currency_short_code }} / 
                <span v-if="currency.currency_icon != null"> 
                  <img :src="'../'+currency.currency_icon" height="15px" width="15px"> 
                </span>
                <span v-if="currency.currency_icon === null"> <img :src="'../'+NoIconUrl" height="15px" width="15px"> </span>

            </td> 
            <td > {{currency.currency_value}} </td>
            <td >{{ currency.updated_at | formatDate }} </td>

            <td>
            	<span v-show="currency.is_enabled === 1" class="green"> Active</span>
            	<span v-show="currency.is_enabled === 0" class="red text-bold"> Inactive</span>
            </td>


            <td class="text-right">    
              <a @click="editCurrency(currency)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#currencyModal">
                  <i class="fas fa-edit primary "></i>
              </a> 
              <a @click="DeleteData(currency.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                 <i class="far fa-trash-alt red"></i>
              </a>
            </td>

          </tr>

          <tr v-show="Currencies && !Currencies.length">
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
 
    export default {
      name: "CurrencyList",

      data(){
        return {
          NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
        	Currencies: {}, 
         // perPage: 0,                 
        }
      },

      computed: {
      },

      methods:{
      	fetchCurrencies(){
	        this.$Progress.start(); //using progress-bar package

	        axios.get('/spa/Currency-Info')
	          .then( ( response ) => {

	            this.Currencies = response.data; // is an object... use when pagination
	              //this.Currencies = response.data.data; //is an object... default 
	            //console.log(response.data); 
	            this.$Progress.finish(); 
	          })
	          .catch( (errors) => {  
	            //console.log(errors); 
	            this.$Progress.fail(); 
	            toastr.warning('Something is wrong!');
	          })
	    },

	    addCurrency(){
	    	FireEvent.$emit('addCurrency');
	    },

	    editCurrency(data){
	    	//alert(data.id);
	    	FireEvent.$emit('editCurrency', data);
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
	              axios.delete('/spa/Currency-Info/'+id)
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
      		this.fetchCurrencies();

      		FireEvent.$on('AfterChange', () => {
		        this.fetchCurrencies();
		    });
      },

      mounted() {
        //console.log(this.categories)    
        //this.fetchCurrencies();  
      },

    }/*End export default*/
</script>