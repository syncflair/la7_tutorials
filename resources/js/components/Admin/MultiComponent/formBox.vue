<template>


    <!-- vue-card-item -->
  <div class="card vue-card-item">
    <div class="card-header"><h4>Add Category</h4></div>
    <div class="card-body card-body-custome">

        <form  >

          <div class="card--">
            <div class="form-group">
              <label for="exampleInputEmail1">Name *</label>
                <input type="text" ref="cat_name" name="cat_name" class="form-control"  placeholder="Enter name">
              <!-- <has-error :form="form" field="cat_name"></has-error> -->
              <!-- {{ form.cat_name }} -->
            </div>

            <div class="form-group mt-2">
              <button type="submit" class="btn btn-primary btn-flat btn-sm">Submit</button>
            </div>

          </div> 

        </form>

    </div>
  </div><!-- /vue-card-item -->


</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
