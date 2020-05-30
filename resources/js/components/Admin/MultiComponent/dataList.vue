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
          <tr>
           
            <td > 1 </td>
            <td > name</td>

            <td class="text-right">

              <a class="btn  btn-primary- btn-flat btn-sm">
                  <i class="fas fa-edit primary "></i>
              </a> 
              <a class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
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
          <!-- <pagination :data="categories" @pagination-change-page="getResults"></pagination> -->
          <!-- <pagination :data="categories" @pagination-change-page="getResults" align="right" size="small">
              <span slot="prev-nav">&lt; Previous</span>
              <span slot="next-nav">Next &gt;</span>
          </pagination> -->
        </div>
      </div>
    </div>

</div><!--/vue-card-item -->

</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
