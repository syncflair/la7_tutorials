<template>
<div class="card vue-card-item vue-card-item-multi-layer" style="min-height: 665px !important">
    <div class="card-header">
      <div class="row">
        <div class="col-6"></div>
        <div class="col-6 text-right">
          <a @click="addAccountDetails" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#formModal"> 
            <i class="icon fas fa-plus"></i> New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive-">
        <thead>
          <tr>
            <!-- <th style="">#</th> -->
            <th style="width: 60%;" scope="col">Account Details</th>
            <!-- <th style="width: 30%;" scope="col">Amounts</th> -->
            <th style="width: 10%; text-align:right;" scope="col">...</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(ad, index) in accountDetails" :key="index">
            <!-- <td > id</td> -->
            <td scope="col">

              <p class="pointer mb-0" @click="viewDetials(ad)"> 
                {{ ad.account_name }} <br>

                <span class="green" v-if="ad.opening_balance != null">{{ad.opening_balance}} 
                  <small>{{systemSettings.belongs_to_currency.currency_short_code}} </small>
                </span>
                <span class="red" v-if="ad.opening_balance === null"> 0.00 
                  <small>{{systemSettings.belongs_to_currency.currency_short_code}} </small>
                </span>
              </p>

            </td>

            <td class="text-right">
              <!-- Dropdown List -->
              <div class="btn-group option-dropdown-manu-style left">
                <a class="btn btn-flat btn-sm btn-warning dropdown-toggle-" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-ellipsis-v"></i>
                  <!-- <i class="fas fa-ellipsis-h"></i> -->
                </a>    

                <div class="dropdown-menu dropdown-menu-right">
                  <a @click="viewDetials(ad)" class="dropdown-item pointer"> <i class="fas fa-eye primary"></i> View </a> 

                  <a @click="editAccountDetails(ad)" class="dropdown-item pointer" data-toggle="modal" data-target="#formModal"> <i class="fas fa-eye primary"></i> Edit </a>  

                  <div class="dropdown-divider"></div>

                  <a @click="DeleteData(ad.id)" class="dropdown-item pointer" id="delete">
                     <i class="far fa-trash-alt red"></i> Delete
                  </a>
                </div> 
              </div><!--End Dropdown List -->

            </td>

          </tr>

          <!-- <tr v-show="accountDetails && !accountDetails.length">
            <td colspan="5">
              <div class="alert alert-warning text-center red mb-0" role="alert" >Sorry : No data found.</div>
            </td>
          </tr> -->

        </tbody>
      </table>

    </div>

    <!-- {{accountDetails[0]}} -->

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
      name: "AccountDetailsMasterList",

      data(){
        return {
          accountDetails: {}, 
         // perPage: 0,                 
        }
      },

      computed: {
      },

      methods:{
        viewDetials(data){
          //alert(id);
          FireEvent.$emit('AccountDetailsMasterContentHead', data);
        },

        fetchData(){
          this.$Progress.start(); //using progress-bar package

          axios.get('/spa/AccountDetails-Info')
            .then( ( response ) => {

              this.accountDetails = response.data; // is an object... use when pagination
              //console.log(response.data); 
              this.$Progress.finish(); 
            })
            .catch( (errors) => {  
              //console.log(errors); 
              this.$Progress.fail(); 
              toastr.warning('Something is wrong!');
            })
        },

        addAccountDetails(){
          FireEvent.$emit('addAccountDetails');
        },

        editAccountDetails(data){
          //alert(data.id);
          FireEvent.$emit('editAccountDetails', data);
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
                axios.delete('/spa/AccountDetails-Info/'+id)
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
        
        this.fetchData();

        setTimeout(() => {
            //console.log(this.accountDetails);
            this.viewDetials(this.accountDetails[0]);
          }, 1000);
        

        FireEvent.$on('AfterChange', () => {
            this.fetchData();
        });
      },

      mounted() {
        //console.log(this.categories)    
        //this.fetchData();  
      },

    }/*End export default*/
</script>