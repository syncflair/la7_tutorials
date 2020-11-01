<template>
<span>
		
	<!-- Modal -->
<div class="modal fade" id="formModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-backdrop="static" >
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="">
        	<span v-show="!editMode">Add Account</span>
        	<span v-show="editMode">Update - {{form.account_name}}</span>
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="ClearForm()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <form @submit.prevent=" editMode ? updateFormData() : storeFormData() " >
	      <div class="modal-body pt-0">

	          <div class="card--"><!-- row inside form -->
	          	<div class="row">
	          	<div class="col-md-6 col-sm-12">

	          		<div class="form-group">
	                  <label>Account Name*</label>
	                    <input v-model="form.account_name" type="text" ref="account_name" name="account_name" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('account_name') }" placeholder="Account Name">
	                  <has-error :form="form" field="account_name"></has-error>
	                </div>

	                <div class="form-group">
			          <label>Account Head </label>
		              <select v-model="form.coa_id" class="form-control form-control-sm-" id="coa_id" name="coa_id" :class="{ 'is-invalid': form.errors.has('coa_id') }" >
		              	  <option disabled value="">Select Account Head ..</option> 

		              	  <template v-for="parentAH in chartOfAccountHeads" >
                          	<option disabled v-bind:value="parentAH.id"> <span>{{parentAH.ah_name}} </span> </option>
	                        
	                        <template v-for="c_parentAH in parentAH.child_account_head">
	                        	<option v-bind:value="c_parentAH.id"> <span> -- {{c_parentAH.ah_name}} </span>  </option>
	                        </template>

                          </template>               
		                  <!-- <option v-for="coah in chartOfAccountHeads" :key="coah.id" v-bind:value="coah.id">{{coah.ah_name}}</option> --> 
		              </select>
		              <has-error :form="form" field="coa_id"></has-error>			                      
			        </div>

	                <div class="form-group">
			          <label>Branch </label>
		              <select v-model="form.branch_id" class="form-control form-control-sm-" id="branch_id" name="branch_id" :class="{ 'is-invalid': form.errors.has('branch_id') }" >
		              	  <option disabled value="">Select Branch ..</option>                
		              	  <option v-bind:value="null">For All</option>                
		                  <option v-for="branch in branches" :key="branch.id" v-bind:value="branch.id">{{branch.branch_name}}</option> 
		               </select>
		               <!-- <has-error :form="form" field="branch_id"></has-error>			                       -->
			        </div>


                   	<div class="form-group">
                      <label>Oppening Balance</label>
                      <input type="number" class="form-control form-control-sm" min="1" step="any" v-model="form.opening_balance" name="opening_balance"> 
                    </div>


	          	</div>
	          	<div class="col-md-6 col-sm-6">

	          		<div class="form-group">
                      <label>Oppening Date *</label>
                      <input type="date" class="form-control form-control-sm" v-model="form.open_date" name="open_date" >
                    </div>

	          		<div class="form-group">
                      <label >Account Details</label>
                        <textarea v-model="form.account_desc" ref="account_desc" name="account_desc" class="form-control" placeholder="Details"></textarea>
                    </div>

                    <div class="form-check">
                      <input v-model="form.is_enabled" type="checkbox" class="form-check-input" name="is_enabled" id="checkbox" value="1">
                      <label class="form-check-label" for="checkbox" >Is Active</label>
                    </div>

                    <div class="form-group">
                      <!-- <label>Chart of Accounting code Code*</label> -->
                        <input v-model="form.coa_code" type="hidden" ref="coa_code" name="coa_code" class="form-control form-control-sm"  readonly min="0" step=".01" placeholder="Ex. BA-01">
                    </div>

	          	</div>	

	          	</div><!-- row inside form -->
	            

	          </div> 
	       
	      </div><!--modal Body-->      
	      <div class="modal-footer">
	        <button @click="ClearForm()" type="button" class="btn btn-danger btn-flat btn-sm close-form" data-dismiss="modal">Close</button>
	        <button type="submit" class="btn btn-primary btn-flat btn-sm">
	        	<span v-show="!editMode"> <i class="fas fa-save"></i> Save</span>
	        	<span v-show="editMode"> <i class="far fa-edit"></i> Update</span>
	    	</button>
	      </div><!--modal-footer-->
  	  </form><!-- </form> -->


    </div>
  </div>
</div>


</span>	
</template>
<script>
	import { mapState } from 'vuex' //for user MapState
	export default {
		 data () {
	      return {
	      	// NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
	       //  ShowOnChangeImage:null,	
	        editMode: false, //Use this for add edit using the same form     

	        // Create a new form instance
	        form: new Form({
	          id: '',
	          account_name:'',
	          coa_code:'',
	          coa_id: '',
	          branch_id: '',
	          opening_balance: '',
	          open_date: '',
	          account_desc: '',
	          is_enabled: '',	          
	        })
	      }
	    },//end data

	    computed: {
	    	/* get form commonSotreForAll*/	
	        ...mapState( 'commonStoreForAll', ['branches','chartOfAccountHeads'] ),
	  	},

	    methods:{

	    	addAccountDetails(){
	    		this.editMode = false;
	    		this.form.reset();
	    		//Current date show in date at first load
      			this.form.open_date = new Date().toISOString().substr(0, 10);
	    		setTimeout(() => {
	    			this.$refs.account_name.focus(); 
                }, 600);
	    	},

	    	editAccountDetails(data){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(data); 	 
	    		//this.$refs.account_name.focus();    		
	    	},
	    	ClearForm(){
	    		this.editMode = false;
		        this.form.reset();  //reset from after submit
		        this.form.clear(); 
		        //this.$refs.account_name.focus()
	    	},

	    	// Submit the form via a POST request
			storeFormData() {  
			  this.$Progress.start(); //using progress-bar package

			  this.form.post('/spa/AccountDetails-Info')
			  .then(({ data }) => { 

			    if(data.success){ 
			      FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
			      toastr.success(data.success);             
			      this.$Progress.finish();  
			      this.form.reset();  //reset from after submit
			      $('#formModal').modal('hide');			      
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
				//console.log('Update is working!'); 
				this.$Progress.start(); //using progress-bar package

				this.form.put('/spa/AccountDetails-Info/'+this.form.id)
				  .then(({ data }) => { 

				    if(data.success){ 
				     FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
				                 
				      this.$Progress.finish(); 
				      toastr.success(data.success);               
				      this.form.reset();  //reset from after submit
				      this.editMode = false; 
				     $('#formModal').modal('hide');
				    //  this.$refs.account_name.focus(); 
				    
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


	    },

	    created(){
	    	this.$store.dispatch('commonStoreForAll/fetchBranches'); //get Branch
	    	this.$store.dispatch('commonStoreForAll/fetchChartOfAccountHeads'); //get Chart of Account heads
	    	

	    	FireEvent.$on('editAccountDetails', (data) => {
              //alert(data.id);
              //this.form.fill(data);   //this is also work
              this.editAccountDetails(data);
            });

            FireEvent.$on('addAccountDetails', () => {
              this.addAccountDetails();
            });
	    }

	}//End Exprot Default
</script>
<style></style>