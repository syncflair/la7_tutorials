<template>


    <!-- vue-card-item -->
  <div class="card vue-card-item">

    <div v-show="!editMode" class="card-header"><h4>Add Category</h4></div>
    <div v-show="editMode" class="card-header"><h4>Update Category</h4></div>

    <div class="card-body card-body-custome">
       	
        <form @submit.prevent=" editMode ? updateCategory() : storeCategory() " >
         <!--  <form @submit.prevent="storeCategory()" > -->

          <div class="card--">
            <div class="form-group">
              <label for="exampleInputEmail1">Name *</label>
                <input v-model="form.cat_name" type="text" ref="cat_name" name="cat_name" class="form-control" :class="{ 'is-invalid': form.errors.has('cat_name') }"  placeholder="Enter name">
                <has-error :form="form" field="cat_name"></has-error>
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


</template>

<script>
  import { mapState } from 'vuex' //for user MapState
    export default {
      name: "vxFormBox",
      data () {
        return {
        editMode: false, //Use this for add edit using the same form

          // Create a new form instance
          form: new Form({
            id: '',
            cat_name: '',
            //remember: false
          })
        }
      },
      computed: {
         ...mapState( 
             'CategoryStore', ['pagination']

          )
      },
      methods:{

        // Submit the form via a POST request
        storeCategory() {        

        this.$Progress.start(); //using progress-bar package
        this.form.post('/spa/MultiComponent')
          .then(({ data }) => { 

            if(data.success){ 
              this.$store.dispatch('CategoryStore/fetchCategory', this.pagination.per_page);

              toastr.success(data.success);             
              this.$Progress.finish();  
              this.form.reset();  //reset from after submit
              //this.form.clear();
              //this.$refs.cat_img.value = ''; //clear file input tag  
              //this.ShowOnChangeImage = null;
              //this.$refs.cat_name.focus(); //ret focus to first input filed. ref="" tag must be use
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
          this.$refs.cat_name.focus(); //ret focus to first input filed. ref="cat_name" tag must be use
        },

        clearEditCategory(){
          this.editMode = false;
          this.form.reset();  //reset from after submit     
        },

        updateCategory(){         
          //console.log('Update is working!'); 
          this.$Progress.start(); //using progress-bar package

          this.form.put('/spa/MultiComponent/'+this.form.id)
            .then(({ data }) => { 

              if(data.success){ 
                this.$store.dispatch('CategoryStore/fetchCategory', this.pagination.per_page);
                //FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
                           
                this.$Progress.finish(); 
                toastr.success(data.success);               
                this.form.reset();  //reset from after submit                
                this.editMode = false; 
                this.$refs.cat_name.focus(); //ret focus to first input filed. ref="cat_name" tag must be use
              }
              if(data.errors){
                toastr.danger(data.errors); 
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

      },

      created(){
      //this event come from searchBox.vue component
            FireEvent.$on('fillEditCategory', (data) => {
              //alert(data.cat_name);
              //this.form.fill(data);   //this is also work
              this.editCategory(data);
            });


      },
    
    }
   
</script>
