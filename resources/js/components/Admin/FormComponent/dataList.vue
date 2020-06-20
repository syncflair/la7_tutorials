<template>

<div class="card vue-card-item">
    <div class="card-header">
      <div class="row">
        <div class="col-md-8 col-sm-6">Category List</div>
        <div class="col-md-4 col-sm-6 text-right">

        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">
      <!-- <CategoryList v-bind:categories="categories"></CategoryList> -->
   
      <table class="table table-striped table-sm">
        <thead>
          <tr>
            <th style="width: 5%">#</th>
            <th style="width: 25%">Category</th>
            <th style="width: 16%; text-align:right;">Action</th>
          </tr>
        </thead>

        <tbody>
          <!-- :key="category.id" -->
          <tr v-show="categories.data && categories.data.length > 0" v-for="(category, index) in categories.data" :key="category.id">
           
            <!-- <td > {{ index }} </td> --> <!--Start with 0-->
            <!-- <td > {{ index + 1}} </td> --><!--Start with 1-->


            <td > {{ category.id }}</td>
            <td >             
              <span v-if="category.cat_slug === true">              
                  <input 
                    v-on:blur= "category.cat_slug=false;"                   
                    @keydown.enter="category.cat_slug=false; updateDataFromTable(category)" 
                    v-model="category.cat_name" v-focus        
                    type="text" name="cat_name" class="form-control form-control-sm"  />             
              </span>
              <span v-else="category.cat_slug==false" @click="category.cat_slug=true">{{category.cat_name}}</span>
            </td>

            <td class="text-right">    
              <a @click="editCategory(category)" class="btn  btn-primary- btn-flat btn-sm">
                  <i class="fas fa-edit primary "></i>
              </a> 
              <a @click="deleteCategory(category.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                 <i class="far fa-trash-alt red"></i>
              </a>
            </td>

          </tr>

          <tr v-show="categories.data && !categories.data.length">
            <td colspan="6">
              <div class="alert alert-danger text-center red mb-0" role="alert" >Sorry : No data found.</div>
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
  import { mapGetters } from 'vuex' //for user MapGatters
  import { mapState } from 'vuex' //for user MapState


    export default {
      name: "DataList",

      data(){
        return {
         ///editing: false,
         // cat_name: '',
         // perPage: 0,
                 
        }
      },

      computed: {
         ...mapState( 
             'CategoryStore', [ 'categories', 'pagination','testQuery']

          )
      },

      //this is for v-focus
      directives: {
        focus: {
          // directive definition
          inserted: function (el) {
            el.focus()
          }
        },
        update: function (el) {
            Vue.nextTick(function() {
                el.focus();
            })
        }
      },

      methods:{
        updateDataFromTable(data){
          this.$Progress.start();
          axios.put('/spa/MultiComponent/'+data.id, data)
            .then(({ data }) => { 

              if(data.success){ 
                this.$Progress.finish();
                this.$store.dispatch('CategoryStore/fetchCategory', this.pagination.per_page);                
                toastr.success(data.success);
              }
              if(data.errors){s
                toastr.danger(data.errors); 
              }
            })
            .catch( () => {
              toastr.warning('Something is wrong!');
            }) 
        },

        fetchData(){
          this.$Progress.start();
          this.$store.dispatch('CategoryStore/fetchCategory', this.pagination.per_page);
          this.$Progress.finish();
          //console.log(this.pagination.total);
        },
        editCategory(data){
          //alert(data.id);
          FireEvent.$emit('fillEditCategory', data);
        },  
        deleteCategory(id){
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
                axios.delete('/spa/MultiComponent/'+id)
                  .then( ({data}) => {

                    if(data.success){                  
                      this.$store.dispatch('CategoryStore/fetchCategory', this.pagination.per_page);

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
        },   

      },

      created(){ 
          this.$store.dispatch('CategoryStore/fetchCategory'); //call this function at first loading from Action with Modules namespace    

          // this.$store.dispatch('CategoryStore/testQuery');    
          
          FireEvent.$on('changPerPage', (data) => {
            //alert(data) 
            this.$store.dispatch('CategoryStore/fetchCategory', data); 
           
            // this.$store.dispatch('CategoryStore/fetchCategoryPerPage', data );
          });
      },

      mounted() {
        //console.log(this.categories)      
      },

    }/*End export default*/
</script>
