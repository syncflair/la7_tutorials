<template>

<!-- Main content -->
<section class="content">      
<div class="container-fluid">   
        
  <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container">
        <div class="row mb-2">
          <div class="col-sm-6 col-6">
            <h5 class="m-0- text-dark">Profile</h5>
          </div><!-- /.col -->
          <div class="col-sm-6 col-6">
            <ol class="breadcrumb float-right">
              <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
              <li class="breadcrumb-item"><a href="#">Profile</a></li>
              <!-- <li class="breadcrumb-item active">Top Navigation</li> -->
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <div class="container">

        <div class="row">
          <div class="col-md-12">

            <form>

              <div class="row form-group">
                <div class="col-sm-3 text-right">
                  <label class="pt-2">Name </label>                      
                </div>
                <div class="col-sm-9">
                  <input v-model="form.name" type="text" name="name" class="form-control" readonly min="0" step=".01">
                </div> 
              </div>

              <div class="row form-group">
                <div class="col-sm-3 text-right">
                  <label class="pt-2">Email </label>                      
                </div>
                <div class="col-sm-9">
                  <input v-model="form.email" type="text" name="email" class="form-control" readonly min="0" step=".01">
                </div> 
              </div>

              <div class="row form-group">
                <div class="col-sm-3 text-right">
                  <label>Password</label>                   
                </div>
                <div class="col-sm-9">
                  <input v-model="form.password" type="password" ref="password" name="password" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('password') }" placeholder="Password">
                  <has-error :form="form" field="password"></has-error>
                </div> 
              </div>

              <div class="row form-group">
                <div class="col-sm-3 text-right">
                  <label>Password Confirm</label>                    
                </div>
                <div class="col-sm-9">
                  <input v-model="form.password_confirmation" type="password" ref="password_confirmation" name="password_confirmation" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" placeholder="Confirm Password">
                  <has-error :form="form" field="password_confirmation"></has-error>
                </div> 
              </div>

              <div class="row form-group">
                <div class="col-sm-3 text-right">
                  <label class="pt-2">Avater </label>                      
                </div>
                <div class="col-sm-9">


                  <div class="row">
                    <div class="col-md-12 text-center">
                        <span v-if="ShowOnChangeImage != null">                           
                            <img v-if="ShowOnChangeImage != null" :src="ShowOnChangeImage" class="img-fluid img-thumbnail" style="width:150px;height:auto;">
                          </span>
                          
                          <span v-else>

                           <img v-if="form.avatar == 'undefined'" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:150px;height:150px;">
                           <img v-if="form.avatar === '' " :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:150px;height:150px;">
                           <img v-else-if="form.avatar === null" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:150px;height:150px;">
                            <!-- <img v-else-if="form.avatar != '' " :src="'../'+form.avatar" class="img-fluid img-thumbnail focusImgOnHover" style="width:150px;height:150px;"> -->
                            <!-- <i  class="far fa-times-circle"></i> -->

                            <img v-else-if="form.avatar != '' " :src="form.avatar" class="img-fluid img-thumbnail focusImgOnHover" style="width:150px;height:150px;">
                          
                          </span> 
                          <!-- <img :src="'../'+NoIconUrl"> -->
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">

                        <!-- :value="getFilesName()" -->
                        <div class="input-group mt-1"> 
                          <input type="text" :value="getFilesName()"  readonly class="form-control" placeholder="Choose your images">
                          <span class="input-group-btn">
                            <button @click.prevent="showFilePicker" class="btn btn-default" type="button">
                              <i class="fas fa-paperclip" style="color:blue !important;"></i>
                            </button>
                          </span>
                        </div>

                        <input @change="onImageChange" type="file" ref="avatar" name="avatar" class="form-control" style="display: none;" />
                        <!-- @change="updateCatImg" -->
                      </div>
                    </div>
                  </div>


                </div> 
              </div>

            </form>

          </div> 
        </div> 

      </div>
    </div>
    


    <!-- /.content -->

    <!-- {{authUser}} -->


</div>
</section><!-- Main content -->
</template>

<script>
    import { mapState } from 'vuex' //for user MapState
    export default {
        name: "admin-child-profile-master",
        //Get props form views/admin/dashboard.blade.php
        data (){      
          return {
            NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
            ShowOnChangeImage:null, 
            deleteImageIcon: false, //Delete Image icon if image exist

            //for images manipulation
            show_image_name: null, //use only to show image name in text field

            // Create a new form instance
            form: new Form({
              id: '',
              name: '',
              email: '',
              password: '',
              password_confirmation:'',
              role_id:'',
              status_id: '',
              employee_id: '',
              branch_id: '',
              avatar: '',
            })
                          
          }
        },

        computed: {
          ...mapState( 
             'commonStoreForAll', ['authUser', 'systemSettings']
          ),
        },

        methods: { 

          showFilePicker(){ //click input file (hidden) when showFilePicker click.
            this.$refs.avatar.click();
          },

          getFilesName(){ //show name to showFilePicker input field
            return this.show_image_name;             
          },

          //Make image as base64 
          onImageChange(e){
              //let file = e.target.files || e.dataTransfer.files;
              this.show_image_name = e.target.files[0].name; //show single image name to input box using getFilesName()
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
                  this.form.avatar = reader.result; //push base64 to logo veriable
                };          
                reader.readAsDataURL(file);
              }

              // console.log(e.target.files[0].name);
          }, 

          editUser(data){
           // this.editMode = true;
            this.form.fill(data);    
            //this.$refs.name.focus();  
            // if(data.avatar != null){
            //   this.deleteImageIcon = true;  
            // }
            // this.$store.dispatch('usersAdminStore/fetchSelectedEmployee', this.form.employee_id);   
          },        
        },           

        created(){
          this.editUser(this.authUser);
        },
           
        mounted() {
        }
    }
</script>
