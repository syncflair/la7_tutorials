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
    <!-- <div>
        <ul>
          <li v-for="parent in testQuery"> 
            {{parent.cat_name}}
            <ul v-if="parent.children_categories.length > 0">
              <li v-for="children in parent.children_categories"> 
                {{children.cat_name}}
                <ul v-if="children.categories.length > 0">
                  <li v-for="sub_children in children.categories">
                    {{sub_children.cat_name}}
                  </li>
                </ul>
              </li>
            </ul>
          </li>

        </ul>
    </div> -->

    <table class="table table-striped table-sm">
      <template v-for="parent in testQuery">
        <tr>
          <td width="3%"> {{ parent.id }} </td>
          <td>
            <span v-if="parent.cat_slug === true">              
                <input 
                  v-on:blur= "parent.cat_slug=false;"                   
                  @keydown.enter="parent.cat_slug=false; updateDataFromTable(parent)" 
                  v-model="parent.cat_name" v-focus        
                  type="text" name="cat_name" class="form-control form-control-sm"  />             
            </span>
            <span v-else="parent.cat_slug==false" @click="parent.cat_slug=true" style="font-weight: 700">{{parent.cat_name}}</span>
          </td>
          <td class="text-right">
            <a @click="viewCategory(parent)" title="Single View" class="btn  btn-primary- btn-flat btn-sm">
                <i class="fas fa-eye primary "></i>
            </a>
            <a @click="listCategory(parent.id)" title="List View" class="btn  btn-primary- btn-flat btn-sm">
                <i class="fas fa-list primary "></i>
            </a>
            <a @click="editCategory(parent)" class="btn  btn-primary- btn-flat btn-sm">
                <i class="fas fa-edit primary "></i>
            </a> 
            <a @click="deleteCategory(parent.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
               <i class="far fa-trash-alt red"></i>
            </a>
          </td>          
        </tr> 
        <template v-if="parent.children_categories.length > 0"  v-for="children in parent.children_categories">
          <tr>
            <td width="3%"> {{ children.id }} </td>
            <td style="padding-left: 15px;"> - {{children.cat_name}}</td>
            <td class="text-right">
            <a @click="viewCategory(children)" title="Single View" class="btn  btn-primary- btn-flat btn-sm">
                <i class="fas fa-eye primary "></i>
            </a>
            <a @click="listCategory(children.id)" title="List View" class="btn  btn-primary- btn-flat btn-sm">
                <i class="fas fa-list primary "></i>
            </a>
            <a @click="editCategory(children)" class="btn  btn-primary- btn-flat btn-sm">
                <i class="fas fa-edit primary "></i>
            </a> 
            <a @click="deleteCategory(children.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
               <i class="far fa-trash-alt red"></i>
            </a>
          </td> 
          </tr>
          <template v-if="children.categories.length > 0"  v-for="sub_children in children.categories">
            <tr>
              <td width="3%"> {{ sub_children.id }} </td>
              <td style="padding-left: 30px"> -- {{sub_children.cat_name}}</td>
              <td class="text-right">
                <a @click="viewCategory(sub_children)" title="Single View" class="btn  btn-primary- btn-flat btn-sm">
                    <i class="fas fa-eye primary "></i>
                </a>
                <a @click="listCategory(sub_children.id)" title="List View" class="btn  btn-primary- btn-flat btn-sm">
                    <i class="fas fa-list primary "></i>
                </a>
                <a @click="editCategory(sub_children)" class="btn  btn-primary- btn-flat btn-sm">
                    <i class="fas fa-edit primary "></i>
                </a> 
                <a @click="deleteCategory(sub_children.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                   <i class="far fa-trash-alt red"></i>
                </a>
              </td>
            </tr>
          </template>
        </template>
      </template>     
    </table>

    <div class="row">
      <div class="col-md-10 offset-md-1 pt-5 pb-5">

        <table class="table-sm table table-striped">
        <div class="form-group" v-for="(input,k) in inputs" :key="k">
            
              <tr>
                <td>
                  <input type="text" class="form-control form-control-sm" v-model="input.name" placeholder="Name">
                </td>
                <td>
                  <input type="text" class="form-control form-control-sm" v-model="input.email" placeholder="Email">   
                </td>
                <td>
                  <input type="text" class="form-control form-control-sm" v-model="input.phone" placeholder="Phone">    
                </td>
                <td>
                  <i class="fas fa-minus-square" @click="remove(k)" v-show="k || ( !k && inputs.length > 1)"></i>
                  <i class="fas fa-plus-square" @click="add(k)" v-show="k == inputs.length-1"></i>
                </td>
              </tr>
            
        </div>
        </table>



      </div>
    </div>


</div><!--/vue-card-item -->

</template>

<script>
  import { mapGetters } from 'vuex' //for user MapGatters
  import { mapState } from 'vuex' //for user MapState


    export default {
      name: "vxDataList",

      data(){
        return {
         ///editing: false,
         // cat_name: '',
         // perPage: 0,
           inputs: [
              {
                  name: '',
                  email: '',
                  phone: '',
              }
          ]       
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
             'CategoryStore', ['vuexTest', 'categories', 'pagination','testQuery']

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
        add(index) {
            this.inputs.push({ name: '' });
        },
        remove(index) {
            this.inputs.splice(index, 1);
        },

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

          this.$store.dispatch('CategoryStore/testQuery');    
          
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
