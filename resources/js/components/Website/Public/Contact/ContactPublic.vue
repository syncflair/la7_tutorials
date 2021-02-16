<template>
<span>



    <div class="container">
        <!-- <div class="mb-5">
            <h1 class="text-center">Contact</h1>
        </div> -->
        <div class="row mb-10 mt-6-">
            <div class="col-lg-7 col-xl-6 mb-8 mb-lg-0">
                <div class="mr-xl-6">
                    <div class="border-bottom border-color-1 mb-5">
                        <h3 class="section-title mb-0 pb-2 font-size-25">Leave us a Message</h3>
                    </div>
                    <!-- <p class="max-width-830-xl text-gray-90">Aenean massa diam, viverra vitae luctus sed, gravida eget est. Etiam nec ipsum porttitor, consequat libero eu, dignissim eros. Nulla auctor lacinia enim id mollis. Curabitur luctus interdum eleifend. Ut tempor lorem a turpis fermentum.</p> -->
                    

                    <form class="js-validate-" novalidate="novalidate-" @submit.prevent="SendPublicQueryEmail()">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="js-form-message mb-4">
                                    <label class="form-label"> First name <span class="text-danger">*</span> </label>
                                    <!-- <input v-model="form.firstName" type="text" class="form-control" name="firstName" placeholder="" aria-label="" required="" data-msg="Please enter your frist name." data-error-class="u-has-error" data-success-class="u-has-success" autocomplete="off"> -->
                                    <input v-model="form.firstName" type="text" class="form-control" name="firstName" placeholder="" aria-label="" data-msg="Please enter your frist name." data-error-class="u-has-error" data-success-class="u-has-success" autocomplete="off" :class="{ 'is-invalid': form.errors.has('firstName') }">
                                    <has-error :form="form" field="firstName"></has-error>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="js-form-message mb-4">
                                    <label class="form-label"> Last name <span class="text-danger">*</span> </label>
                                    <input v-model="form.lastName" type="text" class="form-control" name="lastName" placeholder="" aria-label="" data-msg="Please enter your last name." data-error-class="u-has-error" data-success-class="u-has-success" :class="{ 'is-invalid': form.errors.has('lastName') }">
                                    <has-error :form="form" field="lastName"></has-error>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="js-form-message mb-4">
                                    <label class="form-label"> Email <span class="text-danger">*</span> </label>
                                    <input v-model="form.email" type="text" class="form-control" name="email" placeholder="" aria-label="" data-msg="Please enter your Email." data-error-class="u-has-error" data-success-class="u-has-success" :class="{ 'is-invalid': form.errors.has('email') }">
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
                                    <label class="form-label"> Subject <span class="text-danger">*</span> </label>
                                    <input v-model="form.subject" type="text" class="form-control" name="subject" placeholder="" aria-label="" data-msg="Please enter subject." data-error-class="u-has-error" data-success-class="u-has-success" :class="{ 'is-invalid': form.errors.has('subject') }">
                                    <has-error :form="form" field="subject"></has-error>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="js-form-message mb-4">
                                    <label class="form-label">Your Message <span class="text-danger">*</span> </label>
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
                    <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835252972956!2d144.95592398991224!3d-37.817327693787625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1575470633967!5m2!1sen!2sin" width="100%" height="200" frameborder="0" style="border:0;" allowfullscreen=""></iframe> -->
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.700311872784!2d90.34510366942551!3d23.794582086915813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x986dd0410c32fa76!2sBogura%20Doi%20Hat!5e0!3m2!1sen!2sbd!4v1606833752759!5m2!1sen!2sbd" width="100%" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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
        <!-- <BrandCarouselComponent></BrandCarouselComponent> -->
        <!-- End Brand Carousel -->

    </div>
