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
                    <li class="breadcrumb-item"><a>Storage</a></li>
                </ol>
            </div>
           <div class="col-md-6 text-right">Navigation</div>
        </div>
    </div><!--/ Card Header -->

    <!-- Card Body -->
    <div class="card-body">

      Storage

    </div><!--/ Card Body -->

</div><!--/ Card section --> 
</div><!--/ container-fluid --> 
</section><!-- Main content -->
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
