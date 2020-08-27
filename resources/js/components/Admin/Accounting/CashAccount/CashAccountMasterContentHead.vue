<template>
<span>

  <div class="card">
	<div class="card-head"></div>

	<div class="card-body pt-1 pb-1 pl-1 pr-1">
		<!-- {{ headData }} -->
		<div class="row" style="height: 84px;">
			<div class="col-md-6">
				<span v-if="headData">
					<p class="mb-0 border-bottom-1-">
					{{headData.bank_account_name}} 
					<small class="text-bold green"> ( {{headData.account_opening_balance}} {{systemSettings.belongs_to_currency.currency_short_code}} )</small> 
					</p>
					<p class="mb-0 border-bottom-1-"><small> AC No: {{headData.bank_account_number}}</small></p>
					<p class="mb-0 border-bottom-1-"><small>Bank: {{headData.bank_name}}, Branch: {{headData.bank_branch}}</small></p>
				</span>
				<span v-if="!headData">
					<span class="mt-3">Please Select bank account</span>
				</span>				
			</div>
			<div class="col-md-6 text-right">
				<a @click="adjustBankAccount" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#AdjustCashAccountModal"> 
            		<i class="fas fa-sliders-h"></i> Adjust Account
            	</a>
			</div>			
		</div>
		

	</div>
  </div>
  <AdjustCashAccountForm></AdjustCashAccountForm>

</span>
</template>

<script>
	const AdjustCashAccountForm = () => import( /* webpackChunkName: "AdjustCashAccountForm-com" */ './AdjustCashAccountForm') 
	export default {
	    name: "CashAccountMasterContentHead",
	    
	    components:{ AdjustCashAccountForm },

	    data () {
	      return {
	      	headData:'',
	      }
	    },//end data	

		methods:{
			adjustBankAccount(){
				//alert('Ok');
			},

		}, //end Methods

		created(){

			FireEvent.$on('CashAccountMasterContentHead', (data) => {
				//alert(data);
	            this.headData = data;
	        });
		},
		

  	} //end export default
</script>