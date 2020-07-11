<template>
<div class="card vue-card-item">
    <div class="card-header">
      <div class="row">
        <div class="col-md-5 col-sm-6 col-6">
          <!-- Country -->
          <search-app-one 
            :SearchByOptions="SearchByOptions"
            :filterBy="filterBy"
            :autoCompleteData="autoCompleteData"
            :pagination="pagination"
          ></search-app-one>

        </div>
        <div class="col-md-7 col-sm-6 col-6 text-right">
        	<a @click="addCountry" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#countryModal"> <i class="icon fas fa-plus"></i> Add New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive-">
        <thead>
          <tr>           
            <th style="width: 6%;" scope="col">Flag</th>
            <th style="width: 20%;" scope="col">Country</th>
            <th style="width: 10%;" scope="col">Phone Code</th>
            <th style="width: 10%;" scope="col">Currency</th>
            <th style="width: 10%;" scope="col">ISO 2</th> 
            <th style="width: 10%;" scope="col">ISO 3</th>            
            <th style="width: 15%; text-align:right;" scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(country, index) in Countries" :key="index">
            
            <td> <!-- {{ country.country_name }}  -->
                <span v-if="country.country_flag != null"> 
                  <img :src="'../'+country.country_flag" height="20px" width="20px"> 
                </span>
                <span v-if="country.country_flag === null"> <img :src="'../'+NoIconUrl" height="20px" width="20px"> </span>
            </td> 

            <td scope="col"> {{ country.country_name }} </td>
            <td >{{ country.phone_code }} </td>
            <td >{{ country.currency }} </td>
            <td > {{country.iso_2}} </td>
            <td >{{ country.iso_3 }} </td>
            

            <td class="text-right">    
              <a @click="editCountry(country)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#countryModal">
                  <i class="fas fa-edit primary "></i>
              </a> 
              <a @click="DeleteData(country.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                 <i class="far fa-trash-alt red"></i>
              </a>
            </td>

          </tr>

          <tr v-if="Countries && !Countries.length">
            <td colspan="7">
              <div class="alert alert-warning text-center mb-0" role="alert" >Sorry : No data found.</div>
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
      name: "CountryList",

      data(){
        return {
          NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
        	
          //User for search 
          filterBy:'country_name', // this is use for which field use for auto search, default
          SearchByOptions:[
            {'field_name':'country_name', 'show_name':'Country Name'},
            {'field_name':'phone_code', 'show_name':'Phone Code'},
            {'field_name':'iso_2', 'show_name':'ISO 2'},
            {'field_name':'iso_3', 'show_name':'ISO 3'}
          ],
        }
      },

      computed: {
          ...mapState( 
             'CountryStore', ['Countries', 'pagination','autoCompleteData']
          ),
      },

      methods:{
      	// fetchCountry(){
	      //   this.$Progress.start(); //using progress-bar package

	      //   axios.get('/spa/Country-Info')
	      //     .then( ( response ) => {

	      //       this.Countries = response.data; // is an object... use when pagination
	      //         //this.Countries = response.data.data; //is an object... default 
	      //       //console.log(response.data); 
	      //       this.$Progress.finish(); 
	      //     })
	      //     .catch( (errors) => {  
	      //       //console.log(errors); 
	      //       this.$Progress.fail(); 
	      //       toastr.warning('Something is wrong!');
	      //     })
  	    // },

  	    addCountry(){
  	    	FireEvent.$emit('addCountry');
  	    },

  	    editCountry(data){
  	    	//alert(data.id);
  	    	FireEvent.$emit('editCountry', data);
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
	              axios.delete('/spa/Country-Info/'+id)
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
          this.$store.dispatch('CountryStore/fetchCountry', this.pagination.per_page);
          this.$Progress.finish();
          //console.log(this.pagination.total);
        },
       
      
      },

      created(){ 

        this.$store.dispatch('CountryStore/fetchCountry'); //call this function at first loading from Action with Modules namespace 

      	FireEvent.$on('AfterChange', () => {
		        this.$Progress.start();
            this.$store.dispatch('CountryStore/fetchCountry', this.pagination.per_page);
            this.$Progress.finish();
		    });

        //this event call from Pagination-app component for change number of data show per page
        FireEvent.$on('changPerPage', (data) => {
           this.$store.dispatch('CountryStore/fetchCountry',data);
        });


        //This is come from search-app-one.vue file for serch data
        FireEvent.$on('searchData', (data) => {
           //alert(data.search_key+'-'+data.search_option);
           this.$store.dispatch('CountryStore/searching', data ); 
        });
        //This is come from search-app-one.vue file for Auto Complete data
        FireEvent.$on('AutoCompleteSearch', (data) => {
            //alert(data);
            if(data != ''){
              this.$store.dispatch('CountryStore/AutoCompleteSearch', data ); 
            }
        });
        
      },

      mounted() {
        //console.log(this.categories)    
        //this.fetchCountry();  
      },

    }/*End export default*/
</script>