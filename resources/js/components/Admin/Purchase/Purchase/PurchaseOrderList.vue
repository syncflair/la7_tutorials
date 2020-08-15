<template>
<div class="card vue-card-item">
    <div class="card-header">      
      <div class="row">
        <div class="col-md-5 col-sm-9">
          <search-app-one 
            :SearchByOptions="SearchByOptions"
            :filterBy="filterBy"
            :autoCompleteData="autoCompleteData"
            :pagination="pagination"
          ></search-app-one>
        </div>
        <div class="col-md-7 col-sm-3 text-right">
          <a @click="reloadThis" class="btn btn-primary btn-flat btn-sm" title="reload"> <i class="fas fa-sync-alt"></i> </a>
          <!-- <router-link :to="{name: 'PurchaseOrderForm', params: { id: id} }" class="btn btn-primary btn-flat btn-sm">  -->
          <router-link to="/spa/PurchaseOrderForm" class="btn btn-primary btn-flat btn-sm"> 
            <i class="icon fas fa-plus"></i> Add New
          </router-link>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive">
        <thead>
          <tr>
            <!-- <th style="">#</th> -->
            <th style="width: 2%;" scope="col"><input type="checkbox" v-model="selectAllCheckbox" @click="selectCheckbox"></th>
            <th style="width: 15%;" scope="col">Id</th>
            <th style="width: 15%;" scope="col" @click="sort('po_invoice')" class="sortable-title">Invoice</th>            
            <th style="width: 15%;" scope="col">Supplier</th> 
            <th style="width: 15%;" scope="col" @click="sort('status')" class="sortable-title">Status</th>            
            <th style="width: 7%;" scope="col" >Total</th>
            <th style="width: 6%;" >Added</th>
            <th style="width: 10%;" scope="col">Updated</th>
            <th style="width: 10%; text-align:right;" scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(pur_order, index) in sortedData" :key="index">

            <!-- <td > id</td> -->
            <td scope="col"> <input type="checkbox" v-model="selectedCheckbox" name="" :value="pur_order.id"></td>

 
            <td scope="col"> {{ pur_order.id }} </td>
            <td > {{ pur_order.pur_order }} </td> 
            <td > supplier </td>          
            <td > status<!-- {{ pur_order['belongs_to_branch']['branch_name'] }} --> </td> 

            <td > 
              total
            </td> 
            <td > <small>{{ pur_order.created_at | formatDate }}</small> </td>
            <td > <small>{{ pur_order.updated_at | formatDate }}</small> </td>

           <!--  
            <td style="text-align:center;">
              <span @click="inactivepur_order(pur_order.id)" v-show="pur_order.status_id === 1" title="Active pur_order, Click to inactive"><i class="fas fa-user-check green pointer"></i></span>
              <span @click="activepur_order(pur_order.id)" v-show="pur_order.status_id === 2" title="Inactive pur_order, Click to active"> <i class="fas fa-user-times yellow pointer"></i></span>
              <span @click="activepur_order(pur_order.id)" v-show="pur_order.status_id === 3" title="Panding pur_order, Click to active"> <i class="fas fa-user-lock red pointer"></i></span>
              <span @click="verifyByUser(pur_order.id)" v-show="pur_order.status_id === 4" title="Not Verified pur_order, Click to verify">
                  <i class="fas fa-user-secret red pointer" style="font-size:22px !important;" ></i>
              </span>
            </td> -->
             <!-- <td style="text-align:center;">
              <input type="checkbox" @click="ChangeNotify(pur_order.id, $event)" name="enable_notify" value="1" v-model="pur_order.enable_notify"  />
            </td> -->

             

            <td class="text-right">  
              <a @click="ViewDetails()" class="btn btn-flat btn-sm"> <i class="fas fa-eye primary"></i> </a>   
              
              <!-- <a @click="editData(pur_order)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#FormModal">
                  <i class="fas fa-edit primary "></i>
              </a> -->

              <router-link :to="{ name: 'PurchaseOrderForm', params: { data:pur_order } }" class="btn btn-primary- btn-flat btn-sm">
                  <i class="fas fa-edit primary "></i>
              </router-link>

              <a @click="DeleteData(pur_order.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                 <i class="far fa-trash-alt red"></i>
              </a>
            </td>

          </tr>

          <tr v-show="PurchaseOrders && !PurchaseOrders.length">
            <td colspan="12">
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

    <!-- sortable data test -->
    <!-- {{currentSortDir }} {{currentSort}} -->

</div><!--/vue-card-item -->
</template>

