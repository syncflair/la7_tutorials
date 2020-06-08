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
          <tr v-for="(category, index) in categories.data" :key="category.id">
           
            <!-- <td > {{ index }} </td> --> <!--Start with 0-->
           <!--  <td > {{ index + 1}} --> </td><!--Start with 1-->

            <td > {{ category.id }} </td>
            <td > {{ category.cat_name }}</td>

            <td class="text-right">              

              <a @click="viewCategory(category)" title="Single View" class="btn  btn-primary- btn-flat btn-sm">
                  <i class="fas fa-eye primary "></i>
              </a>

              <a @click="listCategory(category.id)" title="List View" class="btn  btn-primary- btn-flat btn-sm">
                  <i class="fas fa-list primary "></i>
              </a> <!-- @click="$emit('listCategory' ,category.id)" -->

              <a @click="editCategory(category)" class="btn  btn-primary- btn-flat btn-sm">
                  <i class="fas fa-edit primary "></i>
              </a> 
              <a @click="deleteCategory(category.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                 <i class="far fa-trash-alt red"></i>
              </a>
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


      <div class="row">
        <div class="col-md-6">
          <span> </span>
        </div>
        <div class="col-md-6">
          <!-- <pagination :data="categories" @pagination-change-page="$emit('getResults')"></pagination> -->
         <!--  <pagination :data="categories" @pagination-change-page="getResults" align="right" size="small">
              <span slot="prev-nav">&lt; Previous</span>
              <span slot="next-nav">Next &gt;</span>
          </pagination> -->


        </div>
      </div>
    </div>
   

   <!-- total: {{categories.total}}, Data per page:{{categories.per_page}} --> <!-- Length of data: {{categories.data.length}} -->

    <!-- <div class="row">
      <div class="col-md-6 offset-md-3">        
        <ul >
          <li v-for="(category, index) in getCategories.data">{{ index }} -{{ category.id }}</li>
        </ul>
      </div>
    </div> -->
    <!-- {{vuexTest}} -->   
    <!-- {{perPage}}  -->
    <!-- {{pagination.per_page}} -->

</div><!--/vue-card-item -->

</template>

<script>
  import { mapGetters } from 'vuex' //for user MapGatters
  import { mapState } from 'vuex' //for user MapState


    export default {
      name: "vxDataList",

      data(){
        return {
         // perPage: 0,        
        }
      },

      computed: {
        //get data from getter with namespace of modules
        // vuexText() {
        //   return this.$store.getters['CategoryStore/getVuexTest']
        // },
        // categories() {
        //   return this.$store.getters['CategoryStore/categories']
        // }

        //use same name of getter functon
         // ...mapGetters([
         //      'CategoryStore', ['getCategories']
         //  ])

         // ...mapGetters(
         //    'CategoryStore', ['vuexTest', 'categories']
         //  )

         ...mapState( 
             'CategoryStore', ['vuexTest', 'categories', 'pagination']

          )
      },

      methods:{
        fetchData(){
          this.$store.dispatch('CategoryStore/fetchCategory', this.pagination.per_page);
          //console.log(this.pagination.total);
        },
        listCategory(id){
            this.$Progress.start();
            this.$store.dispatch('CategoryStore/listCategory', id);
            this.$Progress.finish();
        },
        viewCategory(data){
          this.$Progress.start();
          this.$store.dispatch('CategoryStore/viewCategory', data); 
          this.$Progress.finish();                  
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
          
          FireEvent.$on('changPerPage', (data) => {
            //alert(data) 
            this.$store.dispatch('CategoryStore/fetchCategory', data); 
           
            // this.$store.dispatch('CategoryStore/fetchCategoryPerPage', data );
          });
      },

      mounted() {
        //console.log('Component mounted.')      
      },

    }/*End export default*/
</script>
