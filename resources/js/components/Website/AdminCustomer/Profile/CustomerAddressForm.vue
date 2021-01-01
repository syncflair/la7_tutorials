<template>

    <div class="container">
        <!-- <div class="mb-5">
            <h1 class="text-center">Contact</h1>
        </div> -->
                
        <div class="row mb-5 mt-4">
            <div class="d-none- d-xl-block col-xl-2 col-wd-2gdot5-">

                <NavForAdminCustomer />

            </div>

            <div class="bg-gray-1 rounded-lg col-xl-10 col-wd-9gdot5-">
                <div class="row ">
                    <div class="col-md-12 border-bottom border-color-1 mb-3">
                        <h5 class="section-title mb-0 pb-2 pl-2 font-size-25">
                        	<span v-show="!editMode">Add Address</span>
        					<span v-show="editMode">Update Address</span>
                        </h5>
                    </div>

                    <div class="col-md-8 offset-md-2 mb-8 w-100 wishlist-table cart-wishlist-custome">
                        <!-- Profile Form -->
                        <form class="js-validate-" novalidate="novalidate-" 
                            @submit.prevent=" editMode ? updateFormData() : storeFormData() ">

                            <div class="row text-center-">
                                <div class="col-md-6">
                                    <div class="js-form-message- mb-2">
                                        <label class="form-label"> Full Name </label>
                                        <input v-model="form.customer_name" type="text" name="customer_name" class="form-control" :class="{ 'is-invalid': form.errors.has('customer_name') }" placeholder="Customer Name">
                                        <has-error :form="form" field="customer_name"></has-error>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="js-form-message- mb-2">
                                        <label class="form-label"> Company </label>
                                        <input v-model="form.company" type="text" name="company" class="form-control" :class="{ 'is-invalid': form.errors.has('company') }" placeholder="Company name">
                                        <has-error :form="form" field="company"></has-error>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="js-form-message- mb-2">
                                        <label class="form-label"> Division </label>
                                        <select v-model="form.division_id" class="form-control js-select selectpicker dropdown-select"
                                            data-msg="Select division" data-live-search="true"
                                            data-style="form-control border-color-1 font-weight-normal" name="division_id" :class="{ 'is-invalid': form.errors.has('division_id') }" >
                                            <!-- <option disabled value="">Select division </option>  -->
                                            <option v-for="division in Divisions" v-bind:value="division.id">
                                                {{ division.division_name }}
                                            </option>                                          
                                        </select>
                                        <has-error :form="form" field="division_id"></has-error>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="js-form-message- mb-2">
                                        <label class="form-label"> District / City </label>
                                        <select v-model="form.district_id" @change="getDistrictZone($event)" class="form-control js-select selectpicker dropdown-select" data-live-search="true" data-style="form-control border-color-1 font-weight-normal" name="district_id" :class="{ 'is-invalid': form.errors.has('district_id') }" >
                                            <option disabled value="">Select district / city</option>
                                            <option v-for="district in Districts" v-bind:value="district.id">
                                                {{district.district_name}}
                                            </option>                                            
                                        </select>
                                        <has-error :form="form" field="district_id"></has-error>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="js-form-message- mb-2">
                                        <label class="form-label"> Zone / Area </label>
                                        <select v-model="form.area_zone_id" class="form-control js-select selectpicker dropdown-select"
                                            data-live-search="true"
                                            data-style="form-control border-color-1 font-weight-normal" name="area_zone_id" :class="{ 'is-invalid': form.errors.has('area_zone_id') }">
                                            <option disabled value="">Select zone / area</option>
                                            <option v-for="zone in Dist_Zones" v-bind:value="zone.id">
                                                {{zone.zone_name}} - {{zone.zip_code}}
                                            </option>                                           
                                        </select>
                                        <has-error :form="form" field="area_zone_id"></has-error>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="js-form-message- mb-2">
                                        <label class="form-label">City</label>
                                        <input v-model="form.city" type="text" name="city" class="form-control"  placeholder="City">
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="js-form-message- mb-2">
                                        <label class="form-label">Zip</label>
                                        <input v-model="form.zip" type="text" name="zip" class="form-control"  placeholder="ZIP">
                                    </div>
                                </div> 

                                <div class="col-md-6">
                                    <div class="js-form-message- mb-2">
                                        <label class="form-label">Address</label>
                                        <div class="input-group">
                                            <textarea v-model="form.address_1" name="address_1" class="form-control p-2" rows="2" placeholder="" style="margin-top: 0px; margin-bottom: 0px; " :class="{ 'is-invalid': form.errors.has('address_1') }"></textarea>
                                            <has-error :form="form" field="address_1"></has-error> 
                                        </div>
                                    </div>
                                </div> 

                            </div>
                            <div class="mb-3 text-right">
                                <button type="submit" class="btn btn-primary-dark-w px-5">
                                	<span v-show="!editMode"> <i class="fas fa-save"></i> Save</span>
	        						<span v-show="editMode"> <i class="far fa-edit"></i> Update</span>
                                </button>
                            </div>
                        </form>
                        <!-- End Profile Form -->
                    </div>

                </div>
            </div>
        </div>
        {{Divisions}}
    </div>