<script>

    import { mapState } from 'vuex' //for user MapState
 
    export default {
      name: "PurchaseOrderList",

      data(){
        return { 
          //checkbox selecting data
          selectAllCheckbox: false,
          selectedCheckbox: [],

          // use for sortable
          currentSort:'po_invoice',
          currentSortDir:'asc',

          //User for search
          filterBy:'po_invoice', // this is use for which field use for auto search, default
          SearchByOptions:[
            {'field_name':'po_invoice', 'show_name':'Invoice'},
          ],     

                  
        }
      },

      computed: {
          ...mapState( 
             'PurchaseOrderMasterStore', ['PurchaseOrders', 'pagination','autoCompleteData']
          ),
           // use for sortable
          sortedData() {
            let fo = Object.values(this.PurchaseOrders).sort((a,b) => {
              let modifier = 1;
              if(this.currentSortDir === 'desc') modifier = -1;
              if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
              if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
              return 0;
            });
            return fo;
          }
      },

      methods:{
        //checkbox select
        selectCheckbox(){
          this.selectedCheckbox = [];
          if(!this.selectAllCheckbox){
            for(let i in this.PurchaseOrders){
              this.selectedCheckbox.push(this.PurchaseOrders[i].id); //all id push into selectedCheckbox array
            }
          }
        },

        // use for sortable
        sort(s){
          if(s === this.currentSort) {
            this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
          }
          this.currentSort = s;
        },

    
        // inactiveEmployee(id){
        //   this.$Progress.start();
        //   Swal.fire({
        //       title: 'Are you sure to Active this employee?',
        //      // text: "You won't be able to revert this!",
        //       icon: 'warning',
        //       showCancelButton: true,
        //       confirmButtonColor: '#3085d6',
        //       cancelButtonColor: '#d33',  
        //       confirmButtonText: 'Yes, Inactive!'
        //   }).then( (result) => {
            
        //       if ( result.value ) {  
                
        //         axios.post('/spa/Employee-Info/inactive-employee/'+id)
        //         .then( ({data}) => {
        //           //console.log(data);
        //           if(data.success){                  
        //             FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update 
        //             this.$Progress.finish();                
        //             toastr.warning(data.success);                                   
        //           } 
        //         })                          
        //         .catch(() => {
        //           this.$Progress.fail();
        //           toastr.warning('Something is wrong!');
        //         })

        //       }else{
        //         this.$Progress.finish();  
        //         toastr.info( 'Your action canceled!');
        //       }
        //   })
        // },

        // activeEmployee(id){
        //   this.$Progress.start();
        //   Swal.fire({
        //       title: 'Are you sure to Active this user?',
        //      // text: "You won't be able to revert this!",
        //       icon: 'warning',
        //       showCancelButton: true,
        //       confirmButtonColor: '#3085d6',
        //       cancelButtonColor: '#d33',  
        //       confirmButtonText: 'Yes, Active!'
        //   }).then( (result) => {
            
        //       if ( result.value ) {  
                
        //         axios.post('/spa/Employee-Info/active-employee/'+id)
        //         .then( ({data}) => {
        //           //console.log(data);
        //           if(data.success){                  
        //             FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update 
        //             this.$Progress.finish();                
        //             toastr.success(data.success);                                   
        //           } 
        //         })                          
        //         .catch(() => {
        //           this.$Progress.fail();
        //           toastr.warning('Something is wrong!');
        //         })

        //       }else{
        //         this.$Progress.finish();  
        //         toastr.info( 'Your action canceled!');
        //       }
        //   })
        // },


        fetchData(){
          //this function call from Pagination-app component
          this.$Progress.start();
          this.$store.dispatch('PurchaseOrderMasterStore/fetchData', this.pagination.per_page);
          this.$Progress.finish();
          //console.log(this.pagination.total);
        },

        reloadThis(){
          this.fetchData();
        },

        ViewDetails(){
          alert('ok');
        },

        addData(){
          FireEvent.$emit('addData');
        },

        editData(data){
          //alert(data.id);
          FireEvent.$emit('editData', data);
        },

        DeleteData(id){
          this.$Progress.start();
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
                axios.delete('/spa/PurchaseOrder-Info/'+id)
                  .then( ({data}) => {

                    if(data.success){                  
                      FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update               
                      this.$Progress.finish();
                      toastr.warning(data.success); 
                    }   
                    if(data.errors){
                      toastr.warning(data.errors);                 
                    }

                  })                          
                  .catch(() => {
                    this.$Progress.fail();
                    toastr.warning('Something is wrong!');
                  })
              }else{
                this.$Progress.finish();  
                toastr.info( 'Your data is safe!');
              }

            })
        }, //end delete
       
      
      },

      created(){ 

          this.$store.dispatch('PurchaseOrderMasterStore/fetchData'); //call this function at first loading from Action with Modules namespace 


          FireEvent.$on('AfterChange', () => {
              this.$Progress.start();
              this.$store.dispatch('PurchaseOrderMasterStore/fetchData', this.pagination.per_page);
              this.$Progress.finish();
          }); 

          //this event call from Pagination-app component for change number of data show per page
          FireEvent.$on('changPerPage', (data) => {
            this.$store.dispatch('PurchaseOrderMasterStore/fetchData',data);
          });

          //This is come from search-app-one.vue file for serch data
          FireEvent.$on('searchData', (data) => {
             //alert(data.search_key+'-'+data.search_option);
             this.$store.dispatch('PurchaseOrderMasterStore/searching', data ); 
          });
          //This is come from search-app-one.vue file for Auto Complete data
          FireEvent.$on('AutoCompleteSearch', (data) => {
              //alert(data);
              if(data != ''){
                this.$store.dispatch('PurchaseOrderMasterStore/AutoCompleteSearch', data ); 
              }
          });

      },

      mounted() {
        //console.log(this.categories)   
      },

    }/*End export default*/
</script>