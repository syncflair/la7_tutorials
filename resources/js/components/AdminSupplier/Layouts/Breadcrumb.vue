<template>

    <div v-show="$route.meta.breadcrumb" class="content-header">
      <div class="container">
        <div class="row mb-2-">
          <!-- <div class="col-sm-6 col-6">
            <h5 class="m-0- text-dark">{{ $route.meta.breadcrumb }}</h5>
          </div> -->
          <div class="col-sm-12 col-12">
            <ol class="breadcrumb float-right- float-left">
              <li v-if="$route.meta.breadcrumb !== 'Dashboard' " class="breadcrumb-item"><router-link to="#">Dashboard</router-link></li>
              <li class="breadcrumb-item"><a href="#">{{ $route.meta.breadcrumb }}</a></li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    
</template>
<script>
    export default {
        name: "breadcrumb-for-admin-supplier",
        data (){      
            return {
                breadcrumb: '',            
            }
        },

        methods: {          
        },           

        created(){
        },
           
        mounted() {
            console.log();
        },
    }
</script>