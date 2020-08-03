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
          <a @click="addData" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#formModal"> <i class="icon fas fa-plus"></i> Add New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive-">
        <thead>
          <tr>
            <th style="width: 5%;" scope="col">Image</th>
            <th style="width: 20%;" scope="col">Name</th>
            <th style="width: 50%;" scope="col">Details</th>
            <th style="width: 8%;" scope="col">Status</th>
            <th style="width: 15%; text-align:right;" scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(brand, index) in Brands" :key="index">
            <td> 
                <span v-if="brand.brand_img != null"> 
                  <!-- <img :src="'../'+brand.brand_img" height="20px" width="20px"> --> <!--For local storage--> 
                  <img :src="brand.brand_img" height="20px" width="20px"> <!--For as3-->
                </span>
                <span v-if="brand.brand_img === null"> <img :src="'../'+NoIconUrl" height="20px" width="20px"> </span>
            </td> 
            <td scope="col"> {{ brand.brand_name }} </td>
            <td> <span v-html="brand.brand_desc"></span> </td>

            <!-- <td >{{ brand.updated_at | formatDate }} </td> -->

            <td>
              <span v-show="brand.is_enabled === 1" class="green"> Active</span>
              <span v-show="brand.is_enabled === 0" class="red text-bold"> Inactive</span>
            </td>


            <td class="text-right">    
              <a @click="editData(brand)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#formModal">
                  <i class="fas fa-edit primary "></i>
              </a> 
              <a @click="DeleteData(brand.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                 <i class="far fa-trash-alt red"></i>
              </a>
            </td>

          </tr>

          <tr v-show="Brands && !Brands.length">
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
      name: "BrandMasterList",

      data(){
        return {
          filterBy:'brand_name', // this is use for which field use for auto search, default
          SearchByOptions:[
            {'field_name':'brand_name', 'show_name':'Name'},
          ],                 
        }
      },

      computed: {
        ...mapState( 
             'BrandMasterStore', ['Brands', 'pagination','autoCompleteData']
          ),
      },

      methods:{

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
                axios.delete('/spa/Brand-Info/'+id)
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
          this.$store.dispatch('BrandMasterStore/fetchData', this.pagination.per_page);
          this.$Progress.finish();
          //console.log(this.pagination.total);
        },
       
      
      },

      created(){ 
          this.$store.dispatch('BrandMasterStore/fetchData'); //call this function at first loading from Action with Modules namespace 

          FireEvent.$on('AfterChange', () => {
              this.$Progress.start();
              this.$store.dispatch('BrandMasterStore/fetchData', this.pagination.per_page);
              this.$Progress.finish();
          });

          //this event call from Pagination-app component for change number of data show per page
          FireEvent.$on('changPerPage', (data) => {
             this.$store.dispatch('BrandMasterStore/fetchData',data);
          });


          //This is come from search-app-one.vue file for serch data
          FireEvent.$on('searchData', (data) => {
             //alert(data.search_key+'-'+data.search_option);
             this.$store.dispatch('BrandMasterStore/searching', data ); 
          });
          //This is come from search-app-one.vue file for Auto Complete data
          FireEvent.$on('AutoCompleteSearch', (data) => {
              //alert(data);
              if(data != ''){
                this.$store.dispatch('BrandMasterStore/AutoCompleteSearch', data ); 
              }
          });
      },

      mounted() {
        //console.log(this.categories)    
      },

    }/*End export default*/
</script>