</span>
</template>
<script>

	//import BrandCarouselComponent from '../Layouts/BrandCarouselComponent.vue' //this component load to every page of website
    
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
            // BrandCarouselComponent,
        }, 

        methods: { 

            // Submit the form via a POST request
            SendPublicQueryEmail() {  
                //alert(this.form);
                //console.log(this.form); 
              this.$Progress.start(); //using progress-bar package



              this.form.post('/send-visitor-query')
              .then(({ data }) => { 
                //console.log(data.success); 

                if(data.success){ 
                  //Swal.fire(data.success)
                  //toastr.success('success');             
                  toastr.success(data.success);             
                  
                  this.form.reset();  //reset from after submit
                  this.$Progress.finish();                  
                  //alert('Ok');
                }
                // if(data.errors){
                //   toastr.warning(data.errors); 
                // }
              })
              .catch( () => {
                this.$Progress.fail();
                //toastr.warning('Something is wrong!');
              })   

            },  //End SendPublicQueryEmail


        },           

        created(){
        },
           
        mounted() {

            this.$nextTick(function () {

                //initialization of HSMegaMenu component
                $('.js-mega-menu').HSMegaMenu({
                    event: 'hover',
                    direction: 'horizontal',
                    pageContainer: $('.container'),
                    breakpoint: 767.98,
                    hideTimeOut: 0
                });               

                // initialization of svg injector module
                $.HSCore.components.HSSVGIngector.init('.js-svg-injector');


                     // initialization of header
                $.HSCore.components.HSHeader.init($('#header'));

                // initialization of animation
                $.HSCore.components.HSOnScrollAnimation.init('[data-animation]');

                // initialization of unfold component
                $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
                    afterOpen: function () {
                        $(this).find('input[type="search"]').focus();
                    }
                });

                // initialization of countdowns
                // var countdowns = $.HSCore.components.HSCountdown.init('.js-countdown', {
                //     yearsElSelector: '.js-cd-years',
                //     monthsElSelector: '.js-cd-months',
                //     daysElSelector: '.js-cd-days',
                //     hoursElSelector: '.js-cd-hours',
                //     minutesElSelector: '.js-cd-minutes',
                //     secondsElSelector: '.js-cd-seconds'
                // });

                // initialization of malihu scrollbar
                $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar'));

                // initialization of forms
                $.HSCore.components.HSFocusState.init();

                // initialization of form validation
                // $.HSCore.components.HSValidation.init('.js-validate', {
                //     rules: {
                //         confirmPassword: {
                //             equalTo: '#signupPassword'
                //         }
                //     }
                // });

                // initialization of show animations
                $.HSCore.components.HSShowAnimation.init('.js-animation-link');

                // initialization of fancybox
                // initialization of popups
                $.HSCore.components.HSFancyBox.init('.js-fancybox');

                // initialization of slick carousel
                // $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

                // initialization of go to
                $.HSCore.components.HSGoTo.init('.js-go-to');

                // initialization of hamburgers
                $.HSCore.components.HSHamburgers.init('#hamburgerTrigger');

                // initialization of unfold component
                $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
                    beforeClose: function () {
                        $('#hamburgerTrigger').removeClass('is-active');
                    },
                    afterClose: function() {
                        $('#headerSidebarList .collapse.show').collapse('hide');
                    }
                });

                $('#headerSidebarList [data-toggle="collapse"]').on('click', function (e) {
                    e.preventDefault();

                    var target = $(this).data('target');

                    if($(this).attr('aria-expanded') === "true") {
                        $(target).collapse('hide');
                    } else {
                        $(target).collapse('show');
                    }
                });

                // initialization of unfold component
                $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));

                // initialization of select picker
                // $.HSCore.components.HSSelectPicker.init('.js-select');


                // initialization of HSScrollNav component
                // $.HSCore.components.HSScrollNav.init($('.js-scroll-nav'), {
                //   duration: 700
                // });

                // initialization of quantity counter
                //$.HSCore.components.HSQantityCounter.init('.js-quantity');

                // initialization of forms
                //$.HSCore.components.HSRangeSlider.init('.js-range-slider');


            })//end this.$nextTick
        },
    }
</script>