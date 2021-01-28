<template>

    <div class="container">
        <!-- <div class="mb-5">
            <h1 class="text-center">Contact</h1>
        </div> -->
                
        <div class="row mb-10 mt-4">
            <div class="d-none- d-xl-block col-xl-2 col-wd-2gdot5-">

                <NavForAdminSupplier />

            </div>

            <div class="bg-gray-1 rounded-lg col-xl-10 col-wd-9gdot5-">
                <div class="row ">

                    <!-- <div class="col-lg-12 col- order-lg-1">
                        <div class="border-bottom border-color-1 mb-5">
                            <h3 class="section-title mb-0 pb-2 font-size-25">Profile</h3>
                        </div>
                    </div> -->

                    <!-- Supplier profile -->
                    <div class="col-lg-12 col- order-lg-1">
                        <div class="row pb-7 mb-7">
                            <div class="col-lg-12 border-bottom border-color-1 mb-3 col-6-">
                                <h3 class="section-title- mb-0 pb-1 pl-2- font-size-18">My Profile</h3>
                            </div>

                            <div class="col-lg-4 col-6 mb-1 col-6-">
                                <h3 class=" mb-0 pb-1 pl-2- font-size-14">Full Name</h3>
                                <p> {{ authSupplier.name }}</p>
                            </div>

                            <div class="col-lg-4 col-6 col-6-">
                                <h3 class=" mb-0 pb-1 pl-2- font-size-14">Email Address</h3>
                                <p> {{authSupplier.email }}</p>
                            </div>

                            <div class="col-lg-4 col-6 mb-1 col-6-">
                                <h3 class=" mb-0 pb-1 pl-2- font-size-14">Phone</h3>
                                <p> +88 {{ authSupplier.phone }}</p>
                            </div>

                            <div class="col-lg-6 col-6 mb-1 col-6-">
                                <h3 class=" mb-0 pb-1 pl-2- font-size-14">Address</h3>
                                <p> {{ authSupplier.supplier_address }}</p>
                            </div>

                            <div class="col-lg-6 col-6 mb-1 col-6-">
                                <h3 class=" mb-0 pb-1 pl-2- font-size-14">Details</h3>
                                <p> {{ authSupplier.supplier_desc }}</p>
                            </div>
                            

                            <div class="col-lg-12 col-12 mb-1 text-right">
                                <router-link to="/sspa/my-profile-update" class="btn btn-primary ml-md-2 px-2 px-md-4 px-lg-3 w-100- w-md-auto d-none- d-md-inline-block"><i class="fas fa-plus"></i> Edit Profile</router-link>
                            </div>


                        </div>
                    </div> 
                    <!-- END Supplier profile -->

                    
                    <div class="col-lg-12  col- order-lg-1">

                    </div>
                    
                    
                    


                </div>
            </div>
        </div>

    </div>

</template>
<script>
    import NavForAdminSupplier from '../Include/NavForAdminSupplier'

    import { mapState } from 'vuex' //for user MapState

    export default {
        name: "Supplier-Profile-website-auth",
        data (){      
            return {         
            }
        },

        computed: {

          ...mapState( 'AuthenticationForSupplier', ['authSupplier'] ),

        },

        components:{
            NavForAdminSupplier, 
        }, 

        methods: { 


            DeleteSupplierAddress(id){
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
                      axios.delete('/auth/my-address/'+id)
                        .then( ({data}) => {

                          if(data.success){
                            //this.$store.dispatch('AuthenticationForSupplier/fetchAuthSupplierAddress', this.authSupplier.id);
                            toastr.success(data.success); 
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
        },           

        created(){
            this.$store.dispatch('AuthenticationForSupplier/fetchAuthSupplierData'); //get auth Supplier data               
        },
           
        mounted() {
            //console.log(this.authSupplierAddress);
        },
    }
</script>