<template>
<!-- Main content -->
<section class="content"> 
<!-- container-fluid -->     
<div class="container-fluid">   
<vue-headful title="Title from vue-headful"/>       
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
                  <CategoryList></CategoryList>
                </div>
              </div><!--/vue-card-item -->

            </div><!--/Table -->

            <!--Form Area-->
           <div class="col-md-4 col-sm-5 text-right-">  

              <!-- vue-card-item -->
              <div class="card vue-card-item">
                <div class="card-header"><h4>Add Category</h4></div>
                <div class="card-body card-body-custome">
                  <CategoryAdd></CategoryAdd>
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
  import CategoryAdd from './CategoryAdd.vue'

    export default {
        mounted() {
            console.log('Component mounted.')
        },
        components:{
          CategoryList,
          CategoryAdd,
        },
    }
</script>
