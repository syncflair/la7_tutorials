<template>
<div class="card vue-card-item">
    <div class="card-header">
      <div class="row">
        <div class="col-6">Job Title</div>
        <div class="col-6 text-right">
          <a @click="reloadThis" class="btn btn-primary btn-flat btn-sm" title="reload"> <i class="fas fa-sync-alt"></i> </a>
          <a @click="AddData" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#FormModal"> <i class="icon fas fa-plus"></i> Add New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive-">
        <thead>
          <tr>
            <!-- <th style="">#</th> -->
            <th style="width: 20%;" scope="col">Title</th>
            <th style="width: 20%;" scope="col">Details</th>
            <th style="width: 5%;" scope="col">Status</th>
            <th style="width: 15%; text-align:right;" scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(j_title, index) in JobTitles" :key="index">
            <!-- <td > id</td> -->
            <td scope="col" class="text-bold green"> {{ j_title.job_title_name }} </td>
             
            <td > {{j_title.job_title_desc}} </td>

            <td>
              <span v-show="j_title.is_enabled === 1" class="green"> Active</span>
              <span v-show="j_title.is_enabled === 0" class="red text-bold"> Inactive</span>
            </td>

            <td class="text-right">    
              <a @click="editData(j_title)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#FormModal">
                  <i class="fas fa-edit primary "></i>
              </a> 
              <a @click="DeleteData(j_title.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                 <i class="far fa-trash-alt red"></i>
              </a>
            </td>

          </tr>

          <tr v-show="JobTitles.data && !JobTitles.j_title">
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
      name: "JobTitleMasterList",

      data(){
        return {
          JobTitles: {}, 
         // perPage: 0,                 
        }
      },

      computed: {
      },

      methods:{
        fetchData(){
          this.$Progress.start(); //using progress-bar package

          axios.get('/spa/JobTitle-Info')
            .then( ( response ) => {

              this.JobTitles = response.data; // is an object... use when pagination
              //console.log(response.data); 
              this.$Progress.finish(); 
            })
            .catch( (errors) => {  
              //console.log(errors); 
              this.$Progress.fail(); 
              toastr.warning('Something is wrong!');
            })
        },

        reloadThis(){
          this.fetchData();
        },

        AddData(){
          FireEvent.$emit('AddData');
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
                axios.delete('/spa/JobTitle-Info/'+id)
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

          FireEvent.$on('AfterChange', () => {
            this.fetchData();
        });
      },

      mounted() {
        //console.log(this.categories)    
      },

    }/*End export default*/
</script>