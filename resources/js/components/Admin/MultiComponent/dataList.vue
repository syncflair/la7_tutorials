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
          <tr v-for="(category, index) in categories.data" :key="index">
           
            <td > {{ category.id }} </td>
            <td > {{ category.cat_name }}</td>

            <td class="text-right">              

              <a @click="$emit('viewCategory' ,category)" title="Single View" class="btn  btn-primary- btn-flat btn-sm">
                  <i class="fas fa-eye primary "></i>
              </a>

              <a @click="$emit('listCategory' ,category.id)" title="List View" class="btn  btn-primary- btn-flat btn-sm">
                  <i class="fas fa-list primary "></i>
              </a>

              <a @click="editCategory(category)" class="btn  btn-primary- btn-flat btn-sm">
                  <i class="fas fa-edit primary "></i>
              </a> 
              <a @click="$emit('deleteCategory', category.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                 <i class="far fa-trash-alt red"></i>
              </a>
            </td>

          </tr>


        </tbody>
      </table>

    </div>

    <div class="card-footer">
      <div class="row">
        <div class="col-md-6">
          <span> </span>
        </div>
        <div class="col-md-6">
          <!-- <pagination :data="categories" @pagination-change-page="$emit('getResults')"></pagination> -->
          <pagination :data="categories" @pagination-change-page="getResults" align="right" size="small">
              <span slot="prev-nav">&lt; Previous</span>
              <span slot="next-nav">Next &gt;</span>
          </pagination>
        </div>
      </div>
    </div>
    

    <!-- <div class="row">
      <div class="col-md-6 offset-md-3">        
        <ul >
          <li v-for="category in categories">{{ category.cat_name }}</li>
        </ul>
      </div>
    </div> -->

</div><!--/vue-card-item -->

</template>

<script>
    export default {
      name: "dataList",
      //props:['categories'], //get from parent component


      props: {
        categories:{
          type: Object,
          //type: Object,
          required: true,
          //validator: (value) => { return value.lenght <= 10; }
        }

      },

      data(){
        return{
         // categories: '',
        // getResults: 1,

        }
      },

      methods:{
       //function for pagination // Our method to GET results from a Laravel endpoint
        // getResults(page = 1) {
        //     axios.get('/spa/MultiComponent?page=' + page)
        //       .then( (response) => {
        //         this.categories = response.data;
        //       });
        // },

        getResults(page =1){
          //alert(data.id);
          FireEvent.$emit('getResultsPage', page);
        },

        //send data to formBox.vue
        editCategory(data){
          //alert(data.id);
          FireEvent.$emit('fillEditCategory', data);
        },


      },

      created: function(){
           
      },

      mounted() {
        //console.log('Component mounted.')
      }
    }
</script>
