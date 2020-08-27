<template>
<span>
		
	<!-- Modal -->
<div class="modal fade" id="AdjustCashAccountModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-backdrop="static" >
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="">
        	<span v-show="!editMode">Adjust Cash Account Form</span>
        	<span v-show="editMode">Update - {{form.bank_account_name}}</span>
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
	                    <input v-model="form.bank_account_name" type="text" ref="bank_account_name" name="bank_account_name" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('bank_account_name') }" placeholder="Account Name">
	                  <has-error :form="form" field="bank_account_name"></has-error>
	                </div>
	               
                  	<div class="form-group">
                      <label>Account Number *</label>
                        <input v-model="form.bank_account_number" type="text" ref="bank_account_number" name="bank_account_number" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('bank_account_number') }" placeholder="Account Number">
                      <has-error :form="form" field="bank_account_number"></has-error>
                    </div>	

                    <div class="form-group">
                      <label>Bank Name *</label>
                        <input v-model="form.bank_name" type="text" ref="bank_name" name="bank_name" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('bank_name') }" placeholder="Bank Name">
                      <has-error :form="form" field="bank_name"></has-error>
                    </div>	

                    <div class="form-group">
                      <label>Bank branch *</label>
                        <input v-model="form.bank_branch" type="text" ref="bank_branch" name="bank_branch" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('bank_branch') }" placeholder="Bank Branch">
                      <has-error :form="form" field="bank_branch"></has-error>
                    </div>

                   	<div class="form-group">
                      <label>Oppening Balance</label>
                      <input type="number" class="form-control form-control-sm" min="1" step="any" v-model="form.account_opening_balance" name="account_opening_balance"> 
                    </div>


	          	</div>
	          	<div class="col-md-6 col-sm-6">

	          		<div class="form-group">
                      <label>Oppening Date *</label>
                      <input type="date" class="form-control form-control-sm" v-model="form.account_open_date" name="account_open_date" >
                    </div>

	          		<div class="form-group">
                      <label >Account Details</label>
                        <textarea v-model="form.bank_account_desc" ref="bank_account_desc" name="bank_account_desc" class="form-control" placeholder="Details"></textarea>
                    </div>

                    <div class="form-check">
                      <input v-model="form.is_enabled" type="checkbox" class="form-check-input" name="is_enabled" id="checkbox" value="1">
                      <label class="form-check-label" for="checkbox" >Is Active</label>
                    </div>

                    <div class="form-group">
                      <!-- <label>Bank Account Code*</label> -->
                        <input v-model="form.bank_account_code" type="hidden" ref="bank_account_code" name="bank_account_code" class="form-control form-control-sm"  readonly min="0" step=".01" placeholder="Ex. BA-01">
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
	export default {
		 data () {
	      return {
	      	// NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
	       //  ShowOnChangeImage:null,	
	        editMode: false, //Use this for add edit using the same form     

	        // Create a new form instance
	        form: new Form({
	          id: '',
	          bank_account_code:'',
	          bank_account_name: '',
	          bank_account_number: '',
	          bank_name: '',
	          bank_branch: '',
	          account_opening_balance: '',
	          account_open_date: '',
	          //account_close_date: '',
	          bank_account_desc: '',
	          is_enabled: '',	          
	        })
	      }
	    },//end data

	    methods:{

	    	addBankAccount(){
	    		this.editMode = false;
	    		this.form.reset();
	    		//Current date show in date at first load
      			this.form.account_open_date = new Date().toISOString().substr(0, 10);
	    		setTimeout(() => {
	    			this.$refs.bank_account_name.focus(); 
                }, 600);
	    	},

	    	editBankAccount(data){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(data); 	 
	    		//this.$refs.bank_account_name.focus();    		
	    	},
	    	ClearForm(){
	    		this.editMode = false;
		        this.form.reset();  //reset from after submit
		        this.form.clear(); 
		        //this.$refs.bank_account_name.focus()
	    	},

	    	// Submit the form via a POST request
			storeFormData() {  
			  this.$Progress.start(); //using progress-bar package

			  this.form.post('/spa/BankAccount-Info')
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

				this.form.put('/spa/BankAccount-Info/'+this.form.id)
				  .then(({ data }) => { 

				    if(data.success){ 
				     FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
				                 
				      this.$Progress.finish(); 
				      toastr.success(data.success);               
				      this.form.reset();  //reset from after submit
				      this.editMode = false; 
				     $('#formModal').modal('hide');
				    //  this.$refs.bank_account_name.focus(); 
				    
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

	    	

	    	FireEvent.$on('editBankAccount', (data) => {
              //alert(data.id);
              //this.form.fill(data);   //this is also work
              this.editBankAccount(data);
            });

            FireEvent.$on('addBankAccount', () => {
              this.addBankAccount();
            });
	    }

	}//End Exprot Default
</script>
<style></style>