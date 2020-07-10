<template>
<!-- Main content -->
<section class="content">  
<!--container-fluid -->     
<div class="container-fluid">   
<!-- Card section -->  
<div class="card vue-card">

    <!-- Card Header -->
    <div class="card-header">            
        <div class="row">
            <div class="col-md-6">
                <ol class="breadcrumb float-sm-left">
                    <li class="breadcrumb-item active">Dashboard</li>
                    <li class="breadcrumb-item"><a>Product</a></li>
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
            <div class="col-md-12 col-sm-12">
              <!-- vue-card-item -->
              <div class="card vue-card-item">
                <div class="card-header">
                  <div class="row">
                    <div class="col-md-8 col-sm-6">Product List</div>
                    <div class="col-md-4 col-sm-6 text-right">

                      <div class="input-group input-control-sm">
                        <input v-model="searchText" @keyup="searchit" class="form-control form-control-sm form-control-navbar" type="text" name="" placeholder="Search..." aria-label="Search">
                        <div class="input-group-append">
                          <button class="btn btn-navbar btn-sm border" @click="searchit"><i class="fas fa-search blue"></i></button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div><!--/card-header-->
                <div class="card-body">
                  <!-- <productList v-bind:products="products"></productList> -->
               
                  <table class="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th style="width: 5%">#</th>
                        <th style="width: 30%">Name</th>
                        <th style="width: 25px">Slug</th>
                        <th style="width: 10%">Status</th>
                        <th style="width: 15%">Updated At</th>
                        <th style="width: 20%; text-align:right;">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                     

                      <tr v-for="product in products.data" :key="product.id">
                        <td>{{product.id}}</td>
                        <td>{{product.pro_name}}</td>
                        <td>{{product.pro_slug | upText }}</td>

                        <td v-show="product.is_enabled == 1" class="green"> Active </td>
                        <td v-show="product.is_enabled == 0" class="red text-bold"> Inactive </td>

                        <td>{{product.updated_at | formatDate }}</td>

                        <td class="text-right">

                          <a @click="unactivePro(product.id)" v-show="product.is_enabled == 1" class="btn btn-flat btn-sm" title="Click to Unactive">  <i class="far fa-thumbs-down red"></i></a>

                          <a @click="activePro(product.id)" v-show="product.is_enabled == 0" class="btn btn-flat btn-sm" title="Click to Active">  <i class="far fa-thumbs-up green"></i></a>


                          <a class="btn  btn-primary- btn-flat btn-sm">
                              <i class="fas fa-edit primary "></i>
                          </a> 
                          <a @click="deleteProduct(product.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
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
                      <span> Total: {{ countProduct }}</span>
                    </div>
                    <div class="col-md-6">
                      <!-- <pagination :data="products" @pagination-change-page="getResults"></pagination> -->
                      <pagination :data="products" @pagination-change-page="getResults" align="right" size="small">
                          <span slot="prev-nav">&lt; Previous</span>
                          <span slot="next-nav">Next &gt;</span>
                      </pagination>
                    </div>
                  </div>
                </div>

              </div><!--/vue-card-item -->

            </div><!--/Table -->

        </div><!--/Row -->

    </div><!-- /Card Body -->

</div><!--/--Card section --> 
</div><!-- /container-fluid --> 
</section><!-- Main content -->
</template>

<script>
    export default {
       // name: "Product",
        
        data () {
          return {
            searchText:'', //v-model="search" in input tag
            countProduct: '', //user for count
            products: {}, //this is an object           
          }
        },

        methods:{
            //Searchit function using lodash. call searchit function every 1 secound when call the function
            searchit: _.debounce( () => {
               FireEvent.$emit('searching');
            },500 ),

            //function for pagination // Our method to GET results from a Laravel endpoint
            getResults(page = 1) {
               axios.get('/spa/product?page=' + page)
                 .then( (response) => {
                   this.products = response.data;
                 });
            }, 

            fetchProduct(){
                this.$Progress.start(); //using progress-bar package
                axios.get('/spa/product')
                  .then( ( response ) => {                    
                    this.products = response.data; // is an object... use when pagination
                    //this.products = response.data.data; //is an object... default 

                     this.$Progress.finish(); 
                  })
                  .catch( (errors) => {  
                    this.$Progress.fail(); 
                    toastr.warning('Something is wrong!');
                  })
            },

            countTotalProduct(){
                axios.get('/spa/count-product')
                  .then( ( response ) => {
                      this.countProduct = response.data;   //for total count show  
                  })
                  .catch( (errors) => {  
                    toastr.warning('Something is wrong!');
                  })
            },

            deleteProduct(id){
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
                      axios.delete('/spa/product/'+id)
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
            }, //end Swal


            unactivePro(id){
            // alert(id);
            axios.get('/spa/unactive-product/'+id)
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

            activePro(id){
            axios.get('/spa/active-product/'+id)
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


        },

        created(){
          this.fetchProduct(); /*fetch product when Load page and also call from other FireEvent*/
          this.countTotalProduct(); /*Count total product When Load page*/

          /*Call FireEvent $on event when create or update data named as AfterChange*/
          FireEvent.$on('AfterChange', () => {
            this.fetchProduct();
            this.countTotalProduct(); /*Count total product When Load page*/
          });

          //Call Searching FireEvent
          FireEvent.$on('searching', () => {
            let query = this.searchText;
            axios.get('/spa/search-product?q='+query)
            //this.form.get('/spa/search-product?q='+query)
              .then( ( response ) => {
                  this.products = response.data; // is an object... use when pagination
              })
              .catch(() => {
                toastr.warning('No Data Found'); 
              })
          });

        },

        // mounted() {
        //     console.log('Component mounted.')
        // }
    }
</script>
