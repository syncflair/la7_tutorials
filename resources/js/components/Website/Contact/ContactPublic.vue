<template>
<!-- ========== MAIN CONTENT ========== -->
<main id="content" role="main">
    <!-- breadcrumb -->
    <div class="bg-gray-13 bg-md-transparent">
        <div class="container">
            <!-- breadcrumb -->
            <div class="my-md-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
                        <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="../home/index.html">Home</a></li>
                        <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active" aria-current="page">Contact</li>
                    </ol>
                </nav>
            </div>
            <!-- End breadcrumb -->
        </div>
    </div>
    <!-- End breadcrumb -->


    <div class="container">
        <!-- <div class="mb-5">
            <h1 class="text-center">Contact</h1>
        </div> -->
        <div class="row mb-10">
            <div class="col-lg-7 col-xl-6 mb-8 mb-lg-0">
                <div class="mr-xl-6">
                    <div class="border-bottom border-color-1 mb-5">
                        <h3 class="section-title mb-0 pb-2 font-size-25">Leave us a Message</h3>
                    </div>
                    <!-- <p class="max-width-830-xl text-gray-90">Aenean massa diam, viverra vitae luctus sed, gravida eget est. Etiam nec ipsum porttitor, consequat libero eu, dignissim eros. Nulla auctor lacinia enim id mollis. Curabitur luctus interdum eleifend. Ut tempor lorem a turpis fermentum.</p> -->
                    

                    <form class="js-validate-" novalidate="novalidate" @submit.prevent="SendPublicQueryEmail()">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="js-form-message mb-4">
                                    <label class="form-label"> First name <span class="text-danger">*</span> </label>
                                    <input v-model="form.firstName" type="text" class="form-control" name="firstName" placeholder="" aria-label="" required="" data-msg="Please enter your frist name." data-error-class="u-has-error" data-success-class="u-has-success" autocomplete="off" :class="{ 'is-invalid': form.errors.has('firstName') }">
                                    <has-error :form="form" field="firstName"></has-error>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="js-form-message mb-4">
                                    <label class="form-label"> Last name <span class="text-danger">*</span> </label>
                                    <input v-model="form.lastName" type="text" class="form-control" name="lastName" placeholder="" aria-label="" required="" data-msg="Please enter your last name." data-error-class="u-has-error" data-success-class="u-has-success" :class="{ 'is-invalid': form.errors.has('lastName') }">
                                    <has-error :form="form" field="lastName"></has-error>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="js-form-message mb-4">
                                    <label class="form-label"> Email <span class="text-danger">*</span> </label>
                                    <input v-model="form.email" type="text" class="form-control" name="email" placeholder="" aria-label="" required="" data-msg="Please enter your Email." data-error-class="u-has-error" data-success-class="u-has-success" :class="{ 'is-invalid': form.errors.has('email') }">
                                    <has-error :form="form" field="email"></has-error>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="js-form-message mb-4">
                                    <label class="form-label"> Phone </label>
                                    <input v-model="form.phone" type="text" class="form-control" name="phone" placeholder="" aria-label="" data-msg="Please enter your Phone." data-error-class="u-has-error" data-success-class="u-has-success">
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="js-form-message mb-4">
                                    <label class="form-label"> Subject </label>
                                    <input v-model="form.subject" type="text" class="form-control" name="subject" placeholder="" aria-label="" data-msg="Please enter subject." data-error-class="u-has-error" data-success-class="u-has-success" :class="{ 'is-invalid': form.errors.has('subject') }">
                                    <has-error :form="form" field="subject"></has-error>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="js-form-message mb-4">
                                    <label class="form-label">Your Message</label>
                                    <div class="input-group">
                                        <textarea v-model="form.visitorQuery" class="form-control p-5" rows="4" name="visitorQuery" placeholder="" :class="{ 'is-invalid': form.errors.has('visitorQuery') }"></textarea>
                                        <has-error :form="form" field="visitorQuery"></has-error>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary-dark-w px-5">Send Message</button>
                        </div>
                    </form>


                </div>
            </div>
            <div class="col-lg-5 col-xl-6">
                <div class="mb-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835252972956!2d144.95592398991224!3d-37.817327693787625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1575470633967!5m2!1sen!2sin" width="100%" height="200" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                </div>
                <div class="border-bottom border-color-1 mb-5">
                    <h3 class="section-title mb-0 pb-2 font-size-25">Our Address</h3>
                </div>
                <address class="mb-6 text-lh-23">
                    100/1, Golartake,
                    Mirpur 1, Dhaka 1216,
                    Bangladesh
                    <div class="">Support +880 1714 017558</div>
                    <div class="">Email: <a class="text-blue text-decoration-on" href="mailto:sorboraho@gmail.com">sorboraho@gmail.com</a></div>
                </address>
                <h5 class="font-size-14 font-weight-bold mb-3">Opening Hours</h5>
                <div class="">Monday to Friday: 9am-9pm</div>
                <div class="mb-6">Saturday to Sunday: 9am-11pm</div>
                <h5 class="font-size-14 font-weight-bold mb-3">Careers</h5>
                <p class="text-gray-90">If you’re interested in employment opportunities at SORBORAHO, please email us: <a class="text-blue text-decoration-on" href="mailto:sorboraho@gmail.com">sorboraho@gmail.com</a></p>
            </div>
        </div>
        
        <!-- Brand Carousel -->
        <BrandCarouselComponent></BrandCarouselComponent>
        <!-- End Brand Carousel -->

    </div>
</main>
<!-- ========== END MAIN CONTENT ========== -->
</template>
<script>
	import BrandCarouselComponent from '../Layouts/BrandCarouselComponent.vue' //this component load to every page of website
    export default {
        name: "Contact-Public-website",
        data (){      
            return {
                 // Create a new form instance
                form: new Form({
                  firstName: '',
                  lastName: '',
                  email: '',
                  phone: '',             
                  subject: '',             
                  visitorQuery: '',             
                })           
            }
        },

        components:{ 
            BrandCarouselComponent,
        }, 

        methods: { 

            // Submit the form via a POST request
            SendPublicQueryEmail() {  
                //alert(this.form);
                //console.log(this.form); 
              //this.$Progress.start(); //using progress-bar package

              this.form.post('/send-visitor-query')
              .then(({ data }) => { 

                console.log(data); 

                // if(data.success){ 
                //   //FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
                //   //toastr.success(data.success);             
                //   //this.$Progress.finish();  

                //   //this.form.reset();  //reset from after submit
                  
                //   //$('#formModal').modal('hide'); 
                //   //alert('Ok');

                // }
                // if(data.errors){
                //   toastr.warning(data.errors); 
                // }
              })
              .catch( () => {
                this.$Progress.fail();
                toastr.warning('Something is wrong!');
              })            
            },  //End SendPublicQueryEmail


        },           

        created(){
        },
           
        mounted() {
            // initialization of slick carousel (Slick Slider call from here, otherwise it get error)
            $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
        },
    }
</script>