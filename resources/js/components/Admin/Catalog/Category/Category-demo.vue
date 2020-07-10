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
                <div class="card-header">
                  <div class="row">
                    <div class="col-md-8 col-sm-6">Category List</div>
                    <div class="col-md-4 col-sm-6 text-right">

                      <div class="input-group input-control-sm search-box" style="position: relative;">                      
                        <input v-model="searchText" @keyup="searchit" class="form-control form-control-sm form-control-navbar" type="text" name="" placeholder="Search..." aria-label="Search">
                        <div class="input-group-append">
                          <button class="btn btn-navbar btn-sm border" @click="searchit"><i class="fas fa-search blue"></i></button>
                        </div>
                      </div>
                      <!-- <div v-if="autoComplete.length"  class="serach-autocomplete" style="">
                        <p v-for="autocompleteData in autoComplete" :key="autocompleteData.id">
                          <span>{{ autocompleteData.cat_name }} </span>
                        </p>                          
                      </div> -->

                    </div>
                  </div>
                </div><!--/card-header-->
                <div class="card-body">
                  <!-- <CategoryList v-bind:categories="categories"></CategoryList> -->
               
                  <table class="table table-striped table-sm">
                    <thead>
                      <tr>
                        <!-- <th style="width: 5%">#</th> -->
                        <th style="width: 5%">Icon</th>
                        <th style="width: 25%">Level 1</th>
                        <th style="width: 25px">Level 2</th>
                        <th style="width: 25px">Level 3</th>
                        <th style="width: 4%">Status</th>
                        <!-- <th style="width: 15%">Updated At</th> -->
                        <th style="width: 16%; text-align:right;">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <!-- :key="category.id" -->
                      <tr v-for="category in categories.data">
                        <!-- <td>{{category.id}}</td> -->
                        <td v-if="category.cat_img === null"> <img :src="'../'+NoIconUrl" height="30px" width="30px"> </td>
                        <td v-if="category.cat_img != null"> <img :src="'../'+category.cat_img" height="30px" width="30px"> </td>

                        <td><span v-bind:title="category.cat_slug">{{category.cat_name | upText}}</span></td>
                        <td v-if="category.cat2_name === null"> - </td>
                        <td v-if="category.cat2_name != null">{{category.cat2_name  }}</td>
                        <td v-if="category.cat3_name === null "> - </td>
                        <td v-if="category.cat3_name != null ">{{category.cat3_name  }}</td>
                        <td v-show="category.is_enabled == 1" class="green"> Active </td>
                        <td v-show="category.is_enabled == 0" class="red text-bold"> Inactive </td>
                        <!-- <td>{{category.updated_at | formatDate }}</td> -->
                        <td class="text-right">
                          <a @click="unactiveCat(category.id)" v-show="category.is_enabled == 1" class="btn btn-flat btn-sm" title="Click to Unactive">  <i class="far fa-thumbs-down red"></i></a>
                          <a @click="activeCat(category.id)" v-show="category.is_enabled == 0" class="btn btn-flat btn-sm" title="Click to Active">  <i class="far fa-thumbs-up green"></i></a>
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
                  <div class="row">
                    <div class="col-md-6">
                      <span> Total: {{ countCategory }}</span>
                    </div>
                    <div class="col-md-6">
                      <!-- <pagination :data="categories" @pagination-change-page="getResults"></pagination> -->
                      <pagination :data="categories" @pagination-change-page="getResults" align="right" size="small">
                          <span slot="prev-nav">&lt; Previous</span>
                          <span slot="next-nav">Next &gt;</span>
                      </pagination>
                    </div>
                  </div>
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
                          <label for="exampleInputEmail1">Name *</label>
                            <input v-model="form.cat_name" type="text" ref="cat_name" name="cat_name" class="form-control" :class="{ 'is-invalid': form.errors.has('cat_name') }" placeholder="Enter name">
                          <has-error :form="form" field="cat_name"></has-error>
                          <!-- {{ form.cat_name }} -->
                        </div>

                        <!-- <div class="form-group">
                          <label for="exampleInputEmail1">Slug</label>

                          <input v-model="form.cat_slug" type="text" name="cat_slug" class="form-control" :class="{ 'is-invalid': form.errors.has('cat_slug') }" placeholder="Enter slug">
                          <has-error :form="form" field="cat_slug"></has-error>
                        </div> -->

                        <div class="form-group">
                          <label>Select Parent</label>

                          <select v-model="form.parent_id" name="parent_id" class="form-control">
                              <option value=""> Select Parent </option>
                              <option v-bind:value="null">Parent </option>
                              <option v-for="parentCat in parentCategories" :key="parentCat.id" v-bind:value="parentCat.id">
                                {{parentCat.cat_name}}
                              </option>
                          </select>
                        </div>

                        <div class="form-group">
                          <label for="cat_desc">Descsiption</label>
                            <textarea v-model="form.cat_desc" ref="cat_desc" name="cat_desc" class="form-control" :class="{ 'is-invalid': form.errors.has('cat_desc') }" placeholder="Descsiption"></textarea>
                          <has-error :form="form" field="cat_desc"></has-error>
                          <!-- {{ form.cat_desc }} -->
                        </div>

                        <div class="form-check">
                          <input v-model="form.is_enabled" type="checkbox" class="form-check-input" name="is_enabled" id="checkbox" value="1">
                          <label class="form-check-label" for="checkbox" >Is Active</label>
                        </div>

                        <div class="row">
                          <div class="col-md-9">
                            <div class="form-group">
                              <label for="cat_img">Image</label>
                              <input @change="onImageChange" type="file" ref="cat_img" name="cat_img" class="form-control" />
                              <!-- @change="updateCatImg" -->
                            </div>
                          </div>
                          <div class="col-md-3">

                            <span v-if="ShowOnChangeImage != null">
                              <img v-if="ShowOnChangeImage != null" :src="ShowOnChangeImage" class="img-fluid img-thumbnail" style="width:65px;height:auto;">
                            </span>
                            
                            <span v-else>
                             <img v-if="form.cat_img === '' " :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:65px;height:auto;">
                             <img v-else-if="form.cat_img === null" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:65px;height:auto;">
                              <img v-else-if="form.cat_img != '' " :src="'../'+form.cat_img" class="img-fluid img-thumbnail focusImgOnHover" style="width:65px;height:auto;">
                            </span>

                            
                            
                          </div>
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
  //import CategoryList from './CategoryList.vue'

  export default {
    name: "Category",
    
    data () {
      return {
        NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
        ShowOnChangeImage: null,
        searchText:'', //v-model="search" in input tag
        editMode: false, //Use this for add edit using the same form
        //autoComplete: [], //use for auto complete
        parentCategories: '', //use for category form
        countCategory: '', //user for count
        categories: {}, //this is an object for fetch data

        // Create a new form instance
        form: new Form({
          id: '',
          parent_id: '',
          cat_name: '',
          cat_slug: '',
          is_enabled: '',
          cat_img: '',
          //remember: false
        })
      }
    },


    methods: { 

      // getCommonImage() {
      //   //this.NoIconUrl = require('FilesStorage/CommonFiles/no-img.png');
      // },

      //Searchit function using lodash. call searchit function every 300 mili secound when call the function
      searchit: _.debounce( () => {
        FireEvent.$emit('searching');
      },300 ),
      // searchit(){
      //   FireEvent.$emit('searching');
      // },

      //function for pagination // Our method to GET results from a Laravel endpoint
      getResults(page = 1) {
        axios.get('/spa/category?page=' + page)
          .then( (response) => {
            this.categories = response.data;
          });
      }, 

      parentCategory() {
        axios.get('/spa/parent-category')
          .then( (response) => {
            this.parentCategories = response.data;
          });

          //this.parentCategories = categories;
      }, 

      fetchCategory(){
        this.$Progress.start(); //using progress-bar package
        //axios.get('http://127.0.0.1:8000/spa/category')
        
        this.form.get('/spa/category')
          .then( ( response ) => {

            this.categories = response.data; // is an object... use when pagination
              //this.categories = response.data.data; //is an object... default 
            
             this.$Progress.finish(); 
          })
          .catch( (errors) => {  
            //console.log(errors); 
            this.$Progress.fail(); 
            toastr.warning('Something is wrong!');
          })
      },

      countTotalCategory(){
        axios.get('/spa/count-category')
          .then( ( response ) => {
              this.countCategory = response.data;   //for total count show  
          })
          .catch( (errors) => {  
            toastr.warning('Something is wrong!');
          })
      },

      //Make image as base64 
      onImageChange(e){
        //let file = e.target.files || e.dataTransfer.files;
        let file = e.target.files[0];        
        //console.log(file);
        this.ShowOnChangeImage = URL.createObjectURL(file); //display image in form when select image
        let reader = new FileReader();
        //let vm = this;
        if(file['size'] > 512000 ){  //512Kb = 512000Byte
          toastr.warning('Please select file size within 500kb');
        }else{          
          reader.onloadend = (file) => {
            //console.log(reader.result);
            this.form.cat_img = reader.result; //push base64 to cat_img veriable
          };          
          reader.readAsDataURL(file);
        }


      },

      // Submit the form via a POST request
      storeCategory() {         

        this.$Progress.start(); //using progress-bar package
        this.form.post('/spa/category')
          .then(({ data }) => { 

            if(data.success){ 
              FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
              toastr.success(data.success);             
              this.$Progress.finish();  
              this.form.reset();  //reset from after submit
              this.form.clear();
              this.$refs.cat_img.value = ''; //clear file input tag  
              this.ShowOnChangeImage = null;
              this.$refs.cat_name.focus(); //ret focus to first input filed. ref="" tag must be use
            }
            if(data.errors){
              toastr.warning(data.errors); 
            }
          })
          .catch( () => {
            this.$Progress.fail();
            toastr.warning('Something is wrong!');
          })            
      },

      editCategory(category){ 
          this.editMode = true;
          this.form.reset();          
          this.form.fill(category);   //category get from table data
          this.$refs.cat_img.value = ''; //clear file input tag
          this.ShowOnChangeImage = null;

          this.$refs.cat_name.focus(); //ret focus to first input filed. ref="cat_name" tag must be use
      },

      clearEditCategory(){
        this.editMode = false;
        this.form.reset();  //reset from after submit
        this.form.clear(); 
        this.$refs.cat_img.value = ''; //clear file input tag
        this.ShowOnChangeImage = null;      
      },

      updateCategory(){         
        //console.log('Update is working!'); 
        this.$Progress.start(); //using progress-bar package

        this.form.put('/spa/category/'+this.form.id)
          .then(({ data }) => { 

            if(data.success){ 
             FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
                         
              this.$Progress.finish(); 
              toastr.success(data.success);               
              this.form.reset();  //reset from after submit
              this.form.clear();
              this.$refs.cat_img.value = '';
              this.ShowOnChangeImage = null;
              this.editMode = false; 
              this.$refs.cat_name.focus(); //ret focus to first input filed. ref="cat_name" tag must be use
            }
            if(data.errors){
              toastr.warning(data.errors); 
            }
          })
          .catch( () => {
            this.$Progress.fail();
            toastr.warning('Something is wrong!');
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

      unactiveCat(id){
       // alert(id);
        this.form.get('/spa/unactive-category/'+id)
          .then( ({data}) => {
            if(data.success){                  
              FireEvent.$emit('AfterChange'); //this will reload data after create or update               
              toastr.warning(data.success); 
            } 
          })                          
          .catch(() => {
            toastr.warning('Something is wrong!');
          })
      },

      activeCat(id){
        this.form.get('/spa/active-category/'+id)
          .then( ({data}) => {
            if(data.success){                  
              FireEvent.$emit('AfterChange'); //this will reload data after create or update               
              toastr.success(data.success); 
            } 
          })                          
          .catch(() => {
            toastr.warning('Something is wrong!');
          })
      },


    }, /*--/method--*/


    // mounted() {
    //     //console.log('Component mounted.')
    // },
    created(){
      
      this.fetchCategory(); /*fetch category when Load page and also call from other FireEvent*/
      this.countTotalCategory(); /*Count total category When Load page*/
      this.parentCategory(); //get parent category only

      //Call Searching FireEvent
      FireEvent.$on('searching', () => {
        let query = this.searchText;
        
        axios.get('/spa/search-category?q='+query)
        //this.form.get('/spa/search-category?q='+query)
          .then( ( response ) => {
              this.categories = response.data; // is an object... use when pagination
              
              //use for autocomplete
              // if(query === ''){ 
              //   this.autoComplete = []; //use for autocomplete 
              // }else{
              //   this.autoComplete = response.data.data; //use for autocomplete 
              // }                          
          })
          .catch(() => {   })
      });

      /*Call FireEvent $on event when create or update data named as AfterChange*/
      FireEvent.$on('AfterChange', () => {
        this.fetchCategory();
        this.countTotalCategory(); /*Count total category When Load page*/
        this.parentCategory(); //get parent category only
      });

      /*Load every 10 seconds (ES 6 version) but having performence issue */      
      //setInterval( () => this.fetchCategory(), 10000);  
    },

    components:{
      //CategoryList,
    },

  } /*--/export default--*/

</script>