</template>
<script>

    import NavForAdminCustomer from '../Include/NavForAdminCustomer'
    import { mapState } from 'vuex' //for user MapState

    export default {
        name: "customer-address-form-website-auth",
        data (){      
            return {  
            	editMode: false, //Use this for add edit using the same form 
            	form: new Form({
                    id: '',
            	    customer_name:'',
            	    company:'', 
            	    address_1:'', 
            	    //address_2:'', 
            	    country_id: 18, //this id use for bangladesh 
            	    division_id:'', 
            	    district_id:'', 
            	    area_zone_id:'', 
            	    city:'', 
            	    zip:'', 
            	    //default_address:'',		          
		        })       
            }
        },        

        components:{
            NavForAdminCustomer, 
        },

        computed: {
            ...mapState( 'commonStoreForWebsite', ['authCustomer'] ),
            ...mapState( 'commonStoreForAll', ['Divisions','Districts','Dist_Zones'] )            
        }, 

        methods: {

            fillForm(){
                if(this.$route.params.data != null){
                    this.editMode = true;
                    this.form.reset(); 
                    this.form.fill(this.$route.params.data);          
                }           
            }, 

            storeFormData(){
                this.$Progress.start(); //using progress-bar package

                this.form.post('/auth/my-address')
                .then(({ data }) => { 

                if(data.success){ 
                  toastr.success(data.success);             
                  this.$Progress.finish();  
                  this.form.reset();  //reset from after submit                 
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

            updateFormData(){
                this.$Progress.start(); //using progress-bar package

                this.form.put('/auth/my-address/'+this.form.id)
                .then(({ data }) => { 

                    if(data.success){           
                      this.$Progress.finish(); 
                      toastr.success(data.success);               
                      //this.form.reset();  //reset from after submit
                      this.editMode = false; 
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


            // getDivision(e){
            //     // alert(e.target.value);
            //     let data = e.target.value;
            //     this.$store.dispatch('commonStoreForAll/fetchDivisionList', data); //get Division
            // },

            getDistrict(e){
                alert('Ok')
                let data = e.target.value;
                this.$store.dispatch('commonStoreForAll/fetchDistrictList', data); //get Division
            },

            getDistrictZone(e){
                let data = e.target.value;
                this.$store.dispatch('commonStoreForAll/fetchDistrictZoneList', data); //get District Zone
            },

       	
        },           

        created(){          

            this.fillForm();

            //this.$store.dispatch('commonStoreForAll/fetchCountryList'); //get country
            this.$store.dispatch('commonStoreForAll/fetchDivisionList', ''); //get Division
            this.$store.dispatch('commonStoreForAll/fetchDistrictList', ''); //get District
            this.$store.dispatch('commonStoreForAll/fetchDistrictZoneList', ''); //get zone Area
        },
           
        mounted() {
           

            setTimeout(() => {
                 // initialization of select picker
                $.HSCore.components.HSSelectPicker.init('.js-select');
            }, 3500);
        },
    }
</script>