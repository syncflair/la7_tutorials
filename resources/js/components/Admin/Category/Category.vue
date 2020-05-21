<template>
<!-- Main content -->
<section class="content"> 
<!-- container-fluid -->     
<div class="container-fluid">        
<!-- Card section -->    
<div class="card vue-card">

    <!-- Card Header -->
    <div class="card-header">            
        <div class="row">
            <div class="col-md-6">
                <ol class="breadcrumb float-sm-left">
                    <li class="breadcrumb-item active">Dashboard</li>
                    <li class="breadcrumb-item"><a>Category</a></li>
                </ol>
            </div>
           <div class="col-md-6 text-right">Navigation</div>
        </div>
    </div><!-- /Card Header -->


    <!-- Card Body -->
    <div class="card-body">
        <!--Row -->
        <div class="row">
            <!-- Table -->
            <div class="col-md-8 col-sm-7">

              <!-- vue-card-item -->
              <div class="card vue-card-item">
                <!--<div class="card-header">Title</div>-->
                <div class="card-body">
                  <!-- <CategoryList v-bind:categories="categories"></CategoryList> -->

                  <table class="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th style="width: 5%">#</th>
                        <th style="width: 30%">Name</th>
                        <th style="width: 25px">Parent</th>
                        <th style="width: 10%">Status</th>
                        <th style="width: 15%">Updated At</th>
                        <th style="width: 20%; text-align:right;">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="category in categories" :key="category.id">
                        <td>{{category.id}}</td>
                        <td>{{category.cat_name}}</td>
                        <td>{{category.cat_slug | upText }}</td>
                        <td>
                          {{category.is_enabled}}
                        </td>
                        <td>{{category.updated_at | formatDate }}</td>

                        <td class="text-right">
                          <a  class="btn btn-danger- btn-flat btn-sm" data-toggle="tooltip" data-placement="right" title="Click to Unactive">  <i class="far fa-thumbs-down danger"></i>  </a>
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
              </div><!--/vue-card-item -->

            </div><!--/Table -->

            <!--Form Area-->
           <div class="col-md-4 col-sm-5 text-right-">  

              <!-- vue-card-item -->
              <div class="card vue-card-item">
                <div v-show="!editMode" class="card-header"><h4>Add Category</h4></div>
                <div v-show="editMode" class="card-header"><h4>Update Category</h4></div>
                <div class="card-body card-body-custome">

                    <form @submit.prevent=" editMode ? updateCategory() : storeCategory() " >
                      <div class="card--">
                        <div class="form-group">
                          <label for="exampleInputEmail1">Name</label>
                            <input v-model="form.cat_name" type="text" name="cat_name" class="form-control" :class="{ 'is-invalid': form.errors.has('cat_name') }" placeholder="Enter name">
                          <has-error :form="form" field="cat_name"></has-error>
                        </div>

                        <div class="form-group">
                          <label for="exampleInputEmail1">Slug</label>

                          <input v-model="form.cat_slug" type="text" name="cat_slug" class="form-control" :class="{ 'is-invalid': form.errors.has('cat_slug') }" placeholder="Enter slug">
                          <has-error :form="form" field="cat_slug"></has-error>
                        </div>


                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" name="is_enabled" id="exampleCheck1">
                          <label class="form-check-label" for="exampleCheck1" >Is Active</label>
                        </div>

                        <div class="form-group mt-2">
                          <button v-show="editMode" @click="clearEditCategory()" type="button" class="btn btn-primary btn-flat btn-sm">Cancel</button>
                          <button v-show="editMode" type="submit" class="btn btn-primary btn-flat btn-sm">Update</button>

                          <button v-show="!editMode" type="submit" class="btn btn-primary btn-flat btn-sm">Submit</button>
                        </div>

                      </div>                
                    </form>


                </div>
              </div><!-- /vue-card-item -->

           </div><!--/Form Area-->

        </div><!--/Row -->

    </div><!-- /Card Body -->

</div><!-- /Card section --> 

</div><!-- /container-fluid --> 
</section><!-- Main content -->
</template>

<script>
  import CategoryList from './CategoryList.vue'
 //const axios = require('axios');
 //import axios from 'axios'

  export default {
    name: "Category",
    data () {
      return {
        editMode: false,
        categories: [], //this is an object
        // Create a new form instance
        form: new Form({
          id: '',
          cat_name: '',
          cat_slug: '',
          is_enabled: '',
          //remember: false
        })
      }
    },

    methods: {      
      fetchCategory(){
        this.$Progress.start(); //using progress-bar package
        //axios.get('http://127.0.0.1:8000/spa/category')
        this.form.get('http://127.0.0.1:8000/spa/category')
          .then( ( response ) => {

              this.categories = response.data.data;

             this.$Progress.finish(); 
          })
          .catch( (errors) => {  console.log(errors); }
        )
      },

      // Submit the form via a POST request
      storeCategory() { 
        this.$Progress.start(); //using progress-bar package

        this.form.post('/spa/category')
          .then(({ data }) => { 

            Fire.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update

            toastr.success(data.success);             
            this.$Progress.finish();  
            this.form.reset();  //reset from after submit
            this.form.clear();
          })
          .catch( () => {
            this.$Progress.fail();
          })            
      },

      editCategory(category){ 
          this.editMode = true;
          this.form.reset();          
          this.form.fill(category);   //category get from table data
      },

      clearEditCategory(){
        this.editMode = false;
        this.form.reset();  //reset from after submit
        this.form.clear();        
      },

      updateCategory(){         
        //console.log('Update is working!'); 
        this.$Progress.start(); //using progress-bar package

        this.form.put('/spa/category/'+this.form.id)
          .then(({ data }) => { 

            Fire.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
                       
            this.$Progress.finish(); 
            toastr.success(data.success);   
            
            this.form.reset();  //reset from after submit
            this.form.clear();

            this.editMode = false;
          })
          .catch( () => {
            this.$Progress.fail();
          }) 


          //this.form.reset();  //reset from after submit
          //this.form.clear();
          //this.editMode = false;
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
              this.form.delete('/spa/category/'+id)
                .then( ({data}) => {

                  if(data.success){                  
                    Fire.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update               
                    toastr.warning(data.success); 
                  }   
                  if(data.errors){
                    toastr.warning(data.errors);                 
                  }

                })                          
                .catch(() => { })
            }else{
              toastr.info( 'Your data is safe!');
            }

          })
          .catch(() => {

          })
        }//end Swal
      }, 

    // mounted() {
    //     //console.log('Component mounted.')
    // },
    created(){
      /*Load when page called*/
      this.fetchCategory(); 

      /*Call Fire $on event when create or update data named as AfterChange*/
      Fire.$on('AfterChange', () => {
        this.fetchCategory(); 
      });

      /*Load every 10 seconds (ES 6 version) but having performence issue */      
      //setInterval( () => this.fetchCategory(), 10000);  
    },

    components:{
      CategoryList,
    },

  } /*--/export default--*/

</script>
